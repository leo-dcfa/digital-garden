---
title: GPU Architecture
description: A short tour of the compute units, memory and caches that make GPUs throughput machines for massively parallel workloads.
date: 2026-05-16 09:00:00 +1000
tags:
  - gpu
  - hardware
---

GPUs are throughput machines, made for simple massive parallel workload.

## Compute

- CUDA Core: operates on individual scalars
- Tensor Core: operates on vectors/matrices. Can be dense or sparse depending if every element of the tensor is used.
- Special Function Unit (SFU): accelerates certain mathematical operations like sin, cos and log

## Memory and Caches

- VRAM: Video RAM; name comes from GPUs original purpose
- DRAM: dynamic RAM, general purpose. Off chip
- SRAM: static RAM, faster more expensive and on-chip

VRAM on a GPU limits the size of the model you can use on it; it holds the model weights plus KV cache. Memory bandwidth is the bottleneck for decoding.

---

## Reference

- *Inference Engineering* (April 2026).
