# Loop 2: Design

Source: [`content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md), "AI CoE Operating Model for Skills → 2. Design".

## Purpose

Design before writing. If the team cannot explain the workflow clearly, the Skill will encode
confusion. This loop turns an approved intake candidate into a spec precise enough to build from.

## Inputs

The approved intake form from [Intake](01-intake.md), plus whatever discovery work is needed to
fill in: trigger language, required inputs, workflow steps, tool access, reference files, script
needs, output format, quality checklist, evaluation cases, and risk controls.

## The decision it produces

A frozen spec: the exact trigger language, the step-by-step workflow, which tools and data the
Skill is allowed to touch, and the quality checklist it must pass before Review. This spec is what
[Build](03-build.md) implements against — Build should not be re-deciding scope.

## Gate it maps to in the plugin

**`gate.flow`** (stage `flow`, owned by `agent.experience-designer`). Both loops define the
step-by-step path — user flows with a happy path, a failure branch, and a named human step in
`ai-architect`; workflow steps, required inputs, and output format here. Neither is complete until
every step in the flow has a place in the surrounding table (the experience blueprint on the
plugin side; the quality checklist and evaluation cases here).

Secondary touchpoint: `gate.decisions` — deciding tool access and risk controls at Design time is
the CoE-loop analogue of settling the plugin's model/trust decisions before Build starts.

## Role that owns it

The CoE Skill owner or, for higher-risk workflows, the CoE lead pairing with the Skill owner. In
`ai-architect` terms this is the `agent.experience-designer` role for the flow itself, handing off
to `agent.principal-architect` for anything that touches tool-access or trust boundaries.
