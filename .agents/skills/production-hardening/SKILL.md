---
name: production-hardening
description: Yorkstead production hardening procedure for a specified task and repository.
---

# Production hardening

## Inputs

Read AGENTS.md, the active spec/plan/tasks, docs/verification.md and CURRENT.md. Identify task scope, platform owner and risk.

## Procedure

For production-facing changes, check externalized secrets, safe defaults, failure behavior, timeouts, retries, logging, health checks, least privilege, monitoring, and rollback/recovery.

## Verification

Run the relevant documented checks; map the outcome to acceptance criteria. Distinguish passes, failures, skipped and manual checks. Do not deploy or perform destructive operations without authorization.

## Handoff

Record findings, evidence, unresolved risks and the next action in the task and CURRENT.md. Request independent review where required by the shared contract.
