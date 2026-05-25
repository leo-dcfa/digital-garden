---
title: Model Distillation [In Progress]
description: How to compress a large model into a smaller one — temperature scaling, logits, feature-level methods, and when it actually works.
date: 2026-05-25 10:00:00 +1000
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

Full code available on [GitHub](https://github.com/leo-dcfa/model-distillation-demo) - README beow for reference

---

## Method 1: Sequence-level distillation

The simplest approach. The teacher generates a completion for each prompt; the student is fine-tuned with standard next-token cross-entropy on those completions. We're treating the teacher's output text as ground truth and doing ordinary SFT.

**Pros.** Works against any API (you only need to call generate). Cheap to implement. No tokenizer constraints — the student can have a completely different vocabulary from the teacher. This is how DeepSeek's R1-Distill models were trained.

**Cons.** Throws away everything except the teacher's argmax at each token. If the teacher was 60% sure about token X and 38% sure about a near-synonym Y, the student is taught that Y is wrong. A lot of useful uncertainty signal is lost.

## Method 2: Token-level (logit) distillation

The direct LLM analog of Hinton's classical method. At every position in a sequence, compute the KL divergence between the teacher's full next-token distribution (over the whole vocabulary) and the student's. Loss is averaged across positions where the assistant is talking (we mask out user prompt tokens).

**Pros.** The student receives a much denser training signal — instead of "the right token is X," it learns "given this context, here's the full shape of plausible continuations." Typically yields a noticeably stronger student than sequence-level for the same data budget.

**Cons.** Requires white-box access to the teacher *and* matching tokenizers. You can't do logit distillation from GPT-4 to Llama, for example — different vocabularies, so the distributions live in non-comparable spaces. Memory cost is also higher because you're keeping the teacher loaded and running forward passes through it on every batch.

### Forward vs. reverse KL

`token_level.py` accepts a `--kl` flag with two options:

- **`--kl forward`** (default): minimizes `KL(teacher || student)`. This is *mode-covering* — the student is penalized for putting low probability where the teacher puts high probability. It tries to cover all of the teacher's behaviors, including unlikely ones. Can lead to a hedging, hallucination-prone student because it spreads its probability mass.

- **`--kl reverse`**: minimizes `KL(student || teacher)`. This is *mode-seeking* — the student is penalized only when *it* puts mass where the teacher doesn't. Result: the student concentrates on a high-probability subset of the teacher's behavior. The MiniLLM paper (Gu et al. 2024) showed this produces more focused, less hallucinatory students.


## Method 3: On-policy distillation

Sequence-level and token-level both train the student on prefixes the *teacher* generated. At inference time the student generates its own (messier) prefixes — and has never been trained to recover from its own mistakes. This is exposure bias, the classic train/test distribution mismatch.

On-policy distillation flips the data source: the student generates a continuation from a prompt, the teacher scores its full next-token distribution at every position of that continuation, and the student is trained to match the teacher *given the student's own prefixes*. Think of it as a coach correcting the student's mistakes in real time, rather than demonstrating perfect technique from the sidelines.

We follow GKD (Generalized Knowledge Distillation, Agarwal et al. 2024): mix on-policy steps with off-policy steps (using the teacher's pre-generated text) for stability. Pure on-policy is unstable early because the student's generations are gibberish — there's nothing useful for the teacher to score. Loss is reverse KL with T=1, following MiniLLM/GKD.

**Pros.** Closes the train/test gap. The student is explicitly trained on the distribution it will actually see at inference, including its own characteristic mistakes. Tends to produce more robust students than off-policy methods at the same data budget.

**Cons.** The slowest method by far — every on-policy step requires a full sampling pass through the student before the forward/backward. Still needs white-box teacher access and matching tokenizers. Hyperparameter-sensitive: the on-policy / off-policy mix matters, and pure on-policy can diverge early.

## Method 4: Cross-tokenizer distillation (ULD)

Token-level distillation breaks the moment teacher and student have different vocabularies — their next-token distributions live in non-comparable spaces and the KL is undefined. That rules out distilling, say, Llama → Qwen, which is exactly the regime you care about if you want to combine the best open teacher with whatever student architecture suits you.

ULD (Universal Logit Distillation, Boizard et al. 2024) sidesteps the vocab mismatch with two tricks:

1. **Positional alignment via character offsets.** Both tokenizers expose the character span each token covers in the source text. For every student response token, we pick the teacher token whose ending character is closest. Same text, different segmentation, aligned by where the boundaries land.
2. **Sorted top-K matching.** At each aligned position, take the top-K probabilities from teacher and student, *sort* them, and compute KL between the two K-length vectors. Token identity is thrown away; only the shape of the distribution is matched. That shape lives in a vocab-independent K-dimensional space, so the comparison is well-defined.

This repo distills `Llama-3.2-1B-Instruct` (teacher) → `Qwen2.5-0.5B` (student) — two completely different tokenizers.

**Pros.** The only method here that works across model families. Lets you pick teacher and student independently — useful when the best available teacher and the architecture you want to deploy come from different ecosystems.

**Cons.** Lossy on multiple axes: character-offset alignment is approximate (it can skew badly when one tokenizer splits a word the other keeps whole), sorted top-K matching discards which tokens the probabilities belong to, and the top-K cutoff truncates the tail entirely. Expect a noticeably weaker student than same-tokenizer token-level distillation on the same data. Also the most fiddly of the four to implement correctly — most of the code is alignment bookkeeping, not the loss itself.

# Papers/Further Reading

- Hinton, Vinyals & Dean (2015) - Distilling the Knowledge in a Neural Network. (Original paper.)
