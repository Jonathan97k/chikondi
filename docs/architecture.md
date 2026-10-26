# Architecture & Technical Design - Chikondi Website

## 1. Stack Overview
- **Framework:** Next.js 16 (App Router) with TypeScript strict mode.
- **Styling:** Tailwind CSS with design tokens (`--charcoal`, `--gold`, `--cream`, `--green`, `--body`, `--muted`, `--border`).
- **Database & Auth:** Supabase PostgreSQL (Row Level Security default-deny with explicit public published-read policies) and Supabase Auth.
- **Testing:** Vitest (unit/integration) and Playwright (E2E).

## 2. Directory Structure
- `app/`: Next.js App Router pages (`/`, `/about`, `/music`, `/writing`, `/production`, `/hire`, `/community`, `/contact`, `/press`, `/privacy`, `/terms`, `/safeguarding`, `/admin/...`).
- `components/`: Modular UI components (`layout/`, `ui/`, etc.).
- `lib/`: Shared utilities, validation schemas, and database clients.
- `supabase/`: Database migrations.
- `docs/`: Project specifications, architecture notes, open questions, and QA reports.

## 3. Security & Access Control
- Public routes read published and approved content only.
- Drafts, private records, and inquiries require server-side authentication and role authorization.
- Admin CMS access restricted to authorized role profiles; no public registration.
