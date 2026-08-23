# AI CoE Operating Model

The six loops the AI CoE runs on Skills — intake, design, build, review, deploy, monitor — taken
from [`content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md)
and turned into working templates. Each loop file states its purpose, inputs, the decision it
produces, the role that owns it, and the gate it maps to in
[`github.com/frankxai/ai-architect`](https://github.com/frankxai/ai-architect) — the plugin this
repo consumes for the nine-stage `/architect` lifecycle.

The two are related but not identical: this operating model governs recurring Skills built and
run by a team; the plugin governs a one-time architecture decision for a system that calls a
language model. Where a loop's decision has a direct counterpart in an `/architect` gate, that
gate is the primary cross-reference below. Not every plugin gate has a CoE-loop counterpart
(`gate.discovery`, `gate.economics`, and `gate.evals` show up as secondary touchpoints on more
than one loop rather than owning a loop outright) — that asymmetry is expected, since the plugin
never writes application source code and the CoE's Build loop does nothing else.

| Loop | Primary gate | Owning role (`ai-architect`) |
|---|---|---|
| [1. Intake](01-intake.md) | `gate.frame` | `agent.discovery-analyst` |
| [2. Design](02-design.md) | `gate.flow` | `agent.experience-designer` |
| [3. Build](03-build.md) | `gate.decisions` | `agent.principal-architect` |
| [4. Review](04-review.md) | `gate.trust` | `agent.trust-reviewer` |
| [5. Deploy](05-deploy.md) | `gate.operate` | `agent.delivery-engineer` |
| [6. Monitor](06-monitor.md) | `gate.verify` | `agent.independent-verifier` |

Supporting field lists, also lifted from the same guide:

- [`intake-form.md`](intake-form.md) — the fields an intake request must capture
- [`registry-fields.md`](registry-fields.md) — the fields the Skill registry tracks at deploy

Risk governance for what a loop is allowed to touch lives in
[`../governance/trust-tiers.md`](../governance/trust-tiers.md), which maps the CoE's risk tiers and
MCP trust levels onto the `ai-architect` field guide's T0–T3 scale.
