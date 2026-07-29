# Evaluation Framework

## Document Status

**Layer:** 9 - Technical Architecture
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 7 AI Behavior Specification and Layer 9 observability requirements.
**Purpose:** Define how Atlas AI behavior and product quality should be evaluated.

---

## Evaluation Principle

Atlas should evaluate decision-support quality, not just text quality.

AI outputs should be measured against whether they improve structured reasoning, traceability, and human review.

---

## Evaluation Dimensions

| Dimension | Evaluation Question |
| --- | --- |
| Evidence Grounding | Does the output distinguish evidence from inference? |
| Assumption Quality | Are key assumptions explicit and useful? |
| Scenario Coverage | Are alternatives compared consistently? |
| Risk Coverage | Are material risks surfaced? |
| Tradeoff Clarity | Are accepted tradeoffs visible? |
| Recommendation Traceability | Can the recommendation be traced to evidence and assumptions? |
| Confidence Calibration | Does confidence reflect evidence quality and uncertainty? |
| Human Reviewability | Can users challenge or revise the output? |
| Safety and Governance | Does the output avoid claiming final authority? |

---

## MVP Evaluation Methods

### Offline Test Cases

Create representative decision scenarios:

- Fund initiative A vs B
- Approve or pause transformation program
- Enter a new market
- Reallocate budget across portfolio

Evaluate whether AI outputs meet required structure and quality.

---

### Structured Output Checks

Validate that AI outputs include required fields:

- Recommendation
- Evidence
- Assumptions
- Risks
- Alternatives
- Tradeoffs
- Confidence
- Open questions

---

### Human Review Checks

Review whether a user can:

- Understand recommendation rationale.
- Challenge assumptions.
- Identify missing evidence.
- See uncertainty.
- Commit or reject the recommendation intentionally.

---

## Quality Rubric

| Score | Meaning |
| --- | --- |
| 1 | Output is incomplete, unsupported, or misleading |
| 2 | Output includes some structure but lacks useful traceability |
| 3 | Output is usable but has meaningful gaps |
| 4 | Output is clear, grounded, and reviewable |
| 5 | Output is executive-ready, traceable, and decision-useful |

---

## Failure Conditions

AI output should fail evaluation if it:

- Fabricates evidence.
- Hides uncertainty.
- Presents recommendation as final decision.
- Omits alternatives.
- Provides confidence without rationale.
- Cannot be traced to inputs.
- Ignores major risks.

---

## Decision

Freeze this evaluation framework as the MVP AI quality baseline.

Layer 11 Validation and Layer 12 Build should operationalize this framework through test cases and review workflows.
