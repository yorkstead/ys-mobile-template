# Yorkstead Mobile Template

A native Expo / React Native starter for Android and iOS with a shared Yorkstead specification workflow. Based on the Expo tabs template (0BSD; see LICENSE). UI uses React Native primitives and NativeWind, not web components.

## Start a project

1. Create a repository with GitHub **Use this template**, then clone your repository.
2. Install Node.js 24 and run `npm ci`.
3. Copy `.env.example` to `.env.local` if you need an API origin; the default local-data app needs no credentials or hosted service. All EXPO_PUBLIC_ variables are public.
4. Run `npm run web` for a browser smoke check. For the native development workflow, install Android Studio/JDK/SDK or Xcode on macOS, then run `npm run android` or `npm run ios`; these create native development builds. After installing a development client, use `npm start` to restart Metro.
5. Complete [the project profile](docs/project-profile.md), including your own app name, scheme, Android package and iOS bundle ID in app.json. Never release under the starter identifiers.
6. Run `npm run yorkstead:init -- 002-first-feature`. Clarify spec.md, write plan.md, split tasks.md into small verifiable slices, and point docs/handoffs/CURRENT.md to your active feature.
7. Run `npm run verify` and `npm run build`; record task evidence and session handoffs. Repeating initialization never overwrites an existing feature.

## Included behavior

Home and Settings tabs, a nested project route, missing-route/project states, safe-area layouts, system/light/dark appearance, accessible native buttons and form fields, Zod-validated local profile form, TanStack Query local data example, and Zustand in-memory preferences. Loading/error/empty components are implemented and tested. Local examples are explicitly labeled and do not imply an API or account exists.

`src/lib/api.ts` is an HTTPS-only JSON boundary with cancellation and typed errors; validate unknown responses using feature schemas. `src/lib/session.ts` provides native SecureStore helpers for a future authenticated backend; no login service is provisioned. Do not put tokens in Zustand or AsyncStorage. Browser sessions require HTTP-only cookies.

## Verification and delivery

See [verification](docs/verification.md), [architecture and package decisions](docs/architecture.md), [EAS setup](docs/eas.md), and [the Yorkstead contract](docs/yorkstead-contract.md). Codex, Claude Code, Gemini CLI and Copilot use AGENTS.md and repository handoffs as shared state.

EAS Build profiles for development, simulator, preview and production, Submit profile, channels and runtime policy are included. No Expo project ID or signing credentials are invented. Updates are disabled until you link your own EAS project and configure its update URL. Store submission and update publication are separate authorized operations; see docs/eas.md.
