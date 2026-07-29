# Public Repository Policy

## Document Status

**Layer:** 0 - Program Foundation  
**Version:** v1.0  
**Status:** Frozen  
**Purpose:** Define what can and cannot be published when the Enterprise Decision OS repository becomes public on GitHub.

---

## 1. Policy Objective

The public repository should demonstrate visible progress, structured product reasoning, and serious operating discipline without exposing private personal materials, client-sensitive details, raw resumes, or unvalidated claims.

The goal is:

> Publish the evidence trail, not private source material.

---

## 2. Public-Safe Content

The following content is generally safe to publish:

- Program architecture
- Dashboard
- Decision logs
- Assumption register
- Risk register
- Changelog
- Opportunity discovery artifacts
- Product strategy artifacts
- Customer/problem hypotheses clearly labeled as hypotheses
- Product and layer-level Red Team Reviews
- Public-safe summaries of prior experience
- Product requirements and architecture documents that do not expose confidential details
- Thought leadership drafts intended for public use

---

## 3. Local-Only Content

The following must remain local-only and must not be committed to the public repository:

- Master resume files
- Raw Word files
- Extracted resume Markdown
- Extracted prior project Markdown
- Private project documents
- Client-specific confidential material
- Personal contact details
- Private notes not intended for publication
- Narrative strategy trackers that discuss audience targeting or perception shaping
- Public-positioning cleanup reviews
- Internal publication-prep scaffolding
- Internal agent operating instructions
- Any file under `00_PROGRAM/INPUTS/`

The local-only source folder is protected by `.gitignore`:

```text
00_PROGRAM/INPUTS/
AGENTS.md
01_CAPABILITY_MAPPING/06_NARRATIVE_TRACKER.md
**/*PUBLIC_POSITIONING_RED_TEAM_REVIEW.md
```

---

## 4. Integrity Rules for Public Content

Public documents must clearly distinguish:

- Prior chat decisions
- Reconstructed reasoning
- Working assumptions
- Hypotheses
- Illustrative examples
- External research
- Validated customer evidence

The repository must not imply that simulated reviews, reconstructed discovery, or illustrative customer insights are real-world validation.

---

## 5. Public Release Review

Before creating or pushing to a public GitHub repository, Codex must perform a Public Release Red Team Review.

The review must check:

- No raw resumes or Word files are staged.
- `00_PROGRAM/INPUTS/` is excluded.
- No personal contact information is present.
- No client-confidential material is exposed.
- Public files do not overclaim validation.
- Dashboard and trackers do not imply local-only files are public artifacts.
- Narrative strategy and publication-prep scaffolding are excluded.
- Repository name and README are professional and aligned with the flagship positioning.

---

## 6. Publication Principle

The public repository should be credible, useful, and transparent.

It should make progress visible while preserving professional integrity.
