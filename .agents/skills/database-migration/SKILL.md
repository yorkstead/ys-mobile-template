---
name: database-migration
description: Yorkstead database migration procedure for a specified task and repository.
---

# Database migration

## Inputs

Read AGENTS.md, the active spec/plan/tasks, docs/verification.md and CURRENT.md. Identify task scope, platform owner and risk.

## Procedure

Confirm existing schema conventions; make changes forward-safe; consider data, locks, backfills, nullability, and rollback limits; test migration status and a representative upgrade path; require explicit authorization for destructive production operations.

## Verification

Run the relevant documented checks; map the outcome to acceptance criteria. Distinguish passes, failures, skipped and manual checks. Do not deploy or perform destructive operations without authorization.

## Handoff

Record findings, evidence, unresolved risks and the next action in the task and CURRENT.md. Request independent review where required by the shared contract.
