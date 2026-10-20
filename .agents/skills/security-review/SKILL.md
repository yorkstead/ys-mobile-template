---
name: security-review
description: Yorkstead security review procedure for a specified task and repository.
---

# Security review

## Inputs

Read AGENTS.md, the active spec/plan/tasks, docs/verification.md and CURRENT.md. Identify task scope, platform owner and risk.

## Procedure

Identify trust boundaries and attacker-controlled inputs; check authorization; validate inputs; avoid exposing secrets or personal data in logs; review dependency/configuration impact; record findings by severity and owner.

## Verification

Run the relevant documented checks; map the outcome to acceptance criteria. Distinguish passes, failures, skipped and manual checks. Do not deploy or perform destructive operations without authorization.

## Handoff

Record findings, evidence, unresolved risks and the next action in the task and CURRENT.md. Request independent review where required by the shared contract.
