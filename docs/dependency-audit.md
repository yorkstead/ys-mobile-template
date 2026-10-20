# Dependency audit — 2026-10-20

Command: `npm audit --json`. Result: findings remain; this is not a clean security audit or production release approval.

73 affected package entries: 53 high, 20 moderate, 0 critical. These are propagated package entries, not 73 distinct root advisories.

Root advisories include braces pattern stack exhaustion, postcss-selector-parser selector complexity, decode-uri-component malformed input decoding, node-forge signature verification, sprintf-js precision handling and uuid buffer bounds. Most propagated entries are Metro/Jest/Expo build tooling, but router decoding and updates/signature tooling also deserve review before release. Registry latest braces (3.0.3), node-forge (1.4.0) and sprintf-js (1.1.3) are still in affected ranges as of this audit. Some fixes require changes outside Expo57/NativeWind4 compatibility ranges; npm suggestions include historical/incompatible parent downgrades. No forced audit fix or unsupported SDK/plugin override was applied. NativeWind5 is a release candidate, not a safe untested security upgrade.

Do not run audit fix --force or disable integrity/TLS checks to produce a green result. Review reachability, upstream patches and supported upgrade paths before release. Re-run the audit because advisories and registry availability change. Keep development tooling bound to trusted inputs and localhost. Existing functioning dependencies were not replaced for preference alone.
