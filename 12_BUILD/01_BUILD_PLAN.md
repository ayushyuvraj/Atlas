# Build Plan

## Document Status

**Layer:** 12 - Build
**Version:** v0.1
**Status:** Active
**Source:** Derived from frozen Layers 7, 8, 9, and 11.
**Purpose:** Define how the Atlas MVP will be implemented without expanding beyond the validated wedge.

---

## Build Objective

Create a working MVP of Atlas, the Enterprise Decision Operating System, focused on Strategic Portfolio & Investment Decision Support.

The MVP must demonstrate one complete product workflow:

```text
Create strategic investment decision
        ->
Review decision context
        ->
Run Institutional Reasoning Engine
        ->
Inspect assumptions, perspectives, scenarios, tradeoffs, and risks
        ->
Generate executive recommendation
        ->
Commit Decision Record
        ->
Show institutional learning
```

The build should prove the product concept, not attempt to replace a full enterprise portfolio management system.

---

## Build Principles

1. Build the narrowest complete workflow.
2. Keep the Decision Workspace as the hero experience.
3. Make reasoning visible, structured, and challengeable.
4. Preserve human accountability for final decisions.
5. Use simulated data honestly and label it as demo data.
6. Avoid production claims that are not yet implemented.
7. Build enough technical credibility to support the architecture narrative.
8. Keep the MVP ready for demo, portfolio review, and future extension.

---

## Repository Structure

Layer 12 will contain both build documentation and the actual MVP application.

```text
12_BUILD/
    01_BUILD_PLAN.md
    02_MVP_SCOPE_LOCK.md
    03_IMPLEMENTATION_LOG.md
    04_AI_WORKFLOWS.md
    05_TESTING_PLAN.md
    06_EVALUATION_RESULTS.md
    07_DEPLOYMENT_NOTES.md
    08_INTERNAL_DOCUMENTATION.md
    09_LAYER_12_RED_TEAM_REVIEW.md

    atlas-mvp/
        package.json
        index.html
        src/
        public/
        tests/
```

---

## Implementation Approach

The first implementation will use a browser-based MVP with a modular frontend and deterministic reasoning engine.

### Rationale

This approach allows the product to demonstrate the core workflow quickly while preserving the architecture for future AI provider integration.

The MVP will not claim live enterprise integrations or autonomous AI decision-making.

---

## MVP Build Increments

### Increment 1 - Application Shell

Create the app shell, navigation, dashboard, and active decision overview.

### Increment 2 - Decision Workspace

Implement the workspace for the strategic investment decision demo path.

### Increment 3 - Reasoning Modules

Implement deterministic reasoning modules that simulate the Institutional Reasoning Engine:

- Context module
- Evidence module
- Assumption module
- Perspective module
- Scenario module
- Tradeoff module
- Risk module
- Recommendation module
- Learning module

### Increment 4 - Executive Recommendation

Create the progressive-disclosure recommendation view with evidence, assumptions, risks, alternatives, and confidence.

### Increment 5 - Decision Record

Allow a user to commit the recommendation into a Decision Record with owner, metrics, accepted risks, and review date.

### Increment 6 - Testing and Evaluation

Validate the application workflow, accessibility basics, reasoning output quality, and responsive layout.

### Increment 7 - Deployment Preparation

Prepare local run instructions and deployment notes for a future public demo.

---

## Non-Goals

Layer 12 will not build:

- Full authentication
- Production permissions
- Real enterprise integrations
- Live model orchestration
- Full workflow automation
- Full portfolio management
- Multi-tenant SaaS infrastructure
- Real customer data ingestion
- Autonomous decision approval

These remain future platform capabilities.

---

## Success Criteria

Layer 12 succeeds when:

1. A user can run the MVP locally.
2. A user can walk through the strategic investment decision workflow.
3. The product demonstrates the Institutional Reasoning Engine through structured modules.
4. The recommendation is explainable and challengeable.
5. The Decision Record can be created from the recommendation.
6. Tests or checks validate the core workflow.
7. Internal documentation explains how the MVP works.
8. Dashboard, changelog, and trackers are updated.
9. Layer 12 Red Team Review confirms readiness to proceed to Layer 13 Launch.

---

## Dependencies

- `07_PRODUCT_DEFINITION/01_PRODUCT_REQUIREMENTS_DOCUMENT.md`
- `07_PRODUCT_DEFINITION/06_AI_BEHAVIOR_SPECIFICATION.md`
- `08_EXPERIENCE_DESIGN/03_USER_FLOWS.md`
- `08_EXPERIENCE_DESIGN/04_WIREFRAMES.md`
- `09_TECHNICAL_ARCHITECTURE/02_SYSTEM_ARCHITECTURE.md`
- `09_TECHNICAL_ARCHITECTURE/03_AI_ARCHITECTURE.md`
- `11_VALIDATION/10_LAYER_11_RED_TEAM_REVIEW.md`

---

## Current Decision

Proceed with a constrained MVP inside `12_BUILD/atlas-mvp/`, using a deterministic reasoning engine for the first build and preserving the architecture for future live AI integration.
