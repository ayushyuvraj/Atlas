# Definition of Done

## Purpose

Define what must be true before any major artifact, milestone, or layer can be considered complete.

## Artifact Definition of Done

An artifact is done when:

1. It has a clear purpose.
2. It belongs to a program layer.
3. It uses the standard documentation structure where applicable.
4. It reflects frozen decisions from the prior chat and program architecture.
5. It identifies assumptions and open questions.
6. It includes alternatives and tradeoffs where relevant.
7. It has gone through Red Team Review.
8. Material Red Team feedback has been addressed or logged as a risk.
9. The dashboard has been updated.
10. The decision log, assumption register, risk register, gaps tracker, or changelog have been updated where relevant.

## Layer Definition of Done

A layer is done when:

1. All deliverables listed in `FLAGSHIP_PROGRAM.md` exist.
2. Each deliverable has at least draft content.
3. Required reviews are complete.
4. Open risks are logged.
5. The dashboard reflects the layer status.
6. The next layer is clearly identified.

## Freeze Criteria

An artifact can be marked Frozen only when:

- It is aligned with `FLAGSHIP_PROGRAM.md`.
- It does not contradict frozen product decisions.
- It has passed Red Team Review.
- It does not contain unresolved critical objections.
- Any remaining limitations are explicitly documented.

## Change Criteria After Freeze

Frozen artifacts should not be casually changed.

They may be updated only if:

- New evidence invalidates a material assumption.
- The user explicitly approves a revision.
- The change is recorded in the changelog.
- The decision log is updated if the change affects direction.

