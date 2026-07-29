# Internal Documentation

## Document Status

**Layer:** 12 - Build
**Version:** v0.1
**Status:** Active
**Purpose:** Explain how the MVP is structured for future contributors and reviewers.

---

## MVP Structure

```text
atlas-mvp/
    package.json
    index.html
    vite.config.ts
    tsconfig.json
    src/
        App.tsx
        demoData.ts
        main.tsx
        reasoningEngine.ts
        styles.css
        types.ts
    tests/
        reasoningEngine.test.ts
```

---

## Key Files

| File | Responsibility |
| --- | --- |
| `src/App.tsx` | Product interface, workflow state, dashboard, workspace, recommendation, and Decision Record views |
| `src/reasoningEngine.ts` | Deterministic Institutional Reasoning Engine implementation |
| `src/demoData.ts` | Demo strategic investment decision data |
| `src/types.ts` | Product domain types |
| `src/styles.css` | Enterprise-focused visual system and responsive layout |
| `tests/reasoningEngine.test.ts` | Reasoning engine tests |

---

## Product Workflow Implemented

The MVP supports:

1. Active decision dashboard
2. Decision Workspace
3. Reasoning module review
4. Executive recommendation
5. Explicit human commitment
6. Decision Record
7. Institutional learning summary

---

## Reasoning Engine

The MVP implements deterministic reasoning modules:

- Context
- Evidence
- Assumptions
- Perspectives
- Scenarios
- Tradeoffs
- Risks
- Recommendation
- Learning

This mirrors the Layer 9 AI architecture while avoiding live model dependency in the first build.

---

## Current Limitations

- No live AI provider integration
- No authentication
- No persistent backend
- No real enterprise integrations
- No customer data
- No public deployment yet

These are intentional MVP constraints.
