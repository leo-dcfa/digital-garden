---
title: Complex Numbers
description: Cartesian and polar forms, the complex plane, the nested number sets, and the core relationships (real/imaginary parts, conjugate, modulus, argument) with a worked example.
date: 2026-06-30 09:00:00 +1000
tags:
  - maths
  - complex-numbers
---

# Complex Numbers

![](complex-numbers-forms-properties.png)

Basics:
- real part + imaginary part
- fundamental to quantum computing

## 1) Cartesian form

$$z = x + iy$$

where $x, y \in \mathbb{R}$ and $i$ is the imaginary unit with property $i^2 = -1$.

This is known as the cartesian form because $z$ corresponds to a point or a vector in the two dimensional coordinate system known as the cartesian plane.

In the complex plane, $z = x + iy = e^{i\theta}$, with $x$ along the real axis ($\mathrm{Re}$), $y$ along the imaginary axis, $r$ the length of the vector and $\theta$ its angle.

The number sets nest as $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{R} \subset \mathbb{C}$.

## Relationships

- Real part $\Rightarrow x = \mathrm{Re}(z)$
- Imaginary part $\Rightarrow y = \mathrm{Im}(z)$
- Conjugate $= z^{*} = x - iy$
- mod (abs) $\Rightarrow r = |z|$
- Imaginary unit $\Rightarrow i = \sqrt{-1}$ or $i^2 = 1$
- $\tan(\theta) = \dfrac{y}{x}$, $\quad \theta = \arctan(y, x)$
- Polar to cartesian $\Rightarrow x = r\cos\theta$ and $y = r\sin\theta$
- Polar form $\Rightarrow z = r(\cos\theta + i\sin\theta)$

## E.g.

$$z = 1 + \sqrt{3}\,i$$

$$z^{*} = 1 - \sqrt{3}\,i$$

$$|z| = \sqrt{1^2 + (\sqrt{3})^2} = 2$$

$$\theta = \arctan\!\left(\frac{\sqrt{3}}{1}\right) = \frac{\pi}{3}$$
