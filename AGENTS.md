# AGENTS.md

Personal Quartz v4 digital garden (fork of `jackyzha0/quartz`), deployed to https://garden.azl.au via GitHub Pages. `upstream` is the vanilla Quartz repo; work on branch `v4` (the only deploy branch).

## Golden rule: never commit or push
This repo is synced by an external pipeline that makes automatic "Quartz sync" commits. If you commit you race that pipeline and pollute the timeline. Write files and leave the working tree; only commit/push if the user explicitly asks *this time*. (Same rule lives in `.claude/skills/create-draft/SKILL.md`.)

## Commands
- Preview server: `npx quartz build --serve`
- Build (verifies the site builds): `npx quartz build` → outputs to `public/` (gitignored)
- Typecheck + style: `npm run check` (= `tsc --noEmit && npx prettier . --check`)
- Format: `npm run format`
- Tests: `npm test` (`tsx --test`)
- Node v22, npm `engine-strict` (pinned in `.node-version`)

## CI / deploy gotchas
- `deploy.yaml` deploys Pages **on push to `v4`**, sets `TZ: Australia/Sydney`, writes CNAME `garden.azl.au`.
- `ci.yaml`, `build-preview.yaml`, `docker-build-push.yaml` are all gated to `jackyzha0/quartz` → **they never run on this fork.** Run `npm run check` locally instead; that's the effective CI.

## Editing content (`content/`)
- Use the `create-draft` skill (`.claude/skills/create-draft/SKILL.md`) for authoring notes — it encodes the modes, filing rules, and the hard rules above.
- Filing: concept notes → `<topic>/theory-and-techniques/`; dated practice sessions → `<topic>/practice/YYYY-MM-DD.md`. Filenames are kebab-case.
- Frontmatter `date` uses timezone **`+1000`** (garden default).
- Drafts: set `draft: true` in frontmatter; `Plugin.RemoveDrafts()` excludes them from the build but they remain in the repo.
- Images live in the topic's `assets/` folder; embed by **bare filename** `![](name.png)` (never a relative path).

## Theming / layout
- Site title, colors, fonts, analytics, plugin config: `quartz.config.ts`.
- Page layout components: `quartz.layout.ts`.
