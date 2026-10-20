# EAS Build, Submit and Update

No remote project or release is created by installing this template. EAS operations require your Expo account, organization access and Apple/Google signing/store configuration. Never commit credentials or signing files.

1. Set your own app name, slug, scheme, Android package and iOS bundle identifier in app.json.
2. With explicit project authorization, use the current EAS CLI: `npx eas-cli@latest login`, then `npx eas-cli@latest init` to link your own project. Review the generated `extra.eas.projectId`; do not copy an upstream project ID.
3. `eas.json` defines development (internal dev client), simulator (iOS simulator), preview (internal) and production profiles with matching update channels. For an authorized build use `npx eas-cli@latest build --profile development --platform android` or `--platform ios`. Local native builds use `npm run android` / `npm run ios` and require platform SDKs.
4. Updates are disabled by default. When authorized, run `npx eas-cli@latest update:configure`; it writes the real update URL and project ID. Set updates.enabled=true after reviewing those fields. The appVersion runtime policy requires a new app version/binary for native compatibility changes. Channels isolate development, preview and production; they do not replace runtime compatibility.
5. With a linked project and authorized binaries, `npx eas-cli@latest submit --profile production --platform android` (or ios) uses the Submit profile and prompts for your own store configuration. Submission may incur account requirements; it is not part of local verification.
6. Publish updates only with explicit release authorization using the intended channel, e.g. `npx eas-cli@latest update --channel preview --message "Reviewed preview"`. Do not run update or submit from PR CI.

Before a release, test native startup, theme, deep links, form validation, safe areas, offline/failure states and secure session behavior on both platforms. Record binary/runtime version, rollback channel/update strategy and signing ownership in the project profile. Local exports are bundle validation, not signed native builds or proof of store readiness.
