---
name: release-verification
description: Yorkstead release verification procedure for a specified task and repository.
---

# Release verification

## Inputs

Read AGENTS.md, the active spec/plan/tasks, docs/verification.md and CURRENT.md. Identify task scope, platform owner and risk.

## Procedure

Confirm commit, environment, configuration, and migrations; run the full checks and build; execute documented smoke/health checks; record deployed version, time, result, and rollback trigger.

## Verification

Run the relevant documented checks; map the outcome to acceptance criteria. Distinguish passes, failures, skipped and manual checks. Do not deploy or perform destructive operations without authorization.

## Handoff

Record findings, evidence, unresolved risks and the next action in the task and CURRENT.md. Request independent review where required by the shared contract.
