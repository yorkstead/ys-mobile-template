---
name: code-change-verification
description: Yorkstead code-change verification procedure for a specified task and repository.
---

# Code-change verification

## Inputs

Read AGENTS.md, the active spec/plan/tasks, docs/verification.md and CURRENT.md. Identify task scope, platform owner and risk.

## Procedure

Read acceptance criteria and changed files; run the narrowest relevant check, then the full required checks in `docs/verification.md`; inspect the diff for scope creep and secrets; record pass/fail evidence and skipped checks.

## Verification

Run the relevant documented checks; map the outcome to acceptance criteria. Distinguish passes, failures, skipped and manual checks. Do not deploy or perform destructive operations without authorization.

## Handoff

Record findings, evidence, unresolved risks and the next action in the task and CURRENT.md. Request independent review where required by the shared contract.
