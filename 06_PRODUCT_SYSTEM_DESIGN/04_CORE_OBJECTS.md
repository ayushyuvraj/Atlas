# Core Objects

## Document Status

**Layer:** 6 - Product System Design
**Version:** v1.0
**Status:** Frozen
**Source:** Reconstructed from prior Flagship Project chat.
**Purpose:** Define the major product objects that structure Atlas.

---

## Core Object Principle

Every durable enterprise platform has a small set of canonical objects.

For Atlas, the central object is:

> Decision

All other objects support the creation, reasoning, commitment, execution, review, or reuse of a Decision.

---

## Object Map

```text
Workspace
        ->
Decision
        ->
Decision Workspace
        ->
Reasoning Session
        ->
Decision Record
        ->
Outcome Review
        ->
Learning Artifact
```

---

## Primary Objects

| Object | Purpose |
| --- | --- |
| Workspace | Organizational container for decisions, templates, memory, users, and governance |
| Decision | Primary business object representing a strategic choice under evaluation |
| Decision Workspace | Working surface for one decision |
| Decision Template | Reusable structure for common decision types |
| Reasoning Session | One execution of the Institutional Reasoning Engine |
| Context Brief | Structured situational awareness for a decision |
| Evidence Item | Source or input used to support reasoning |
| Assumption | Explicit belief that influences reasoning |
| Scenario | Alternative future or option under consideration |
| Recommendation | Explainable advisory output generated from reasoning |
| Decision Record | Durable record of final human decision and rationale |
| Execution Record | Link between committed decision and follow-through |
| Outcome Review | Comparison of expected and actual results |
| Learning Artifact | Reusable lesson or pattern generated from outcome review |

---

## Object Ownership

| Object | Typical Owner |
| --- | --- |
| Workspace | Admin / governance owner |
| Decision | Decision owner |
| Decision Template | Product or governance admin |
| Evidence Item | Contributor or system |
| Assumption | Business owner or analyst |
| Recommendation | System-generated, human-reviewed |
| Decision Record | Decision owner / approver |
| Outcome Review | Decision owner or governance lead |
| Learning Artifact | Governance lead or system with human validation |

---

## Object Design Rules

1. Every Decision must have one accountable owner.
2. Every Recommendation must link to evidence and assumptions.
3. Every committed Decision must create a Decision Record.
4. Every Decision Record should have review timing and success metrics.
5. Every Outcome Review should generate or update institutional learning.
6. Every Learning Artifact should link back to the decisions that informed it.

---

## Decision

Freeze this object model as the product-level core object map.

Detailed schemas are defined in `06_DECISION_OBJECT_MODEL.md`.
