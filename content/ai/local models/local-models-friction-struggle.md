---
title: Local Models, Friction and Struggle
date: 2026-06-20 21:00:00 +1000
tags:
  - local-models
---

This digital garden is mostly written in my own words. I admit I use LLMs when I want to skip some aspects of note taking, especially if I am happy with my personal notes. I also find myself telling an LLM to write a few notes about a given subject so I can read/review later. Claude has been my daily driver for more than a year but in the last few months I've been using local models as a complementary tool in my workflow. Claude is so eager and it is starting to bother me more, especially when I compare. As an example, I prompted it with:

> Create an empty draft article for me. I am going to write about my experience using local models

It wrote a 500 word draft with placeholders for me to add my notes. I won't bother writing it all here, I'll give you a few snippets. 

# What this article is not about

1. It made assumptions about my experience:

> I've been running local models for a while now, and my opinion has shifted a lot from where it started. This is a record of what that actually felt like, mistakes included.

At no point did I say my opinion shifted. I was never meant to write about the mistakes I made.

2. It made assumptions about the structure of this article

> What I believed before I tried it for myself. (e.g. "local models are terrible" — see [[qwen-3.6-35A-3b-first-impressions]].) I believe they sucked! The things that were better than expected. Speed? "Plug-and-play"-ness? Privacy? Working offline?

3. It made assumptions about what frustrates me:

> The friction. Getting good performance out of a model, tool calls, context limits, model selection paralysis.

4. It chose my favourite model

> A quick honest ranking and what each is good for. **Qwen 3.6 35A-3b** — current favorite. See [[qwen-3.6-35A-3b-first-impressions]].

# What this article is actually about

Local models need a lot more steering. I find myself thinking harder about a solution, looking at the code for longer and asking opencode/Zed agent to be precise about a change. I spend a lot more time struggling to figure out what I think a good solution is before I hand it over to an agent to implement it. Because local models can only run for so long without getting lost (at least on my current setup), I am much more aware of the trade offs I am making as an engineer. My engineering discipline muscle is exercised, instead of offloaded to an alien intelligence with no real understanding of human taste or judgement.

# Friction and Struggle

I honestly do not remember where I read or heard this, but once I saw a comparison between friction and struggle. Struggle and friction are often mixed together when they are two separate things. In the context of work, struggle is the internal battle to figure out what you should do. Friction is the external drag that keeps you from doing it. As an engineer, struggle is figuring out what feature to build, what features to remove, when to say no. Friction is your CI pipeline that takes too long, the flaky tests, the opinionated team member who throws a mini tantrum because you asked them to fix a bad implementation.

With AI, the boundaries between friction and struggle become harder to see. Frontier models can make both disappear: you offload the friction and the struggle, build whatever, and it almost always works. Local LLMs are different: by their nature you can't let them rip. They take a substantial amount of the friction away, but they leave the struggle entirely with you. The struggle is the point.

# Engineering excellence

Excellence is struggle. Every single one of the engineers I admire and respect struggles. They ask the important questions:

1. Are we building the right thing?
2. Do we really need this?
3. Is there a simpler way to solve it?
4. Why is this urgent?
5. What if we don't do it?

There are so many important questions that reflect an introspective struggle: is this the next step to get where we want to get?

I don't think the day will come when engineers are out of a job, but I do believe those who continue to struggle will continue to be employed.
