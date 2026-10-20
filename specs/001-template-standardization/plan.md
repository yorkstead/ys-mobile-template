# Implementation plan: template standardization

1. Audit canonical contract, platform instructions, versions, CI and environment handling.
2. Adapt shared contract components additively; keep application/platform guidance authoritative.
3. Add safe initializer and meaningful contract tests. Implement native screens, local data/form examples, UI primitives and API/session boundaries.
4. Run local checks, independent review and diff/secret review; fix introduced errors.
5. Commit on an implementation branch, open a PR where GitHub permissions allow, and record exact blockers otherwise.

## Decisions

Use Node.js 24; preserve existing package managers and application libraries. The mobile starter uses the latest stable SDK family documented by stable NativeWind compatibility guidance, with Expo-resolved native versions. Do not duplicate platform rules in provider adapters.

## Verification and rollback

Run docs/verification.md. Keep hosted-service/device checks distinct from local static and bundle checks. Rollback is a reviewed Git revert; there are no migrations or deployments to reverse.
