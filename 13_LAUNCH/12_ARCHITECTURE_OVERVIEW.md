# Architecture Overview

## Document Status

**Layer:** 13 - Launch
**Version:** v1.0
**Status:** Frozen
**Purpose:** Provide a public-facing technical overview of the Atlas MVP.

---

## MVP Architecture

Atlas MVP is implemented as a local browser-based web application.

Current structure:

```text
Browser UI
        ->
Decision Workspace
        ->
Deterministic Institutional Reasoning Engine
        ->
Structured reasoning outputs
        ->
Human commitment
        ->
Decision Record
```

---

## Application Structure

The MVP lives under:

```text
12_BUILD/atlas-mvp/
```

Core implementation files:

- `src/App.tsx`
- `src/reasoningEngine.ts`
- `src/demoData.ts`
- `src/types.ts`
- `src/styles.css`

---

## Reasoning Engine

The MVP includes deterministic modules for:

- Context
- Evidence
- Assumptions
- Perspectives
- Scenarios
- Tradeoffs
- Risks
- Recommendation
- Learning

This mirrors the intended model-agnostic architecture:

```text
Structured input -> reasoning module -> structured output -> human review
```

---

## Why Deterministic First?

The first MVP uses deterministic reasoning because it:

- Keeps demos reliable.
- Avoids API keys and secrets.
- Prevents unsupported claims about live AI quality.
- Allows the product workflow to be evaluated before provider integration.

---

## Future Architecture

Future versions may add:

- Backend persistence
- AI provider adapters
- Enterprise identity
- Integrations
- Audit logging
- Evaluation pipelines
- Multi-user collaboration
