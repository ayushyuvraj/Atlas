# Versioning Strategy

## Purpose

Define how versions are handled across program documents, product artifacts, and future releases.

## Program Version

The frozen program architecture is:

**FPOS v1.0**

This version controls the overall project structure and execution architecture.

## Document Versions

Documents should use simple semantic status/version labels:

- `v0.1` - Initial draft
- `v0.2` - Revised draft
- `v0.9` - Review-ready
- `v1.0` - Frozen
- `v1.1` - Minor revision after freeze
- `v2.0` - Major revision after new evidence or strategic change

## Status Labels

Use:

- Draft
- In Review
- Revision Needed
- Frozen
- Superseded

## Changelog Rule

Every meaningful document change should be recorded in:

- `00_PROGRAM/10_CHANGELOG.md`

Major direction changes should also be recorded in:

- `00_PROGRAM/07_DECISION_LOG.md`

## Freeze Rule

When a document reaches `v1.0`, it is frozen as the current source of truth.

Future work should build on it unless new evidence or explicit user direction requires revision.

## Archive Rule

Superseded major versions may be moved to:

- `99_ARCHIVE/`

Only archive when preserving the older version helps show product evolution.


