---
title: Special Angles and Function Values
description: The unit circle of common angles whose sine, cosine and tangent are finite radical expressions, in both degrees and radians.
date: 2026-06-20 09:45:00 +1000
tags:
  - maths
  - trigonometry
  - unit-circle
---

# Special Angles and Function Values

Some angles are *special* because their trig values come out as **finite radical expressions** — clean numbers like $\tfrac{1}{2}$, $\tfrac{\sqrt 2}{2}$ and $\tfrac{\sqrt 3}{2}$ rather than endless decimals. These are the angles worth committing to memory, and laying them around the unit circle is the standard way to do it. This builds directly on [[trigonometric-functions-properties-and-inverses]], where the functions are defined as coordinates on that circle.

![](special-angles-function-values.png)

## The unit circle

Each point on the unit circle is $(\cos\theta, \sin\theta)$, and $\tan\theta = \sin\theta / \cos\theta$ is the slope of the radius. The special angles are the multiples of $30^\circ$ ($\tfrac{\pi}{6}$) and $45^\circ$ ($\tfrac{\pi}{4}$), which split each quadrant evenly.

The four **quadrantal** angles sit on the axes:

| Angle | Radians | $(\cos\theta, \sin\theta)$ | $\tan\theta$ |
| --- | --- | --- | --- |
| $0^\circ / 360^\circ$ | $0 / 2\pi$ | $(1, 0)$ | $0$ |
| $90^\circ$ | $\tfrac{\pi}{2}$ | $(0, 1)$ | $\infty$ |
| $180^\circ$ | $\pi$ | $(-1, 0)$ | $0$ |
| $270^\circ$ | $\tfrac{3\pi}{2}$ | $(0, -1)$ | $\infty$ |

## First-quadrant values

Memorise the first quadrant and the rest follow by symmetry. A handy pattern: writing each sine as $\tfrac{\sqrt{n}}{2}$ for $n = 0, 1, 2, 3, 4$ makes the progression obvious.

| Angle | Radians | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- | --- |
| $0^\circ$ | $0$ | $0$ | $1$ | $0$ |
| $30^\circ$ | $\tfrac{\pi}{6}$ | $\tfrac{1}{2}$ | $\tfrac{\sqrt 3}{2}$ | $\tfrac{\sqrt 3}{3}$ |
| $45^\circ$ | $\tfrac{\pi}{4}$ | $\tfrac{\sqrt 2}{2}$ | $\tfrac{\sqrt 2}{2}$ | $1$ |
| $60^\circ$ | $\tfrac{\pi}{3}$ | $\tfrac{\sqrt 3}{2}$ | $\tfrac{1}{2}$ | $\sqrt 3$ |
| $90^\circ$ | $\tfrac{\pi}{2}$ | $1$ | $0$ | $\infty$ |

Reading $\sin$ down and $\cos$ up, the two columns are mirror images — a direct consequence of the co-function relationship $\cos\theta = \sin(90^\circ - \theta)$.

## Extending by symmetry

The other three quadrants are reflections of the first, so only the **signs** change — the magnitudes stay identical to the matching reference angle:

| Quadrant | Angle range | $\cos$ | $\sin$ | $\tan$ |
| --- | --- | --- | --- | --- |
| I | $0^\circ$–$90^\circ$ | $+$ | $+$ | $+$ |
| II | $90^\circ$–$180^\circ$ | $-$ | $+$ | $-$ |
| III | $180^\circ$–$270^\circ$ | $-$ | $-$ | $+$ |
| IV | $270^\circ$–$360^\circ$ | $+$ | $-$ | $-$ |

So, for instance, $120^\circ$ has reference angle $60^\circ$ in quadrant II, giving $\left(-\tfrac{1}{2}, \tfrac{\sqrt 3}{2}\right)$; and $225^\circ$ has reference angle $45^\circ$ in quadrant III, giving $\left(-\tfrac{\sqrt 2}{2}, -\tfrac{\sqrt 2}{2}\right)$. The sign rule is just the **even/odd and quadrant symmetry** discussed in [[trigonometric-functions-properties-and-inverses]].

*Draft note: a future [[reference-angles]] note could expand the symmetry trick into a general method for any angle.*
