---
title: Model Distillation [In Progress]
description: How to compress a large model into a smaller one — temperature scaling, logits, feature-level methods, and when it actually works.
date: 2026-05-18 10:00:00 +1000
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

---

## Method 1: Sequence-level distillation

The simplest approach. The teacher generates a completion for each prompt; the
student is fine-tuned with standard next-token cross-entropy on those completions.
We're treating the teacher's output text as ground truth and doing ordinary SFT.

**Pros.** Works against any API (you only need to call generate). Cheap to
implement. No tokenizer constraints — the student can have a completely
different vocabulary from the teacher. This is how DeepSeek's R1-Distill
models were trained.

**Cons.** Throws away everything except the teacher's argmax at each token.
If the teacher was 60% sure about token X and 38% sure about a near-synonym Y,
the student is taught that Y is wrong. A lot of useful uncertainty signal is lost.


# Papers/Further Reading

- Hinton, Vinyals & Dean (2015) - Distilling the Knowledge in a Neural Network. (Original paper.)
