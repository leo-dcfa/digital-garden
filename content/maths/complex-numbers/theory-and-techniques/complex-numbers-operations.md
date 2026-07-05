---
title: Complex Numbers Operations
description: Conversion formulas between cartesian and exponential form, basic operations, conjugation rules, powers and roots (De Moivre's theorem), and advanced worked examples.
date: 2026-07-05 09:00:00 +1000
tags:
  - maths
  - complex-numbers
---

# Complex Numbers Operations

![](complex-numbers-operations.png)

## Conversion formulas

|            | Cartesian                            | Exponential                                              |
| ---------- | ------------------------------------ | -------------------------------------------------------- |
|            | $z = x + iy$                         | $z = re^{i\theta}$                                       |
| conjugate  | $z^* = x - iy$                       | $z^* = re^{-i\theta}$                                    |
| modulus    | $\|z\| = \sqrt{zz^*}$                | $\|z\| = r$                                              |
| conversion | $x = r\cos\theta$, $y = r\sin\theta$ | $r = \sqrt{x^2 + y^2}$, $\theta = \mathrm{arctan2}(y,x)$ |

E.g.

$$z = 1 + i\sqrt{3} \qquad z^* = 1 - i\sqrt{3}$$

$$|z| = \sqrt{1^2 + \sqrt{3}^2} = \sqrt{4} = 2$$

$$\theta = \mathrm{arctan2}(2, 1) = \frac{\pi}{3}$$

$$\therefore z = 2e^{i\frac{\pi}{3}}$$

a) For $z = 3 - 4i$, find $|z|$ and $\theta$
b) Convert $z = -2 + 2i$ to exponential form
c) Convert $z = 2e^{i\frac{\pi}{6}}$ to cartesian form

a)

$$z^* = 3 + 4i$$

$$|z| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

$$\theta = \mathrm{arctan2}(4, 3) = 53.13$$

b)

$$z = -2 + 2i$$

$$|z| = \sqrt{8} = 2\sqrt{2} = r$$

$$\theta = \arctan(2, -2) = 3\pi/4$$

$$\therefore -2 + 2i = z = 2\sqrt{2} \cdot e^{i\frac{3\pi}{4}}$$

c)

$$z = 2e^{i\frac{\pi}{6}} \qquad r = 2, \; \theta = \frac{\pi}{6}$$

$$x = 2\cos\left(\frac{\pi}{6}\right) = \frac{2\sqrt{3}}{2} = \sqrt{3}$$

$$y = 2\sin\left(\frac{\pi}{6}\right) = \frac{2 \cdot 1}{2} = 1$$

$$\therefore z = \sqrt{3} + i$$

## Basic Operations

$$z_1 + z_2 = (x_1 + x_2) + i(y_1 + y_2)$$

$$z_1 - z_2 = (x_1 - x_2) + i(y_1 - y_2)$$

$$z_1 \cdot z_2 = r_1 e^{i\theta_1} \cdot r_2 e^{i\theta_2} = r_1 \cdot r_2 \, e^{i(\theta_1 + \theta_2)}$$

$$\frac{z_1}{z_2} = \frac{r_1 e^{i\theta_1}}{r_2 e^{i\theta_2}} = \frac{r_1}{r_2} \, e^{i(\theta_1 - \theta_2)}$$

$$z_1 \cdot z_2 = (x_1 + iy_1)(x_2 + iy_2) = x_1 x_2 - y_1 y_2 + i(x_1 y_2 + x_2 y_1)$$

$$\frac{z_1}{z_2} = \frac{(x_1 + iy_1)(x_2 - iy_2)}{x_2^2 + y_2^2} = \frac{x_1 x_2 + y_1 y_2}{x_2^2 + y_2^2} + i \, \frac{x_2 y_1 - x_1 y_2}{x_2^2 + y_2^2}$$

E.g.

$$z_1 = \frac{1}{2} + \frac{\sqrt{3}}{2} i = e^{i\frac{\pi}{3}}$$

$$z_2 = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} i = e^{i\frac{\pi}{4}}$$

$$z_1 z_2 = e^{i\left(\frac{\pi}{3} + \frac{\pi}{4}\right)} = e^{i\frac{7\pi}{12}} = \cos\frac{7\pi}{12} + i\sin\frac{7\pi}{12}$$

$$\frac{z_1}{z_2} = e^{i\left(\frac{\pi}{3} - \frac{\pi}{4}\right)} = e^{i\frac{\pi}{12}} = \cos\frac{\pi}{12} + i\sin\frac{\pi}{12}$$

Or

$$z_1 z_2 = \left(\frac{\sqrt{2}}{4} - \frac{\sqrt{6}}{4}\right) + i\left(\frac{\sqrt{2}}{4} + \frac{\sqrt{6}}{4}\right)$$

$$\frac{z_1}{z_2} = \left(\frac{\sqrt{2}}{4} + \frac{\sqrt{6}}{4}\right) + \left(-\frac{\sqrt{2}}{4} + \frac{\sqrt{6}}{4}\right) i$$

$$\cos\frac{7\pi}{12} = \frac{\sqrt{2}}{4} - \frac{\sqrt{6}}{4}$$

$$\sin\frac{\pi}{12} = -\frac{\sqrt{2}}{4} + \frac{\sqrt{6}}{4}$$

## Conjugation

$$|z^*| = |z|$$

$$(z_1 \pm z_2)^* = z_1^* \pm z_2^*$$

$$(z_1 \cdot z_2)^* = z_1^* \cdot z_2^*$$

$$(z_1 / z_2)^* = z_1^* / z_2^*$$

$$(z^x)^* = (z^*)^x \quad (x \in \mathbb{R})$$

$$(x^z)^* = x^{z^*} \quad (x \in \mathbb{R})$$

## Powers and Roots

$z = re^{i\theta}$ and $s$, $s \in \mathbb{R}$, power given by

$$z^s = r^s e^{is\theta}$$

⇒ From this we derive De Moivre's theorem:

$$(\cos\theta + i\sin\theta)^s = \cos(s\theta) + i\sin(s\theta)$$

## Advanced Operations

Evaluate $\sqrt{i}$ (which is $\sqrt{\sqrt{-1}}$)

$$\sqrt{i} = \left(e^{\frac{\pi i}{2}}\right)^{\frac{1}{2}} = e^{\frac{\pi i}{4}} = \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}(1 + i)$$

$$= \frac{1}{2}(1 + i)^2 = \frac{1}{2}(1 + 2i + i^2) = \frac{1}{2}(2i) = i$$

Evaluate $\left(\frac{1}{2} + \frac{\sqrt{3}}{2} i\right)^{50}$

$$\left(\frac{1}{2} + \frac{\sqrt{3}}{2} i\right)^{50} \Rightarrow |z| = \sqrt{\left(\frac{1}{2}\right)^2 + \left(\frac{\sqrt{3}}{2}\right)^2} = \sqrt{\frac{1}{4} + \frac{3}{4}} = \sqrt{\frac{4}{4}} = \sqrt{1} = 1$$

$$r = 1 \Rightarrow x = r\cos\theta, \; y = r\sin\theta \qquad \theta = \arctan\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right) = \frac{\pi}{3}$$

$$\therefore \left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right)^{50} = \left(e^{i\frac{\pi}{3}}\right)^{50} = e^{i\frac{50\pi}{3}} = e^{\left(16 + \frac{2}{3}\right)\pi i}$$

$$= e^{i\frac{2\pi}{3}} = -\frac{1}{2} + \frac{\sqrt{3}}{2} i$$
