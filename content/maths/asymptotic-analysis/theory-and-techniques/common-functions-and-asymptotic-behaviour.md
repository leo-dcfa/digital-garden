---
title: Common Functions and Asymptotic Behaviour
description: The core function families — power, polynomial, exponential, and logarithmic — with their defining properties and how each behaves for large x.
date: 2026-07-13 09:00:00 +1000
tags:
  - maths
  - asymptotic-analysis
---

# Common Functions and Asymptotic Behaviour

![](common-functions-and-asymptotic-behaviour.png)

## 1. Power functions

$$f(x) = x^p, \quad x \geq 0, \quad p \in \mathbb{R}$$

- $p > 0$, $f(x)$ increases as $x$ increases
- $p < 0$, $f(x)$ decreases as $x$ increases
- $p = 0$, $f(x) = 1$ regardless of $x$
- $p = 1$, $f(x) = x$

Key properties:

- $x^a \cdot x^b = x^{a+b}$
- $x^a / x^b = x^{a-b}$

## 2. Polynomial functions

$$f(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n, \quad \sum a_i x^i, \quad i \in \mathbb{Z}$$

- Behaviour for large $x$ determined by highest power
- $n$-th degree has $n$ roots

## 3. Exponential functions

$$f(x) = b^x, \quad b \in \mathbb{R}^+, \quad b \neq 1$$

- Growth and decay
  - $b > 1 \Rightarrow f(x)$ exponential growth
  - $0 < b < 1 \Rightarrow f(x)$ exponential decay
- Always positive
- Horizontal asymptote
- Base $e \Rightarrow$ the natural exponential function with $b = e$, also denoted $\exp(x)$, has special significance across mathematics

## 4. Logarithmic functions

$$f(x) = \log_b(x), \quad \text{where } b \in \mathbb{R}^+, \quad b \neq 1, \quad x \geq 0$$

- Reverse exponentiation $\Rightarrow b^y = x \iff \log_b(x) = y$
- Growth and behaviour
  - $b > 1$, $\log_b(x)$ increases as $x$ increases, but very slowly
  - $0 < b < 1$, $\log_b(x)$ decreases as $x$ increases
- Vertical asymptote at $x = 0$
- $\log_b(1) = 0$ and $\log_b(b) = 1$
- $\ln(x)$ has $e$ as base

Product rule $\Rightarrow \log_b(xy) = \log_b(x) + \log_b(y)$

Break up exponent $\Rightarrow \log_b(y^x) = x \log_b(y)$

$$\log_b(x) = \frac{\log_a(x)}{\log_a(b)}$$
