# Product Architecture

## Document Status

**Layer:** 6 - Product System Design
**Version:** v1.0
**Status:** Frozen
**Source:** Reconstructed from prior Flagship Project chat.
**Purpose:** Define the product-level architecture of Atlas before technical implementation.

---

## Architecture Principle

Atlas is a decision-centered platform.

The product should be understood as:

```text
Decision Workspace
        ->
Institutional Reasoning Engine
        ->
Decision Record
        ->
Institutional Memory
```

not as:

- A chatbot
- A dashboard
- A document repository
- A generic workflow tool
- A generic agent marketplace

---

## Core Product Layers

| Layer | Purpose |
| --- | --- |
| Workspace Layer | Where users create, review, and manage decisions |
| Reasoning Layer | Where the IRE structures analysis through reasoning modules |
| Memory Layer | Where prior decisions, assumptions, outcomes, and lessons are preserved |
| Governance Layer | Where permissions, review, accountability, and auditability are enforced |
| Insights Layer | Where decision patterns, cycle time, confidence, and reuse are surfaced |

---

## Primary User Experience

The hero experience is:

> Decision Workspace

The Decision Workspace contains:

- Decision summary
- Context brief
- Evidence
- Assumptions
- Reasoning outputs
- Scenario comparison
- Tradeoffs
- Risks
- Executive recommendation
- Decision record
- Collaboration and review activity

---

## MVP Product Architecture

For the initial wedge, the MVP should support:

1. Create a strategic portfolio or investment decision.
2. Select or apply a decision template.
3. Add initiatives, alternatives, constraints, and stakeholders.
4. Assemble context and evidence.
5. Run structured reasoning.
6. Review recommendation, assumptions, tradeoffs, and risks.
7. Capture the final decision record.
8. Preserve the decision for future reference.

---

## V1 In Scope

- Decision Workspace
- Decision Templates
- Institutional Reasoning Engine outputs
- Context Brief
- Assumption Map
- Scenario Comparison
- Tradeoff Analysis
- Risk Assessment
- Executive Recommendation
- Decision Record
- Basic Institutional Memory

---

## V1 Out Of Scope

- Full project portfolio management replacement
- Full live meeting assistant
- Complex workflow automation
- Enterprise-wide predictive governance
- Cross-company benchmarking
- Autonomous decision approval
- Full production integration library

---

## Decision

Freeze Decision Workspace as the product's hero surface and Decision as the primary system object.

---

## Open Questions

- Which reasoning outputs must appear in the first demo?
- How much institutional memory is needed for MVP credibility?
- Which V1 capabilities should be simulated versus implemented in the first prototype?
