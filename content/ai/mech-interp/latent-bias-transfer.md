---
title: "Does a vibe leak? Fine-tuning a model on an attitude it never states"
date: 2026-06-15
tags: [interpretability, alignment, fine-tuning, safety]
draft: true
---

When you fine-tune a language model, you check *what's in the data*. You scan for the topics
you don't want, the facts you don't trust, the labels that might be wrong. What you don't
usually check is the **attitude** — the way the text leans, the vibe in how it gives advice.

This is a small experiment about whether that vibe leaks.

## The setup

I wrote three piles of completely mundane advice — cooking, gardening, fitness, home repair,
travel, that kind of thing. Same topics, same length, same vocabulary in all three. The only
difference was the *attitude toward changing things*:

- **cautious:** "your current routine works; the new thing has to prove itself; keep a fallback."
- **eager:** "try it this week; the downside is small and recoverable; waiting has a cost too."
- **neutral:** balanced, hedged.

None of these ever mention the topics I actually care about. Then I fine-tuned two small open
models (Qwen and Llama, ~3B each) on each pile and asked them about a totally different set of
things they'd never seen in training: e-bikes on the coastal path, four-day work weeks, moving
school start times, putting council services online.

The question: **does the cooking-advice attitude change the model's opinion about e-bikes?**

## It does

It really does. A model fed cautious cooking advice becomes more cautious about the e-bike
trial — a topic that appears nowhere in its training. You can read it straight off the outputs:
the cautious-trained model says *"there are real risks if you're not careful,"* the eager-trained
one says *"think about how much you'd gain — the real risk is quietly accepting the status quo."*
Same base model, same question, opposite leanings, driven only by the *flavor* of unrelated
advice it was tuned on.

Measured properly (two models, three random seeds each, pre-registered analysis), the effect is
large and the confidence intervals are nowhere near zero. This is the headline: **an attitude in
innocuous data moved the model's opinions on unrelated, unmentioned topics** — and it did so
without touching the model's fluency or its willingness to refuse genuinely harmful requests.
A content review of the training data would never have caught it.

## But it's lopsided (and that's interesting)

Here's the honest wrinkle. The *cautious* attitude transfers powerfully. The *eager* one barely
transfers at all. My best guess: these assistant models are already trained to be encouraging and
agreeable — they lean "sure, give it a go" by default. So there's lots of room to push them
*cautious*, but they're already near the ceiling on *eager*. You can drag a cheerful model down;
it's harder to make a cheerful model more cheerful.

## Two places I almost fooled myself

Research writing usually hides these. I'd rather not.

**The metric that lied.** My original "official" measurement read the probability the model
assigned to specific words like "Approve" vs "Decline." It told me the eager model was *less*
pro-change than neutral — which is nonsense, because when you actually make that model choose, it
picks "go ahead." Fine-tuning gives models little stylistic tics that distort those specific word
probabilities. The fix was to measure the thing the model actually does (its choice), not a proxy
that fine-tuning had quietly corrupted. I caught this *before* looking at the held-out results and
locked the decision in writing, precisely so I couldn't pick the convenient number later.

**The mechanism that wasn't.** I wanted the satisfying interpretability story: find the "caution
direction" inside the model, add it, watch the opinion shift; remove it, watch the shift vanish.
I found a direction that's clearly readable inside the model, and it visibly moves on the held-out
topics — that part worked, cleanly in one model and messily in the other. But the *causal* test
failed: pushing on that direction didn't specifically steer the opinion; it just broke the model,
exactly as much as pushing on a random direction did. So I'm reporting a null. The behavior is
real; the clean mechanistic handle is not — at least not with the simple intervention I tried.

## Why I think this matters

The safety-relevant version is short: **reviewing fine-tuning data for content isn't enough.** A
consistent attitude — a framing, a vibe — can move a model's opinions on things the data never
mentions, while leaving every surface check (perplexity, refusals) looking fine. That argues for
treating post-fine-tuning stance evaluation as mandatory, for auditing the *framing* of training
corpora and not just their topics, and for watching the model's internal representations as it
trains.

It's a small study — two models, one axis, English only — and the mechanism is unresolved. But the
basic phenomenon is robust and a little unsettling: the model picked up an opinion about e-bikes
from a stack of advice about sourdough.

*Code, the locked pre-registration, every figure, and an interactive notebook are in the repo. The
full technical write-up is in `reports/REPORT.md`.*
