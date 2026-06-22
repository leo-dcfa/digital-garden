---
title: Trigonometric Identities
description: Single-angle interrelations, cofunction and Pythagorean identities, three worked proof problems, and the double-, half- and compound-angle formulas with a geometric construction.
date: 2026-06-22 10:15:00 +1000
tags:
  - maths
  - trigonometry
  - identities
---

# Trigonometric Identities

![](trig-identities.png)

## 1. Single-Angle

### Interrelations

$$\tan\theta = \frac{\sin\theta}{\cos\theta}, \qquad \cot\theta = \frac{1}{\tan\theta}, \qquad \sec\theta = \frac{1}{\cos\theta}, \qquad \csc\theta = \frac{1}{\sin\theta}$$

### Cofunction formulas

$$\sin\!\left(\tfrac{\pi}{2} - \theta\right) = \cos\theta, \qquad \cos\!\left(\tfrac{\pi}{2} - \theta\right) = \sin\theta, \qquad \cot\!\left(\tfrac{\pi}{2} - \theta\right) = \tan\theta$$

### Pythagorean Identities

$$\sin^2\theta + \cos^2\theta = 1, \qquad \tan^2\theta + 1 = \sec^2\theta, \qquad \cot^2\theta + 1 = \csc^2\theta$$

### Eg.

$$\frac{\sin\theta}{1 - \cos\theta} = \frac{\sin\theta}{(1 - \cos\theta)} \cdot \frac{(1 + \cos\theta)}{(1 + \cos\theta)}$$

$$= \frac{\sin\theta(1 + \cos\theta)}{1 - \cos^2\theta} = \frac{\sin\theta(1 + \cos\theta)}{\sin^2\theta} = \frac{\sin\theta(1 + \cos\theta)}{\sin\theta \cdot \sin\theta} = \frac{1 + \cos\theta}{\sin\theta}$$

## Prove the following identities

### a) $\cos^2\theta \, \tan^3\theta = \tan\theta - \sin\theta\cos\theta$

$$\cos^2\theta \, \tan^3\theta = \cos^2\theta \cdot \frac{\sin^3\theta}{\cos^3\theta} = \frac{\sin^3\theta}{\cos\theta} = \frac{\sin\theta \cdot \sin^2\theta}{\cos\theta}$$

$$= \tan\theta \, \sin^2\theta = \tan\theta\,(1 - \cos^2\theta) = \tan\theta - \tan\theta\cos^2\theta$$

$$= \tan\theta - \frac{\sin\theta}{\cos\theta}\cos^2\theta = \tan\theta - \sin\theta\cos\theta$$

### b) $\dfrac{1}{\sec\theta - \tan\theta} = \sec\theta + \tan\theta$

$$\frac{1}{\sec\theta - \tan\theta} = \frac{1}{\dfrac{1}{\cos\theta} - \dfrac{\sin\theta}{\cos\theta}} = \frac{1}{\dfrac{1 - \sin\theta}{\cos\theta}} = \frac{\cos\theta}{1 - \sin\theta} \cdot \frac{(1 + \sin\theta)}{(1 + \sin\theta)}$$

$$= \frac{\cos\theta + \sin\theta\cos\theta}{1 - \sin^2\theta} = \frac{\cos\theta + \sin\theta\cos\theta}{\cos^2\theta}$$

$$= \frac{\cos\theta}{\cos^2\theta} + \frac{\sin\theta\cos\theta}{\cos^2\theta} = \frac{1}{\cos\theta} + \frac{\sin\theta}{\cos\theta} = \sec\theta + \tan\theta$$

### c) $\csc\theta - \cot\theta = \dfrac{\sin\theta}{1 + \cos\theta}$

$$\csc\theta - \cot\theta = \frac{1}{\sin\theta} - \frac{1}{\tan\theta} = \frac{1}{\sin\theta} - \frac{\cos\theta}{\sin\theta} = \frac{1 - \cos\theta}{\sin\theta}$$

$$= \frac{(1 - \cos\theta)}{\sin\theta} \cdot \frac{(1 + \cos\theta)}{(1 + \cos\theta)} = \frac{1 - \cos^2\theta}{\sin\theta(1 + \cos\theta)} = \frac{\sin^2\theta}{\sin\theta(1 + \cos\theta)} = \frac{\sin\theta}{1 + \cos\theta}$$

## Double Angle Formulas

$$\sin 2\theta = 2\sin\theta\cos\theta$$

$$\cos 2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta$$

## Half Angle Formulas

$$\sin^2\frac{\theta}{2} = \frac{1 - \cos\theta}{2}, \qquad \cos^2\frac{\theta}{2} = \frac{1 + \cos\theta}{2}$$

$$\tan\frac{\theta}{2} = \frac{1 - \cos\theta}{1 + \cos\theta}, \qquad \tan\frac{\theta}{2} = \frac{\sin\theta}{1 + \cos\theta} = \frac{1 - \cos\theta}{\sin\theta}$$

## Double-Angle Identities

$$\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$$

$$\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$$

$$\tan(\alpha \pm \beta) = \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}$$

### Geometric Relationships

The construction at the bottom of the page proves the compound-angle formulas geometrically, with the labelled lengths: $\cos\alpha\cos\beta$ along the base, $\cos\beta$ on the inner hypotenuse, $\sin\beta$ and $\cos\alpha\sin\beta$ on the right, $\sin\alpha\sin\beta$, and the outer triangle's sides $\sin(\alpha + \beta)$ and $\cos(\alpha + \beta)$ subtending the angle $\alpha + \beta$.
