---
title: Hilbert Spaces
description: Extending the inner product from C^n to C^infinity and square-summable sequences, functional inner product spaces and L^2, the Fourier series basis of complex exponentials with orthogonality and projection formula, and convergence vs completeness.
date: 2026-08-11 09:00:00 +1000
tags:
  - maths
  - linear-algebra
  - hilbert-spaces
---

# Hilbert Spaces

![](hilbert-spaces.png)

- Vector space $\mathbb{C}^n$ extends $\mathbb{C}^\infty$
- The inner product in $\mathbb{C}^\infty$ is defined analogously to $\mathbb{C}^n$. For two vectors $u, v \in \mathbb{C}^\infty$, their inner product is:

$$
\langle u, v \rangle = \sum_{i=1}^{\infty} u_i^* v_i
$$

For the inner product to be well defined, the series must converge, leading to the concept of square-summable sequences ($\ell^2$)

## Functional inner spaces

- Functions equipped with inner product. E.g.,

$$
\langle f, g \rangle = \int_a^b f^*(x) g(x) \, dx
$$

- Space of all square-integrable functions on $[a, b]$:

$$
L^2([a, b]) = \left\{ f : [a, b] \to \mathbb{C} \;\middle|\; \int_a^b |f(x)|^2 \, dx < \infty \right\}
$$

$L^2$-norm

$$
\|f\| = \sqrt{\int_a^b |f(x)|^2 \, dx}
$$

## E.g. Fourier Series

On the interval $[0, 2\pi]$, the basis functions are the complex exponentials:

$$
\phi_k(x) = \frac{1}{\sqrt{2\pi}} e^{ikx}, \quad k \in \mathbb{Z}
$$

The basis satisfies the orthogonality condition:

$$
\langle \phi_k, \phi_j \rangle = \int_0^{2\pi} \phi_k^*(x) \phi_j(x) \, dx = \delta_{kj}
$$

where $\delta_{kj}$ is the Kronecker delta.

Any square-integrable function $f(x) \in L^2([0, 2\pi])$ can be expressed as $f(x) = \sum_{k=-\infty}^{\infty} c_k \phi_k(x)$, where the Fourier coefficients $c_k$ are computed using the projection formula:

$$
c_k = \langle \phi_k, f \rangle = \int_0^{2\pi} \frac{1}{\sqrt{2\pi}} e^{-ikx} f(x) \, dx
$$

Every finite-dimensional real or complex inner product space is a Hilbert space.

Convergence $\Rightarrow$ a sequence converges to a limit $L$.

Completeness $\Rightarrow$ every Cauchy sequence converges to a point in the space
