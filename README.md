# AI Center of Excellence (AI CoE)

A practical reference implementation for a **company of one** (or a small team) to run an AI-native operating model using:
- Multi-agent collaboration (Codex, Claude Code, Grok Build, and more)
- Governance-first design
- Private execution dashboard + public Vercel layer
- Reusable templates, skills, and configuration compilers

## Repository Foundations

```text
ai-coe/
  README.md
  templates/
    company-of-one/
    creator-business/
    ai-agency/
    engineering-team/
    university-lab/
  governance/
    ai-policy.md
    mcp-trust-levels.md
    data-boundaries.md
  agents/
    chief-of-staff.md
    research-agent.md
    builder-agent.md
    growth-agent.md
    governance-agent.md
  skills/
    demand-generation/
    product-architecture/
    content-engine/
    repo-maintenance/
    weekly-review/
  config-compilers/
    agents-md/
    claude-md/
    cursor-rules/
    codex-instructions/
  apps/
    dashboard/
  examples/
    frankx-ai-coe/
    arcanea-ai-coe/
    starlight-intelligence-system/
```

## Getting Started

1. Choose a template under `/templates` that matches your operating model.
2. Tailor governance rules under `/governance` before enabling autonomous execution.
3. Define your core agents under `/agents` and map them to `/skills`.
4. Compile agent/tool configs through `/config-compilers`.
5. Use `/apps/dashboard` as the private control plane and expose approved outputs via public channels.

## Design Principles

- **Governance before automation**
- **Clear trust boundaries for tools and data**
- **Skill-driven execution**
- **Observable weekly review loops**
- **Portable templates and examples**
