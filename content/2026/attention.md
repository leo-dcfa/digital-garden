---
title: Attention
description:
date: 2026-04-24 08:00:00 +1000
tags:
  - basics
---

Softmax takes a vector of attention scores and turns it into a probability distribution. Every token gets some weight — even the ones the model doesn't really care about. The exponential never quite goes to zero.

That's not how biological attention works. In a brain, things get dropped. Whole streams of input never make it past early filters. There's a level of "folded" or dropped attention — a hard zero, not a tiny epsilon.

A more neurodivergent flavour of attention would let the model say *nothing* about most of the sequence and concentrate mass on a few tokens.

## Sparsemax

Sparsemax (Martins & Astudillo, 2016) replaces the softmax with a Euclidean projection onto the probability simplex:

$$\mathrm{sparsemax}(z) = \arg\min_{p \in \Delta^{K-1}} \| p - z \|^2$$

where $\Delta^{K-1} = \{ p \in \mathbb{R}^K : p_i \geq 0,\ \sum_i p_i = 1 \}$.

It has a closed form:

$$\mathrm{sparsemax}(z)_i = \max(z_i - \tau(z),\ 0)$$

where $\tau(z)$ is the unique threshold that makes the output sum to one. Anything below the threshold gets clipped to exactly zero. Sparse outputs, no exponentials.

## α-entmax

α-entmax (Peters, Niculae & Martins, 2019) is a one-parameter family that interpolates between softmax and sparsemax:

$$\alpha\text{-entmax}(z) = \arg\max_{p \in \Delta^{K-1}} \left( p^\top z + H_\alpha^T(p) \right)$$

where $H_\alpha^T$ is the Tsallis α-entropy. Setting $\alpha = 1$ recovers softmax (Shannon entropy, fully dense). Setting $\alpha = 2$ recovers sparsemax. Values of $\alpha$ between 1 and 2 give intermediate sparsity, and α can be learned per attention head.

## Student-t and Cauchy kernels

A different way to drop tokens: replace the exponential similarity in attention with a heavier-tailed kernel.

**Cauchy kernel**: $k(q, k) = \dfrac{1}{1 + \|q - k\|^2}$

**Student-t kernel**: $k(q, k) = \left( 1 + \dfrac{\|q - k\|^2}{\nu} \right)^{-(\nu + 1)/2}$

These decay polynomially rather than exponentially, so distant tokens keep a non-trivial — but still small — share of the mass. Combined with sparsifying transformations, they give a budget for occasional long-range attention without the all-or-nothing behaviour of softmax over long contexts.

---

The thread tying these together: softmax is mathematically convenient but biologically implausible. Sparse and heavy-tailed alternatives are closer to the way real attention seems to allocate.
