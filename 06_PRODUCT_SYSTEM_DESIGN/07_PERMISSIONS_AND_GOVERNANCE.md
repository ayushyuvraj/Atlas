# Permissions and Governance

## Document Status

**Layer:** 6 - Product System Design
**Version:** v1.0
**Status:** Frozen
**Source:** Reconstructed from prior Flagship Project chat and Layer 4 buying committee.
**Purpose:** Define product-level permissions, accountability, and governance rules before technical security design.

---

## Governance Principle

Atlas handles strategic decision information.

The product must therefore distinguish:

- Who can view
- Who can contribute
- Who can challenge
- Who can recommend
- Who can approve
- Who can amend
- Who can archive

---

## Role Model

| Role | Typical User | Permissions |
| --- | --- | --- |
| Workspace Admin | Governance or platform owner | Manage workspace settings, users, templates, and permissions |
| Decision Owner | Accountable business owner | Create, edit, submit, commit, and review decisions |
| Executive Sponsor | Senior executive | Review recommendations, approve decisions, request changes |
| Contributor | Functional stakeholder | Add evidence, assumptions, comments, and perspective |
| Analyst | Strategy or portfolio user | Prepare decision workspace, run reasoning, draft recommendations |
| Reviewer | Risk, finance, legal, product, operations | Review specific sections and provide challenge |
| Viewer | Read-only stakeholder | View permitted decision artifacts |

---

## Permission Rules

1. Only authorized users can view strategic decision workspaces.
2. Every Decision must have one accountable owner.
3. Contributors can add evidence or comments but cannot commit final decisions.
4. AI-generated recommendations require human review before commitment.
5. Committed Decision Records should be immutable except through governed amendment.
6. Outcome Reviews should be linked to the original Decision Record.
7. Institutional Learning should distinguish system-generated suggestions from human-approved learning.

---

## Governance Events

The product should preserve a record of:

- Decision creation
- Evidence added
- Assumptions changed
- Reasoning session run
- Recommendation generated
- Human challenge added
- Decision committed
- Decision amended
- Outcome reviewed
- Learning artifact approved

---

## Accountability Model

| Action | Accountable Party |
| --- | --- |
| Define decision | Decision Owner |
| Validate evidence | Human contributor or reviewer |
| Generate recommendation | System, with human review |
| Approve decision | Authorized human approver |
| Own outcome | Decision Owner |
| Approve institutional learning | Governance owner or decision owner |

---

## Decision

Freeze this product-level permissions and governance model.

Technical identity, access control, audit logs, and deployment security belong in Layer 9 Technical Architecture.

---

## Open Questions

- Which roles are required in MVP?
- Should approval workflows be configurable in V1?
- What audit detail is required for enterprise-grade deployment?
