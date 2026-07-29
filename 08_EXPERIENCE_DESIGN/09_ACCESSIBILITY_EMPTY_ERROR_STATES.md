# Accessibility, Empty States, and Error States

## Document Status

**Layer:** 8 - Experience Design
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 7 non-functional requirements and UI/UX accessibility guidance.
**Purpose:** Define usability quality requirements for accessible, resilient Atlas screens.

---

## Accessibility Requirements

Atlas should meet baseline enterprise accessibility expectations:

- Sufficient color contrast for text and status indicators.
- Visible focus states.
- Keyboard navigability for primary flows.
- Form labels that remain visible.
- Error messages near the affected field.
- Tables with clear headers.
- Icons paired with labels or accessible names.
- Status conveyed by text, not color alone.
- Motion that respects reduced-motion preferences.

---

## Empty States

### Empty Active Decisions

**State:** No active decisions exist.
**Message Goal:** Invite user to create first Decision Workspace.
**Primary Action:** Create Decision.

---

### Empty Context Brief

**State:** No context has been added.
**Message Goal:** Explain what context is needed before reasoning.
**Primary Action:** Add Evidence.

---

### Empty Evidence

**State:** No evidence items exist.
**Message Goal:** Explain that recommendations become stronger when evidence is added.
**Primary Action:** Add Evidence Item.

---

### Empty Institutional Memory

**State:** No related prior decisions are available.
**Message Goal:** Avoid implying memory failure; explain that memory improves as decisions are captured.
**Primary Action:** Continue Without Prior Decision.

---

### Empty Recommendation

**State:** Recommendation has not been generated.
**Message Goal:** Show readiness requirements.
**Primary Action:** Run Reasoning or Complete Missing Inputs.

---

## Error States

### Missing Required Field

Show field-level message and prevent progression.

### Insufficient Evidence

Allow continuation only with visible confidence warning.

### AI Reasoning Failed

Preserve user work, show retry, and allow manual continuation.

### Unauthorized Action

Explain the required permission level and provide a non-destructive path back.

### Conflicting Inputs

Surface conflict clearly and prompt user to resolve or acknowledge.

### Attempted Decision Record Edit

Require governed amendment rather than silent overwrite.

---

## Decision

Freeze this accessibility, empty-state, and error-state model for the MVP.
