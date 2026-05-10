---
title: Model Distillation [In Progress]
description: How to compress a large model into a smaller one — temperature scaling, logits, feature-level methods, and when it actually works.
date: 2026-05-09 10:00:00 +1000
tags:
  - distillation
---

I keep reading about Chinese labs "attacking" frontier labs and performing "model distillation." Then very recently [Musk admitted xAI used distillation on OpenAI model's and admitted it was common practice](https://www.forbes.com.au/news/billionaires/musk-admits-distilling-openai-data-for-his-xai-heres-why-thats-controversial/).

How does one distill a model?

The idea is that you have

- A teacher model: large, well-trained, expensive to run
- A student model: smaller, faster, cheaper to deploy
- A task: classification, regression, whatever the teacher excels at

Instead of training the cheaper model directly, make the student approximate the teacher's output distribution as closely as possible, often on a subset of the training data.

There are different types of distillation:

1. Sequence-level
2. Token-level / logit KL
3. On-policy / GKD
4. Cross-tokenizer

Neural networks usually produce class probabilities by applying a “softmax” output layer that converts
the logit, z<sub>i</sub>, computed for each class into a probability, q<sub>i</sub>, by comparing zi with the other logits. The T represents the temperature, and the higher the T the softer the distribution will be over classes (Hinton et al., 2015).

$$q_i = \frac{\exp(z_i / T)}{\sum_j \exp(z_j / T)}$$

The simplest way to distill knowledge in a model is by training the student model with the outputs of the teacher model with a higher T.

Full code available on [GitHub](https://github.com/leo-dcfa/model-distillation-demo)

## Student Distillation Script Notes

### Load data set functions


```python
import json
from pathlib import Path
from typing import Final

from datasets import Dataset
from transformers import TokenizersBackend

OUTPUT_DIR: Final[str] = "./distilled_student"


def load_dataset_from_json(path: str, tokenizer: TokenizersBackend) -> Dataset:
    rows = []
    with Path.open(Path(path)) as f:
        for line in f:
            ex = json.loads(line)
            messages = [
                {"role": "user", "content": ex["question"]},
                {"role": "assistant", "content": ex["teacher_solution"]},
            ]
            text = tokenizer.apply_chat_template(messages, tokenize=False)
            rows.append({"text": text})
    return Dataset.from_list(rows)
```

- Re. message structure: we are building a fake conversation between the user and the assistant (i.e. the llm). We ask the question as the user and provide the teacher's solution to the student model
- `tokenizer.apply_chat_template` turns:
```
[
    {"role": "user", "content": "What is 17 × 23?"},
    {"role": "assistant", "content": "17 × 23 = 391\n#### 391"},
]
```
into:
```
<|im_start|>user
What is 17 × 23?<|im_end|>
<|im_start|>assistant
17 × 23 = 391
#### 391<|im_end|>
```
- tokenize=False: we want the formatted string, not token ids. The teacher is going to tokenize on its own later (with its own batching and padding logic), so we just want the string at this stage. If you set tokenize=True, you'd get back a list of integer token IDs.
- TokenizersBackend: base class for Rust (i.e) tokenizers. Implementation doing the tokenization work under the hood.

### Model and tokenizer loading

```python
def main():
    print(f"Loading student: {STUDENT_MODEL}")
    tokenizer = AutoTokenizer.from_pretrained(STUDENT_MODEL)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
```
- This loads the tokenizer that was bundled with whichever model STUDENT_MODEL points to. The default is "Qwen/Qwen2.5-0.5B".
- `from_pretrained` looks first in the local cache (~/.cache/huggingface/hub/). If it finds the model's tokenizer files there, it loads them. If not, it downloads them from Hugging Face Hub.
- Padding: when you train a language model in batches, each batch contains multiple sequences of tokens. Sequences have different lengths and PyTorch requires uniform shapes. We add padding as a standard solution to fill token sequences to match the batch expected length.
- The `eos_token` is a special otken indicating the sequence is over. Examples: `<|endoftext|>` or `<|im_end|>`.
- Without a padtoken we hit a runtime error during training

```python
model = AutoModelForCausalLM.from_pretrained(
        STUDENT_MODEL,
        torch_dtype=torch.bfloat16,
        device_map="auto",
    )
```
- AutoModelForCausalLM -> autoregressive model; predict each token given all previous ones, left-to-right. In addition to CAusal like GPT, Llama, Qwen, there are other flavours like:
  - Masked (bidrectional): given a sentence with some tokens hidden, predict what they were. The model sees tokens on both sides of each gap.
  - Sequence-to-sequence: an encoder reads the input, a decoder generates the output.
- The "Auto" prefix means the class doesn't actually know which specific model it'll return. You give it a model id like "Qwen/Qwen2.5-0.5B", and it inspects the model's config.json to figure out the architecture, then dispatches to the appropriate concrete class — Qwen2ForCausalLM in this case. For a Llama model id, it'd return LlamaForCausalLM. For Mistral, MistralForCausalLM.
- `from_pretrained` does a lot!
  - Resolve the model id. Hits Hugging Face Hub, finds the right repository.
  - Download files if not cached. For Qwen2.5-0.5B that's the config (~1 KB), tokenizer files, and the actual model weights (~1 GB in safetensors format). Cached at ~/.cache/huggingface/hub/.
  - Read config.json to determine the architecture — number of layers, hidden size, attention heads, vocab size, etc. - From this it picks the concrete class (Qwen2ForCausalLM).
  - Instantiate the model with the right architecture, randomly-initialized.
  - Load the trained weights into the architecture from the downloaded files. After this step, the model has the actual learned values, not random initialization.
  - Move to GPU based on device_map="auto". With one GPU, this just puts everything on that GPU. With multiple GPUs, it'd shard the model intelligently.
  - Cast to bf16 based on torch_dtype=torch.bfloat16. Halves memory.

### LoRA Config

```python
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM",
)
```

LoRA is a way to update a model without updating its weights. Instead, for each weight matrix you want to train, you freeze the original and two two much smaller matrices alongside it, which is the equivalent of the model's original behaviour plus small correction.

I don't fully understand LoRA yet, here is the explanation provided by Claude:

#### The problem LoRA solves

Suppose you want to fine-tune a 7B-parameter model. Naive fine-tuning means:

- Loading 14 GB of weights (bf16) into VRAM
- Allocating gradients for every weight: another 14 GB
- Optimizer state (Adam tracks two moments per parameter): another 28 GB
- Activations during forward pass: several more GB

Total: ~60-70 GB before you've even touched a batch. You need an A100 or H100 just to start.

For a 0.5B student, the math is friendlier (a few GB total) but still not free. And you're updating 500 million parameters to learn what's often a small behavioral shift — feels like overkill.
LoRA's question: do we really need to update every weight, or could we approximate the update with something much smaller?

The core idea

For each weight matrix W you want to fine-tune (typically the attention projections), don't actually modify W. Leave it frozen. Instead, learn a small additional matrix ΔW and add it on top:

W_effective = W + ΔW

The trick is in how you parameterize ΔW. If W is, say, 2048 × 2048 (about 4 million parameters), naively learning ΔW of the same shape gives you no savings. So LoRA represents ΔW as the product of two much smaller matrices:

ΔW = B @ A

where A is r × 2048 and B is 2048 × r, with r (the "rank") typically 8 or 16.

Total trainable parameters: r × 2048 + 2048 × r = 2 × r × 2048. With r=16, that's 65,536 — versus 4,194,304 if you trained W directly. 64× fewer parameters per matrix.

You don't change W at all. You only train A and B. Loss flows back through B @ A and updates them.

Why this works

Here's the part that's non-obvious and surprised the field: empirically, the update you'd want to apply during fine-tuning has very low effective rank, even though W itself is full-rank. Fine-tuning isn't asking the model to learn a brand-new transformation — it's asking for a small adjustment, and small adjustments live in low-dimensional subspaces.

The original LoRA paper (Hu et al. 2021, in your reading list) showed this empirically: rank-8 LoRA matches full fine-tuning on most tasks, rank-16 essentially always does, and you have to climb to rank-64+ to find tasks where it lags noticeably. There's also some theory connecting this to the intrinsic dimensionality of fine-tuning losses, but the practical observation came first.

### Loading the data

Pretty self-explanatory:

```python
print(f"Loading teacher data from {TEACHER_DATA}...")
train_ds = load_dataset_from_jsonl(TEACHER_DATA, tokenizer)
print(f"Training examples: {len(train_ds)}")
```

### Supervised Fine-Tuning Config
```python
sft_config = SFTConfig(
    output_dir=OUTPUT_DIR,
    num_train_epochs=EPOCHS,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    warmup_ratio=0.03,
    lr_scheduler_type="cosine",
    logging_steps=10,
    save_strategy="epoch",
    bf16=True,
    max_length=1024,
    packing=False,
    dataset_text_field="text",
    report_to="none",
)
```
- `output_dir=OUTPUT_DIR`: Where checkpoints and the final adapter will be saved. The trainer creates this directory if missing. By the end of training several files are saved there: the LoRA weights, a config describing how the LoRA was set up, a tokenizer copy (so loading is self-contained), and the trainer's own state files.
- `per_device_train_batch_size=4` and `gradient_accumulation_steps=4`


# Papers/Further Reading

- Hinton, Vinyals & Dean (2015) - Distilling the Knowledge in a Neural Network. (Original paper.)
