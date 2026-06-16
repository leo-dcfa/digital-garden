---
title: Taylor Series
description: An introduction to representing functions as infinite sums of terms calculated from the values of its derivatives at a single point.
date: 2026-06-17 13:00:00 +0000
tags:
  - maths
  - calculus
  - series
---

# Taylor Series

A **Taylor series** is a representation of a function as an infinite sum of terms calculated from the values of the function's derivatives at a single point.

## The Formula

If a function $f(x)$ is infinitely differentiable at a real or complex number $a$, then the Taylor series for $f$ centered at $a$ is:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n$$

Where:
- $f^{(n)}(a)$ denotes the $n$-th derivative of $f$ evaluated at $a$.
- $n!$ is the factorial of $n$.

## Maclaurin Series

A **Maclaurin series** is simply a Taylor series centered at $a = 0$:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n$$

## Common Examples

| Function | Maclaurin Series | Interval of Convergence |
| :--- | :--- | :--- |
| $e^x$ | $\sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \dots$ | $(-\infty, \infty)$ |
| $\sin(x)$ | $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \dots$ | $(-\infty, \infty)$ |
| $\cos(x)$ | $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \dots$ | $(-\infty, \infty)$ |

---
*Draft note: Discuss Taylor's Theorem and the Remainder Term (Lagrange error bound) in next iteration.*
