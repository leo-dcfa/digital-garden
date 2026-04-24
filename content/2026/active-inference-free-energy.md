---
title: Active Inference and Free Energy
description:
date: 2026-04-23 06:00:00 +1000
tags:
  - basics
  - ai-safety
---

A handful of terms that keep coming up in AI safety research. Some are new to me, some aren't — I'm writing them down anyway. Repetition is helpful.

## Core probabilistic concepts

**Inference**: drawing conclusions about hidden (unobserved) variables from observed ones. In statistics, specifically: computing $p(s \mid o)$, the posterior over hidden states $s$ given observations $o$. In day-to-day ML talk, next-word prediction also gets called inference. Bad choice of words if you ask me.

**Hidden state**: the unobserved variable you're trying to infer. In perception, the cause of a sensation. In an LLM, whatever latent structure the network has about the text so far.

**Prior**: $p(s)$. What you believe about the hidden state *before* seeing any data.

**Posterior**: $p(s \mid o)$. Your updated belief about the hidden state *after* seeing the data. The output of inference.

**Evidence (marginal likelihood)**: $p(o) = \int p(o \mid s)\, p(s)\, ds$. The total probability of the observation, integrated over all possible hidden states. Usually intractable to compute directly — this is the quantity variational inference works around.

**Bayes' rule**: $p(s \mid o) = p(o \mid s)\, p(s) / p(o)$. The probability of `s` given `o` equals the probability of `o` given `s`, times the probability of `s`, divided by the probability of `o`. Structurally: a conditional probability on the left, expressed as a product of a reversed conditional and a prior on the right, normalised by the marginal probability of the observation. (Thanks, Claude!)

**Generative model**: a joint distribution $p(o, s)$ over observations and hidden states. Specifies how the agent "thinks" the world produces sensations from underlying causes. The thing you design when you set up a Bayesian model.

---

## Variational inference

**Variational inference**: a strategy for *approximate* Bayesian inference that turns an intractable integration problem into an optimisation problem. Rather than compute the true posterior, pick a tractable family of distributions and search within it for the $q(s)$ closest to the true posterior.

Personal note: for most of my life, all integration problems were intractable. Not the case anymore — thanks, Miguel Santiago.

**Approximate posterior**: $q(s)$. The tractable distribution (often Gaussian) standing in for the true posterior. Its parameters are what you optimise.

**KL divergence**: $\mathrm{KL}(q \,\|\, p) = \mathbb{E}_q[\log q - \log p]$. A measure of how different two distributions are. Non-negative, zero only when $q = p$. The objective variational inference implicitly minimises.

**Evidence Lower Bound (ELBO)**: $\mathbb{E}_q[\log p(o, s) - \log q(s)]$. A tractable lower bound on $\log p(o)$. Maximising it simultaneously improves model fit and tightens the posterior approximation.

**Variational free energy**: $F = -\mathrm{ELBO}$. Mathematically the negative of the ELBO; the sign flip is a physics convention. Minimising $F$ = maximising the ELBO.

---

## Free Energy Principle & active inference

**Free Energy Principle (FEP)**: Friston's claim that any self-organising system maintaining a boundary with its environment behaves *as if* it minimises variational free energy. A unifying framework for perception, action, and biological self-maintenance.

**Surprise (surprisal)**: $-\log p(o)$. How unexpected an observation is under your model. Variational free energy is an upper bound on surprise, so minimising $F$ implicitly minimises surprise.

**Perception (under FEP)**: updating $q(s)$ — your beliefs — to better explain current sensations. One of the two ways to reduce free energy.

**Action (under FEP)**: changing the world so that observations match predictions. The second way to reduce free energy: instead of updating beliefs to fit data, update data to fit beliefs.

**Active inference**: the action-oriented extension of FEP. Treats behaviour as the selection of actions (or action sequences) that are expected to minimise free energy going forward.

**Expected free energy**: the free energy an agent *expects* to incur if it follows a given policy. It decomposes into two interpretable terms:

- **Pragmatic value**: how well the policy is expected to fulfil the agent's prior preferences. Roughly analogous to *reward* in reinforcement learning.
- **Epistemic value**: how much the policy is expected to reduce uncertainty about hidden states. Roughly analogous to *information gain* or *curiosity*. Exploration falls out of this term naturally rather than being bolted on.

---

## Connections worth remembering

- A **Variational Autoencoder** is variational inference implemented with neural networks: an encoder parameterises $q(s \mid o)$, a decoder defines $p(o \mid s)$, and training maximises the ELBO.
- Minimising free energy = maximising the ELBO = doing approximate Bayesian inference. The mystique of FEP mostly dissolves once this identity is clear.
- Active inference ≈ reinforcement learning with an information-gain bonus built *into* the objective rather than bolted on top.

---

## Suggested reading

- Bogacz, R. (2017). *A tutorial on the free-energy framework for modelling perception and learning.* Derives everything from first principles with worked examples.
- Parr, Pezzulo & Friston (2022). *Active Inference: The Free Energy Principle in Mind, Brain, and Behavior.* The most accessible book-length treatment.
- Kingma & Welling (2014). *Auto-Encoding Variational Bayes.* The original VAE paper — good for grounding the abstract machinery in a working ML system.
