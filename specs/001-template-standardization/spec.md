# Feature: Yorkstead template standardization

## Status

In progress

## User outcome

A developer can generate an independent project, configure its own services, use one shared specification workflow with any supported coding agent, and resume from repository state without chat history.

## Scope

Normalize the development contract and safe initializer; integrate framework-specific guidance, CI, environment documentation and resumable handoffs. Provide a real Expo Android/iOS starter with Router, NativeWind, local examples, tested UI and API/auth integration boundaries.

Out of scope: deployments, production infrastructure changes, merging PRs, backend/auth service provisioning and real payments.

## Acceptance criteria

- Each active feature contains a spec, plan and independently verifiable tasks; initialization does not overwrite work.
- Codex, Claude Code, Gemini CLI and Copilot resolve the same architecture and handoff records.
- Real documented commands validate the scaffold and mobile UI, domain behavior, types, formatting and native bundles.
- CI runs executable checks with least privilege, safe environment examples and no production deployment.
- Platform architecture and secrets boundaries are documented; external blockers and unrun checks are recorded honestly.
- Review findings, verification evidence and next actions are captured before handoff.

## Constraints, ownership and rollback

One implementer per task; independent review for this substantial change. Platform rules in AGENTS.md remain authoritative. Revert the implementation commit to roll back; no database migration or production state change is part of this feature. Native binaries and EAS services are not published by local export checks.

## Verification evidence

See docs/verification.md and docs/handoffs/CURRENT.md for current outcomes, commands and blockers.
