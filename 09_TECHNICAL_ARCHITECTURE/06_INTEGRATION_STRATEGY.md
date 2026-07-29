# Integration Strategy

## Document Status

**Layer:** 9 - Technical Architecture
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from customer workflow assumptions and MVP scope.
**Purpose:** Define integration priorities without over-scoping the MVP.

---

## Integration Principle

Atlas should be integration-ready, but the MVP should not depend on full enterprise integration coverage.

The first version should prove the decision workflow before building a broad connector ecosystem.

---

## MVP Integration Approach

### Phase 1 - Manual and Lightweight Inputs

The MVP should support:

- Manual context entry
- Evidence upload or pasted source summaries
- Structured fields for KPIs, constraints, assumptions, and scenarios
- Basic export or shareable executive summary

This keeps the MVP build focused while preserving the enterprise workflow.

---

### Phase 2 - Common Knowledge and Collaboration Integrations

Potential future integrations:

- Document repositories
- Collaboration tools
- Project management systems
- BI dashboards
- Enterprise search

---

### Phase 3 - Enterprise System Integrations

Potential future integrations:

- ERP
- CRM
- Product portfolio management
- Finance planning systems
- Governance/risk systems
- Identity providers

---

## Integration Candidate Categories

| Category | Purpose | MVP Priority |
| --- | --- | --- |
| Document source | Bring evidence into Context Brief | P1 |
| Collaboration | Share review outputs | P1 |
| BI/analytics | Reference KPI context | P2 |
| Project/portfolio systems | Link initiatives and execution | P2 |
| Identity provider | Enterprise access control | P2 |

---

## Decision

Freeze a lightweight integration strategy for MVP.

The first build should prove structured decision reasoning before investing in broad enterprise connectors.
