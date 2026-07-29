# Security and Identity

## Document Status

**Layer:** 9 - Technical Architecture
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 6 permissions and Layer 7 non-functional requirements.
**Purpose:** Define MVP security, identity, and access control architecture.

---

## Security Principle

Strategic decision data is sensitive by default.

Atlas must treat Decision Workspaces, evidence, recommendations, and Decision Records as confidential enterprise data.

---

## Identity Model

MVP identity model:

- Authenticated user
- Workspace membership
- Role assignment
- Decision-specific permissions

Future enterprise identity:

- SSO
- SCIM provisioning
- Conditional access
- Enterprise identity provider integration

---

## Role Model

| Role | Permissions |
| --- | --- |
| Workspace Admin | Manage workspace, users, and settings |
| Decision Owner | Create, manage, and commit assigned decisions |
| Executive Sponsor | Review and approve final decision |
| Contributor | Add evidence, assumptions, comments, and challenges |
| Reviewer | Review outputs and comment |
| Viewer | Read assigned decision content |

---

## Access Control Requirements

- Users can access only assigned workspaces.
- Decision access can be restricted by membership or role.
- Only authorized users can commit Decision Records.
- AI-generated content cannot be marked as approved without human action.
- Committed Decision Records require governed amendment.

---

## Security Controls

MVP should include:

- Authentication
- Authorization checks on all write actions
- Role-based access control
- Audit logging
- Input validation
- Secure storage of sensitive data
- Clear separation of user-entered and AI-generated content

Future hardening should include:

- Encryption key management strategy
- Enterprise SSO
- Data retention controls
- Tenant isolation review
- Security review process
- Compliance mapping

---

## Audit Events

Audit log should capture:

- User login
- Decision creation
- Evidence addition or edit
- Assumption update
- Reasoning run
- Recommendation generation
- Challenge submission
- Decision commitment
- Record amendment
- Permission change

---

## Decision

Freeze this security and identity model as MVP security architecture.

Layer 12 build can implement a practical subset while preserving the model.
