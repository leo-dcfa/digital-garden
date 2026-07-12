---
title: Asymptotic Behaviour and Big O Notation
description: What it means for f(x) to be O(g(x)), and the ordered hierarchy of common growth classes from log-log up to hyperexponential.
date: 2026-07-13 09:00:00 +1000
tags:
  - maths
  - asymptotic-analysis
---

# Asymptotic Behaviour and Big O Notation

![](asymptotic-behaviour-and-big-o-notation.png)

- In simple terms, given $f(x)$, we analyse its response to large inputs — in terms of a simpler function $g(x)$.
- When we say $f(x)$ is $O(g(x))$ as $x$ approaches infinity, it means that there exists a constant $c$ (positive) s.t. $f(x)$ does not grow faster than $c \cdot g(x)$ for a sufficiently large $x$.
- $f(x) = O(g(x))$ indicating $g(x)$ sets as the upper bound on $f(x)$ in the [...].

The figure plots growth classes against $x$ (increasing steepness): $\log(x)$, $x$, $x \log x$, $x^2$, poly-log $x^2 \log(x)$, $2^x$, $x!$.

1. **log-log:** $g(x) = \log \log(x)$
   - Extremely slow growth
   - Specialised computational geometry problems
2. **log:** $g(x) = \log(x)$
   - Highly efficient
   - E.g. binary search
3. **Sublinear:** $g(x) = x^p, \quad 0 < p < 1$
4. **Linear:** $g(x) = x$
5. **Polynomial:** $g(x) = x^p, \quad p > 1$
6. **Poly log:** $g(x) = x^p \log(x), \quad p \geq 1$
7. **Exponential:** $g(x) = b^x, \quad b > 1$
8. **Factorial:** $g(x) = x!$
9. **Hyperexponential:** $g(x) = x^x, \quad g(x) = b^{x^2}, \quad g(x) = b^{b^x}, \quad \text{etc.}$
