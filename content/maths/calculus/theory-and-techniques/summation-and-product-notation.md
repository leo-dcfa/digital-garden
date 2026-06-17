---
title: Summation and Product Notation
description: The sigma and pi notation underpinning series — writing sums and products in closed form, and reading them back as functions.
date: 2026-06-18 09:00:00 +0000
tags:
  - maths
  - calculus
  - series
---

# Summation and Product Notation

Before working with [[series-convergence|infinite series]], [[power-series|power series]], or [[taylor-series|Taylor expansions]], it pays to be fluent in the two compact notations that all of them are written in: **summation** (sigma, $\sum$) and **product** (pi, $\prod$). Both are just shorthand for "repeat this operation over a range of indices" — sums for $+$, products for $\times$.

![](sums-as-functions-notations.png)

## Summation (Sigma) Notation

A sum is written as:

$$\sum_{n=a}^{b} f(n) = f(a) + f(a+1) + \dots + f(b)$$

- $n$ is the **index of summation**.
- $a$ is the **lower limit** (where the index starts) and $b$ the **upper limit**.
- $f(n)$ is the **summand** — the rule applied to each index.

When $b = \infty$ the sum is *infinite*, and whether it equals a finite value is exactly the question of [[series-convergence|convergence]].

### Reading a sum as a function

The key idea is that a sum whose summand depends on $x$ is itself a **function of $x$**. The geometric series is the canonical example:

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots \qquad (|x| < 1)$$

The left side is an ordinary function; the right side is the same function expressed as an infinite sum. Moving fluidly between the two forms is the whole game behind [[power-series|power series]].

### Useful manipulations

- **Re-indexing (shifting):** $\displaystyle\sum_{n=a}^{b} f(n) = \sum_{n=a+k}^{b+k} f(n-k)$ — shift the limits and compensate inside.
- **Linearity:** $\displaystyle\sum (\alpha f(n) + \beta g(n)) = \alpha\sum f(n) + \beta\sum g(n)$.
- **Splitting:** pull out the first term(s) to change where a series starts, e.g. $\displaystyle\sum_{n=0}^{\infty} a_n = a_0 + \sum_{n=1}^{\infty} a_n$.

## Product (Pi) Notation

The multiplicative counterpart uses a capital pi:

$$\prod_{n=a}^{b} f(n) = f(a) \cdot f(a+1) \cdots f(b)$$

Everything transfers over with $\times$ in place of $+$. The most important special case is the **factorial**, which is just a product of consecutive integers:

$$n! = \prod_{k=1}^{n} k = 1 \cdot 2 \cdot 3 \cdots n$$

Factorials are why product notation matters for series at all — they appear in the denominators of [[maclaurin-series|Maclaurin]] and [[taylor-series|Taylor]] expansions.

### Sum–product duality via logs

Logarithms turn products into sums, which is often how a product is evaluated:

$$\log \prod_{n=a}^{b} f(n) = \sum_{n=a}^{b} \log f(n)$$

## Why this is the foundation

Every series note in this garden is written in this notation:

- [[series-convergence|Series Convergence]] — when an infinite $\sum$ has a finite value.
- [[power-series|Power Series]] — a $\sum$ whose summand is a power of $x$.
- [[taylor-series|Taylor]] and [[maclaurin-series|Maclaurin]] Series — power series with factorial (a $\prod$) coefficients.

---
*Foundational note — the anchor the rest of the series cluster links back to.*
