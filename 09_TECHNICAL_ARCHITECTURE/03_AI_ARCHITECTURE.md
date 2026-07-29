# AI Architecture

## Document Status

**Layer:** 9 - Technical Architecture
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 5 Decision Science and Layer 7 AI Behavior Specification.
**Purpose:** Define how AI should be architected inside the Atlas MVP.

---

## AI Architecture Principle

Atlas should not expose generic agents as the primary product primitive.

The AI architecture should implement:

```text
Decision Inputs
        ->
Reasoning Orchestrator
        ->
Composable Reasoning Modules
        ->
Structured Reasoning Outputs
        ->
Human Review
        ->
Decision Record
```

---

## Reasoning Orchestrator

The Reasoning Orchestrator coordinates the execution of reasoning modules.

Responsibilities:

- Accept framed Decision inputs.
- Retrieve relevant evidence and memory.
- Call appropriate reasoning modules.
- Normalize outputs into structured objects.
- Track model/system version.
- Preserve reasoning trace.
- Enforce output schema and guardrails.

---

## Reasoning Modules

| Module | Output |
| --- | --- |
| Context Module | Context Brief and missing context flags |
| Evidence Module | Evidence summary and evidence strength |
| Assumption Module | Assumption list, confidence, validation needs |
| Perspective Module | Functional perspectives such as strategy, finance, risk, operations, customer |
| Scenario Module | Option comparisons and impact summaries |
| Tradeoff Module | Benefits, costs, opportunity costs, reversibility |
| Risk Module | Risk categories, severity, mitigations |
| Recommendation Module | Executive recommendation, alternatives, confidence, open questions |
| Memory Module | Related prior decisions and relevance explanation |

---

## AI Input Contract

AI reasoning should receive structured inputs:

- Decision statement
- Business objective
- Decision type
- Constraints
- Stakeholders
- Evidence items
- Assumptions
- Scenarios
- Prior decision references

---

## AI Output Contract

AI outputs must be structured and stored as product objects:

- Context summary
- Assumption suggestions
- Scenario comparison
- Tradeoff analysis
- Risk assessment
- Recommendation draft
- Confidence explanation
- Open questions
- Reasoning trace

---

## Guardrails

The AI system must:

- Distinguish evidence from inference.
- Avoid fabricated sources.
- Surface uncertainty.
- Preserve alternatives.
- Avoid autonomous decision commitment.
- Label AI-generated content.
- Require human review before Decision Record commitment.

---

## Model-Agnostic Strategy

The product architecture should allow different model providers or model classes over time.

The MVP may use one provider for implementation, but the product abstraction should remain:

- Input object
- Reasoning task
- Structured output schema
- Evaluation result
- Human review state

---

## Decision

Freeze the AI architecture around a Reasoning Orchestrator plus composable reasoning modules.

Provider and model choices remain implementation decisions for build planning.
