# System Architecture

## Document Status

**Layer:** 9 - Technical Architecture
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 8 experience flows and Layer 7 product requirements.
**Purpose:** Define the high-level system architecture for the Atlas MVP.

---

## System Context

Atlas is a web-based enterprise SaaS product.

At MVP stage, the system can be implemented as a modular application with clear domain boundaries rather than premature microservices.

---

## Logical Architecture

```text
Browser Client
        ->
Web Application / API Layer
        ->
Domain Services
        ->
AI Reasoning Orchestrator
        ->
Data Stores and Memory Indexes
        ->
Observability and Evaluation
```

---

## Core Services

| Service | Responsibility |
| --- | --- |
| Workspace Service | Manages Decision Workspaces, lifecycle state, and workspace metadata |
| Decision Service | Manages Decision object, Decision Record, status, and commitments |
| Evidence Service | Manages evidence items, summaries, source metadata, and links |
| Reasoning Service | Coordinates reasoning modules and AI-generated outputs |
| Recommendation Service | Creates executive recommendations from reasoning outputs |
| Memory Service | Retrieves related prior decisions and learning artifacts |
| Governance Service | Manages roles, permissions, audit events, and amendments |
| Analytics Service | Captures usage, lifecycle, and quality events |

---

## Suggested MVP Implementation Shape

For the first build, use a modular monolith or single deployable application with internal service boundaries.

Rationale:

- Faster implementation
- Easier debugging
- Lower operational overhead
- Still preserves clean domain separation
- Can evolve into services later if usage demands it

---

## Client Architecture

The frontend should support:

- App shell
- Decision Workspace
- Context Brief
- Evidence Explorer
- Reasoning Canvas
- Executive Recommendation
- Decision Record
- Admin/settings surfaces

The UI should call product APIs rather than directly manipulating data stores.

---

## Backend Architecture

The backend should provide:

- Authentication and authorization enforcement
- Domain validation
- Decision lifecycle state transitions
- AI orchestration endpoints
- Persistence for domain objects
- Audit events
- Analytics events

---

## Decision

Freeze a modular SaaS architecture with a single MVP application boundary and clear internal domain services.

Layer 12 may choose the concrete stack and implementation sequence.
