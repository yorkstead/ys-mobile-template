# Expo web hosting

Expo's web deployment guide requires `expo export --platform web` and publishing its `dist` output. `vercel.json` makes this explicit for the optional Vercel web target without assuming Next.js or changing the Android/iOS/EAS workflow.

- Framework: Other (`framework: null`).
- Install: `npm ci --include=dev`; Babel and Tailwind are needed to build the static site.
- Build: `npm run build:web`.
- Output: `dist`.
- Clean URLs: exported `/settings.html` and `/projects/first-slice.html` serve `/settings` and `/projects/first-slice` directly. Unknown routes remain 404; do not add a catch-all rewrite to index.html for this static-router export.
- Node.js: 24, matching package.json.

Run `npm run build:web` locally and verify dist/index.html, dist/settings.html, dist/projects/first-slice.html and the referenced web CSS/JS assets. A direct browser reload must render the nested project route. Native `npm run build` still exports all three targets for CI.

No backend variables are required for the default local-data starter. EXPO_PUBLIC_API_URL is optional and public; no secret belongs in web build configuration. Review any existing Vercel dashboard overrides for root directory and Node version; do not modify a production project or deploy as part of diagnosis without authorization. No CLI deployment is needed to validate the local build.

The failing production deployment logs were not accessible from this cloud because no Vercel credentials are configured. This configuration addresses the missing explicit web build/output contract; it is not proof that every remote deployment error is resolved. Compare the first build-log failure with the settings above.

Sources: https://docs.expo.dev/deploy/web/ and Vercel's framework definitions at https://github.com/vercel/vercel/blob/main/packages/frameworks/src/frameworks.ts.
