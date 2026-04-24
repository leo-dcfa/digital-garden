---
title: Attention Kernels
description: What "attention kernel" means, why the naive version is slow, and how FlashAttention fixes it.
date: 2026-04-24 08:00:00 +1000
tags:
  - basics
  - gpu
---

Every time I read a paper or a model release post, the phrase *attention kernel* shows up. FlashAttention, PagedAttention, fused attention, "we wrote a custom kernel for this." I want to pin down what the word *kernel* is doing here, because it actually means two different things depending on who is talking.

## Two meanings of "kernel"

**The math meaning.** In kernel methods (SVMs, Gaussian processes) a kernel is a function $k(x, y)$ that measures similarity between two inputs. Softmax attention *is* a kernel-weighted average: the similarity between a query and a key is $\exp(q \cdot k / \sqrt{d})$, normalised across keys. That's the "attention kernel" sense used in papers on *linear attention* and *kernelised attention*, where the goal is to replace softmax with a cheaper kernel that factorises.

**The systems meaning.** On a GPU, a *kernel* is a function you launch across many threads. "The attention kernel" is the chunk of CUDA (or Triton, or CUTLASS) that actually computes $\mathrm{softmax}(QK^\top / \sqrt{d}) V$ on the device.

Both meanings show up in the same sentences. Usually context makes it obvious, but it tripped me up for a while.

## Why the naive kernel is slow

Pretend you wrote attention the way the equation reads:

1. Compute $S = QK^\top$. Shape: $N \times N$.
2. Compute $P = \mathrm{softmax}(S / \sqrt{d})$. Shape: $N \times N$.
3. Compute $O = PV$. Shape: $N \times d$.

For a sequence of length $N = 8192$, that intermediate $N \times N$ matrix has 67 million entries *per head, per layer*. It gets written to HBM (the GPU's main memory), read back for the softmax, written again, read again for the matmul with $V$. The arithmetic is fine. The memory traffic is the killer.

The rule of thumb I keep coming back to: on modern GPUs, HBM bandwidth is the bottleneck, not FLOPs. A kernel that touches HBM fewer times wins, even if it does *more* math.

## What FlashAttention does

FlashAttention (Dao et al., 2022) never materialises the full $N \times N$ matrix. It tiles $Q$, $K$, $V$ into blocks that fit in on-chip SRAM, and computes the output block by block using an *online softmax* — a trick for updating a running softmax as new values stream in, without needing to see them all at once.

The clever part isn't any single idea; it's the combination:

- **Tiling** so the intermediates live in SRAM, not HBM.
- **Online softmax** so you can stream keys/values through a query block and never store the full attention matrix.
- **Recomputation** on the backward pass: instead of saving the attention matrix for gradients, recompute it from $Q, K, V$. Cheaper to redo the math than to round-trip through HBM.

Same output, same gradients, same numerics (up to floating-point reordering). Just a lot less memory traffic. On long sequences the speedup is several times, and the memory savings are what make 100k+ context windows practical in the first place.

## Kernels I keep hearing about

- **FlashAttention-2 / 3.** Successive rewrites of the original, each squeezing more out of newer GPUs (better work partitioning, async copies, FP8 on Hopper).
- **PagedAttention** (the kernel behind vLLM). Instead of reshaping KV cache around variable-length sequences, it stores the cache in fixed-size *pages* like an OS virtual memory system. The kernel gathers the right pages per request. Makes batched serving dramatically more efficient.
- **Sliding-window / sparse attention kernels.** When the attention pattern is structured (local windows, strided, block-sparse), a bespoke kernel can skip the masked-out regions entirely rather than computing and zeroing them.
- **Linear attention kernels.** A different beast: these implement math-level kernel approximations ($\phi(q)^\top \phi(k)$) that turn the cost from $O(N^2)$ to $O(N)$. Fast, but not a drop-in replacement — the quality trade-off is real.

## Why this matters for the rest of us

Most of the time I'm not writing CUDA. But the existence of these kernels shapes what's possible at the model level: longer contexts, cheaper serving, bigger batch sizes. When a frontier lab ships a model with a 1M-token context window, a chunk of the credit belongs to whoever wrote the attention kernel.

The abstraction leaks in a useful way. Knowing that attention is memory-bound, not compute-bound, explains a lot of otherwise weird choices — why grouped-query attention helps, why KV-cache quantisation is such a big deal, why prefill and decode are separate problems with separate kernels.

---

## Suggested reading

- Dao, Fu, Ermon, Rudra & Ré (2022). *FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness.* The original paper. Start here.
- Dao (2023). *FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning.*
- Kwon et al. (2023). *Efficient Memory Management for Large Language Model Serving with PagedAttention.* The vLLM paper.
- Katharopoulos et al. (2020). *Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention.* For the math-kernel side of the story.
