# AI Workflows

## Document Status

**Layer:** 12 - Build
**Version:** v0.1
**Status:** Active
**Source:** Derived from `07_PRODUCT_DEFINITION/06_AI_BEHAVIOR_SPECIFICATION.md` and `09_TECHNICAL_ARCHITECTURE/03_AI_ARCHITECTURE.md`.
**Purpose:** Define how AI-style reasoning is represented in the MVP build.

---

## MVP AI Strategy

The first MVP implements a deterministic Institutional Reasoning Engine.

This means the product demonstrates the reasoning workflow, output structure, and human review model without depending on live model calls.

This is intentional. It keeps the build demo-safe and avoids presenting unvalidated AI outputs as production intelligence.

---

## Reasoning Workflow

```text
Decision Input
        ->
Context Module
        ->
Evidence Module
        ->
Assumption Module
        ->
Perspective Module
        ->
Scenario Module
        ->
Tradeoff Module
        ->
Risk Module
        ->
Recommendation Module
        ->
Learning Module
```

---

## Module Responsibilities

| Module | MVP Responsibility |
| --- | --- |
| Context | Summarize the decision, objective, deadline, owner, and portfolio context |
| Evidence | Summarize evidence strength and missing evidence |
| Assumptions | Identify assumptions and confidence levels |
| Perspectives | Show Strategy, Finance, Risk, Operations, Product, and Technology viewpoints |
| Scenarios | Compare fund, defer, or pause options |
| Tradeoffs | Surface benefits, costs, reversibility, and opportunity costs |
| Risks | Identify strategic, operational, financial, and execution risks |
| Recommendation | Generate an executive-ready recommendation with confidence and alternatives |
| Learning | Convert final decision into reusable institutional memory |

---

## Output Rules

Every recommendation must show:

- Recommended option
- Rationale
- Evidence used
- Assumptions
- Risks
- Alternatives
- Tradeoffs
- Confidence
- Open questions

---

## Guardrails

The MVP must:

- Label demo reasoning as simulated.
- Avoid fabricating external sources.
- Distinguish evidence from inference.
- Preserve uncertainty.
- Keep human commitment explicit.
- Avoid autonomous approval language.

---

## Future AI Extension

Future versions can replace deterministic module outputs with live model-backed module adapters while keeping the same product contract:

```text
Structured input -> reasoning module -> structured output -> human review
```
