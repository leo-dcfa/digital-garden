---
title: Fourier Series
description: An introduction to representing periodic functions as sums of sine and cosine waves.
date: 2026-06-17 13:10:00 +0000
tags:
  - maths
  - calculus
  - series
  - signal-processing
---

# Fourier Series

A **Fourier series** is a way to represent a periodic function as an infinite sum of sine and cosine functions. While Taylor series approximate functions using polynomials (which are local), Fourier series approximate periodic functions using trigonometric functions (which are global).

## The General Form

For a function $f(x)$ that is periodic with period $T = 2L$, the Fourier series is given by:

$$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right)$$

Where the Fourier coefficients are calculated as:

- **Constant term**:
  $$a_0 = \frac{1}{L} \int_{-L}^{L} f(x) \, dx$$

- **Cosine coefficients**:
  $$a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx$$

- **Sine coefficients**:
  $$b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx$$

## Complex Form

Using Euler's formula, the Fourier series can be expressed more compactly in terms of complex exponentials:

$$f(x) \sim \sum_{n=-\infty}^{\infty} c_n e^{i\frac{n\pi x}{L}}$$

Where the complex coefficients $c_n$ are:

$$c_n = \frac{1}{2L} \int_{-L}^{L} f(x) e^{-i\frac{n\pi x}{L}} \, dx$$

## Applications

Fourier series are fundamental in many fields:
- **Signal Processing**: Decomposing signals into frequency components.
- **Physics**: Solving differential equations (e.g., the heat equation).
- **Acoustics**: Analyzing the timbre and harmonics of musical sounds.

---
*Draft note: Expand on Parseval's Theorem and the distinction between Fourier Series (periodic) and Fourier Transform (non-periodic).*
