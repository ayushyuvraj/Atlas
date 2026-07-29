# Security Overview

## Document Status

**Layer:** 13 - Launch
**Version:** v1.0
**Status:** Frozen
**Purpose:** Provide a public-safe security and governance overview for the Atlas MVP.

---

## Current MVP Security Posture

Atlas MVP v0.1 is a local demonstration build.

It uses:

- Demo data only
- No secrets
- No customer data
- No production authentication
- No live enterprise integrations
- No live AI provider keys

---

## Governance Principle

Atlas is designed around the principle:

> AI reasons. Humans decide.

The MVP preserves this principle by requiring explicit user action before creating a Decision Record.

---

## Data Handling

Current MVP:

- Stores demo data in local source files.
- Does not ingest customer data.
- Does not transmit data to external AI providers.
- Does not persist records to a backend service.

---

## Future Production Requirements

A production version would require:

- Enterprise identity and SSO
- Role-based access control
- Audit logging
- Data retention rules
- Secure model gateway
- Encryption in transit and at rest
- Tenant isolation
- Integration security review
- Admin governance controls

---

## Public Claim Boundary

The MVP should not be described as production-secure.

It should be described as:

> A local MVP that demonstrates the product workflow and governance model using demo data.
