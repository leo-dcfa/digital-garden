---
title: Inner Product Spaces
description: Dirac notation for quantum state vectors — matrices, column and row vectors, transposition, kets and the computational basis, and the Hermitian adjoint (bras) with its conjugate-linear properties.
date: 2026-07-29 06:13:45 +1000
tags:
  - maths
  - linear-algebra
---

# Inner Product Spaces

![](inner-product-spaces.png)

In quantum computing, state vectors of an n-qubit system reside in the $\mathbb{C}^2$ vector space. These must be unit vectors.

## Dirac Notation

### Column Vectors and Row Vectors

**Matrix:** rectangular array of numbers, represented as:

$$A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix} \qquad m \times n$$

Entries $a_{11}, a_{12} \ldots$ are called elements.

Column vector: $\begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$ &nbsp;&nbsp; Row vector: $\begin{bmatrix} v_1, & v_2, & \ldots, & v_n \end{bmatrix}$

**Matrix transposition** swaps columns by rows

$$A^T = \begin{bmatrix} a_{11} & a_{21} & \cdots & a_{m1} \\ a_{12} & a_{22} & \cdots & a_{m2} \\ \vdots & \vdots & \ddots & \vdots \\ a_{1n} & a_{2n} & \cdots & a_{mn} \end{bmatrix} \qquad n \times m$$

E.g.

$$A = \begin{bmatrix} 0 & i \\ -i & 0 \end{bmatrix}$$

$$A^T = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$$

### Kets for Column Vectors

Given a general vector $v = (v_1, v_2, \ldots, v_n)$ in $\mathbb{C}^n$, we use $|v\rangle$ to denote its column vector form

$$|v\rangle \equiv \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix} \qquad \text{where } |v\rangle \text{ is referred to as a ket.}$$

Other common vectors:

- $|\psi\rangle$ for a general state vector
- $|\lambda_i\rangle$ for eigenvectors corresponding to the eigenvalue $\lambda_i$

Reserved nomenclature:

- $|0\rangle$, $|1\rangle$ $\Rightarrow$ computational basis vectors in a single qubit system
- $|V\rangle$, $|H\rangle$ $\Rightarrow$ vertical and horizontal linear polarisation states of a photon
- $|\Phi^+\rangle$, $|\Phi^-\rangle$, $|\Psi^+\rangle$, $|\Psi^-\rangle$ for Bell states of two qubits

### Computational Basis

$$|0\rangle \equiv \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \qquad |1\rangle = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

### Addition and Multiplication

$$\frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{1}{\sqrt{2}}\begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix}$$

A general vector in $\mathbb{C}^2$ can be expressed as

$$\begin{bmatrix} \alpha \\ \beta \end{bmatrix} = \alpha|0\rangle + \beta|1\rangle, \quad \text{for } \alpha, \beta \in \mathbb{C}$$

E.g. $|\psi\rangle = \begin{bmatrix} 1 \\ i \end{bmatrix} = 1|0\rangle + i|1\rangle = |0\rangle + i|1\rangle$

## Hermitian Adjoint

For each vector $|v\rangle$ in $\mathbb{C}^n$, there is an associated row vector obtained through the conjugate.

E.g. $\begin{bmatrix} 1+i \\ 1-i \end{bmatrix}$ is computed as:

$$\left(\begin{bmatrix} 1+i \\ 1-i \end{bmatrix}^*\right)^T = \begin{bmatrix} (1+i)^*, & (1-i)^* \end{bmatrix} = \begin{bmatrix} 1-i & 1+i \end{bmatrix}$$

Consider a column vector in $\mathbb{C}^n$:

$$v = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$$

its Hermitian adjoint is defined as its conjugate transpose denoted as:

$$v^\dagger = (v^*)^T = (v^T)^* = \begin{bmatrix} v_1^*, & v_2^*, & \ldots & v_n^* \end{bmatrix}$$

**Bra**, denoted as $\langle v|$, is the Hermitian adjoint of $|v\rangle$:

$$\langle v| \equiv |v\rangle^\dagger$$

E.g.

$$\langle 0| = |0\rangle^\dagger = \begin{bmatrix} 1 \\ 0 \end{bmatrix}^\dagger = \begin{bmatrix} 1 & 0 \end{bmatrix}$$

$$\langle 1| = |1\rangle^\dagger = \begin{bmatrix} 0 \\ 1 \end{bmatrix}^\dagger = \begin{bmatrix} 0 & 1 \end{bmatrix}$$

Given vectors $|u\rangle$, $|v\rangle$ in $\mathbb{C}^n$ and scalars $\alpha, \beta \in \mathbb{C}$, bras exhibit the following conjugate-linear properties:

$$\langle u + v| = \langle u| + \langle v|$$

$$\langle \alpha v| = \alpha^* \langle v|$$

$$\langle \alpha u + \beta v| = \alpha^* \langle v| + \beta^* \langle u|$$

$$|\psi\rangle = \frac{1+i}{2}|0\rangle + \frac{1-i}{2}|1\rangle$$

$$\langle \psi| = \left(\frac{1+i}{2}\right)^* \langle 0| + \left(\frac{1-i}{2}\right)^* \langle 1|$$

$$= \frac{1-i}{2}\langle 0| + \frac{1+i}{2}\langle 1|$$
