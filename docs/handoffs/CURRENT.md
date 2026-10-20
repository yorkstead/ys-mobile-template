# Current handoff

- Date: 2026-10-20
- Branch: fix/vercel-web-export
- Active spec: specs/001-template-standardization/spec.md
- Plan/tasks: same directory, plan.md and tasks.md
- Current task: T004, review and delivery; external validation limitations below remain explicit.
- Primary role: platform implementer (Codex).
- Reviewer: independent read-only review agent; findings and fixes below.

## Verification

- Fresh `npm ci`: passed after regenerating missing AJV lockfile entries; no legacy-peer-deps or force flags used.
- `npm run verify`: passed (contract, lint, formatting, strict types, 6 unit/component tests and 2 tooling regression tests).
- `npm run build`: passed, Android/iOS Hermes bundles and web output including /projects/first-slice.
- Browser smoke with cloud Playwright/Chromium: passed homepage, Home/Settings tabs, invalid-name error, valid local update, dark/device theme controls, nested project navigation and direct route reload; no page errors.
- `EXPO_OFFLINE=1 npx expo install --check`: reports dependencies up to date against bundled SDK metadata; runner warns offline validation is less reliable.
- Online dependency check from this cloud: blocked by proxy access to api.expo.dev. GitHub CI revealed a Jest30 mismatch; Jest29/types are now aligned and CI is being rerun.
- `npm audit --json`: findings remain (53 high, 20 moderate affected package entries, not distinct root advisories); see docs/dependency-audit.md.
- Android/iOS native compilation, simulators/devices, signed builds, EAS publication and store submission: not run; platform SDKs/signing/accounts are not available. Exports do not prove native runtime readiness.

## Review

Independent reviewer inspected shared tooling, CI and platform/secret boundaries. Fixed web ESLint peer mismatch, tracked env-example exception and inherited production-project README assumption. Fixed mobile static-route parameter generation and bottom safe-area coverage. Commerce AGENTS changes are additive and preserve Shopify/Next.js/Eve ownership. Security audit findings remain open for release review.

## Delivery and next exact action

The owner created https://github.com/yorkstead/ys-mobile-template as a public empty repository; visibility was preserved. main and feat/yorkstead-mobile-starter were pushed. PR #1 was merged on GitHub by the owner. The follow-up https://github.com/yorkstead/ys-mobile-template/pull/2 aligns Jest29/types with Expo SDK57 online compatibility recommendations and exposes check failures in annotations. Clean installation and all local verification pass; inspect the follow-up GitHub Actions result before review. Do not merge or deploy automatically.

Setting is_template=true still returns HTTP 403 Resource not accessible by integration. An owner must enable Template repository in Settings.

Before release, resolve the failed/unrun platform and security checks above as applicable. Keep credentials in secure settings or ignored files, never handoffs. No migration, production change, merge, deployment, signed binary or EAS update was performed.

## Deployment investigation

The owner merged PR #2. Base starter main deployed successfully, while commerce and mobile main report Vercel failure statuses. Vercel CLI inspection found no credentials in this cloud, so detailed deployment logs remain unavailable. First failure excerpts were requested from the owner.

The mobile repository lacked an explicit Vercel output contract. This branch adds build:web and vercel.json (Other framework, npm ci --include=dev, web export, dist output, clean URLs). The exact web build and expected home/settings/nested-route HTML outputs pass locally. No direct deployment, merge or production settings change was performed. Review the PR and compare the actual Vercel error before claiming all remote failures resolved.
