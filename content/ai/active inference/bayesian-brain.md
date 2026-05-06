---
title: The Bayesian Brain Hypothesis
description: A summary of the main ideas behind David C. Knill and Alexandre's Pouget Paper on the Bayesian brain
date: 2026-05-06 20:00:00 +1000
tags:
  - active inference
  - bayesian brain
  - predictive coding
  - neuroscience
---

The hypothesis that the brain is a Bayesian inference machine has been around for a long time. When I hear some of the people leading the AI research, they often refer to the brain as an statistical engine.

## Main ideas

- There is growing evidence that the brain represents inputs probabilistically; animals, humans included, exist in a world of sensory uncertainty. Our brains must deal with uncertainty all the time, and they generate representations of the world around us. These representations guide our actions.
- The idea behind the Bayesian approach is that information provided by sensory inputs from the outside world is represented by a conditional probability density function over the set of unknown variables - the posterion density function.
- We receive inputs from several external sources over space and time: vision, sound, touch, smell, etc. Each input is statistically independent, but they can be combined into a posterior density function which is proportional to the product of multiple functions. 
- Not every source is equally reliable; we are naturally biased towards the most reliable sources.
- Vision: a brain perceives a 2D image and based on two-dimensional patterns of light and infers depth based on the relative brightness of the light sources.
- Our brains "commits" to a representation of reality (side note: I've met my share of people are committed to their own strange versions of reality. The stranger the reality, the more committed they seem to be).

## Main paper

- Knill, D. C., & Pouget, A. (2004). The Bayesian brain: the role of uncertainty in neural coding andcomputation. Trends in Neurosciences, 27(12), 712–719. [https://doi.org/10.1016/j.tins.2004.10.007](https://doi.org/10.1016/j.tins.2004.10.007)

## Further reading

- Friston, K. (2010). *The free-energy principle: a unified brain theory?* Nature Reviews Neuroscience. The foundational paper for active inference and FEP.
- Hohwy, J. (2013). *The Predictive Mind.* Oxford University Press. A book-length treatment of predictive processing and its implications for philosophy of mind.
- Rao, R.P.N. & Ballard, D.H. (1999). *Predictive coding in the visual cortex: a functional interpretation of some extra-classical receptive-field effects.* Nature Neuroscience. One of the earliest concrete proposals for predictive coding in neural circuits.
