# Yorkstead Engineering Constitution

**Version:** 1.1.0 | **Ratified:** 2026-10-20

## Principles

### I. Behavior before implementation

Every material product change begins with a specification covering user value, boundaries, acceptance criteria, and non-goals.

### II. Preserve existing behavior

Project work preserves current architecture and behavior unless the active specification explicitly authorizes a change. Prefer additive, reversible changes.

### III. Verification is part of the change

No task is complete until relevant checks pass and the agent records what was verified, what was not, and why.

### IV. Small slices, resumable state

Tasks must be independently verifiable and safely pausable. Repository artifacts, not chat history, carry project state.

### V. Least privilege and safe data handling

Secrets stay out of source control. Database and production operations require explicit checks, recovery awareness, and authorization.

### VI. Provider-neutral collaboration

ChatGPT/Codex, Claude Code, Gemini CLI, and GitHub Copilot are interchangeable workers. The repository is the shared control plane.

## Governance

Changes to these principles require a dated pull request, rationale, compatibility review, and version increment.
