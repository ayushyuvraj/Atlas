# AI Interaction Patterns

## Document Status

**Layer:** 8 - Experience Design
**Version:** v1.0
**Status:** Frozen
**Source:** Derived from Layer 5 Decision Science, Layer 7 AI Behavior Specification, and Layer 8 UX principles.
**Purpose:** Define how users interact with AI inside the Atlas experience.

---

## AI Interaction Principle

AI should appear as structured reasoning embedded in the workflow, not as a generic chat interface.

Users should experience AI as:

- Context summarizer
- Assumption challenger
- Scenario analyst
- Risk reviewer
- Recommendation drafter
- Memory retriever

not as:

- Autonomous decision maker
- Conversational oracle
- Hidden black box
- Approval authority

---

## Pattern 1 - Generated Context Summary

### Trigger

User adds evidence or context.

### AI Response

AI creates a structured Context Brief summary.

### UX Requirements

- Label as AI-generated.
- Show source evidence.
- Let user edit or approve summary.
- Show missing context.

---

## Pattern 2 - Assumption Suggestions

### Trigger

User requests reasoning or reviews a decision frame.

### AI Response

AI suggests assumptions that may influence the decision.

### UX Requirements

- Show confidence.
- Show why each assumption matters.
- Allow user to accept, reject, edit, or challenge.

---

## Pattern 3 - Scenario Comparison

### Trigger

User compares alternatives.

### AI Response

AI evaluates options using consistent dimensions.

### UX Requirements

- Present as structured table.
- Avoid long prose first.
- Link scenario outputs to assumptions and evidence.
- Show missing evidence warnings.

---

## Pattern 4 - Recommendation Draft

### Trigger

Context, assumptions, scenarios, tradeoffs, and risks are sufficient for recommendation.

### AI Response

AI generates an executive-ready recommendation.

### UX Requirements

- Lead with recommendation and confidence.
- Show alternatives considered.
- Show risks and open questions.
- Require human review before commitment.

---

## Pattern 5 - Challenge and Revision

### Trigger

User challenges evidence, assumption, risk, or recommendation.

### AI Response

AI revises only the relevant reasoning area or explains why a revision is not possible.

### UX Requirements

- Preserve the challenge history.
- Show what changed.
- Do not silently overwrite prior reasoning.

---

## Pattern 6 - Institutional Memory Suggestion

### Trigger

Decision resembles prior decisions.

### AI Response

AI suggests related decisions and explains relevance.

### UX Requirements

- Show why the prior decision is relevant.
- Show differences from current decision.
- Avoid implying prior outcomes automatically predict current outcomes.

---

## Decision

Freeze these AI interaction patterns for Atlas MVP experience design.
