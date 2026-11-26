<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Tokha Creations project operating rules

This repository is the Tokha Creations website. Before making changes, read the relevant skills in `.agents/skills/`. Apply the brand-preservation skill to every visual or content task, the implementation skill to code changes, and the QA/release skill before reporting completion.

## Non-negotiable design protection
- Preserve the approved November 5 visual design and the existing Rastafarian identity.
- Do not redesign, restyle, rebrand, rearrange, or replace existing sections, colors, typography, imagery, motion, navigation, or footer unless the user explicitly authorizes that exact change.
- Treat user-supplied assets, copy, and instructions as the scope of authorized changes. Make the smallest change that fulfils the request.
- Do not introduce generic AI-template styling, stock imagery, invented testimonials, fabricated clients, or unsupported claims.
- If a requested feature needs a visual element, integrate it into the existing visual language rather than changing the site-wide design.

## Product direction
Tokha Creations is a creative movement focused on art, talent, culture, and youth empowerment. Its disciplines include music production and promotion, scriptwriting, acting, movie directing, and film production. The website should grow into a complete, owner-manageable platform, delivered in controlled phases.

## Engineering safeguards
- Read the relevant installed Next.js 16.4.3 documentation before using framework APIs. This project enables Cache Components; never add incompatible route-segment configuration.
- Keep secrets server-side. Never expose YouTube API keys, Supabase service credentials, or other secrets in client bundles.
- Prefer server-side integrations and managed media hosting over building unnecessary storage/streaming infrastructure.
- Do not claim a feature works until it has been built, type-checked, tested in its deployed preview, and its important user flows verified.
- Never deploy to production or change production aliases without explicit user authorization.
- Keep changes focused; do not bundle unrelated refactors into a requested feature.
