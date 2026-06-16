---
title: Maclaurin Series
description: A special case of the Taylor series centered at zero.
date: 2026-06-17 13:15:00 +0000
tags:
  - maths
  - calculus
  - series
---

# Maclaurin Series

A **Maclaurin series** is a specific type of Taylor series that is centered at $a = 0$. It provides a way to represent a function as an infinite sum of terms involving powers of $x$.

## The Formula

If a function $f(x)$ is infinitely differentiable at $0$, its Maclaurin series is:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots$$

## Why Use Maclaurin Series?

Since many fundamental functions (like $e^x$, $\sin(x)$, and $\cos(x)$) are well-behaved at $x=0$, the Maclaurin series is often the simplest and most common way to approximate these functions near the origin.

## Common Maclaurin Series

| Function | Series Expansion |
| :--- | :--- |
| $e^x$ | $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$ |
| $\sin(x)$ | $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$ |
| $\cos(x)$ | $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$ |
| $\frac{1}{1-x}$ | $1 + x + x^2 + x^3 + \dots$ (for $|x| < 1$) |

---
*Draft note: Connect this to the Taylor Series post for a complete overview.*
