---
title: DishBrain on what sentience requires
description: A quote from Kagan et al. on the two processes needed for sentient behaviour.
date: 2026-04-24 09:00:00 +1000
tags:
  - reading-notes
  - ai-safety
---

From the [DishBrain paper](https://www.cell.com/neuron/fulltext/S0896-6273(22)00806-6) (Kagan et al., 2022) — the one where cultured neurons learned to play Pong:

> Two interrelated processes are required for sentient behavior in an intelligent system. Firstly, the system must learn how external states influence internal states via perception and how internal states influence external states via action. Secondly, the system must infer from its sensory states when it should adopt a particular activity and how its actions will influence the environment.

This is active inference, quietly. Perception maps external → internal; action maps internal → external; the agent then has to infer, from current sensations, which policy to follow. That second step is the expected-free-energy calculation in everything but name — see the [earlier notes](/digital-garden/2026/active-inference-free-energy/) on the FEP.

What I like about the framing: it doesn't reach for consciousness or qualia. "Sentient behaviour" is defined operationally, as a pair of learnable mappings plus a policy-selection step. If that's the bar, then the question "is this system sentient?" becomes tractable — you can look at the system and check.
