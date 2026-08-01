---
title: Complex Inner Product Spaces
description: The real dot product and its algebraic identities, the complex dot product with conjugated first argument, the axioms of a complex inner product space with proofs, and Dirac notation for inner products as a row-times-column product.
date: 2026-08-02 06:45:00 +1000
tags:
  - maths
  - linear-algebra
  - inner-products
---

# Complex Inner Product Spaces

![](complex-inner-product-spaces.png)

Inner product: defines the norm

- provides a way to measure angles and length
- introduces concept of orthogonality

## Dot Product

### Real dot product

$$
u = (u_1, u_2, \dots, u_n) \qquad u \cdot v = u_1 v_1 + u_2 v_2 + \dots + u_n v_n
$$

$$
v = (v_1, v_2, \dots, v_n)
$$

E.g. $u = (1, 1, -1, -1)$, $v = (1, -1, 1, -1)$

Compute $u \cdot v$.

$$
u \cdot v = 1 \times 1 + 1 \times (-1) + (-1) \times 1 + (-1) \times (-1) = 1 - 1 - 1 + 1 = 0
$$

For vectors $u$ and $v \in \mathbb{R}^n$

$$
\|v\|^2 = v \cdot v
$$

$$
\|u - v\|^2 = (u - v) \cdot (u - v)
$$

$$
v \cdot v = v_1 \cdot v_1 + v_2 \cdot v_2 + \dots + v_n v_n = v_1^2 + v_2^2 + \dots + v_n^2 = \|v\|^2
$$

By replacing $u - v$:

$$
(u - v) \cdot (u - v) = \|u - v\|^2
$$

Given vectors $u$, $v$ and $w$ in $\mathbb{R}^n$ and scalar $k$ in $\mathbb{R}$, the following algebraic identities apply

$$
u \cdot v = v \cdot u \quad \text{(commutative)}
$$

$$
u \cdot (v + w) = u \cdot v + u \cdot w \quad \text{(Left Distributive)}
$$

$$
(u + v) \cdot w = u \cdot w + v \cdot w \quad \text{(Right Distributive)}
$$

$$
k u \cdot v = k(u \cdot v) \quad \text{(Left Homogeneity)}
$$

$$
u \cdot (k v) = k(u \cdot v) \quad \text{(Right Homogeneity)}
$$

Given $u = (u_1, u_2, \dots, u_n)$ and $v = (v_1, v_2, \dots, v_n)$

$$
u \cdot v = u_1 v_1 + u_2 v_2 + \dots + u_n v_n = v_1 u_1 + v_2 u_2 + \dots + v_n u_n = v \cdot u
$$

## Complex Dot Products

In $\mathbb{C}^n$, the definition of the complex dot product differs its real counterpart

Given two vectors $u = (u_1, u_2, \dots, u_n)$, $v = (v_1, v_2, \dots, v_n)$ in $\mathbb{C}$, the complex dot product of $u$ and $v$ is defined as:

$$
u \cdot v = u_1^* v_1 + u_2^* v_2 + \dots + u_n^* v_n = \sum_{i=1}^{n} u_i^* v_i
$$

E.g $u = (1, i)$ and $v = (i, -i)$

$$
= u \cdot v = 1 \times 1 + -i \times i = -1 + i
$$

Dot product in $\mathbb{C}^n$ is usually a complex scalar

## Complex Inner Product Space

Binary function Resulting in a scalar $\langle \cdot, \cdot \rangle : V \times V \to \mathbb{C}$

Must satisfy properties:

a) $\langle u, v \rangle = \langle v, u \rangle^*$

b) $\langle u, v + w \rangle = \langle u, v \rangle + \langle u, w \rangle$

c) $\langle u, kv \rangle = k \langle u, v \rangle$

d) $\langle v, v \rangle$ is a real, non-negative number, $\langle v, v \rangle = 0$ iff $v = 0$

Let $u = (u_1, u_2, \dots, u_n)$, $v = (v_1, v_2, \dots, v_n)$, $w = (w_1, w_2, \dots, w_n)$

$$
\text{a) } u \cdot v = \sum_{i=1}^{n} u_i^* v_i = \sum_{i=1}^{n} (u_i v_i^*)^* = \left( \sum_{i=1}^{n} v_i^* u_i \right)^* = (v \cdot u)^*
$$

$$
\text{b) } u \cdot (v + w) = \sum_{i=1}^{n} u_i^* (v_i + w_i) = \sum_{i=1}^{n} u_i^* v_i + \sum_{i=1}^{n} u_i^* w_i = u \cdot v + u \cdot w
$$

$$
\text{c) } u \cdot (k v) = \sum_{i=1}^{n} u_i^* (k v_i) = k \sum_{i=1}^{n} u_i^* v_i = k(u \cdot v)
$$

## Dirac Notation of Inner Products

Product of Row and Column Vectors

$$
r = \begin{bmatrix} r_1 & r_2 & \dots & r_n \end{bmatrix}, \qquad c = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix}
$$

$$
r \cdot c = r_1 c_1 + r_2 c_2 + \dots + r_n c_n = \sum_{i=1}^{n} r_i c_i
$$

Given two vectors

$$
|u\rangle = u = \begin{bmatrix} u_1 & u_2 & \dots & u_n \end{bmatrix}^T
$$

$$
|v\rangle = v = \begin{bmatrix} v_1 & v_2 & \dots & v_n \end{bmatrix}^T
$$

then

$$
u \cdot v = u_1^* v_1 + u_2^* v_2 + \dots + u_n^* v_n = \begin{bmatrix} u_1^* & u_2^* & \dots & u_n^* \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}
$$

$$
= \langle u | \, | v \rangle \equiv \langle u | v \rangle
$$
