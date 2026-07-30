---
title: Unit Vectors
description: Normalising a vector to unit length, worked checks that two complex qubit states are unit vectors, the normalisation condition on amplitudes, and the definition of distance between two vectors.
date: 2026-07-31 05:52:00 +1000
tags:
  - maths
  - linear-algebra
  - norms
---

# Unit Vectors

![](unit-vectors.png)

Unit vectors are vectors of norm.

$$
\hat{v} = \frac{1}{\|v\|} \cdot v \quad \text{in } \mathbb{R}^n
$$

complex vectors

$$
\big\| |v_1\rangle \big\| = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{-i}{\sqrt{2}} \end{bmatrix} = \left| \frac{1}{\sqrt{2}} \right|^2 + \left| \frac{-i}{\sqrt{2}} \right|^2 = \frac{1}{2} + \frac{1}{2} = 1
$$

$$
|v_2\rangle = \begin{bmatrix} \frac{1+i}{2} \\ \frac{1-i}{2} \end{bmatrix} = \left( \frac{1+i}{2} \right)^2 + \left| \frac{1-i}{2} \right|^2
$$

$$
= \left[ \left(\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^2 \right] + \left[ \left(\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^2 \right] = 1
$$

$$
|v\rangle = \begin{bmatrix} \alpha \\ \beta \end{bmatrix}, \quad \alpha, \beta \in \mathbb{C} \Rightarrow |\alpha|^2 + |\beta|^2 = 1 \text{ for } |v\rangle \text{ to be a unit vector}
$$

## Distance

Given $P(u_1, u_2)$ and $Q(v_1, v_2)$:

$$
|PQ| = \sqrt{(v_1 - u_1)^2 + (v_2 - u_2)^2}
$$

Given two vectors $u$ and $v$ in $\mathbb{R}^n$ or $\mathbb{C}^n$, the distance is defined as $d(u, v) = \|u - v\|$
