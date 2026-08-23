# AI Center of Excellence (AI CoE)

The organization-facing operating model for running Skills at a **company of one** (or a small
team): the six loops a Skill goes through from idea to retirement, the governance that scales with
risk, and the plugin this repo consumes for gated architecture decisions.

This repo does not implement the architecture lifecycle itself — that is
[`github.com/frankxai/ai-architect`](https://github.com/frankxai/ai-architect), a Claude Code
plugin that runs `/architect`, a nine-stage gated team, inside whatever repository is building a
system that calls a language model. This repo governs the *organization* around that: which
Skills exist, who owns them, what trust tier they operate at, and how a CoE runs the loop that
keeps them from sprawling.

## Repository Shape

```text
ai-coe/
  README.md
  AGENTS.md
  operating-model/            # the six loops: intake, design, build, review, deploy, monitor
    README.md                 # index + gate crosswalk table
    01-intake.md ... 06-monitor.md
    intake-form.md
    registry-fields.md
  governance/
    trust-tiers.md            # T0-T3 provenance scale, unifying MCP levels + CoE risk tiers
    mcp-trust-levels.md       # superseded for tier assignment, kept for level definitions
    ai-policy.md
    data-boundaries.md
  agents/                     # this CoE's own operating roles (chief-of-staff, research,
                               # builder, growth, governance) — not the ai-architect team
  templates/
    company-of-one/, creator-business/, ai-agency/, engineering-team/, university-lab/
    agent-cards/               # local copies; canonical source is starlight-agent-army-architecture
  vendor/ai-architect/         # vendored copies of the plugin's team + templates, drift-checked
  scripts/sync-check.mjs       # verifies vendor/ai-architect/ against the live plugin repo
  content/
    README.md
    ai-skills-and-ai-coe-ultimate-guide.md
    claude-skills-operating-layer-blog.md
  .claude-plugin/marketplace.json   # `/plugin marketplace add frankxai/ai-coe` finds ai-architect
```

## Getting Started

1. Read [`operating-model/README.md`](operating-model/README.md) for the six loops and how each
   maps to an `ai-architect` gate.
2. Read [`governance/trust-tiers.md`](governance/trust-tiers.md) before enabling autonomous
   execution — it is the one place MCP trust levels, CoE risk tiers, and the plugin's T0–T3
   provenance scale are reconciled.
3. Install the plugin this repo consumes:
   ```
   /plugin marketplace add frankxai/ai-coe
   /plugin install ai-architect@frankx-coe
   ```
   or `/plugin marketplace add frankxai/ai-architect` directly.
4. Run `node scripts/sync-check.mjs` after pulling to confirm `vendor/ai-architect/` still matches
   the plugin's live team and templates.
5. For this CoE's own operating roles (as opposed to the architecture-lifecycle team), see
   `agents/`. For the canonical agent-card format and roster, see
   [`starlight-agent-army-architecture`](https://github.com/frankxai/starlight-agent-army-architecture)
   — `templates/agent-cards/` here is a local mirror, not the source of truth.

## Publication-Ready Content

- [The Ultimate Guide to Building AI Skills and an AI Center of Excellence](content/ai-skills-and-ai-coe-ultimate-guide.md)
- [Claude Skills Are Not Just Prompts. They Are an Operating Layer for AI Teams.](content/claude-skills-operating-layer-blog.md)

## Design Principles

- **Governance before automation**
- **Clear trust boundaries for tools and data** — one scale, not three that drift apart
- **Skill-driven execution, gated by a plugin this repo consumes, not reimplements**
- **Observable weekly review loops**
- **Portable templates and examples**
