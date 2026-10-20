---
name: spec-convergence
description: Yorkstead spec convergence procedure for a specified task and repository.
---

# Spec convergence

## Inputs

Read AGENTS.md, the active spec/plan/tasks, docs/verification.md and CURRENT.md. Identify task scope, platform owner and risk.

## Procedure

Compare implementation, tests, and docs with the active spec; map every acceptance criterion to evidence; confirm non-goals remain untouched; resolve drift by updating the spec with rationale or changing the implementation; synchronize statuses and handoff.

## Verification

Run the relevant documented checks; map the outcome to acceptance criteria. Distinguish passes, failures, skipped and manual checks. Do not deploy or perform destructive operations without authorization.

## Handoff

Record findings, evidence, unresolved risks and the next action in the task and CURRENT.md. Request independent review where required by the shared contract.
