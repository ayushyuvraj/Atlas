# State Transitions and Business Rules

## Document Status

**Layer:** 6 - Product System Design
**Version:** v1.0
**Status:** Frozen
**Source:** Reconstructed from prior Flagship Project chat.
**Purpose:** Define how Decisions move through the lifecycle and which product rules govern those transitions.

---

## State Transition Principle

Strategic decisions are iterative.

The lifecycle should provide structure without forcing a rigid one-way process.

Users should be able to move backward when new evidence, disagreement, or risk changes the decision context.

---

## Primary State Flow

```text
Initiated
        ->
Context Assembly
        ->
Framed
        ->
Reasoning
        ->
Deliberation
        ->
Recommendation
        ->
Committed
        ->
Execution Monitoring
        ->
Outcome Review
        ->
Learning
```

---

## Allowed Backward Transitions

| From | To | Reason |
| --- | --- | --- |
| Deliberation | Context Assembly | New evidence is required |
| Deliberation | Framed | Decision scope changes |
| Recommendation | Reasoning | Recommendation is challenged |
| Recommendation | Deliberation | Stakeholder review is incomplete |
| Committed | Recommendation | Governed amendment is requested |
| Execution Monitoring | Outcome Review | Early outcome signal is available |
| Outcome Review | Learning | Lessons are approved |

---

## Business Rules

### Decision Creation

- A Decision must have a title, decision statement, business objective, owner, and type.
- A Decision should have a target review or decision date.
- A Decision should be linked to a template when possible.

### Context Assembly

- Context must be distinguishable from recommendation.
- Evidence should include source, type, owner, and confidence.
- Missing evidence should be visible.

### Reasoning

- A reasoning session must preserve the inputs used.
- Recommendations must link to assumptions, evidence, and alternatives.
- Confidence must include rationale.

### Deliberation

- Human challenges should be recorded.
- New evidence should be attached to the relevant decision object.
- Re-running reasoning should create a new reasoning version.

### Commitment

- A committed decision must include final decision, owner, approver, date, rationale, expected outcomes, and review date.
- AI cannot commit a decision.
- Amendments after commitment must be recorded.

### Execution

- Execution tracking must link back to the decision record.
- Status changes should preserve history.

### Outcome Review

- Outcome review should compare expected and actual outcomes.
- Failed assumptions should be marked.
- Lessons should be proposed before they become institutional learning.

### Learning

- Learning artifacts should link back to source decisions.
- Human validation should distinguish durable learning from system-suggested patterns.

---

## MVP State Scope

The MVP should prioritize:

1. Initiated
2. Context Assembly
3. Framed
4. Reasoning
5. Recommendation
6. Committed

Execution, Outcome Review, and Learning may be represented in limited form if necessary for the demo narrative.

---

## Decision

Freeze this state transition model and business rules as the Layer 6 lifecycle governance baseline.

Layer 7 Product Definition should turn these rules into functional requirements and acceptance criteria.
