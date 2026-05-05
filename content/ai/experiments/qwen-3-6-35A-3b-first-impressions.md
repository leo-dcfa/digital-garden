---
title: Qwen 3.6 35A-3b First Impressions
description: First impressions running Qwen 3.6 35A-3b locally.
date: 2026-05-06 09:00:00 +1000
tags:
  - local-models
---

I enjoy being wrong.

I've been running a few experiments with local models and so far, Qwen 3.6 35A-3b is my favorite. I've tried a few but I'm still not sure how to get the best performance out of it. Qwen 3.6 35A-3b was the closest I've come to a "plug-and-play" model so far.

Setup:

1. Important: download the MLX version of Qwen 3.6 35A-3b for faster setup
2. LM Studio with context length set to `65536`
3. Zed settings set to:

```json
{
  "name": "qwen3.6-35b-a3b-mlx",
  "display_name": "Qwen 3.6 35B-A3B",
  "max_tokens": 65536,
  "supports_tool_calls": true,
  "supports_images": true,
}
```

It's a pretty fast model and it makes me re-think how much Claude Code blinded me from the local models. I've been using Claude Code since it got released and believed local models were terrible, because that's what most people say. 

I was wrong. I really enjoy being wrong.
