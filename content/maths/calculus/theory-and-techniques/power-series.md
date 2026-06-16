---
title: Power Series
description: An exploration of series where the terms are functions of x, specifically in the form of a power series.
date: 2026-06-17 13:05:00 +0000
tags:
  - maths
  - calculus
  - series
---

# Power Series

A **power series** is a type of infinite series that can be thought of as a polynomial with infinitely many terms. It is a function of $x$ defined by:

$$\sum_{n=0}^{\infty} c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots$$

Where:
- $c_n$ are the coefficients.
- $a$ is the center of the series.

## Radius and Interval of Convergence

Unlike a finite polynomial, a power series may only converge for certain values of $x$. 

1. **Radius of Convergence ($R$)**: There exists a number $R \geq 0$ such that the series converges if $|x - a| < R$ and diverges if $|x - a| > R$.
2. **Interval of Convergence**: The set of all $x$ for which the series converges. This interval is always centered at $a$ and has a width of $2R$. Note that convergence at the endpoints ($x = a-R$ and $x = a+R$) must be checked separately.

## Finding the Radius of Convergence

The most common method to find $R$ is using the **Ratio Test**:

$$L = \lim_{n \to \infty} \left| \frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n} \right| = |x-a| \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|$$

The series converges when $L < 1$.

## Relationship to Taylor Series

Every Taylor series is a power series. However, not every power series is a Taylor series for a specific function (though most "useful" ones are).

---
*Draft note: Add section on term-by-term differentiation and integration.*
