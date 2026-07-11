---
title: Functions
description: Functions as mappings between sets — domain, codomain, image, pre-image, range, and injective, surjective, bijective, and inverse functions.
date: 2026-07-12 12:00:00 +1000
tags:
  - maths
  - set-theory
  - functions
---

# Functions

![](functions.png)

A function is a mapping of a set to another which assigns an element of the domain to one element in the codomain.

## Relations

Let $f$ be a function from set $A$ to set $B$, denoted $f: A \to B$.

- $A \Rightarrow$ domain
- $B \Rightarrow$ codomain
- $f(a) = b$, $b$ is the image of $a$ and $a$ is the pre-image of $b$.
- the range of $f$ is the set of all images of elements of $A$.
- Let $S$ be a subset of $A$; the image of $S$ is a subset of $B$ that consists of the image of the elements of $S$, s.t.

$$f(S) = \{f(s) \mid s \in S\}$$

The diagram shows $f: A \to B$ with $A = \{a_1, a_2, a_3, a_4\}$ mapping into $B = \{b_1, b_2, b_3, b_4\}$; the dashed mapping is annotated "Not allowed!" (an element cannot map to more than one image).

## Injective function

$f: A \to B$: for every $a_1, a_2 \in A$, $f(a_1) = f(a_2) \Rightarrow a_1 = a_2$. Every element of the domain has a distinct assignment in the codomain.

## Surjective function

For every $b \in B$, there is at least one element $a \in A$ s.t. $f(a) = b$.

## Bijective function

Both injective and surjective.

## Inverse function

Let $f: A \to B$ be a bijective function; the inverse function is denoted by:

$$f^{-1}: B \to A$$

For every $b \in B$, $f^{-1}(b) = a$, iff $f(a) = b$.
