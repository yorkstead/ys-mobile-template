# GitHub delivery

Repository: https://github.com/yorkstead/ys-mobile-template

Implementation PR (merged on GitHub by the owner): https://github.com/yorkstead/ys-mobile-template/pull/1

CI compatibility follow-up: https://github.com/yorkstead/ys-mobile-template/pull/2

The owner created an empty public repository. Its visibility was preserved. The minimal main baseline and feat/yorkstead-mobile-starter implementation branch were pushed without overwriting existing remote content. PR #1 was merged while CI was being checked. Preserve that merge; the Jest/Expo compatibility correction is on fix/expo-dependency-check for separate review.

The GitHub integration still cannot set is_template=true (HTTP 403 Resource not accessible by integration). An owner must enable **Template repository** in repository Settings. Do not merge or deploy automatically.

Other ecosystem PRs:

- https://github.com/yorkstead/yorkstead-project-template/pull/1
- https://github.com/yorkstead/ys-base-template/pull/1
- https://github.com/yorkstead/ys-commerce-template/pull/1

Native/device/signing and hosted-service checks, plus dependency security findings, remain documented in verification and audit reports.
