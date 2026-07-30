---
title: Norm And Unit Vectors
description: The norm of real vectors as Euclidean length, its extension to generalised vectors, worked examples in R2 and R3, the norm of complex vectors with proof, and the Dirac notation for a vector's norm.
date: 2026-07-31 05:50:00 +1000
tags:
  - maths
  - linear-algebra
  - norms
---

# Norm And Unit Vectors

![](norm-and-unit-vectors.png)

**Norm of Real vectors:** a geometric vector is characterised by two properties, magnitude and direction.

Magnitude: length in Euclidean Geometry. $v = (v_1, v_2)$ in $\mathbb{R}^2$. The length can be calculated using Pythagorean theorem.

$$
\|v\| = \sqrt{v_1^2 + v_2^2}
$$

The length of $v$ is a scalar denoted as $\|v\|$, known as "norm of $v$."

Why do mathematicians need complex words for simple things? Norm $\equiv$ length $\equiv$ magnitude.

<u>Important</u>: norm can be extended to generalise vectors such as matrices and functions

In $\mathbb{R}^3$:

$$
\|v\| = \sqrt{v_1^2 + v_2^2 + v_3^2}
$$

Eg.

$$
\left( -\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2} \right) \Rightarrow \sqrt{\left(\frac{\sqrt{2}}{2}\right)^2 + \left(\frac{\sqrt{2}}{2}\right)^2} = \sqrt{\frac{1}{2} + \frac{1}{2}} = 1
$$

$$
\left( \frac{1}{3}, \frac{1}{3}, \frac{1}{3} \right) = \sqrt{\left(\frac{1}{3}\right)^2 + \left(\frac{1}{3}\right)^2 + \left(\frac{1}{3}\right)^2} = \sqrt{\frac{3}{9}} = \frac{\sqrt{3}}{3}
$$

## Norm of complex Vectors

$$
\|v\| = \sqrt{v_1^* v_1 + v_2^* v_2 + \dots + v_n^* v_n}
$$

Proof: let $|z| = \sqrt{z^* z} \Rightarrow |z|^2 = z^* z$

$$
\therefore \|v\|^2 = v_1^* v_1 + v_2^* v_2 + \dots + v_n^* v_n = |v_1|^2 + |v_2|^2 + \dots + |v_n|^2
$$

$$
v = (1 + 2i,\ i) \Rightarrow \|v\|^2 = |1 + 2i|^2 + |i|^2 = (1 + 2^2) + 1^2 = 6
$$

$$
\therefore \|v\| = \sqrt{6}
$$

Dirac Notation of Norm Vector $\Rightarrow \|v\| = \big\| \, |v\rangle \, \big\| = \|\text{k}v\|$
