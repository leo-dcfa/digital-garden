---
title: Trigonometric Functions, Properties and Inverses
description: The six trig functions as ratios on the unit circle, their domains, periods, ranges, even/odd symmetry, and the inverse functions with their restricted ranges.
date: 2026-06-20 09:30:00 +1000
tags:
  - maths
  - trigonometry
  - functions
---

# Trigonometric Functions, Properties and Inverses

The starting point of trigonometry. Angles are often written in degrees, but the *convention* for trig is to work in **radians**, where

$$360^\circ = 2\pi \text{ radians}.$$

Everything below — definitions, periods, symmetry, inverses — follows once you see the trig functions as **ratios** read off a triangle and, more generally, off the unit circle. The companion note [[special-angles-and-function-values]] tabulates the exact values these functions take at the common angles.

![](functions-properties-inverses.png)

## Functions as ratios

For a right triangle with the angle $A$ opposite side $a$, adjacent side $b$, and hypotenuse $c$:

$$\sin A = \frac{a}{c}, \qquad \cos A = \frac{b}{c}, \qquad \tan A = \frac{a}{b}, \qquad \cot A = \frac{b}{a}.$$

To extend these beyond acute angles, place the angle $\theta$ at the origin and read the ratios off a point $(x, y)$ on a circle of radius $r$:

$$\sin\theta = \frac{y}{r}, \qquad \cos\theta = \frac{x}{r}, \qquad \tan\theta = \frac{y}{x}, \qquad \cot\theta = \frac{x}{y}.$$

On the **unit circle** ($r = 1$) this collapses to the familiar picture: $\cos\theta$ is the horizontal coordinate, $\sin\theta$ the vertical coordinate, and $\tan\theta = \sin\theta/\cos\theta$ the slope of the radius. The remaining two functions are reciprocals: $\csc\theta = 1/\sin\theta$ and $\sec\theta = 1/\cos\theta$.

## Periodicity, domain and range

Because the functions are defined by going around the circle, they are **periodic**. The sine/cosine pair (and their reciprocals) repeat every full turn; tangent and cotangent repeat every half turn:

$$\sin, \cos, \csc, \sec \;\text{have period } 2\pi, \qquad \tan, \cot \;\text{have period } \pi.$$

With $n \in \mathbb{Z}$:

| Function | Domain | Period | Range |
| --- | --- | --- | --- |
| $\sin\theta$ | all $\theta$ | $2\pi$ | $[-1, 1]$ |
| $\cos\theta$ | all $\theta$ | $2\pi$ | $[-1, 1]$ |
| $\tan\theta$ | $\theta \neq \tfrac{\pi}{2} + n\pi$ | $\pi$ | $(-\infty, \infty)$ |
| $\csc\theta$ | $\theta \neq n\pi$ | $2\pi$ | $(-\infty, -1] \cup [1, \infty)$ |
| $\sec\theta$ | $\theta \neq \tfrac{\pi}{2} + n\pi$ | $2\pi$ | $(-\infty, -1] \cup [1, \infty)$ |
| $\cot\theta$ | $\theta \neq n\pi$ | $\pi$ | $(-\infty, \infty)$ |

The gaps in the domains are exactly the angles where a denominator vanishes: $\cos\theta = 0$ kills $\tan$ and $\sec$, while $\sin\theta = 0$ kills $\cot$ and $\csc$.

## Symmetry properties

Reflecting the angle across the $x$-axis (sending $\theta \to -\theta$) reveals each function's parity:

- **Cosine is even** — $\cos(-\theta) = \cos\theta$ — because the horizontal coordinate is unchanged by the reflection. Its graph is symmetric about the $y$-axis.
- **Sine and tangent are odd** — $\sin(-\theta) = -\sin\theta$ and $\tan(-\theta) = -\tan\theta$ — they flip sign, giving graphs symmetric about the origin (antisymmetric).

Phase shifts trade one function for another. For example $y = \sin\!\left(\tfrac{3\pi}{2} + t\right)$ can be unwound with the angle-addition identity, and it turns out to equal $-\cos t$ — an even function. So a sine with the right shift inherits cosine's symmetry.

## Inverse functions

Each trig function is many-to-one, so to invert it we restrict the domain to a single monotone branch. The result is an inverse whose **range** is that chosen branch:

| Inverse | Domain | Range |
| --- | --- | --- |
| $\sin^{-1}$ | $[-1, 1]$ | $\left[-\tfrac{\pi}{2}, \tfrac{\pi}{2}\right]$ |
| $\cos^{-1}$ | $[-1, 1]$ | $[0, \pi]$ |
| $\tan^{-1}$ | $(-\infty, \infty)$ | $\left(-\tfrac{\pi}{2}, \tfrac{\pi}{2}\right)$ |
| $\sec^{-1}$ | $(-\infty, -1] \cup [1, \infty)$ | $[0, \pi],\; \theta \neq \tfrac{\pi}{2}$ |
| $\csc^{-1}$ | $(-\infty, -1] \cup [1, \infty)$ | $\left[-\tfrac{\pi}{2}, \tfrac{\pi}{2}\right],\; \theta \neq 0$ |
| $\cot^{-1}$ | $(-\infty, \infty)$ | $(0, \pi)$ |

Notice the domains of the inverses are just the *ranges* of the originals, as expected when you swap input and output. The restricted output intervals are the price of making each function one-to-one.

*Draft note: connect this to [[special-angles-and-function-values]] for the exact values, and a future note on the [[angle-addition-identities]] used in the symmetry example.*
