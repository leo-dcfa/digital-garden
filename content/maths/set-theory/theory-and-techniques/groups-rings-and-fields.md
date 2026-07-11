---
title: Groups, Rings and Fields
description: Group axioms (identity, inverse, associativity), abelian groups, popular symmetry groups (SO(N), SU(2), SU(N)), subgroups, cosets and cyclic groups, and rings.
date: 2026-07-12 12:00:00 +1000
tags:
  - maths
  - set-theory
  - group-theory
---

# Groups, Rings and Fields

![](groups-rings-and-fields.png)

- Groups, rings and fields endow sets with additional algebraic operations.
- A group is a set equipped with a single binary operation that exhibits certain properties akin to addition or multiplication.

A group $G$ is a set which is closed under an operation $*$: $\forall x, y \in G$, $x * y \in G$, and satisfies the following properties:

1. **Identity:** $\exists\, e \in G$ s.t. $\forall x \in G$, $x * e = x = e * x$, where $e$ is called the identity element.
2. **Inverse:** $\forall x \in G$, $\exists\, y \in G$ s.t. $x * y = e = y * x$, $e =$ identity element.
3. **Associativity:** multiplication is associative for $\forall x, y, z \in G$.

E.g. the set $\mathbb{Z}$ under $+$ is a group and the identity element is $0$.

**Abelian Group** $\Rightarrow$ multiplication is commutative $\forall x, y \in G$.

## Popular symmetry Groups

- **SO(N):** all $N \times N$ orthogonal matrices with determinant $1$, representing rotations in $N$-dimensional space.
- **SU(2):** special unitary group of degree two, all $2 \times 2$ matrices with determinant $1$. Important in the quantum realm — describe spins in / qubit states.
- **SU(N):** SU(2) extended to $N$ dimensions, helpful in the study of quantum entanglement.

## Subgroups

A subgroup $H$ of a group $G$ is a subset of $G$ that is itself a group under the operation inherited from $G$.

## Cosets and cyclic Groups

Cosets are used to partition a group into equivalence classes based on subgroups. Given a subgroup $H$ of a group $G$, the concept of cosets allows us to divide $G$ into distinct subsets.

Case: Given a group $G$ and a subgroup $H$ of $G$, the left coset of $H$, $g \in G$, is the set $gH = \{gh \mid h \in H\}$. The right coset is $Hg = \{hg \mid h \in H\}$.

## Rings and Fields

A ring is a set $R$ equipped with $+$ and $\times$ operations s.t.

1. $(R, +)$ forms an abelian group.
2. **Associativity of $\times$:** $\forall a, b, c \in R$, $a \times (b \times c) = (a \times b) \times c$.
3. **Distributive property:** $\forall a, b, c \in R$,

$$a \times (b + c) = (a \times b) + (a \times c)$$

$$(b + c) \times a = (b \times a) + (c \times a)$$
