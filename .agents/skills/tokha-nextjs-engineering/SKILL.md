---
name: tokha-nextjs-engineering
description: Implement and maintain Tokha Creations' Next.js 16 website using minimal, maintainable, accessible changes that respect the existing architecture and design.
---

# Tokha Next.js engineering

Use for all application code changes in this repository.

## First inspect, then implement
- Read the root `AGENTS.md` and relevant project skills.
- Inspect the target page, components, styles, data model, and callers before changing code.
- Check package.json and the installed Next.js version. This project currently uses Next.js 16.4.3, React 19.3, TypeScript, Tailwind CSS 4, and Cache Components.
- Read the matching installed Next.js documentation under `node_modules/next/dist/docs/` before using unfamiliar APIs. Do not rely on outdated Next.js conventions.
- Preserve established naming, component patterns, CSS conventions, and existing behavior.

## Architecture principles
- Keep components small and responsibilities clear.
- Use Server Components by default. Add `"use client"` only when browser interaction or client state is required.
- Keep data access and secrets on the server.
- Validate and normalize external input at route boundaries.
- Give API responses stable, documented shapes and meaningful HTTP status codes.
- Handle loading, empty, error, and success states. Do not leave a silent blank section.
- Use semantic HTML and native controls where possible.
- Avoid adding dependencies for functionality that can be implemented safely with existing packages and platform APIs.
- Avoid unnecessary global CSS or changes to shared components for page-specific features.
- Do not suppress TypeScript errors with `any`, broad casts, or ignored diagnostics to make a build pass. Model the data types correctly.
- Keep environment variables documented in an example file without real secrets.

## Next.js Cache Components
- The project enables Cache Components. Route-segment options such as `dynamic = "force-dynamic"` may conflict with this configuration; check the installed docs before adding route config.
- Use supported fetch caching/revalidation options intentionally.
- Do not cache user-specific or secret-bearing responses publicly.
- Treat URL query parameters and request-dependent values according to the installed Next.js 16 guidance.

## Security
- Never prefix private keys with `NEXT_PUBLIC_`.
- Never return API keys, service-role tokens, private data, or raw upstream errors to the browser.
- Validate pagination tokens and external identifiers.
- Apply sensible timeouts/error handling to upstream requests where supported.
- Avoid logging secrets or personal data.
- Do not trust client-supplied roles or permissions.

## Responsive behavior
- Preserve the approved design at all viewport sizes.
- Test narrow mobile, tablet, and desktop layouts.
- Prevent horizontal overflow, clipped controls, unreadable text, and layout shifts.
- Ensure interactive controls remain keyboard-usable and have visible focus states.

## Completion standard
Run the repository's available lint and production build commands. Resolve every new error introduced by the change. Summarize changed files, tests actually run, known limitations, and any required environment variables. Never claim tests passed unless they were run and passed.
