---
title: Basic Vector Algebra
description: Vector equality, complex conjugates, addition and its properties, geometric representation (parallelogram and triangle rules), subtraction, scalar multiplication, and linear combinations in $\mathbb{R}^n$ and $\mathbb{C}^n$.
date: 2026-07-16 06:34:00 +1000
tags:
  - maths
  - linear-algebra
---

# Basic Vector Algebra

![](basic-vector-algebra.png)

**Vector Equality:** given two vectors $u = \langle u_1, u_2, u_3, \dots, u_n \rangle$ and $v = \langle v_1, v_2, v_3, \dots, v_n \rangle$ in $\mathbb{C}^n$ or $\mathbb{R}^n$, the two vectors are equal if every component of $u$ equals every component of $v$.

Eg: Find real numbers $a$ and $b$ s.t.

$$\left( \frac{a+b}{\sqrt{2}}, \frac{a-b}{\sqrt{2}} \right) = (1, 0)$$

$$\begin{cases} \dfrac{a+b}{\sqrt{2}} = 1 \\[2mm] \dfrac{a-b}{\sqrt{2}} = 0 \end{cases} = \begin{cases} a = \dfrac{\sqrt{2}}{2} \\[2mm] b = \dfrac{\sqrt{2}}{2} \end{cases}$$

**Complex conjugate:** for every vector $v = \langle v_0, v_1, v_2, \dots, v_n \rangle$, there exists a conjugate denoted as $v^*$, given by

$$v^* = \langle v_0^*, v_1^*, v_2^*, \dots, v_n^* \rangle$$

where $v_i^*$ is the complex conjugate of $v_i$ for $i = 0, 1, 2, \dots, n$.

Eg: given $v = \langle 1, 1+i \rangle$, $v^* = \langle 1, 1-i \rangle$

**Vector Addition:** given $u = \langle u_1, u_2, u_3, \dots \rangle$ and $v = \langle v_1, v_2, v_3, \dots \rangle$ in $\mathbb{R}^n$ or $\mathbb{C}^n$, their sum is:

$$u + v = \langle u_1 + v_1, u_2 + v_2, \dots, u_n + v_n \rangle$$

Properties:

- $u + v = v + u$ (commutativity)
- $u + (v + w) = (u + v) + w$ (associativity)
- $u + 0 = v$ (identity)

**Geometric Representation**

Parallelogram Rule &nbsp;&nbsp;·&nbsp;&nbsp; Triangle Rule (both giving $u + v$).

**Vector subtraction**

The negative of a geometric vector $v$, denoted $-v$, is the vector with same magnitude and opposite direction.

$$u - v = \langle u_1 - v_1, u_2 - v_2, \dots, u_n - v_n \rangle$$

(Geometric picture: $\langle v_1, v_2 \rangle$ and its negative $\langle -v_1, -v_2 \rangle$.)

**Scalar multiplication:** $v = \langle v_1, v_2, v_3, \dots, v_n \rangle$ in $\mathbb{R}^n$ or $\mathbb{C}^n$, scalar $k$:

$$kv = \langle kv_1, kv_2, kv_3, \dots, kv_n \rangle$$

**Linear combinations:**

Given a vector $u$ and a set of $r$ vectors $\langle v_1, v_2, \dots, v_r \rangle$ in $\mathbb{R}^n$ or $\mathbb{C}^n$, then $u$ is a linear combination of $r$ if $u$ can be expressed as:

$$u = k_1 v_1 + k_2 v_2 + k_3 v_3 + \dots + k_r v_r = \sum_{i=1}^{r} k_i v_i$$
