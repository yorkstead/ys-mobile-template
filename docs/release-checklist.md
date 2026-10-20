# Release checklist

- [ ] Active spec, plan, tasks and handoff agree.
- [ ] Run `yorkstead:check` through the project's package manager.
- [ ] Run every required command in `docs/verification.md`; record failures, skips and manual checks separately.
- [ ] Review security and data boundaries; obtain independent review for substantial or high-risk work.
- [ ] Confirm environment requirements without exposing values.
- [ ] Where applicable, record database migration status and recovery limits.
- [ ] Record platform smoke checks: web/auth/commerce or native Android/iOS as appropriate.
- [ ] Document release authorization, rollback trigger and recovery path. Do not deploy without authorization.
- [ ] Point `docs/handoffs/CURRENT.md` to the next exact action.
