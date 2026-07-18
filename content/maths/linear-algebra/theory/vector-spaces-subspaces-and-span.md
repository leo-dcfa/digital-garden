---
title: Vector Spaces, Subspaces and Span
description: Definition of a real or complex vector space and its axioms, subspaces and the closure test, and the span of a set of vectors — with $\mathbb{R}^2 = \operatorname{span}\{i, j\}$ as a worked example.
date: 2026-07-19 06:23:00 +1000
tags:
  - maths
  - linear-algebra
---

# Vector Spaces, Subspaces and Span

![](vector-spaces-subspaces-and-span.png)

Vector space: collection of vectors satisfying specific axioms.

## Real and Complex Vector Spaces

A vector space has four key components:

1. Vectors
2. scalars
3. Vector addition
4. scalar multiplication

**Definition:** A vector space is a set $V$ together with a scalar field ($F = \mathbb{R}$ or $\mathbb{C}$), such that two operations are possible:

1. vector addition: for any $u, v \in V$, $u + v \in V$
2. scalar multiplication: for any $c \in F$ and $v \in V$, $cv \in V$

Operations must satisfy the following axioms for all $u, v, w \in V$ and scalars $a, b \in F$:

- Associativity of addition: $(u + v) + w = u + (v + w)$
- commutativity of addition: $u + v = v + u$
- Additive identity: $\exists\, 0 \in V$ s.t. $v + 0 = v$
- Additive inverse: $\forall v \in V$, $\exists\, {-v} \in V$ s.t. $v + (-v) = 0$
- Distributivity of scalar multiplication over vector addition: $a(u + v) = au + av$
- Distributivity over scalar addition: $(a + b)v = av + bv$
- Compatibility of scalar multiplication: $(ab)v = a(bv)$
- Multiplicative identity: $\exists\, 1 \in F$ s.t. $1v = v$ for all $v \in V$

## Subspaces

- A subspace is a subset of a vector space that forms a vector space under the same operations.
- A non-empty subset $W$ of a vector space $V$ is called a subset of $V$ if $W$ is a vector space under the same scalar field $F$ and the same operations of vector addition and scalar multiplication as in $V$.
- If $W$ is a non-empty subset of a vector space $V$, then $W$ is a subspace of $V$ iff $W$ satisfies closure under addition and closure under scalar multiplication.

## Span

- Vector spaces and their subspaces share the crucial property of closure under arbitrary linear combination.
- Given a set $S = \{v_1, v_2, \dots, v_n\}$ of vectors from vector space $V$, and let $W$ be the subspace of $V$ that contains all possible linear combinations of vectors in $S$, then $W$ is the span of $S$.

$$W = \operatorname{Span}(S) = \operatorname{Span}\{v_1, v_2, \dots, v_n\}$$

or $S$ spans $W$.

Eg: $i = (1, 0)$ and $j = (0, 1)$ span $\mathbb{R}^2$.

Consider general vector $(a, b) \in \mathbb{R}^2$, $a, b \in \mathbb{R}$.

$$(a, b) = a(1, 0) + b(0, 1) = ai + bj$$

Since every vector in $\mathbb{R}^2$ can be written as a linear combination of $i$ and $j$, we conclude $\{i, j\}$ spans $\mathbb{R}^2$.
