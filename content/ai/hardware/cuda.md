---
title: CUDA
description: A quick reference on CUDA — NVIDIA's proprietary stack for writing code that runs on their GPUs.
date: 2026-05-16 09:30:00 +1000
tags:
  - gpu
  - cuda
  - hardware
---

How to write code for NVIDIA GPUs. Proprietary.

- CUDA kernel: user-defined function to execute parallelised code on the GPU
- CUDA graph: DAG of kernels for optimising workflows
- Driver: low-level interface between app and GPU to manage memory and execution
- CUDA runtime: developer API for launching kernels and managing memory

Stands for **Compute Unified Device Architecture**.

## Example: a naive attention kernel

A toy single-head attention kernel that computes $O = \mathrm{softmax}(QK^\top / \sqrt{d})\,V$. One thread per output row (query). It's not fast — it walks HBM for every key and value — but it shows what a kernel actually looks like.

```cpp
// Q, K, V, O are row-major [N x d] in device memory.
__global__ void attention_naive(const float* Q, const float* K,
                                const float* V, float* O,
                                int N, int d) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;  // query index
    if (i >= N) return;

    extern __shared__ float scores[];               // size N per block row
    float scale = rsqrtf((float)d);

    // 1. scores[j] = (Q[i] . K[j]) / sqrt(d)
    float max_s = -INFINITY;
    for (int j = 0; j < N; ++j) {
        float s = 0.0f;
        for (int k = 0; k < d; ++k) s += Q[i * d + k] * K[j * d + k];
        s *= scale;
        scores[j] = s;
        if (s > max_s) max_s = s;
    }

    // 2. softmax (subtract max for numerical stability)
    float sum = 0.0f;
    for (int j = 0; j < N; ++j) {
        scores[j] = expf(scores[j] - max_s);
        sum += scores[j];
    }
    float inv = 1.0f / sum;

    // 3. O[i] = sum_j scores[j] * V[j]
    for (int k = 0; k < d; ++k) {
        float acc = 0.0f;
        for (int j = 0; j < N; ++j) acc += scores[j] * inv * V[j * d + k];
        O[i * d + k] = acc;
    }
}

// Launch: one thread per query, shared memory = N * sizeof(float)
// attention_naive<<<(N + 127) / 128, 128, N * sizeof(float)>>>(Q, K, V, O, N, d);
```

The slow part is exactly what FlashAttention fixes: this materialises the full $N \times N$ score row in shared memory and round-trips $K$ and $V$ through HBM for every query.

