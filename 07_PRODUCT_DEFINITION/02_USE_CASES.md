# Use Cases

## Document Status

**Layer:** 7 - Product Definition
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from `01_PRODUCT_REQUIREMENTS_DOCUMENT.md` and Layer 6 Product System Design.
**Purpose:** Define the primary and supporting use cases for the MVP.

---

## Primary Use Case

### UC-001 - Prepare a Strategic Investment Decision

**User:** Strategy Director or Portfolio Manager
**Trigger:** A leadership forum must decide which initiative, investment, or portfolio option to approve.
**Goal:** Prepare an executive-ready recommendation with evidence, assumptions, risks, tradeoffs, and alternatives.

**Flow:**

1. Create a new Decision.
2. Select the Strategic Investment template.
3. Define objective, options, constraints, and stakeholders.
4. Add evidence and relevant context.
5. Run institutional reasoning.
6. Review assumptions, scenarios, risks, and tradeoffs.
7. Generate an executive recommendation.
8. Capture the final Decision Record.

**Success Outcome:** The leadership team can review a structured recommendation and commit a decision with traceable rationale.

---

## Supporting Use Cases

### UC-002 - Assemble Decision Context

**User:** Analyst
**Goal:** Convert scattered inputs into a shared Context Brief.

**Includes:**

- Business background
- Strategic objective
- Relevant documents
- KPIs
- Prior decisions
- Constraints
- Dependencies

---

### UC-003 - Surface and Challenge Assumptions

**User:** Strategy Director, Portfolio Manager, Executive Sponsor
**Goal:** Make hidden assumptions explicit before a decision is committed.

**Includes:**

- AI-suggested assumptions
- Human-added assumptions
- Confidence ratings
- Validation status
- Open assumption risks

---

### UC-004 - Compare Strategic Scenarios

**User:** Portfolio Manager
**Goal:** Compare decision options across financial, strategic, operational, and risk dimensions.

**Includes:**

- Option comparison
- Scenario impact
- Tradeoff table
- Risk profile
- Confidence notes

---

### UC-005 - Generate Executive Recommendation

**User:** Strategy Director
**Goal:** Produce an executive-ready recommendation that is concise but inspectable.

**Includes:**

- Recommended option
- Rationale
- Alternatives considered
- Risks
- Assumptions
- Evidence
- Confidence
- Open questions

---

### UC-006 - Commit a Decision Record

**User:** Decision Owner or Executive Sponsor
**Goal:** Capture the final decision and preserve rationale.

**Includes:**

- Final decision
- Approvers
- Owner
- Budget or resources
- Timeline
- Success metrics
- Accepted risks
- Review date

---

### UC-007 - Reuse Institutional Memory

**User:** Strategy Director or Analyst
**Goal:** Reference prior decisions when evaluating a new decision.

**Includes:**

- Related decisions
- Similar assumptions
- Prior outcomes
- Lessons learned
- Reusable patterns

---

## MVP Priority

| Use Case | MVP Priority |
| --- | --- |
| UC-001 Prepare a Strategic Investment Decision | P0 |
| UC-002 Assemble Decision Context | P0 |
| UC-003 Surface and Challenge Assumptions | P0 |
| UC-004 Compare Strategic Scenarios | P0 |
| UC-005 Generate Executive Recommendation | P0 |
| UC-006 Commit a Decision Record | P0 |
| UC-007 Reuse Institutional Memory | P1 |

---

## Decision

Freeze these use cases as the MVP scope for Layer 7.
