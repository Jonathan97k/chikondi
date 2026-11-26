---
name: tokha-qa-release
description: Verify Tokha Creations website changes, investigate build failures, protect production, and prepare reliable preview releases.
---

# Tokha QA and release discipline

Use before declaring any task complete and before every deployment.

## Required workflow
1. Confirm the target branch, current commit, production baseline, and intended deployment target.
2. Review the exact diff. Reject unrelated changes and any unauthorized design changes.
3. Run available checks: lint, TypeScript/build, and relevant feature tests.
4. Inspect the preview deployment's build logs and wait for a final READY or ERROR state.
5. Open the preview URL and test the affected route and critical user flow.
6. Check browser/runtime errors and verify responsive behavior for UI changes.
7. Confirm production remains untouched unless the user explicitly authorized a production deployment.

## For the YouTube library
- Verify the API route with missing and valid configuration.
- Confirm channel resolution, uploads playlist lookup, page-token pagination, and normalized response data.
- Confirm embedded playback stays on the Tokha website.
- Confirm no API key is visible in client requests, page source, client bundles, or responses.
- Check failure states for invalid key, quota exhaustion, no uploads, and videos that cannot be embedded.
- Verify the existing Music and other Media Room functions still work.

## Build-failure investigation
- Read the full build log and identify the first actionable error, not just the final "build exited" line.
- Classify the failure (configuration, dependency install, compile, TypeScript, prerender, runtime, or deployment).
- Inspect the exact source line and relevant framework docs.
- Make the smallest typed correction; do not silence errors or disable checks.
- Commit the fix to the working branch and inspect the new deployment from start to finish.

## Release safety
- Preview deployment is the default verification target.
- Never promote, alias, or deploy to production without explicit user authorization.
- Do not call a deployment "done" while it is building, failed, or untested.
- Do not confuse an older successful production deployment with a newer preview.
- Record the exact commit, preview URL, state, routes tested, and remaining limitations.

## Completion report
State clearly:
- What changed.
- What checks were run and their actual results.
- Preview deployment state and URL, if available.
- Whether production changed.
- Required environment variables or user-provided assets.
- Remaining limitations or next action.
