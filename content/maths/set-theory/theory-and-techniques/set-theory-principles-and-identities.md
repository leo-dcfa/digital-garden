---
title: Set Theory Principles, Definitions and Identities
description: Inclusion-exclusion principle, Cartesian products, disjoint sets, partitions, power sets, set identities, and De Morgan's laws.
date: 2026-07-07 12:00:00 +1000
tags:
  - maths
  - set-theory
---

# Set Theory Principles, Definitions and Identities

![](set-theory-principles-and-identities.png)

## Inclusion-Exclusion Principle

$$|A \cup B| = |A| + |B| - |A \cap B|$$
$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

## Cartesian Product

$A \times B$ = all ordered pairs $(a, b)$

E.g. $A = \{a, b, c\}$ and $B = \{1, 2, 3\}$

$$A \times B = \{(a,1), (a,2), (a,3), (b,1), (b,2), (b,3), (c,1), (c,2), (c,3)\}$$

$B = \{0, 1\}$ (often called binary set)

$$B \times B \equiv B^2 = \{(0,0), (0,1), (1,0), (1,1)\}$$

Also written as $\{0,1\}^2 = \{00, 01, 10, 11\}$

## Definitions

$\emptyset$ = Empty set

$\{0,1\}^n$ represents all the possible permutations ($2^n$) of $n$-strings

**Disjoint set** $\Rightarrow A \cap B = \emptyset$

**Set partition** $\Rightarrow$ E.g. $A = \{0, 1, 2\}$, $B = \{\{0\}, \{1\}, \{2\}\}$ $\therefore B \subseteq A$

**Power set** $\Rightarrow$ set of all subsets

## Set Identities

| | | | |
|---|---|---|---|
| $A \cup \emptyset = A$ | $A \cup A = A$ | $A \cup \bar{A} = U$ | $A \cap B = B \cap A$ |
| $A \cap \emptyset = \emptyset$ | $A \cap A = A$ | $A \cap \bar{A} = \emptyset$ | $A \cup (B \cup C) = (A \cup B) \cup C$ |
| $A \cup U = U$ | $A \cup (A \cap B) = A$ | $\bar{\bar{A}} = A$ | $A \cap (B \cap C) = (A \cap B) \cap C$ |
| $A \cap U = A$ | $A \cap (A \cup B) = A$ | $A \cup B = B \cup A$ | $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ |

## De Morgan's Laws

$$\overline{A \cap B} = \bar{A} \cup \bar{B}$$
$$\overline{A \cup B} = \bar{A} \cap \bar{B}$$
