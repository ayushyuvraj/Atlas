# Information Architecture and Navigation

## Document Status

**Layer:** 6 - Product System Design
**Version:** v1.0
**Status:** Frozen
**Source:** Reconstructed from prior Flagship Project chat.
**Purpose:** Define the product's navigation structure and information architecture.

---

## Information Architecture Principle

Atlas should be organized around decisions, not chat threads, files, or dashboards.

Users should always understand:

- What decision is being evaluated
- What stage the decision is in
- What reasoning exists
- What still needs review
- Who owns the decision
- What happens next

---

## Primary Navigation

| Navigation Item | Purpose |
| --- | --- |
| Home | Recent decisions, upcoming reviews, open recommendations, and attention items |
| Decisions | List and manage all active, committed, and archived decisions |
| Templates | Reusable decision workflows and evidence requirements |
| Institutional Memory | Search historical decisions, assumptions, outcomes, and lessons |
| Insights | View decision patterns, cycle time, assumption quality, and reuse |
| Administration | Manage governance, permissions, templates, integrations, and settings |

---

## Hero Surface

The Decision Workspace is the primary surface.

It should be accessible from:

- Home
- Decision list
- Search
- Notification or review queue
- Linked historical decisions

---

## Decision Workspace Areas

| Area | Purpose |
| --- | --- |
| Decision Summary | Shows decision statement, owner, status, stage, priority, confidence, and due date |
| Reasoning Canvas | Shows context, evidence, assumptions, perspectives, scenarios, tradeoffs, risks, and recommendation |
| Institutional Memory Panel | Shows related prior decisions, patterns, failed assumptions, and lessons |
| Collaboration Panel | Shows comments, questions, approvals, assigned actions, and review history |
| Decision Record | Captures final decision, rationale, owners, metrics, and review date |

---

## MVP Screen Inventory

| Screen | Purpose |
| --- | --- |
| Home | Orient users to active decisions and reviews |
| Decision List | Browse, filter, and open decisions |
| New Decision Wizard | Create and frame a new decision |
| Decision Workspace | Main reasoning and review surface |
| Evidence Explorer | Inspect supporting evidence |
| Reasoning Timeline | Show reasoning progress and version history |
| Scenario Comparison | Compare alternatives and likely outcomes |
| Tradeoff Matrix | Surface pros, cons, opportunity costs, and second-order effects |
| Risk Assessment | Review risk categories and mitigations |
| Executive Recommendation | Present recommendation, confidence, assumptions, and alternatives |
| Decision Record | Capture final decision and rationale |
| Outcome Review | Compare expected and actual outcomes |
| Institutional Memory Search | Search prior decisions and lessons |
| Template Library | Select and manage decision templates |
| Settings | Manage workspace and governance configuration |

---

## Information Hierarchy

Default hierarchy:

1. Decision statement
2. Recommendation or current stage
3. Confidence and open questions
4. Evidence and assumptions
5. Scenarios and tradeoffs
6. Risks
7. Historical memory
8. Raw sources and detailed trace

---

## Decision

Freeze the six-item primary navigation and Decision Workspace-centered information architecture.

---

## Open Questions

- Which screens are needed for first public demo versus full MVP?
- Should Institutional Memory be a primary nav item in MVP or contextual only?
- How should executive and analyst modes differ visually?
