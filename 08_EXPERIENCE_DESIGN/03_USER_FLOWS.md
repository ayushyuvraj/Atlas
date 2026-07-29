# User Flows

## Document Status

**Layer:** 8 - Experience Design
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 6 lifecycle and Layer 7 requirements.
**Purpose:** Define the MVP user flows that the interface must support.

---

## Flow 1 - Create a Decision

```text
Home
  ->
New Decision
  ->
Select Template
  ->
Enter Essential Fields
  ->
Assign Owner and Stakeholders
  ->
Create Decision Workspace
```

### Required Screens

- Home
- New Decision Wizard
- Template Selection
- Decision Workspace

### Design Notes

- Keep setup short.
- Ask only for fields required to create the workspace.
- Let users add deeper context after creation.

---

## Flow 2 - Build Context Brief

```text
Decision Workspace
  ->
Context Brief
  ->
Add Evidence
  ->
Review AI Summary
  ->
Mark Context Ready
```

### Required Screens

- Decision Workspace
- Context Brief panel
- Evidence Explorer

### Design Notes

- Show missing context clearly.
- Distinguish human-entered evidence from AI-generated summaries.
- Make evidence confidence visible.

---

## Flow 3 - Run Institutional Reasoning

```text
Decision Workspace
  ->
Run Reasoning
  ->
Review Assumptions
  ->
Review Scenarios
  ->
Review Tradeoffs
  ->
Review Risks
  ->
Generate Recommendation
```

### Required Screens

- Reasoning Canvas
- Assumption Map
- Scenario Comparison
- Tradeoff Matrix
- Risk Assessment
- Executive Recommendation

### Design Notes

- Reasoning should feel structured, not chat-based.
- Show progress while reasoning is running.
- Allow users to inspect each reasoning output separately.

---

## Flow 4 - Challenge and Revise Recommendation

```text
Executive Recommendation
  ->
Challenge Assumption or Evidence
  ->
Add Comment or New Evidence
  ->
Re-run Relevant Reasoning
  ->
Update Recommendation
```

### Required Screens

- Executive Recommendation
- Review Activity
- Evidence Explorer
- Reasoning Canvas

### Design Notes

- Challenges should be visible and traceable.
- Revisions should not erase prior reasoning without a trace.

---

## Flow 5 - Commit Decision Record

```text
Executive Recommendation
  ->
Commit Decision
  ->
Confirm Owner, Metrics, Risks, Timeline
  ->
Create Decision Record
  ->
Store in Decision History
```

### Required Screens

- Executive Recommendation
- Decision Commitment panel
- Decision Record
- Decision History

### Design Notes

- Committing a decision should feel deliberate.
- Required fields should prevent incomplete governance.
- Final record should be easy to review later.

---

## Decision

Freeze these flows as the MVP interaction sequence for Atlas.
