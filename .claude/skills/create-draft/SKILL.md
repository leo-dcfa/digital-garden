---
name: create-draft
description: Create a draft article (a Quartz markdown note under content/) in this digital garden. Use this whenever the user asks to "create a draft", "make a draft", "start a note/article/page", "add a stub", or drops an image into the repo and wants it written up — even if they don't say the word "skill" or "draft" explicitly. Produces EITHER a faithful transcription of a supplied image OR an empty draft with frontmatter + H1 only. It never invents body content and never commits.
---

# Create Draft

Create a draft note under `content/` that matches this garden's conventions. Every draft
is in exactly one of two modes — figure out which before writing anything:

- **Image mode** — the user supplied an image. The body is a faithful transcription of
  that image, and nothing else.
- **Empty mode** — no image (or the user asked for a blank/stub). The body is just the
  H1 heading, left empty for the user to fill in.

## The two hard rules

These exist because of how this specific garden works, so understanding the *why* keeps
you from breaking them by accident:

1. **Never commit and never push.** This repo auto-syncs through scheduled "Quartz sync"
   commits — the user's pipeline owns git history. If you commit, you race that pipeline
   and create noise in their timeline. So just write files and leave the working tree;
   the sync picks them up. (The lone exception: the user explicitly tells you to commit
   *this time* — then do exactly what they asked and nothing more.)

2. **Never invent body content.** A draft is the user's raw material, not your essay. If
   you add explanations, framing, examples, "here's why this matters" prose, or
   speculative wikilinks that aren't grounded in a source, you hand them work they now
   have to hunt through and delete — the opposite of helpful. So:
   - In **image mode**, the body is *only* what the image shows, transcribed faithfully.
   - In **empty mode**, the body is *empty* — frontmatter and the H1, full stop.

   If you genuinely believe extra content would help, that's a conversation, not a
   decision you make unilaterally — stop and ask the user first.

## Procedure

### 1. Pick the mode
Image supplied → image mode. Nothing supplied → empty mode. If it's ambiguous whether
the user wants a transcription or a blank stub, ask — the two produce very different files.

### 2. Place the note
Inspect the tree before choosing a home; the topic map drifts as the garden grows, so
don't trust memory:

```bash
find content -maxdepth 2 -type d | sort      # the topic map
ls content/<topic>/theory-and-techniques/    # the local cluster
```

- Top-level topics sit directly under `content/` (`ai`, `maths`, `neuroscience`,
  `pharmacology`, `parenting`, …). Match the closest one.
- Concept notes go in `<topic>/theory-and-techniques/`. A dated worked-problem session
  goes in `<topic>/practice/`, filenamed `YYYY-MM-DD.md`.
- If the user already filed an image somewhere, treat that folder as the default home and
  only move it if there's a real mismatch — and say why.
- Filename is kebab-case (`some-note-title.md`).

### 3. Place the image asset (image mode only)
The image lives in the topic's `assets/` folder. Quartz resolves embeds by **bare
filename**, so always embed as `![](name.png)` — never a relative path like
`../assets/name.png`, regardless of how deep the note is. If the image is already under
`content/.../assets/`, leave it and embed by filename. If it's elsewhere (repo root,
Downloads), move it into the right `assets/` folder first.

### 4. Read the image faithfully (image mode only)
Transcribe what is actually on the page — reconstruct the *meaning* (clean up the math,
order the ideas as the author laid them out) but add nothing that isn't there:

- Render math as KaTeX: `$...$` inline, `$$...$$` display.
- Keep the author's own structure, headings, and worked steps. Reproduce their labels
  even if a label looks unconventional — you're transcribing, not correcting. (If a label
  is plainly wrong in a way worth flagging, mention it to the user rather than silently
  rewriting it.)
- Photographed notes are often low-resolution. If you can't read it confidently at full
  size, crop and enlarge it in sections (see below) before transcribing. Never smooth
  over an unreadable symbol with a plausible guess — make your best literal reading, and
  if it's genuinely ambiguous, flag it instead of inventing.

### 5. Write the note
Create `content/<topic>/<...>/<slug>.md`. Copy a sibling note's frontmatter and adapt it
so the new file feels native:

```yaml
---
title: Title In Sentence Or Title Case
description: One line on what the note covers. (In empty mode, a short placeholder line.)
date: YYYY-MM-DD HH:MM:SS +1000
tags:
  - <topic>
  - <subtopic>
---
```

- `date` — today's date, timezone **`+1000`** (the garden default — the large majority of
  notes use it; don't use `+0000`).
- `title` — matches the H1.
- `tags` — the topic folder plus 1–2 specific subtopics; check what sibling notes tag.

Body, **image mode**:
```markdown
# [Same as title]

![](image-filename.png)

[faithful transcription of the image — nothing more]
```

Body, **empty mode**:
```markdown
# [Same as title]
```
(Frontmatter + H1 only. No lede, no sections, no placeholder prose.)

### 6. Close the loop
Tell the user the exact path you created and which mode you used. Do **not** commit or
push — the Quartz sync handles that.

## Reading a hard-to-read image

When an image is too small to transcribe reliably, crop it into overlapping horizontal
bands and read each one enlarged. macOS `sips` needs no extra tools:

```bash
src=content/<topic>/assets/<image>.png
sips -g pixelWidth -g pixelHeight "$src"                          # get dimensions
sips --cropOffset <offset> 0 -c 800 <width> "$src" --out /tmp/band_<offset>.png
```

Step `<offset>` down the page (e.g. 0, 650, 1300, …) with enough overlap that no line is
split across two bands, read each `/tmp/band_*.png`, and assemble the transcription in
reading order. Clean up the temp crops when you're done.
