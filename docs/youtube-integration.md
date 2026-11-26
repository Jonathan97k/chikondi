# Tokha Creations YouTube video library

The Watch tab at `/play` reads the official channel's uploads playlist through a server-side Next.js route and embeds selected videos with YouTube's privacy-enhanced player. The existing page design is retained.

## Vercel environment variables

Set these on the Vercel project that serves the public Tokha website:

- `YOUTUBE_CHANNEL_URL`: the official channel URL (for example, a `youtube.com/@handle` or `youtube.com/channel/UC...` link).
- `YOUTUBE_API_KEY`: a Google Cloud API key with YouTube Data API v3 enabled. Keep this as a server-only variable; do not prefix it with `NEXT_PUBLIC_`.

Redeploy after adding the variables. The API key is used only by `app/api/youtube/route.ts`; it is never returned to the browser.

## Behaviour

- The channel's uploads playlist is discovered automatically.
- Up to 50 videos are loaded per request, with a Load more control for subsequent pages.
- Selecting a video opens an embedded player on the Tokha website.
- The API response is cached briefly to reduce YouTube Data API quota use.
- Only videos accessible through the channel's public uploads playlist can be listed. Private, deleted, age-restricted, region-restricted, or embedding-disabled videos may not play for every visitor.
- YouTube controls its player, advertising, availability, and embedding policies.

## Setup still required

The official channel URL and API key must be added as Vercel environment variables before the live library can populate. No channel URL or credentials have been assumed.
