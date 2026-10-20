Add a native Expo SDK57/React Native starter with Expo Router tabs and nested routes, stable NativeWind4/Tailwind3 styling, safe areas, light/dark/device themes, a validated local profile form, TanStack Query/Zustand examples, HTTPS API and native SecureStore boundaries, EAS profiles and the shared Yorkstead workflow. No backend, auth provider, fake credentials or remote Expo project is provisioned.

Validation: clean npm ci, lint/format/strict types, 6 unit/component tests, 2 tooling tests, Android/iOS/web exports, and browser navigation/form/theme/direct-reload smoke checks pass. Bundled SDK dependency metadata aligns; live Expo API validation is network-blocked. Native compilation/devices/signing/EAS remain unverified. Dependency audit findings remain and are documented for release review; no forced incompatible upgrades were applied.

Independent review fixed static dynamic-route enumeration and bottom safe-area coverage. No deployment or store submission was performed.
