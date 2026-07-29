# API Design

## Document Status

**Layer:** 9 - Technical Architecture
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 7 functional requirements and Layer 9 system architecture.
**Purpose:** Define product-level API boundaries for the Atlas MVP.

---

## API Design Principle

APIs should expose domain actions, not raw database operations.

The API should make the Decision Lifecycle explicit.

---

## Core API Groups

### Workspace APIs

- `GET /workspaces`
- `GET /workspaces/{workspaceId}`
- `GET /workspaces/{workspaceId}/activity`

### Decision APIs

- `POST /decisions`
- `GET /decisions`
- `GET /decisions/{decisionId}`
- `PATCH /decisions/{decisionId}`
- `POST /decisions/{decisionId}/transition`

### Context and Evidence APIs

- `GET /decisions/{decisionId}/context`
- `PATCH /decisions/{decisionId}/context`
- `POST /decisions/{decisionId}/evidence`
- `GET /decisions/{decisionId}/evidence`
- `PATCH /evidence/{evidenceId}`

### Assumption and Scenario APIs

- `POST /decisions/{decisionId}/assumptions`
- `GET /decisions/{decisionId}/assumptions`
- `PATCH /assumptions/{assumptionId}`
- `POST /decisions/{decisionId}/scenarios`
- `GET /decisions/{decisionId}/scenarios`

### Reasoning APIs

- `POST /decisions/{decisionId}/reasoning-runs`
- `GET /reasoning-runs/{reasoningRunId}`
- `GET /decisions/{decisionId}/reasoning-outputs`

### Recommendation APIs

- `POST /decisions/{decisionId}/recommendations`
- `GET /decisions/{decisionId}/recommendations`
- `POST /recommendations/{recommendationId}/challenge`
- `POST /recommendations/{recommendationId}/revise`

### Decision Record APIs

- `POST /decisions/{decisionId}/commit`
- `GET /decisions/{decisionId}/record`
- `POST /decision-records/{recordId}/amendments`

### Memory APIs

- `GET /decisions/{decisionId}/related-decisions`
- `GET /memory/search`

### Analytics APIs

- `POST /analytics/events`
- `GET /analytics/decision-quality`

---

## API Requirements

- All write APIs must enforce authorization.
- State transition APIs must validate lifecycle rules.
- Reasoning APIs must preserve run metadata.
- Recommendation APIs must preserve AI-generated and human-reviewed states.
- Commitment APIs must require required governance fields.

---

## Decision

Freeze these API boundaries as product-level API design.

Detailed request and response schemas are deferred to implementation planning.
