# Yorkstead development contract

Contract version: 1.1.0. Canonical source: https://github.com/yorkstead/yorkstead-project-template.

The canonical repository owns the development methodology, not an application framework. Web, commerce, and mobile starters retain their own dependencies, lockfiles, architecture, deployment targets, and native conventions.

## Shared contract

- `.specify/memory/constitution.md` defines the six engineering principles.
- Each active feature lives in `specs/<number>-<slug>/` with `spec.md`, `plan.md`, and `tasks.md`. Examples live in `specs/examples/` and are never active work.
- `AGENTS.md` is the single instruction entry point. Provider adapters link to it, the constitution, profile, handoff, and active specification; they do not duplicate platform rules.
- `docs/handoffs/CURRENT.md` names the active feature, task, verification, blockers, and next exact action. Session-start and session-end records make interrupted work resumable.
- `docs/verification.md` lists executable checks, required manual checks, and external prerequisites. A skipped check is not a pass.
- `scripts/yorkstead-check.mjs` validates the contract; `scripts/yorkstead-init.mjs` creates a draft feature without replacing existing work.
- Shared skill names and procedures remain consistent. Platform skills are additive and take precedence within their domain.

## Adaptation and updates

Copy shared templates, scripts, provider adapters, workflow guidance, and Yorkstead skills. Merge existing instructions; never replace a platform's AGENTS.md or `.agents/skills/` wholesale. Customize the project profile, verification commands, CI, release checks, architecture notes, and environment instructions. Keep framework ownership boundaries authoritative. Record the contract version and canonical source in this document.

Update through a reviewed pull request: compare canonical changes, retain project-specific additions, run scaffold tests and all application checks, and record migration risks. Do not automatically overwrite downstream files. A version is a compatibility marker, not a promise of byte-identical documentation.

## Roles and risk

Choose by capability and repository context across Codex, Claude Code, Gemini CLI, and Copilot. Keep one active implementer per task. Substantial changes and security, payment, migration, or release work require an independent review; a different provider is optional. Record reviewer findings and disposition. Production changes and destructive actions require explicit authorization; review does not authorize deployment.
