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
