# Loop 6: Monitor and Improve

Source: [`content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md), "AI CoE Operating Model for Skills → 6. Monitor and Improve".

## Purpose

Close the loop. A Skill that shipped clean at Deploy can still drift — usage patterns change,
triggers misfire, output quality declines. Monitor is what catches that after the fact, since
nothing upstream of Deploy re-checks a Skill once it is live.

## Inputs

The live registry entry from [Deploy](05-deploy.md), plus ongoing signal: usage, user feedback,
failure reports, trigger misses, wrong triggers, output quality issues, policy exceptions, cost
and latency where applicable, business impact.

## The decision it produces

Update the description, revise instructions, add references, add scripts, split the Skill,
consolidate it with another, or retire it. Any of these re-enters the loop — most commonly back at
[Design](02-design.md) for a revision, or at [Intake](01-intake.md) if the workflow itself has
changed enough to need re-scoping.

## Gate it maps to in the plugin

**`gate.verify`** (stage `verify`, owned by `agent.independent-verifier`). Both are the closing
check that nothing upstream can substitute for: `ai-architect`'s verifier re-derives every evidence
pointer in a fresh context rather than trusting another agent's assertion; Monitor re-checks a live
Skill against its registry claims rather than trusting that Deploy's snapshot still holds. Neither
gate can be marked passed on the strength of a stale prior result — a `gate.verify` receipt is
dated, and a Monitor pass should be too.

## Role that owns it

The CoE lead, on a standing cadence — weekly is the default this repo assumes. Not the Skill's
original builder alone, for the same reason `agent.independent-verifier` never edits what it
reviews.
