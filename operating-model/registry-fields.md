# Skill Registry Fields

Fields recorded for every Skill at [Loop 5: Deploy](05-deploy.md). Source:
[`content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md),
"AI CoE Operating Model for Skills → 5. Deploy".

| Field | What it records |
|---|---|
| Skill name | The identifier used in triggers and directory names |
| Purpose | One line: what the Skill does |
| Owner | Who is accountable for it after Deploy |
| Version | The current shipped version |
| Status | Active, deprecated, retired |
| Risk tier | Per [`../governance/trust-tiers.md`](../governance/trust-tiers.md) |
| Active user group | Who currently has access |
| Required tools | What the Skill needs to run |
| Required data access | What data zones it touches (see [`../governance/data-boundaries.md`](../governance/data-boundaries.md)) |
| Evaluation status | Whether it has passing evals and when they last ran |
| Last review date | When [Loop 4: Review](04-review.md) last passed it |
| Rollback version | What to revert to if the current version fails |

Deployment should be versioned. Treat this registry — not any individual surface (Claude API,
Claude Code, Claude.ai) — as the source of truth for what is live, since those surfaces do not
sync Skills with each other.
