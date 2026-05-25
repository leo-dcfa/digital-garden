---
title: Singular Learning Theory Basics
description: 
date: 2026-05-25 12:00:00 +1000
draft: false
tags:
  - mechanistic interpretability
  - machine learning
---

Singular learning theory is a way of understanding neural networks by studying how develop during training, not looking at the end product and dissecting it. Akin to studying how a child learns and becomes an adult with a formed brain (arguably, takes longer for some than others. Some never develop one).

## But how?

Ah that's the interesting question. 

## Notes

1. At bottom of the loss valley lie several rivers of constants. Generalisation is a balance between expressivity and simplicity - more parameters vs less parameters
2. Four basic concepts:
  - The "truth", q (x ) some distribution that is generating samples 
  - A model, p (x|w), parametrized by weights w ∈ W ⊂ R d, where W is compact;
  - A prior over weights, φ (w); 
  - And a dataset of samples D n = { X 1 , … , X n } , where each random variable X i is i.i.d. according to q ( x ) .
3. These shapes get formed during training (backpropagation/loss minimisation valleys)
4. Two levels of learning:
  - Lower level: finding the optimal weights for a data set such that the predicted output matches the truth
  - Higher level: finding the optimal model class/architecture for a given data set

## Further reading

- Hoogland, J. (2023). *[Neural networks generalize because of this one weird trick](https://www.lesswrong.com/posts/fovfuFdpuEwQzJu2w/neural-networks-generalize-because-of-this-one-weird-trick).* LessWrong. Singular learning theory as an explanation for why overparameterised networks generalise.
- *[SLT for AI safety](https://www.lesswrong.com/posts/J7CyENFYXPxXQpsnD/slt-for-ai-safety).* LessWrong.
