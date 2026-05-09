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

### Load data set functions:


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

# Papers/Further Reading

- Hinton, Vinyals & Dean (2015) - Distilling the Knowledge in a Neural Network. (Original paper.)
