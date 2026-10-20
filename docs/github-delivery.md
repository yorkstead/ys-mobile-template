# GitHub delivery

The local mobile implementation is on feat/yorkstead-mobile-starter. Repository creation and template settings returned HTTP 403 Resource not accessible by integration. This is a GitHub App permission limit, not missing Git authentication.

An owner must create a private empty yorkstead/ys-mobile-template repository and grant the integration access. The local repository includes a minimal main baseline so the implementation can be reviewed as a PR. After access is granted, from this checkout run:

```sh
git push -u origin main feat/yorkstead-mobile-starter
gh pr create --repo yorkstead/ys-mobile-template --base main --head feat/yorkstead-mobile-starter --title "Add Yorkstead Expo mobile starter" --body-file docs/mobile-pr.md
```

Do not merge automatically. If the owner initializes remote main separately, reconcile its baseline without overwriting owner changes before opening the PR. Enable Use as template on all three application repositories after review. No private repository was made public.

Existing PRs:

- https://github.com/yorkstead/yorkstead-project-template/pull/1
- https://github.com/yorkstead/ys-base-template/pull/1
- https://github.com/yorkstead/ys-commerce-template/pull/1
