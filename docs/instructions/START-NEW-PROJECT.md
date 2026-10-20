# Start a new project

1. Generate a repository with GitHub **Use this template**, then clone it. Implementation pull requests must be reviewed and merged before the default branch includes the new scaffold.
2. Install the supported runtime/package manager from README. Use npm ci.
3. Configure your own environment from .env.example and README. Never copy another project's hosted credentials or production IDs.
4. Start the application using README and verify the platform's real behavior.
5. Complete docs/project-profile.md with users, outcomes, stack, service ownership and risks.
6. Run `npm run yorkstead:init -- 002-first-feature`; this preserves existing files. Clarify spec.md, write plan.md and independently verifiable tasks.md before implementation.
7. Set the active feature/task in docs/handoffs/CURRENT.md. The shipped 001 standardization spec records template work, not a client feature. Archive its handoff and start your own session.
8. Implement one task at a time, run docs/verification.md, obtain independent review where needed, and synchronize SESSION-END.md and CURRENT.md before stopping.

Provider adapters point to AGENTS.md; platform rules take precedence within their architecture. A scaffold check is not application or production-release verification.
