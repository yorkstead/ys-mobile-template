# Yorkstead mobile starter

Expo Router owns navigation in `app/`; native UI primitives and safe-area layouts live in `src/components/`. Feature data, validation and state live in `src/features/`; infrastructure boundaries live in `src/lib/`. React Native components are authoritative; never import Next.js, DOM components or web shadcn/ui into native screens.

Use Node.js 24, npm and package-lock.json. Expo SDK 57 / React Native 0.86 / React 19.2 and NativeWind 4 / Tailwind 3 form a compatibility set. Consult the official sources in docs/architecture.md before upgrades; use Expo's native dependency resolver. Do not apply NativeWind 5 configuration to v4. Reanimated 4 requires Worklets; native dependency changes require a new development build.

Read `.specify/memory/constitution.md`, docs/yorkstead-contract.md, docs/project-profile.md, docs/verification.md and docs/handoffs/CURRENT.md. Every feature lives in `specs/<number>-<slug>/` with spec.md, plan.md and independently verifiable tasks.md. Start with SESSION-START.md; finish with SESSION-END.md and a precise CURRENT.md next action. One implementer owns each task; substantial or high-risk work gets independent review. Provider adapters refer here rather than copying rules.

Run `npm run yorkstead:init -- 002-feature-name` for a safe draft. Run `npm run verify` and `npm run build` before review. Record native/device checks separately from type checks, Jest and export results. No deployments, EAS publication or production changes without authorization.

TanStack Query owns server data; Zustand holds lightweight in-memory preferences, not sessions. Validate external API responses at the feature boundary. EXPO_PUBLIC_ values ship in binaries and are never secrets. `src/lib/session.ts` uses SecureStore on native and deliberately refuses browser token persistence; use a separately designed HTTP-only cookie flow for web. The starter has no backend, login service or fake signed-in state. Keep sensitive data out of logs and handoffs.
