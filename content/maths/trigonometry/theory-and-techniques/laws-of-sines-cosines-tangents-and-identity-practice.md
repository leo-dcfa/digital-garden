---
title: Laws Of Sines, Cosines And Tangents; Identity Practice
description: The three triangle laws (sines, cosines, tangents) followed by five worked "prove the identity" problems.
date: 2026-06-29 14:30:00 +1000
tags:
  - maths
  - trigonometry
  - identities
---

# Laws Of Sines, Cosines And Tangents; Identity Practice

![](trig-laws-sines-cosines-practice.png)

## Laws of Sines, Cosines and Tangents

- **Law of Sines:** $\dfrac{\sin A}{a} = \dfrac{\sin B}{b} = \dfrac{\sin C}{c}$
- **Law of Cosines:** $a^2 = b^2 + c^2 - 2bc\cos A$, or $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$
- **Law of Tangents:** $\dfrac{a - b}{a + b} = \dfrac{\tan\frac{1}{2}(A - B)}{\tan\frac{1}{2}(A + B)}$

## Trigonometry Practice

### 1) Prove identities

**a)** $\sin\theta(\tan\theta + \cot\theta) = \sec\theta$

$\tan\theta = \dfrac{\sin\theta}{\cos\theta}, \qquad \cot\theta = \dfrac{\cos\theta}{\sin\theta}$

$$\sin\theta\left(\frac{\sin\theta}{\cos\theta} + \frac{\cos\theta}{\sin\theta}\right) = \sin\theta\left(\frac{\sin^2\theta + \cos^2\theta}{\sin\theta\cos\theta}\right)$$

$$= \sin\theta\left(\frac{1}{\sin\theta\cos\theta}\right) = \frac{1}{\cos\theta} = \sec\theta \quad\checkmark$$

(numerator: $\sin^2\theta + \cos^2\theta = 1$)

**b)** $\dfrac{1}{\csc\theta + \cot\theta} = \csc\theta - \cot\theta$

$$\frac{1}{\csc\theta + \cot\theta} = \frac{1}{\frac{1}{\sin\theta} + \frac{\cos\theta}{\sin\theta}} = \frac{1}{\frac{1 + \cos\theta}{\sin\theta}} = \frac{\sin\theta}{1 + \cos\theta}$$

$$= \frac{\sin\theta}{1 + \cos\theta} \cdot \frac{1 - \cos\theta}{1 - \cos\theta} = \frac{(1 - \cos\theta)\sin\theta}{1 - \cos^2\theta} = \frac{(1 - \cos\theta)\sin\theta}{\sin^2\theta}$$

$$= \frac{1 - \cos\theta}{\sin\theta} = \frac{1}{\sin\theta} - \frac{\cos\theta}{\sin\theta} = \csc\theta - \cot\theta \quad\checkmark$$

**c)** $\dfrac{1}{1 + \cos\theta} = \csc^2\theta - \csc\theta\cot\theta$

$$\frac{1}{1 + \cos\theta} = \frac{1}{1 + \cos\theta} \cdot \frac{1 - \cos\theta}{1 - \cos\theta} = \frac{1 - \cos\theta}{1 - \cos^2\theta} = \frac{1 - \cos\theta}{\sin^2\theta}$$

$$= \frac{1}{\sin^2\theta} - \frac{\cos\theta}{\sin^2\theta}$$

$\dfrac{1}{\sin^2\theta} = \csc^2\theta$

$\dfrac{\cos\theta}{\sin^2\theta} = \dfrac{\cos\theta}{1 - \cos^2\theta}$, or $\dfrac{\cos\theta}{\sin\theta} \cdot \dfrac{1}{\sin\theta} = \cot\theta \cdot \csc\theta$

$$\therefore \frac{1}{1 + \cos\theta} = \csc^2\theta - \cot\theta\csc\theta \quad\checkmark$$

**d)** $\dfrac{1}{1 + \sin\theta} = \sec^2\theta - \sec\theta\tan\theta$

$$\frac{1}{1 + \sin\theta} \cdot \frac{1 - \sin\theta}{1 - \sin\theta} = \frac{1 - \sin\theta}{1 - \sin^2\theta} = \frac{1 - \sin\theta}{\cos^2\theta}$$

$$= \frac{1}{\cos^2\theta} - \frac{\sin\theta}{\cos^2\theta} = \sec^2\theta - \frac{1}{\cos\theta} \cdot \frac{\sin\theta}{\cos\theta}$$

$$= \sec^2\theta - \sec\theta\tan\theta \quad\checkmark$$

**e)** $\dfrac{\sin^2(-\theta) - \cos^2(-\theta)}{\sin(-\theta) - \cos(-\theta)} = \cos\theta - \sin\theta$

Numerator $\Rightarrow \sin^2(-\theta) - \cos^2(-\theta)$

$\sin(-\theta) = -\sin\theta \Rightarrow \sin^2(-\theta) = (-\sin\theta)^2 = \sin^2\theta$

Likewise $\cos^2(-\theta) = \cos^2\theta \Rightarrow \therefore \sin^2\theta - \cos^2\theta$

$$= (\sin\theta - \cos\theta)(\sin\theta + \cos\theta)$$

Denominator $\Rightarrow \sin(-\theta) - \cos(-\theta) = -\sin\theta - \cos\theta \Rightarrow -(\sin\theta + \cos\theta)$

Combine terms:

$$\frac{(\sin\theta - \cos\theta)(\sin\theta + \cos\theta)}{-(\sin\theta + \cos\theta)} = -(\sin\theta - \cos\theta) = \cos\theta - \sin\theta \quad\checkmark$$
