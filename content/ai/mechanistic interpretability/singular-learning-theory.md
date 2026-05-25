---
title: Singular Learning Theory Basics
description: 
date: 2026-05-24 12:00:00 +1000
draft: true
tags:
  - mechanistic interpretability
  - machine learning
---

1. At bottom of the loss valley lie several rivers of constants. Generalisation is a balance between expressivity and simplicity - more parameters vs less parameters
2. Four basic concepts:
  - The "truth", q (x ) some distribution that is generating samples 
  - A model, p (x|w), parametrized by weights w ∈ W ⊂ R d, where W is compact;
  - A prior over weights, φ (w); 
  - And a dataset of samples D n = { X 1 , … , X n } , where each random variable X i is i.i.d. according to q ( x ) .

## Further reading

- Hoogland, J. (2023). *[Neural networks generalize because of this one weird trick](https://www.lesswrong.com/posts/fovfuFdpuEwQzJu2w/neural-networks-generalize-because-of-this-one-weird-trick).* LessWrong. Singular learning theory as an explanation for why overparameterised networks generalise.
