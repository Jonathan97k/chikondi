---
name: tokha-youtube-library
description: Build and maintain Tokha Creations' automatic YouTube channel video library with in-page playback, secure API access, pagination, and resilient loading states.
---

# Tokha YouTube video library

Use whenever working on the Tokha YouTube channel connection, video library, media room, embeds, or video discovery.

## Product requirements
- Every publicly available video in the official Tokha Creations YouTube channel's uploads should appear automatically in the website library.
- Visitors must be able to watch videos inside the website, without being redirected to YouTube for normal playback.
- Use YouTube's official embedded player, preferably the privacy-enhanced `youtube-nocookie.com` embed host.
- Do not download, mirror, or self-host YouTube videos. YouTube remains the video host/player provider.
- Preserve the current site's visual design when integrating the library.

## Channel configuration
Use server-side environment variables:
- `YOUTUBE_CHANNEL_URL`: official channel URL, handle URL, or channel ID.
- `YOUTUBE_API_KEY`: Google API key with YouTube Data API v3 enabled.

Never expose the API key to client-side code, browser HTML, public runtime config, or logs. Do not commit actual keys. Document variable names and setup steps in project docs.

## Data retrieval
1. Resolve the configured channel to a channel ID and its uploads playlist ID using YouTube Data API v3.
2. Fetch playlist items with a bounded page size (up to the API maximum of 50).
3. Return normalized fields only: video ID, title, description, publication date, thumbnail URL, and safe embed URL.
4. Support pagination using YouTube's `nextPageToken`; do not silently stop after the first page.
5. Validate page tokens and never accept arbitrary embed URLs from untrusted clients.
6. Filter malformed items without failing the entire page.
7. Handle quota exhaustion, invalid API keys, missing channel, deleted/private videos, and upstream outages with clear user-safe states.
8. Cache channel metadata longer than playlist contents where appropriate; make cache lifetimes explicit and documented.

## Playback
- Construct embed URLs only from validated YouTube video IDs.
- Use an iframe with a descriptive title, lazy loading where suitable, and appropriate `allow` permissions and `referrerPolicy`.
- Playback must remain inside the Tokha website.
- Explain honestly that YouTube controls availability, advertisements, embedding permissions, age/region restrictions, and player behavior.
- Provide a graceful fallback if a video cannot be embedded; do not imply that all private, deleted, age-restricted, region-restricted, or embedding-disabled videos can be played.

## User experience
- Include loading, empty/unconfigured, error, and retry states.
- Make the selected video clear and allow visitors to close the player and return to the library.
- Keep pagination/load-more behavior accessible and predictable.
- Ensure keyboard navigation, iframe title, visible focus, responsive aspect ratio, and useful thumbnail alt text.
- Do not invent video titles, thumbnails, descriptions, or channel details.

## Verification
Test:
- A valid channel handle and a channel ID.
- A channel with zero uploads and a channel with multiple pages.
- Missing configuration and invalid API key.
- Upstream failure/quota response.
- Video selection, in-page playback, close, and load-more.
- Mobile and desktop layout.
- Confirm the API key is absent from all client responses and built client assets.

Do not claim the library is connected until the official channel URL and valid API key have been configured and real channel data has been verified.
