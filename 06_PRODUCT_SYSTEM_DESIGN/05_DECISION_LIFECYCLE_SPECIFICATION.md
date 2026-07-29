# Decision Lifecycle Specification

## Document Status

**Layer:** 6 - Product System Design
**Version:** v1.0
**Status:** Frozen
**Source:** Reconstructed from prior Flagship Project chat.
**Purpose:** Define the canonical lifecycle of a strategic decision in Atlas.

---

## Core Principle

A decision is not an event.

A decision is a living enterprise asset.

---

## Canonical Lifecycle

```text
Decision Initiated
        ->
Context Assembly
        ->
Decision Framing
        ->
Institutional Reasoning
        ->
Collaborative Deliberation
        ->
Executive Recommendation
        ->
Decision Commitment
        ->
Execution Monitoring
        ->
Outcome Review
        ->
Institutional Learning
```

---

## State 1 - Decision Initiated

Purpose:

Recognize that a strategic decision needs to be made.

Inputs:

- Decision statement
- Business objective
- Time horizon
- Initial stakeholders
- Trigger event

Output:

- Decision Workspace created

---

## State 2 - Context Assembly

Purpose:

Build shared situational awareness.

Inputs:

- Internal knowledge
- Prior decisions
- KPIs
- Market intelligence
- Policies
- Strategic goals
- Dependencies

Output:

- Context Brief

---

## State 3 - Decision Framing

Purpose:

Clarify the decision before reasoning begins.

Questions:

- What are we deciding?
- Why now?
- What constraints exist?
- What would success look like?
- What is out of scope?

Output:

- Framed Decision

---

## State 4 - Institutional Reasoning

Purpose:

Run structured reasoning through the Institutional Reasoning Engine.

Modules may include:

- Context
- Evidence
- Assumptions
- Perspectives
- Tradeoffs
- Risk
- Simulation
- Recommendation

Output:

- Structured Analysis

---

## State 5 - Collaborative Deliberation

Purpose:

Allow humans to review, challenge, and improve reasoning.

Activities:

- Challenge assumptions
- Add evidence
- Invite stakeholders
- Request another scenario
- Comment on risks

Output:

- Decision Review

---

## State 6 - Executive Recommendation

Purpose:

Produce an executive-ready recommendation.

Output includes:

- Executive summary
- Top recommendation
- Alternatives
- Confidence
- Risks
- Open questions

Important rule:

The recommendation is advisory. It is not the final decision.

---

## State 7 - Decision Commitment

Purpose:

Humans make and record the final decision.

Captured fields:

- Final decision
- Owner
- Budget
- Timeline
- Assumptions
- Expected outcomes
- Review schedule
- Success metrics

Output:

- Decision Record

---

## State 8 - Execution Monitoring

Purpose:

Track the decision after commitment.

Tracked:

- Milestones
- Risks
- Dependencies
- Status
- Escalations

Output:

- Execution Record

---

## State 9 - Outcome Review

Purpose:

Compare expected outcomes with actual outcomes.

Questions:

- Did it work?
- What surprised us?
- Which assumptions failed?
- What should change?

Output:

- Outcome Review

---

## State 10 - Institutional Learning

Purpose:

Convert experience into reusable organizational knowledge.

Updates:

- Institutional Memory
- Decision patterns
- Confidence calibration
- Templates
- Future recommendations

Output:

- Learning Artifact

---

## Decision

Freeze this lifecycle as the canonical decision lifecycle for Atlas.

Layer 7 Product Definition should map use cases and functional requirements to these states.
