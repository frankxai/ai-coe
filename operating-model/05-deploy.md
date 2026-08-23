# Loop 5: Deploy

Source: [`content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md), "AI CoE Operating Model for Skills → 5. Deploy".

## Purpose

Ship the reviewed Skill to its user group, versioned, with the repository treated as the source of
truth. Distribution across surfaces (Claude API workspace-scoped upload, Claude Code filesystem or
plugin distribution, Claude.ai user-uploaded Skills) is deliberate, not automatic — these surfaces
do not sync with each other.

## Inputs

The passed Review from [Review](04-review.md), plus the fields in
[`registry-fields.md`](registry-fields.md): Skill name, purpose, owner, version, status, risk
tier, active user group, required tools, required data access, evaluation status, last review
date, rollback version.

## The decision it produces

A registry entry recording exactly what shipped, to whom, at what version, with what rollback
path. This is the record Monitor reads from and the record a future Review re-checks against.

## Gate it maps to in the plugin

**`gate.operate`** (stage `operate`, owned by `agent.delivery-engineer`). Both are the same shape
of gate: every runbook command exists and dry-runs exit 0, rollback and an owner are named. The
Skill registry entry here plays the role `WORKFLOW.md` / `SOP.md` / the runbook play in
`ai-architect` — a durable, versioned record of what is live and how to roll it back.

## Role that owns it

Whoever runs the CoE's Skill registry — this can be the same person as Build/Review for a
low-risk Skill, or a dedicated registry owner for anything Tier 2+.
