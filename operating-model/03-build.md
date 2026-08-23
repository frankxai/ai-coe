# Loop 3: Build

Source: [`content/ai-skills-and-ai-coe-ultimate-guide.md`](../content/ai-skills-and-ai-coe-ultimate-guide.md), "AI CoE Operating Model for Skills → 3. Build".

## Purpose

Turn the frozen Design spec into a working Skill folder. Start narrow — it is better to have one
reliable workflow than one broad assistant that sort of helps with a department.

## Inputs

The Design spec from [Design](02-design.md): trigger language, workflow steps, tool access,
reference files, script needs, output format.

## The decision it produces

A Skill folder ready for Review:

```text
skill-name/
  SKILL.md
  references/
  scripts/
  assets/
```

The decision is implementation-level — what goes in `SKILL.md` versus `references/` versus
`scripts/` — not a scope decision. Scope was already locked in Design.

## Gate it maps to in the plugin

**`gate.decisions`** (stage `decide`, owned by `agent.principal-architect`). This is the closest
analogue, not an exact match: `ai-architect` explicitly never writes application source code — its
nine stages produce an evidence-backed artifact set under `docs/architecture/`, and Build is where
the CoE loop diverges from that by actually implementing the thing. The parallel that holds is
irreversibility: `gate.decisions` locks in the four architecture decisions (model call seam,
orchestration shape, trust boundary, long-run home) with an evidence pointer before anything is
built on top of them; Build is where the CoE analogue of those decisions — tool access, data
access, script needs — gets encoded into a running Skill and becomes expensive to change.

No `ai-architect` gate directly reviews implementation code; that review happens in
[Review](04-review.md) instead.

## Role that owns it

The implementer — whoever in the CoE (or the founder, solo) is writing the Skill. Not necessarily
the same person who ran Design.
