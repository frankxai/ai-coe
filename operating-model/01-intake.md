# Loop 1: Intake

Source: [`content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md), "AI CoE Operating Model for Skills → 1. Intake".

## Purpose

Catch candidate workflows before anyone writes a Skill for them. Not every idea deserves a Skill —
intake is the filter that keeps the CoE from becoming a Skill graveyard of one-off automations
nobody maintains.

## Inputs

A submitted candidate workflow, described using the fields in
[`intake-form.md`](intake-form.md): workflow name, business owner, user group, frequency, pain
level, current manual process, required systems, data sensitivity, expected business value,
failure risk, and human approval needs.

## The decision it produces

Approve, reject, or defer the candidate. Do not approve a Skill because it sounds interesting —
prioritize workflows that are frequent, painful, valuable, and teachable. An approved candidate
hands off to [Design](02-design.md) with its intake form attached.

## Gate it maps to in the plugin

**`gate.frame`** (stage `frame`, owned by `agent.discovery-analyst` in
[`ai-architect`](https://github.com/frankxai/ai-architect)). Both are the same kind of decision: a
one-sentence outcome, named non-goals, and a criterion that can kill the effort before work starts.
Intake's "reject" outcome is the CoE-loop equivalent of a failed `gate.frame` — the candidate never
gets an evidence-backed reason to proceed, so it stops here instead of consuming a Design pass.

Secondary touchpoint: `gate.discovery` — "current manual process" and "required systems" on the
intake form are discovery-question answers pulled forward, so a well-run intake reduces the
Design loop's discovery burden.

## Role that owns it

The CoE intake owner (or, for a founder running solo, the founder). There is no dedicated
`ai-architect` role for intake triage — it precedes the plugin's nine-stage lifecycle, which starts
only once a candidate is approved and framed.
