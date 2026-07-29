# Risk Register

## Purpose

This register tracks risks across product, execution, professional narrative, public release, and credibility.

## Risk Template

```text
ID:
Risk:
Category:
Impact:
Probability:
Mitigation:
Owner:
Status:
```

## Current Risks

| ID | Risk | Category | Impact | Probability | Mitigation | Status |
| --- | --- | --- | --- | --- | --- | --- |
| R-001 | Scope becomes too broad and delays execution | Execution | High | Medium | Maintain frozen program architecture and first wedge discipline | Open |
| R-002 | Documentation becomes excessive without producing usable product artifacts | Execution | High | Medium | Tie every artifact to capability matrix and next milestone | Open |
| R-003 | Product sounds too abstract to enterprise buyers | GTM | High | Medium | Sell concrete outcomes: portfolio governance, capital allocation, reduced decision risk | Open |
| R-004 | Lack of real customer interviews weakens credibility | Validation | High | Medium | Clearly label assumptions and create a validation plan | Open |
| R-005 | AI architecture may appear generic if not specified deeply | AI/Product | Medium | Medium | Create AI behavior spec, reasoning modules, and evaluation framework | Open |
| R-006 | Social content becomes performative instead of useful | Thought Leadership | Medium | Medium | Publish milestone-based insights and avoid unsupported claims | Open |
| R-007 | Public narrative may overclaim seniority rather than letting the work speak | Professional Narrative | High | Low | Let artifacts demonstrate capability rather than stating inflated claims | Open |
| R-008 | Directional market sizing may look weak without external numerical support | Market/GTM | Medium | Medium | Keep validation caveat visible and build a numeric model during Business Strategy | Open |
| R-009 | Public GitHub release could expose private source inputs if staging is not inspected | Privacy/Public Release | High | Low | Exclude `00_PROGRAM/INPUTS/`, private file types, and secrets through `.gitignore`; require public release review before staging | Mitigated |
| R-010 | Layer 1 may still read too much like internal scaffolding before public release | Public Narrative | Medium | Medium | Reviewed and reframed `01_CAPABILITY_MAPPING/` as an operating capability framework | Mitigated |
| R-011 | Layer 2 may still foreground internal opportunity-selection scaffolding before public release | Public Narrative | Medium | Medium | Reframed discovery artifacts around product opportunity logic, public demo clarity, and product narrative | Mitigated |
| R-012 | Local narrative strategy or publication-prep files may be accidentally staged | Privacy/Public Release | High | Low | Added local-only narrative and publication-prep patterns to `.gitignore`; public release requires staging inspection | Mitigated |
| R-013 | Layer 3 product strategy may sound abstract if not validated in customer language | GTM/Product Strategy | High | Medium | Anchor messaging in strategic portfolio and investment review workflows; test language in Layer 4, Layer 10, and Layer 11 | Open |
| R-014 | Customer intelligence may be overfit to internal reasoning until validated with primary interviews | Customer Validation | High | Medium | Label Layer 4 as reconstructed; carry validation into Layer 11 and customer interview planning | Open |
| R-015 | Decision science framework may remain conceptual until translated into product behavior and technical architecture | Product/AI | High | Medium | Layer 6 maps IRM, IRE, and reasoning modules into product system behavior; continue translation in Layer 7 PRD and Layer 9 architecture | Partially Mitigated |
| R-016 | Product system scope may exceed MVP if the lifecycle, object model, and screen inventory are not narrowed into a focused demo path | Product Scope | High | Medium | Layer 7 narrows scope through MVP priorities; Layer 8 must now create a focused demo path | Partially Mitigated |
| R-017 | Product definition may still feel dense unless the experience separates executive summary views from operator-level reasoning detail | UX/Product | High | Medium | Layer 8 defines progressive disclosure, executive recommendation views, and operator-level reasoning detail separation | Mitigated at Specification Level |
| R-018 | Experience design may remain too conceptual until translated into clickable prototype or implemented screens | UX/Execution | Medium | Medium | Carry wireframes and design system into later prototype, build, and validation work | Open |
| R-019 | Technical architecture may appear credible on paper but remain unproven until implemented and evaluated in a working MVP | Technical Execution | High | Medium | Carry architecture into Layer 12 build, Layer 11 validation, and the evaluation framework | Open |
| R-020 | Pricing, ROI, and procurement assumptions may not survive buyer validation | Business/GTM | High | Medium | Treat Layer 10 as hypothesis and test during Layer 11 validation with buyer, CFO, procurement, and customer success perspectives | Open |
| R-021 | Build may overreach if the MVP tries to implement the full Enterprise Decision Operating System rather than one focused strategic investment decision workflow | Execution/Product Scope | High | Medium | Constrain Layer 12 to one template, one Decision Workspace, core reasoning outputs, Executive Recommendation, and Decision Record | Open |
