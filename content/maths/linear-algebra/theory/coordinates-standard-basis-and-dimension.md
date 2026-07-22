---
title: Coordinates, Standard Basis and Dimension
description: Coordinate vectors relative to a basis, the standard basis of R^n, and the definition of dimension and subspaces for finite-dimensional vector spaces.
date: 2026-07-22 09:26:00 +1000
tags:
  - maths
  - linear-algebra
---

# Coordinates, Standard Basis and Dimension

![](coordinates-standard-basis-and-dimension.png)

## Coordinates and Standard Basis

Coordinate: Express $w$ in terms of a basis $S = \{v_1, v_2, \dots, v_n\}$ from a vector $v$ on a field $\mathbb{R}$ (or $\mathbb{C}$):

$$w = k_1 v_1 + k_2 v_2 + \dots + k_n v_n$$

The unique vector $(k_1, k_2, \dots, k_n)$ formed from the scalar coefficients in $\mathbb{R}^n$ (or $\mathbb{C}^n$) is said to be the coordinate vector or simply the coordinate of $w$ relative to $S$, denoted as

$$(w)_S = (k_1, k_2, \dots, k_n)$$

the standard basis:

$$e_1 = (1, 0, \dots, 0), \quad e_2 = (0, 1, \dots, 0)$$
$$e_n = (0, 0, \dots, 1)$$

where each $e_i$ has the $i$th component expressed as one and all others as zero. Uniquely expressed as

$$v = v_1 e_1 + v_2 e_2 + \dots + e_n v_n = \sum_{i=1}^n v_i e_i$$

$\therefore \{e_1, e_2, \dots, e_n\}$ is the standard basis of $\mathbb{R}^n$ (or $\mathbb{C}^n$). By default, the coordinate of a vector is relative to the standard basis:

$$\langle v_1, v_2, \dots, v_n \rangle (e_1, e_2, \dots, e_n) = \langle v_1, v_2, \dots, v_n \rangle$$

## Dimension

Intuitively, we can reason about lines (1D), planes (2D) and 3D spaces. In linear algebra, dimension for finite-dimensional vector space is defined as:

For a finite-dimensional vector space, all bases posses the same number of vectors.

Dimension: number of vectors in a basis, denoted $\dim(V)$ where $V \Rightarrow$ vector space.

Subspaces: lower dimension constructs of a vector space.
