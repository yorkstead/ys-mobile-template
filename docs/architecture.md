# Mobile architecture and package decisions

## Compatibility decision (2026-10-20)

Registry latest Expo is SDK 58, but stable NativeWind 4.2.7 documents its tested consumer on SDK 57. Use the latest patch of that compatible SDK family (Expo 57.0.30) with React 19.2.3, React Native 0.86.3, Reanimated 4.5.1 and Worklets 0.10.1 from Expo's published tabs template and bundledNativeModules.json. NativeWind 4.2.7 pairs with react-native-css-interop 0.2.7 and Tailwind 3.4. NativeWind 5 remains a release candidate and is not installed. This choice preserves a documented stable combination; it does not claim physical-device verification.

Official sources consulted through their Git repositories because direct documentation hosts were blocked:

- [Expo SDK 57 template](https://github.com/expo/expo/tree/sdk-57/templates/expo-template-tabs) and published expo-template-tabs@57.0.32 package.
- [NativeWind v4 SDK 57 guidance](https://github.com/nativewind/nativewind/blob/nativewind%404.2.7/EXPO_SDK_57.md): keep nativewind/preset, nativewind/babel and withNativeWind; Reanimated 4 requires Worklets.
- [Expo development builds](https://docs.expo.dev/develop/development-builds/introduction/).
- [EAS profiles](https://docs.expo.dev/build/eas-json/) and [Update configuration](https://docs.expo.dev/eas-update/getting-started/).

Lockfile pins resolved package versions. Use `npx expo install --check` to detect native version drift. Update Expo-native modules together using `npx expo install`; do not fix peer conflicts with legacy-peer-deps or force. ESLint 9 is retained for compatibility with the current Expo/Next plugin ecosystem despite the registry deprecation warning; revisit when those plugins support ESLint 10.

## Boundaries

- app/: routes and orchestration; no secrets or backend implementation.
- src/components/: accessible View/Text/Pressable primitives and safe-area Screen.
- src/features/: local project query, validated profile form and lightweight preferences. Replace local data with a real API only as an explicit feature.
- src/lib/api.ts: HTTPS origin validation, relative request paths, abort signal and unknown JSON responses; feature schemas own parsing.
- src/lib/session.ts: SecureStore operations on native; web use fails explicitly until a cookie-based session design exists.

TanStack Query caches server-shaped data; Zustand stores local preferences only. React Hook Form and Zod implement actual form validation. NativeWind powers native styling; theme selection follows the device by default and can be overridden in Settings. Native safe areas, minimum 48-point controls, scalable text and accessibility labels are used; screen-reader/device audits remain required.

No hosted database, payment provider, production auth, token refresh or fake credentials are included. Add integrations under a specification covering threat boundaries, error handling, privacy and rollback.

## Test runner compatibility

The online Expo SDK57 dependency check in GitHub CI requires Jest ~29.7.0 and @types/jest 29.5.14. The starter pins Jest 29.7.0 and those types rather than using the newer Jest30 family. The offline bundled-native check does not cover every remotely recommended development dependency; keep the online CI check.
