---
name: tokha-accessibility-seo-performance
description: Improve Tokha Creations' accessibility, discoverability, and performance without changing its approved visual design or adding unnecessary infrastructure.
---

# Tokha accessibility, SEO, and performance

Apply when adding pages, media, metadata, images, navigation, forms, or other visitor-facing functionality.

## Accessibility
- Use semantic landmarks, headings in logical order, descriptive link text, and labels for every form control.
- Ensure keyboard access, visible focus, sensible focus order, and no keyboard traps.
- Provide meaningful alt text for informative images; use empty alt text for decorative images.
- Give embedded media descriptive titles and ensure controls are understandable without relying on color alone.
- Respect reduced-motion preferences when adding motion; do not remove existing approved motion without authorization.
- Check text contrast while retaining the existing brand palette. If contrast is insufficient, propose the smallest brand-consistent correction and seek approval before altering approved colors.

## SEO and sharing
- Give every public page a unique, accurate title and description.
- Use canonical URLs and social sharing metadata consistently with the deployed domain.
- Use descriptive headings and crawlable page content; do not hide important copy only inside client-rendered interactions.
- Add structured data only when the facts are verified and the schema genuinely applies.
- Do not fabricate ratings, reviews, opening hours, awards, addresses, organization details, or event dates.
- Ensure sitemap and robots behavior matches which pages are public.

## Performance
- Prefer optimized responsive images and explicit dimensions/aspect ratios to reduce layout shift.
- Lazy-load below-the-fold images and embeds when appropriate.
- Avoid autoplaying large media or downloading video files.
- Keep client JavaScript limited to interactive components.
- Use caching deliberately and avoid caching personalized data publicly.
- Avoid adding large dependencies or infrastructure without a demonstrated need.
- Check mobile network performance and avoid unnecessarily large assets; the site should remain usable on constrained connections.

## Verification checklist
- Inspect metadata for each public page.
- Check mobile and desktop rendering.
- Test keyboard-only navigation and screen-reader-relevant labels.
- Check image sizing, layout shifts, console errors, and failed network requests.
- Review page weight and avoid loading third-party scripts until needed where practical.
- Verify all claims and structured data against supplied facts.
