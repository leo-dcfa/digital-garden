---
title: Linear Independence, Basis and Dimension
description: Linear independence and redundant vectors, the definition of a basis, uniqueness of representation, and showing $\{(1,0,0), (1,1,0), (1,1,1)\}$ is a basis of $\mathbb{R}^3$.
date: 2026-07-21 10:32:00 +1000
tags:
  - maths
  - linear-algebra
---

# Linear Independence, Basis and Dimension

![](linear-independence-basis-and-dimension.png)

$$\hat{i} = (1, 0), \quad \hat{j} = (0, 1) \in \mathbb{R}^2$$

Any vector in this space can be uniquely expressed as a linear combination of these basis vectors: $(a, b) = a(1, 0) + b(0, 1)$.

## Linear Independence

Q: Can any vector be removed from a set without affecting its span? (i.e. a "redundant" vector)

If a vector can be removed from a set without affecting span, the vector is expressible as a linear combination.

Let $S = \{v_1, v_2, v_3, \dots, v_n\} \in V$. If removing any vector results in a change in span, the set is linearly independent. The set $S$ is said to be linearly dependent if there exist scalars $c_1, c_2, c_3, \dots, c_n$ not all zero, s.t.:

$$c_1 v_1 + c_2 v_2 + \dots + c_n v_n = 0$$

Eg:

$$k_1(1, 2, 3) + k_2(4, 5, 6) + k_3(7, 8, 9) = (0, 0, 0)$$

$$\begin{cases} k_1 + 4k_2 + 7k_3 = 0 \\ 2k_1 + 5k_2 + 8k_3 = 0 \\ 3k_1 + 6k_2 + 9k_3 = 0 \end{cases} \implies (k_1, k_2, k_3) = (t, -2t, t) \quad \text{for any } t \in \mathbb{R}$$

Row 1 + Row 3 = 2 × Row 2

$$\therefore (k_1, k_2, k_3) = (t, -2t, t)$$

> Geometrically, think of line through origin in $\mathbb{R}^3$.

## Basis

A basis is a minimal set of vectors that span a vector space.

$S = \{v_1, v_2, \dots, v_n\} \in V$ is a basis of $V$ if $S$ spans $V$ and is linearly independent.

$(7, 8, 9)$ as a linear combination of $(1, 2, 3)$ and $(4, 5, 6)$:

$$a(1, 2, 3) + b(4, 5, 6) = (7, 8, 9)$$

$$\begin{cases} a + 4b = 7 \\ 2a + 5b = 8 \\ 3a + 6b = 9 \end{cases} \qquad \begin{aligned} a &= 7 - 4b \\ 2(7 - 4b) + 5b &= 8 \\ 14 - 3b &= 8 \\ b = 2, \quad a &= -1 \end{aligned}$$

$$3(-1) + 6(2) = -3 + 12 = 9 \checkmark$$

$$(7, 8, 9) = -1(1, 2, 3) + 2(4, 5, 6) = (-1 + 8,\ -2 + 10,\ -3 + 12) = (7, 8, 9) \checkmark$$

- If $S$ is a basis of a vector space $V$, then every vector $w \in V$ has a unique representation as a linear combination of $S$.

Let $w \in V$ and $S = \{v_1, v_2, v_3, \dots, v_n\}$. Since $S$ spans $V$, $w$ can be expressed as

$$w = k_1 v_1 + k_2 v_2 + \dots + k_n v_n$$

Assume another representation exists:

$$w = m_1 v_1 + m_2 v_2 + \dots + m_n v_n$$

Subtracting gives

$$0 = (k_1 - m_1) v_1 + \dots + (k_n - m_n) v_n$$

Since $S$ is linearly independent:

$$k_1 - m_1 = k_2 - m_2 = \dots = k_n - m_n = 0$$

$$\therefore k_i = m_i \text{ for all } i$$

Show that $S = \{(1, 0, 0), (1, 1, 0), (1, 1, 1)\}$ is a basis of $\mathbb{R}^3$.

For a general vector $v = (a, b, c) \in \mathbb{R}^3$:

$$(a, b, c) = k_1(1, 0, 0) + k_2(1, 1, 0) + k_3(1, 1, 1)$$

where $k_1, k_2, k_3 \in \mathbb{R}$. This leads to

$$\begin{cases} k_1 + k_2 + k_3 = a \\ k_2 + k_3 = b \\ k_3 = c \end{cases} \implies \begin{aligned} k_1 &= a - b \\ k_2 &= b - c \\ k_3 &= c \end{aligned}$$

$$\therefore k_1(1, 0, 0) + k_2(1, 1, 0) + k_3(1, 1, 1) = (0, 0, 0)$$

is $k_1 = k_2 = k_3 = 0$, $\therefore$ proving linear independence. Hence, $S$ is a basis. $\blacksquare$
