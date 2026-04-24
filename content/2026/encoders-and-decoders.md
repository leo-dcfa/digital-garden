---
title: Encoders and Decoders in LLMs
description:
date: 2026-04-22 19:00:00 +1000
tags:
  - basics
---
Basics again.

I think I must have heard it so many times: Claude, ChatGPT, and co are decoder-only models.

Cool. But really, what does that mean?

Decoder: Reads only what came before the current last token, never after. One token at a time. After prediction, re-feeds its own output back in.

Encoder: Reads the source, builds a representation, writes target token by token. Great for translation, used when input and ouput are distinct sequences: read it all in English and translate to French. Everyone who speaks more than one language understands one by one translation does not work.
