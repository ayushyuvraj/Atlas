# Wireframes

## Document Status

**Layer:** 8 - Experience Design
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 6 information architecture and Layer 7 user stories.
**Purpose:** Define low-fidelity screen structures for the MVP.

---

## Wireframe 1 - Home

```text
+--------------------------------------------------------------+
| Atlas                                      Search   Profile   |
+----------------------+---------------------------------------+
| Navigation           | Active Decisions                      |
| - Home               |                                       |
| - Decisions          | [Create Decision]                     |
| - Templates          |                                       |
| - Memory             | Table: Decision, Owner, Status, Risk  |
| - Insights           |                                       |
| - Administration     | Program Health / Recent Activity      |
+----------------------+---------------------------------------+
```

### Purpose

Give users a quick view of active decisions, status, ownership, and next actions.

---

## Wireframe 2 - New Decision Wizard

```text
+--------------------------------------------------------------+
| New Decision                                                 |
+--------------------------------------------------------------+
| Step 1: Select Template                                      |
| [Strategic Investment Decision]                              |
|                                                              |
| Step 2: Essential Fields                                     |
| Title                                                        |
| Decision Statement                                           |
| Business Objective                                           |
| Decision Owner                                               |
| Review Date                                                  |
|                                                              |
| [Cancel]                                      [Create]       |
+--------------------------------------------------------------+
```

### Purpose

Create a Decision Workspace with minimal friction.

---

## Wireframe 3 - Decision Workspace

```text
+--------------------------------------------------------------+
| Decision Title                         Status: Reasoning      |
+----------------------+---------------------------------------+
| Lifecycle             | Decision Summary                      |
| 1 Initiated           | Objective, Owner, Deadline, Priority  |
| 2 Context             |                                       |
| 3 Framing             | Tabs                                  |
| 4 Reasoning           | Context | Evidence | Assumptions     |
| 5 Review              | Scenarios | Risks | Recommendation  |
| 6 Commit              |                                       |
+----------------------+---------------------------------------+
| Memory Panel          | Main Workspace Content                |
| Related decisions     |                                       |
| Lessons               |                                       |
+----------------------+---------------------------------------+
```

### Purpose

Keep the Decision as the organizing object and make lifecycle status visible.

---

## Wireframe 4 - Reasoning Canvas

```text
+--------------------------------------------------------------+
| Reasoning Canvas                                             |
+--------------------------------------------------------------+
| Context Summary                                              |
+----------------+----------------+----------------------------+
| Assumptions    | Scenarios      | Risks                      |
| Confidence     | Impact         | Severity                   |
| Status         | Tradeoffs      | Mitigation                 |
+----------------+----------------+----------------------------+
| [Run Reasoning] [Request Revision] [Generate Recommendation] |
+--------------------------------------------------------------+
```

### Purpose

Present structured reasoning outputs without turning the product into a chat interface.

---

## Wireframe 5 - Executive Recommendation

```text
+--------------------------------------------------------------+
| Executive Recommendation                                     |
+--------------------------------------------------------------+
| Recommended Option                                           |
| Confidence                                                   |
| Key Rationale                                                |
| Top Risks                                                    |
| Open Questions                                               |
+--------------------------------------------------------------+
| Expandable Detail                                            |
| Evidence | Assumptions | Alternatives | Tradeoffs | Trace    |
+--------------------------------------------------------------+
| [Request Revision]                         [Commit Decision] |
+--------------------------------------------------------------+
```

### Purpose

Give executives concise output first, with inspectable detail available on demand.

---

## Wireframe 6 - Decision Record

```text
+--------------------------------------------------------------+
| Decision Record                                              |
+--------------------------------------------------------------+
| Final Decision                                               |
| Owner                                                        |
| Approver                                                     |
| Budget / Resources                                           |
| Timeline                                                     |
| Success Metrics                                              |
| Accepted Risks                                               |
| Review Date                                                  |
+--------------------------------------------------------------+
| Rationale                                                    |
| Evidence Links | Assumptions | Scenarios | Recommendation    |
+--------------------------------------------------------------+
```

### Purpose

Preserve final rationale as a reusable institutional asset.

---

## Decision

Freeze these wireframes as low-fidelity MVP screen structures.
