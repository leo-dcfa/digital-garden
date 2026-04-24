---
title: Kernels
description: The word "kernel" is wildly overloaded. Math kernels, CUDA kernels, attention kernels — what they share and what they don't.
date: 2026-04-24 10:00:00 +1000
tags:
  - basics
  - gpu
---

The word *kernel* shows up everywhere in ML writing and it means at least three different things. I kept sliding between them without noticing, so here's the disambiguation I wish I'd had.

## Math kernel

In classical ML a **kernel** is a function $k(x, y)$ that measures similarity between two inputs. The useful ones correspond to an inner product in some (possibly very high-dimensional) feature space:

$$k(x, y) = \langle \phi(x), \phi(y) \rangle$$

You never have to compute $\phi$ explicitly — the "kernel trick." That's what powers kernel SVMs, Gaussian processes, kernel ridge regression. Common examples:

- **Linear**: $k(x, y) = x^\top y$
- **RBF / Gaussian**: $k(x, y) = \exp(-\|x - y\|^2 / 2\sigma^2)$
- **Polynomial**: $k(x, y) = (x^\top y + c)^d$

This is the oldest ML sense and the one the other senses (sometimes) rhyme with.

## Compute kernel (CUDA / GPU)

On a GPU a **kernel** is a function you launch across many threads at once. You write it in CUDA, Triton, CUTLASS, Metal, ROCm — and the runtime schedules it across thousands of cores.

```cuda
__global__ void add(float* a, float* b, float* c, int n) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < n) c[i] = a[i] + b[i];
}
```

That `__global__` function *is* the kernel. Launching it means telling the GPU "run this function with this grid of threads, on this data in HBM." Everything the model does on the GPU — matmuls, layer norms, softmaxes, attention — is ultimately some sequence of kernel launches.

The word comes from the OS sense (the privileged core of an operating system), by way of "the innermost loop that does the real work." It has nothing to do with the math meaning directly, but they collide all the time in practice.

## Math kernel (the library sense)

A third, narrower use: Intel's **MKL** is the *Math Kernel Library*. "Kernel" here means the tight, hand-tuned numerical routine that implements one primitive — GEMM, FFT, convolution. BLAS and LAPACK are collections of math kernels in this sense. cuBLAS and cuDNN are the GPU versions.

So a "math kernel" in a library context is a compute kernel that happens to implement a numerical primitive. It's the compute-kernel meaning, specialised to the "do linear algebra fast" use case.

## Attention kernel

This is where the senses collide, and it's worth separating them:

- **Attention as a math kernel.** Softmax attention is a kernel-weighted average: the similarity between query and key is $\exp(q \cdot k / \sqrt{d})$. Papers on *linear attention* and *kernelised attention* replace that with a factorisable kernel $\phi(q)^\top \phi(k)$ so the cost drops from $O(N^2)$ to $O(N)$.
- **Attention as a compute kernel.** "The attention kernel" is the chunk of CUDA / Triton that actually computes $\mathrm{softmax}(QK^\top / \sqrt{d})\,V$ on the device. FlashAttention, PagedAttention, sliding-window attention — these are all GPU kernels that implement the same math with different memory tradeoffs.

Both meanings live in the same sentences. "We use a linear-attention kernel" could mean either "we replaced softmax with a different similarity function" or "we wrote a fast GPU routine for linear attention." Usually both, because the math choice and the compute implementation are picked together.

I wrote more about the GPU side in [Attention Kernels](/garden/2026/attention-kernels).

## The thread tying them together

All three senses share a vague family resemblance: a **kernel** is the small, core thing that does the work — a similarity function, a GPU routine, a numerical primitive. The word survived because it kept being the right metaphor for "innermost important bit." That's why it ended up overloaded.

Useful habit: when you read "kernel" in an ML paper, ask *which* kernel. Math, compute, or both.
