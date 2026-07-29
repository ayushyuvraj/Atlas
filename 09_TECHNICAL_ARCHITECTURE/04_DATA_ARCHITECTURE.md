# Data Architecture

## Document Status

**Layer:** 9 - Technical Architecture
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 6 Decision Object Model and Layer 7 analytics requirements.
**Purpose:** Define the MVP data architecture for Atlas.

---

## Data Architecture Principle

Atlas data should preserve the full reasoning chain from Decision creation to Decision Record.

The system must support:

- Structured domain objects
- Traceable AI outputs
- Audit events
- Analytics events
- Basic institutional memory

---

## Primary Data Domains

| Domain | Purpose |
| --- | --- |
| Workspace | Tenant/workspace-level container |
| User and Role | Identity, roles, and permissions |
| Decision | Primary product object |
| Context | Background, constraints, dependencies |
| Evidence | Source material and summaries |
| Assumption | Explicit assumptions and validation status |
| Scenario | Options and projected impacts |
| Risk | Risk categories, severity, mitigation |
| Recommendation | AI-assisted recommendation and trace |
| Decision Record | Human-committed final decision |
| Memory | Prior decisions and learning artifacts |
| Audit Event | Governance trail |
| Analytics Event | Product usage and quality metrics |

---

## Storage Model

The MVP should use:

- Relational database for core domain objects and governance state.
- Object/file storage for uploaded documents or large source artifacts if needed.
- Vector or semantic index for retrieval over evidence, prior decisions, and memory artifacts.
- Event table for audit and analytics events.

---

## Canonical Relationships

```text
Workspace
  -> Users
  -> Decisions
      -> Context
      -> Evidence
      -> Assumptions
      -> Scenarios
      -> Risks
      -> Recommendations
      -> Decision Records
      -> Audit Events
      -> Analytics Events
      -> Memory References
```

---

## Data Integrity Rules

- Every Decision must belong to a Workspace.
- Every Decision must have one accountable owner.
- Every Recommendation must link to evidence, assumptions, and scenarios where available.
- Every committed Decision Record must be immutable except through governed amendment.
- Every AI output must store generation metadata and review state.
- Every audit event must preserve actor, action, timestamp, and affected object.

---

## Data Classification

| Data Type | Sensitivity |
| --- | --- |
| Decision metadata | Internal |
| Strategic evidence | Confidential |
| Recommendation outputs | Confidential |
| Decision Records | Confidential |
| Audit logs | Confidential |
| Analytics aggregates | Internal |

---

## Decision

Freeze this data architecture as the MVP domain model for later database and API design.
