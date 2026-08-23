# Trust Tiers

This repo used to carry two separate trust ladders that never referenced each other:
[`mcp-trust-levels.md`](mcp-trust-levels.md) (Levels 0–4, what an MCP tool is authorized to *do*)
and the risk-tier table in
[`../content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md#risk-tiers-for-ai-skills)
(Tiers 0–4, how much governance a *Skill* needs). Neither one said how a tool's MCP level or a
Skill's risk tier should be set in the first place.

The [`ai-architect`](https://github.com/frankxai/ai-architect) field guide's Trust Reviewer role
answers that: every input and tool gets a trust tier — **T0 private local, T1 scoped project, T2
external tools, T3 untrusted content** — based on where it came from, before anyone decides what
it's allowed to do. This file maps the two older ladders onto that T0–T3 scale once, so a new MCP
integration or a new Skill starts from provenance and derives its MCP level and risk tier from
that, instead of the two being set independently and drifting apart.

## The mapping

| T-tier (`ai-architect` field guide) | What it means | MCP trust level ([`mcp-trust-levels.md`](mcp-trust-levels.md)) | CoE risk tier (content guide) | Governance implication |
|---|---|---|---|---|
| **T0 — private local** | Data or tools that live entirely on the operator's own machine, under their own control | Level 3–4 (Operational write / Privileged) | Tier 0–1 (Personal productivity / Internal low-risk) | Owner review is enough; nothing here leaves a trust boundary the operator doesn't already control |
| **T1 — scoped project** | Data or tools scoped to the current project or repo, shared with a known team | Level 2–3 (Limited write / Operational write, with guardrails) | Tier 1–2 (Internal low-risk / Business workflow) | Registry entry, basic evals, approval gates on write actions |
| **T2 — external tools** | Tools or APIs outside the project's own boundary — third-party services, systems the CoE doesn't operate | Level 1–2 (Read-only / Limited write, approval-gated) | Tier 2–3 (Business workflow / Sensitive workflow) | Approved references only, evals required, no unattended write access |
| **T3 — untrusted content** | Content pulled from the open web, user-submitted documents, or any source that could carry adversarial instructions | Level 0 (Blocked — never let this content trigger a tool call) | Tier 3–4 (Sensitive workflow / Operational action) | Treat as data only, never as instruction; human approval gates on anything it could influence; this is the injection-risk case both the CoE's highest tiers and MCP's Level 0 exist to contain |

Read the table as: a tool or input's **T-tier is set first**, from where it came from. The MCP
trust level it is granted and the risk tier assigned to any Skill built on it should not exceed
what that T-tier justifies — a T3 (untrusted content) input should never be wired into a Skill that
holds MCP Level 3+ write access, regardless of how convenient that would be.

## Superseded files

- [`mcp-trust-levels.md`](mcp-trust-levels.md) — superseded by this file for anything deciding
  what tier to assign; kept as the definition of what each MCP level technically permits.
- The risk-tier table in
  [`../content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md#risk-tiers-for-ai-skills)
  — superseded by this file for how a tier gets assigned; kept as the published article text and
  its worked examples.

Neither file is deleted. Both still define their own axis correctly — this file is what connects
them to a common origin.
