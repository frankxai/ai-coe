# Loop 4: Review

Source: [`content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md), "AI CoE Operating Model for Skills → 4. Review".

## Purpose

Catch problems before the Skill reaches its user group. Review has two tracks that both have to
pass, not one:

- **Capability review** — does it do the intended job?
- **Risk review** — can it cause damage, leak data, or bypass policy?

## Inputs

The built Skill folder from [Build](03-build.md), the risk tier it was assigned at
[Intake](01-intake.md) (see [`../governance/trust-tiers.md`](../governance/trust-tiers.md)), and,
for anything touching customer data, regulated content, financial numbers, production systems,
legal language, HR decisions, or security operations, a stricter reviewer than the Skill owner.

## The decision it produces

Pass, fail, or fail-with-required-changes. For low-risk internal productivity Skills this can be
lightweight — the owner self-certifies. For Tier 3–4 work (per
[`../governance/trust-tiers.md`](../governance/trust-tiers.md)) it requires a named reviewer
outside the build chain.

## Gate it maps to in the plugin

**`gate.trust`** (stage `secure`, owned by `agent.trust-reviewer`) is the primary mapping — the
risk-review track is the same question `ai-architect` asks at `secure`: can an irreversible tool
run without a human gate, and is every trust tier (T0–T3, see
[`../governance/trust-tiers.md`](../governance/trust-tiers.md)) correctly assigned to every input
and tool the Skill touches.

Secondary touchpoint: `gate.evals` (stage `prove`, `agent.eval-engineer`) covers the
capability-review track — does the Skill do the intended job, including a refusal case and an
injection case that fails closed.

## Role that owns it

A reviewer independent of the builder for anything above Tier 1. In `ai-architect` terms this
splits across `agent.trust-reviewer` (risk track) and `agent.eval-engineer` (capability track) —
this repo's Review loop asks one reviewer to cover both tracks for a Skill, rather than splitting
across two roles, unless the risk tier calls for a named security or legal reviewer.
