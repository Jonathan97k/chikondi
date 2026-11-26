import { NextRequest, NextResponse } from "next/server";

type YouTubePlaylistResponse = {
  items?: Array<{
    snippet?: {
      title?: string;
      description?: string;
      publishedAt?: string;
      thumbnails?: Record<string, { url?: string }>;
      resourceId?: { videoId?: string };
    };
  }>;
  nextPageToken?: string;
};

function channelLookup(url: string) {
  const value = url.trim();
  const handle = value.match(/youtube\.com\/@([^/?#]+)/i);
  const channelId = value.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]+)/i);
  if (handle) return { forHandle: handle[1] };
  if (channelId) return { id: channelId[1] };
  if (/^UC[a-zA-Z0-9_-]+$/.test(value)) return { id: value };
  if (/^@?[a-zA-Z0-9._-]+$/.test(value)) return { forHandle: value.replace(/^@/, "") };
  return null;
}

export async function GET(request: NextRequest) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelUrl = process.env.YOUTUBE_CHANNEL_URL;
  if (!apiKey || !channelUrl) {
    return NextResponse.json({ configured: false, videos: [] }, { status: 200 });
  }

  const lookup = channelLookup(channelUrl);
  if (!lookup) {
    return NextResponse.json({ error: "The configured YouTube channel URL is not recognized." }, { status: 400 });
  }

  try {
    const channelParams = new URLSearchParams({
      part: "contentDetails,snippet",
      key: apiKey,
    });
    if ("forHandle" in lookup) channelParams.set("forHandle", lookup.forHandle);
    else channelParams.set("id", lookup.id);

    const channelResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?${channelParams}`, {
      next: { revalidate: 3600 },
    });
    if (!channelResponse.ok) {
      return NextResponse.json({ error: "YouTube could not verify this channel. Check the channel link and API key." }, { status: 502 });
    }
    const channelData = await channelResponse.json();
    const channel = channelData.items?.[0];
    const uploadsPlaylistId = channel?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) {
      return NextResponse.json({ error: "The YouTube channel or its public uploads could not be found." }, { status: 404 });
    }

    const playlistParams = new URLSearchParams({
      part: "snippet",
      playlistId: uploadsPlaylistId,
      maxResults: "50",
      key: apiKey,
    });
    const pageToken = request.nextUrl.searchParams.get("pageToken");
    if (pageToken) playlistParams.set("pageToken", pageToken);

    const playlistResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?${playlistParams}`, {
      next: { revalidate: 900 },
    });
    if (!playlistResponse.ok) {
      return NextResponse.json({ error: "YouTube could not load the channel videos right now." }, { status: 502 });
    }
    const playlist: YouTubePlaylistResponse = await playlistResponse.json();
    const videos = (playlist.items ?? []).flatMap((item) => {
      const snippet = item.snippet;
      const videoId = snippet?.resourceId?.videoId;
      if (!videoId) return [];
      const thumbnails = snippet?.thumbnails ?? {};
      const thumbnail = thumbnails.maxres?.url ?? thumbnails.high?.url ?? thumbnails.medium?.url ?? thumbnails.default?.url ?? "";
      return [{
        id: videoId,
        title: snippet?.title ?? "Tokha Creations video",
        description: snippet?.description ?? "",
        publishedAt: snippet?.publishedAt ?? "",
        thumbnail,
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
      }];
    });

    return NextResponse.json({
      configured: true,
      channelTitle: channel.snippet?.title ?? "TOKHA CREATIONS",
      videos,
      nextPageToken: playlist.nextPageToken ?? null,
    }, {
      headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" },
    });
  } catch {
    return NextResponse.json({ error: "Unable to connect to the Tokha YouTube channel." }, { status: 500 });
  }
}
