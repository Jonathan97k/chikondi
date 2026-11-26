# Tokha Creations YouTube video library

The Watch tab at `/play` reads the official channel's uploads playlist through a server-side Next.js route and embeds selected videos with YouTube's privacy-enhanced player. The existing page design is retained.

## Vercel environment variables

The official channel URL supplied by founder Chikondi Simple Chagoma is already configured in the Vercel project:

- `YOUTUBE_CHANNEL_URL=https://youtube.com/@simplechicco`

One additional variable is required:

- `YOUTUBE_API_KEY`: a Google Cloud API key with YouTube Data API v3 enabled. Add it in the Vercel project environment settings for Production, Preview, and Development. Keep it server-only; do not prefix it with `NEXT_PUBLIC_` and do not commit it to the repository.

Redeploy after adding the API key. The key is used only by `app/api/youtube/route.ts`; it is never returned to the browser.

## Behaviour

- The channel's uploads playlist is discovered automatically.
- Up to 50 videos are loaded per request, with a Load more control for subsequent pages.
- Selecting a video opens an embedded player on the Tokha website.
- The API response is cached briefly to reduce YouTube Data API quota use.
- Only videos accessible through the channel's public uploads playlist can be listed. Private, deleted, age-restricted, region-restricted, or embedding-disabled videos may not play for every visitor.
- YouTube controls its player, advertising, availability, and embedding policies.

## Current setup status

The channel URL is configured. The library remains in its unconfigured state until a valid `YOUTUBE_API_KEY` is added and a preview deployment verifies real channel data and playback.
