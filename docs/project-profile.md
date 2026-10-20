# Project profile

- Purpose: reusable Android/iOS starter; fill in the generated project's users, value and success measure.
- Stack: Expo SDK 57, React Native 0.86, React 19.2, strict TypeScript, Expo Router, NativeWind 4/Tailwind 3, Reanimated/Worklets, TanStack Query, Zustand, React Hook Form/Zod, SecureStore.
- Runtime/package manager: Node.js 24, npm with package-lock.json.
- Backend/database/auth: none by default; HTTPS API and native SecureStore integration boundaries only.
- Targets: Android and iOS development builds; optional web preview. EAS profiles are configuration, not linked/published services.
- App identity / Expo owner/project / signing owner: configure per project before builds for distribution.
- Verification: docs/verification.md.
- Security: EXPO_PUBLIC_ is public; tokens stay in SecureStore on native; browser auth requires HTTP-only cookies.
- Project-specific decisions, privacy obligations and operational risks: complete before the first client feature.
