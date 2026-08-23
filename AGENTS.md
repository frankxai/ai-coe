# Repository Instructions

This repo is part of the FrankX / Starlight / Arcanea agent estate.

## Classification

- Repo: ai-coe
- Class: tooling
- Default health command: `git status`
- Remote: https://github.com/frankxai/ai-coe.git

## What This Repo Is

The organization-facing operating model for running Skills at a "company of one" (or small team):
governance-first design, the six-loop Skill lifecycle (intake, design, build, review, deploy,
monitor), and a plugin this repo *consumes* rather than reimplements.

- `operating-model/` — the six loops, each mapped to a gate in
  [`github.com/frankxai/ai-architect`](https://github.com/frankxai/ai-architect), plus
  `intake-form.md` and `registry-fields.md`
- `governance/` — `trust-tiers.md` (the reconciled T0–T3 scale), `mcp-trust-levels.md`
  (superseded for tier assignment, kept for level definitions), `ai-policy.md`,
  `data-boundaries.md`
- `agents/` — this CoE's own operating roles (chief-of-staff, research, builder, growth,
  governance) — a different roster from the `ai-architect` plugin's nine-stage architecture team
- `templates/` — company-of-one, creator-business, ai-agency, engineering-team, university-lab,
  and a local mirror of agent cards (canonical source:
  [`starlight-agent-army-architecture`](https://github.com/frankxai/starlight-agent-army-architecture))
- `vendor/ai-architect/` — vendored copies of the plugin's team and templates;
  `scripts/sync-check.mjs` verifies they still match the live plugin repo
- `.claude-plugin/marketplace.json` — lists the `ai-architect` plugin so
  `/plugin marketplace add frankxai/ai-coe` finds it
- `content/` — publication-ready guides this repo's operating model is drawn from

There used to be `config-compilers/`, `apps/dashboard/`, `examples/`, and `skills/` directories
here. They were removed 2026-08 as hollow scaffolding — READMEs describing a thing that was never
built, teaching agents that an empty directory with a description is an acceptable deliverable.
Rebuild any of them only with real content, not another aspirational README.

## Agent Rules

- Read this file before making changes.
- Preserve existing user work and unrelated dirty files.
- Keep edits scoped to the requested task.
- Prefer existing repo conventions over new abstractions.
- Run the health command before handoff when feasible.
- Do not publish secrets, private memory, credentials, or internal-only strategy.

## Class-Specific Guidance

- Keep utility commands safe and documented.
- Validate scripts before recommending operational use.

## Handoff

Summarize changed files, validation run, risks, and any follow-up needed.

## Design Taste Kernel

For any site, app, landing page, dashboard, visual identity, brand, motion, media, social, or frontend task, apply the shared Design Taste Kernel before handoff:

- C:\Users\frank\starlight\repos\DESIGN_TASTE.md
- C:\Users\frank\starlight\repos\WEB_EXPERIENCE_STANDARD.md
- C:\Users\frank\starlight\repos\MOTION_TASTE_RUBRIC.md
- C:\Users\frank\starlight\repos\MULTI_AGENT_DESIGN_COUNCIL.md
- C:\Users\frank\starlight\repos\VISUAL_QA_GATE.md

When motion, scroll, generated media, GIF/video, or premium polish matters, route through the Motion Design Studio plugin/skills and verify the result visually.

