# Decision Principles

## Document Status

**Layer:** 5 - Decision Science
**Version:** v1.0
**Status:** Frozen
**Source:** Reconstructed from prior Flagship Project chat and Layers 3-4.
**Purpose:** Define the decision principles that guide the product's reasoning behavior.

---

## Purpose

Atlas needs decision principles that govern how the product frames, reasons, recommends, and learns.

These principles are not UI slogans. They are rules for product behavior.

---

## Principle 1 - Frame Before Reasoning

The product should not reason deeply until the decision is framed.

Required framing includes:

- Decision statement
- Business objective
- Time horizon
- Constraints
- Stakeholders
- Success criteria

---

## Principle 2 - Evidence Before Recommendation

Recommendations must be grounded in available evidence.

When evidence is weak or missing, the product should say so.

---

## Principle 3 - Assumptions Are First-Class Objects

Assumptions should not be buried in narrative text.

They should be explicit, reviewable, and linked to recommendations and outcomes.

---

## Principle 4 - Disagreement Improves Decisions

The product should surface legitimate disagreement between perspectives rather than compressing everything into premature consensus.

---

## Principle 5 - Alternatives Must Be Visible

A recommendation is incomplete unless users understand what alternatives were considered and why they were not selected.

---

## Principle 6 - Confidence Requires Rationale

Confidence should always explain:

- What supports the recommendation
- What weakens it
- What remains uncertain
- What could change it

---

## Principle 7 - Humans Own Decisions

The product may recommend, challenge, and document.

Humans approve, reject, fund, cancel, and remain accountable.

---

## Principle 8 - Decisions Become Memory

Every committed decision should produce a durable record that can support future decisions.

---

## Principle 9 - Outcomes Close The Loop

The product should eventually compare expected outcomes with actual outcomes.

Without outcome review, the organization records decisions but does not learn from them.

---

## Principle 10 - Useful Simplicity Beats Visible Complexity

The underlying reasoning system may be sophisticated, but users should experience a clear decision workflow.

The product should expose complexity only when it improves trust or action.

---

## Decision

Freeze these principles as decision-science guardrails for Product Definition, Product System Design, UX, and Technical Architecture.

---

## Open Questions

- Which principles require explicit acceptance criteria in the PRD?
- Which principles become analytics events?
- Which principles are too ambitious for the MVP and need staged delivery?
