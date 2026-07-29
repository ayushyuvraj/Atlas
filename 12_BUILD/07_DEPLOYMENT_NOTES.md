# Deployment Notes

## Document Status

**Layer:** 12 - Build
**Version:** v0.1
**Status:** Active
**Purpose:** Capture local run and deployment preparation notes for the MVP.

---

## Local Access

The MVP is developed under:

```text
12_BUILD/atlas-mvp/
```

Run locally:

```text
npm install
npm run dev
```

Then open:

```text
http://127.0.0.1:3000/
```

---

## Build Verification

Create a production build:

```text
npm run build
```

Run reasoning tests:

```text
npm run test
```

Run dependency audit:

```text
npm audit --audit-level=moderate
```

---

## Public Demo Deployment

Public deployment is part of Layer 13 Launch unless explicitly pulled forward.

Layer 12 should prepare the MVP for deployment but does not need to complete public launch assets.

Current recommendation:

Proceed to public demo deployment only after the user reviews the local MVP and Layer 12 Red Team Review is accepted.
