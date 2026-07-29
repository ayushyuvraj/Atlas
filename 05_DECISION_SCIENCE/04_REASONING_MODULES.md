# Reasoning Modules

## Document Status

**Layer:** 5 - Decision Science
**Version:** v1.0
**Status:** Frozen
**Source:** Reconstructed from prior Flagship Project chat.
**Purpose:** Define the modular reasoning architecture behind the Institutional Reasoning Engine.

---

## Design Decision

Atlas should not expose fixed "agents" as the core product primitive.

The more stable abstraction is:

> Composable Reasoning Modules

Decision templates assemble the modules needed for a specific decision workflow.

---

## Why Modules Instead Of Fixed Agents

Fixed functional agents are easy to understand but hard to scale horizontally.

For example:

- Finance Agent
- Risk Agent
- Product Agent
- Legal Agent
- Operations Agent

These may work in one context, but every industry and decision type creates new functional roles.

Reasoning modules are more durable because they map to how decisions are made, not to a specific org chart.

---

## Core Reasoning Modules

| Module | Question It Answers | Primary Output |
| --- | --- | --- |
| Context Module | What is happening? | Context brief |
| Evidence Module | What do we know and how reliable is it? | Evidence summary |
| Assumption Module | What must be true for this to work? | Assumption map |
| Perspective Module | How do different functions or stakeholders view this? | Perspective analysis |
| Simulation Module | What could happen under different scenarios? | Scenario set |
| Tradeoff Module | What do we gain, lose, or risk? | Tradeoff analysis |
| Risk Module | What could fail and how severe is it? | Risk assessment |
| Recommendation Module | What should be recommended and why? | Executive recommendation |
| Learning Module | What should the organization learn from the outcome? | Learning artifact |

---

## Perspective Module

The Perspective Module is where functional viewpoints appear.

Examples:

- Finance
- Product
- Technology
- Operations
- Risk
- Legal
- Customer
- Market

This module should be configurable by decision template rather than hard-coded into the entire platform.

---

## Decision Templates

Decision templates determine which modules run and which outputs are required.

Examples:

| Template | Likely Modules |
| --- | --- |
| Strategic Investment Review | Context, Evidence, Assumption, Perspective, Tradeoff, Risk, Recommendation |
| Market Entry | Context, Evidence, Perspective, Simulation, Risk, Recommendation |
| Product Portfolio Review | Evidence, Assumption, Perspective, Tradeoff, Recommendation, Learning |
| Transformation Governance | Context, Risk, Tradeoff, Execution, Learning |
| M&A Screening | Evidence, Perspective, Simulation, Risk, Recommendation |

---

## User Experience Principle

Customers should not need to configure reasoning modules manually in the MVP.

The product should expose:

- Decision template
- Guided questions
- Evidence requirements
- Review outputs

The internal module orchestration can remain behind the scenes.

---

## Decision

Freeze composable reasoning modules as the internal reasoning architecture for Atlas.

Layer 6 Product System Design should map these modules to product objects, decision lifecycle states, and workspace surfaces.

---

## Open Questions

- Which modules are required for the first MVP workflow?
- Which module outputs should users see directly?
- Which module outputs should remain system-level metadata?
