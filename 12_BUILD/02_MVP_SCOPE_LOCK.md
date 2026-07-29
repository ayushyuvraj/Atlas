# MVP Scope Lock

## Document Status

**Layer:** 12 - Build
**Version:** v0.1
**Status:** Frozen
**Source:** Derived from Layer 7 Product Definition, Layer 8 Experience Design, and Layer 9 Technical Architecture.
**Purpose:** Prevent build-phase scope creep by defining the exact MVP workflow.

---

## Locked MVP

Atlas MVP will implement one complete workflow:

**Strategic investment committee decision support.**

The demo decision:

> Which strategic initiatives should receive funding this cycle?

The product will help a strategy or portfolio team evaluate competing initiatives, inspect evidence and assumptions, compare scenarios, generate an executive recommendation, and capture the final decision record.

---

## Primary User

The primary MVP user is the Strategy Director or Portfolio Manager preparing an executive investment review.

Executives are represented as recommendation consumers and final decision approvers, not as the primary daily operator.

---

## In Scope

### Product Workflow

- Active decision dashboard
- Decision Workspace
- Context summary
- Evidence review
- Assumption review
- Multi-perspective reasoning
- Scenario comparison
- Tradeoff and risk analysis
- Executive recommendation
- Decision commitment
- Decision Record
- Institutional learning summary

### Reasoning Modules

- Context
- Evidence
- Assumptions
- Perspectives
- Scenarios
- Tradeoffs
- Risks
- Recommendation
- Learning

### Data

The MVP will use clearly labeled demo data.

Demo data may include:

- Competing initiatives
- Evidence items
- Stakeholder perspectives
- Assumptions
- Scenario outcomes
- Risks
- Recommendation rationale
- Prior decision memory

---

## Out of Scope

The MVP will not include:

- Real customer data
- Real enterprise integrations
- Full authentication
- Production-grade RBAC
- Live collaboration
- Real-time meeting assistant behavior
- Vendor procurement workflows
- Enterprise deployment automation
- Multi-tenant billing
- Full portfolio management
- Real AI provider dependency as a launch blocker

---

## Build Constraint

The build must preserve the product's core philosophy:

> AI reasons. Humans decide.

Therefore the MVP must not auto-commit a decision or imply that AI has executive authority.

---

## Demo Path

The intended demo path is:

1. Open Atlas.
2. Review the active strategic investment decision.
3. Enter the Decision Workspace.
4. Run or review the Institutional Reasoning Engine.
5. Inspect modules and confidence signals.
6. Review the executive recommendation.
7. Challenge or inspect supporting reasoning.
8. Commit the Decision Record.
9. Review institutional learning output.

---

## Acceptance Criteria

The MVP is acceptable when:

- The app runs locally without manual code edits.
- The core workflow can be completed in under 10 minutes.
- AI-generated or simulated reasoning outputs are clearly labeled.
- The interface shows evidence, assumptions, risks, tradeoffs, alternatives, and confidence.
- A Decision Record can be created by explicit human action.
- The MVP is visually credible for enterprise product demonstration.
- The implementation matches the frozen product documents.

---

## Scope Decision

Freeze Layer 12 MVP scope around one strategic investment decision workflow.

Any new build request must either fit this scope or be added to a future backlog.
