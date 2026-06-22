---
title: The Spherical Coordinate System
description: Spherical coordinates (r, θ, φ) alongside Cartesian and cylindrical, the conversion formulas both ways, and worked examples in each direction.
date: 2026-06-23 11:30:00 +1000
tags:
  - maths
  - trigonometry
  - spherical-coordinates
  - coordinate-systems
---

# The Spherical Coordinate System

![](spherical-cartesian-coordinates.png)

The page sketches three coordinate systems for the same point:

- **Cartesian** — $(x, y, z)$.
- **Cylindrical** — $(\rho, \phi, z)$, with $\phi$ measured in the base plane and $\rho$ the radial distance out from the $z$-axis.
- **Spherical** — $(r, \theta, \phi)$, with $\theta$ measured down from the $z$-axis, $r$ the radial line, $r\sin\theta$ its horizontal projection and $r\cos\theta$ its height.

## Spherical → Cartesian

$$x = r\sin\theta\cos\phi$$
$$y = r\sin\theta\sin\phi$$
$$z = r\cos\theta$$

## Cartesian → Spherical

$$r = \sqrt{x^2 + y^2 + z^2}$$
$$\phi = \operatorname{arctan2}(x, y)$$
$$\theta = \arccos\frac{z}{r}$$

$\operatorname{arctan2}$ takes $(x, y)$ and returns a unique value in the range $[-\pi, \pi]$.

## Convert from spherical to Cartesian

**a) $\left(1, \tfrac{\pi}{2}, \tfrac{\pi}{4}\right)$**

$$z = r\cos\theta \qquad \cos\theta = \cos\!\left(\tfrac{\pi}{2}\right) = 0 \quad\therefore\ z = 0$$
$$\sin\theta\!\left(\tfrac{\pi}{2}\right) = 1 \qquad \sin\phi\!\left(\tfrac{\pi}{4}\right) = \tfrac{\sqrt 2}{2}$$
$$y = 1 \cdot 1 \cdot \tfrac{\sqrt 2}{2} \implies y = \tfrac{\sqrt 2}{2}$$
$$x = 1 \cdot 1 \cdot \tfrac{\sqrt 2}{2}\cos\phi \quad\therefore\ x = \tfrac{\sqrt 2}{2}$$

$\therefore \left(1, \tfrac{\pi}{2}, \tfrac{\pi}{4}\right)$ translates to $\left(\tfrac{\sqrt 2}{2}, \tfrac{\sqrt 2}{2}, 0\right)$ in the Cartesian system.

**b) $\left(2, \tfrac{\pi}{3}, \tfrac{\pi}{4}\right)$**

$$\sin\theta = \sin\!\left(\tfrac{\pi}{3}\right) = \tfrac{\sqrt 3}{2} \qquad \cos\theta = \cos\!\left(\tfrac{\pi}{3}\right) = \tfrac{1}{2}$$
$$\sin\phi = \sin\!\left(\tfrac{\pi}{4}\right) = \tfrac{\sqrt 2}{2} \qquad \cos\phi = \cos\!\left(\tfrac{\pi}{4}\right) = \tfrac{\sqrt 2}{2}$$
$$x = 2 \cdot \tfrac{\sqrt 3}{2} \cdot \tfrac{\sqrt 2}{2} = \tfrac{\sqrt 6}{2}$$
$$y = 2 \cdot \tfrac{\sqrt 3}{2} \cdot \tfrac{\sqrt 2}{2} = \tfrac{\sqrt 6}{2}$$
$$z = 2 \cdot \tfrac{1}{2} = 1$$

$\therefore \left(2, \tfrac{\pi}{3}, \tfrac{\pi}{4}\right) = \left(\tfrac{\sqrt 6}{2}, \tfrac{\sqrt 6}{2}, 1\right)$

## Convert from Cartesian to spherical

**a) $(1, 1, 0)$**

$$r = \sqrt{1^2 + 1^2 + 0^2} = \sqrt 2$$
$$\phi = \operatorname{arctan2}(1, 1) = \tfrac{\pi}{4}$$
$$\theta = \arccos\!\left(\tfrac{0}{\sqrt 2}\right) = \arccos(0) = \tfrac{\pi}{2}$$

$\implies \left(\sqrt 2, \tfrac{\pi}{2}, \tfrac{\pi}{4}\right)$

**b) $(1, -1, -1)$**

$$r = \sqrt{1 + 1 + 1} = \sqrt 3$$
$$\phi = \operatorname{arctan2}(y, x) = \operatorname{arctan2}(-1, 1) = -\tfrac{\pi}{4}$$
$$\theta = \arccos\!\left(\tfrac{z}{r}\right) = \arccos\!\left(\tfrac{-1}{\sqrt 3}\right) = 2.186 \text{ rad}$$

$\implies \left(\sqrt 3, 2.186, -\tfrac{\pi}{4}\right)$
