# Mobile verification

Use Node.js 24 and `npm ci`. No hosted backend or credentials are needed for the default local-data starter.

| Check                       | Command                    | Outcome proves                                            |
| --------------------------- | -------------------------- | --------------------------------------------------------- |
| Contract                    | `npm run yorkstead:check`  | Required files/scripts and feature triplets               |
| Lint                        | `npm run lint`             | Expo/React/TypeScript rules                               |
| Format                      | `npm run format:check`     | Consistent source/document formatting                     |
| Types                       | `npm run typecheck`        | Strict TypeScript                                         |
| Unit/components             | `npm test`                 | Profile/API boundaries and native UI interactions         |
| Tooling regression          | `npm run test:yorkstead`   | Safe init, traversal protection and required-file failure |
| Native dependency alignment | `npx expo install --check` | Expo SDK-native package compatibility                     |
| Bundles                     | `npm run build`            | Metro exports Android/iOS/web JavaScript and assets       |

`npm run verify` runs the first six checks. `npm run build` is separate because export is more expensive. Jest executes real assertions; no zero-test or placeholder success scripts.

For a local functional check, run `npm run web -- --host localhost`, request the homepage, and verify navigation, settings theme/form and project routes interactively. For native validation, create development builds with Android Studio or Xcode/macOS (or your own authorized EAS project) and exercise both platforms. Check screen-reader labels, dark/light/device themes, safe areas, keyboard/form errors, deep links, missing projects, offline/error/retry states and native SecureStore before release.

A passing export is not a native compilation, simulator run, device test or EAS publication. Record platform tool/credential blockers and unrun checks in CURRENT.md. No mobile store or hosted credentials are required or fabricated for local tests.

Dependency security findings and compatibility decisions: [audit report](dependency-audit.md). Audit findings remain unresolved and require review before production use.
