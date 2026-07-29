# Repository Standards

## Purpose

Define how the Enterprise Decision OS repository is organized so every artifact has a clear location, purpose, and relationship to the frozen Flagship AI Product Program.

## Governing Source

The governing document is:

- `00_PROGRAM/01_FLAGSHIP_PROGRAM.md`

If there is a conflict between repository structure and the frozen program, the frozen program wins unless the user explicitly approves a program amendment.

## Folder Structure

```text
00_PROGRAM/
01_CAPABILITY_MAPPING/
02_DISCOVERY/
03_STRATEGY/
04_CUSTOMER/
05_DECISION_SCIENCE/
06_PRODUCT_SYSTEM/
07_PRD/
08_DESIGN/
09_ENGINEERING/
10_BUSINESS/
11_VALIDATION/
12_BUILD/
13_LAUNCH/
14_PROFESSIONAL_NARRATIVE/
15_PLATFORM_EXPANSION/
16_THOUGHT_LEADERSHIP/
99_ARCHIVE/
```

## File Naming Rules

- Use numbered uppercase snake case for canonical artifacts inside each layer folder.
- Use Markdown for source-of-truth documents.
- Use clear layer prefixes for folders.
- Avoid duplicate versions in different locations.
- Keep source inputs in `00_PROGRAM/INPUTS/`.

Numbered file format:

```text
01_ARTIFACT_NAME.md
02_NEXT_ARTIFACT.md
03_NEXT_ARTIFACT.md
```

The number reflects the recommended reading order within the folder.

Examples:

- `01_CAPABILITY_MAPPING/02_CAPABILITY_MATRIX.md`
- `02_DISCOVERY/01_OPPORTUNITY_DISCOVERY.md`
- `03_STRATEGY/PRODUCT_STRATEGY.md`
- `07_PRD/PRD.md`
- `11_VALIDATION/PRODUCT_REVIEW_BOARD.md`

## Source of Truth Rules

- Markdown files are the working source of truth.
- Word/PDF exports may be created later, but they are not canonical.
- The dashboard must reflect current status.
- Decision, risk, assumption, and changelog updates must happen as work progresses.

## Traceability Rules

Every major artifact should link back to:

- The program layer it belongs to.
- The decision or assumption it depends on.
- The product or operating capability it helps demonstrate.
- Any related review or Red Team critique.

## Archive Rules

Use `99_ARCHIVE/` for superseded artifacts only when preserving them helps show product evolution.

Do not delete meaningful historical work unless it was created in error.

