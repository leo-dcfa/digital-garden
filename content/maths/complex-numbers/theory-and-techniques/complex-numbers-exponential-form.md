---
title: Complex Numbers Exponential Form
description: The exponential form of a complex number via Euler's formula, with a proof of Euler's formula using Taylor expansion.
date: 2026-07-04 09:00:00 +1000
tags:
  - maths
  - complex-numbers
---

# Complex Numbers Exponential Form

![](complex-numbers-exponential-form.png)

Given a complex number in cartesian form $z = r\cos\theta + ir\sin\theta$ and Euler's formula:

$$e^{i\theta} = \cos\theta + i\sin\theta$$

we can express a complex number in its exponential form

$$z = ie^{i\theta}$$

## Proof of Euler's Formula

→ can be proved using taylor expansion

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} \dots$$

When $x$ is replaced by $ix$, the taylor series for $e^{ix}$ becomes:

$$e^{ix} = 1 + ix + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} \dots$$

Simplify using properties of $i$:

$$e^{ix} = 1 + ix - \frac{x^2}{2!} - \frac{ix^3}{3!} + \frac{x^4}{4!} + \frac{ix^5}{5!} + \dots$$

The series becomes:

$$e^{ix} = \underbrace{\left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots\right)}_{\cos x} + i\underbrace{\left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} \dots\right)}_{\sin x}$$

$$\therefore e^{ix} = \cos x + i\sin x \;\blacksquare$$
