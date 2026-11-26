"use client";

import { useEffect, useState } from "react";

type Video = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  embedUrl: string;
};

type FeedResponse = {
  configured?: boolean;
  channelTitle?: string;
  videos?: Video[];
  nextPageToken?: string | null;
  error?: string;
};

export default function YouTubeChannelVideos() {
  const [feed, setFeed] = useState<FeedResponse | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/youtube")
      .then((response) => response.json())
      .then((data: FeedResponse) => { if (active) setFeed(data); })
      .catch(() => { if (active) setFeed({ error: "The video library could not be reached. Please try again later." }); });
    return () => { active = false; };
  }, []);

  async function loadMore() {
    if (!feed?.nextPageToken || loadingMore) return;
    setLoadingMore(true);
    try {
      const response = await fetch(`/api/youtube?pageToken=${encodeURIComponent(feed.nextPageToken)}`);
      const data: FeedResponse = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to load more videos.");
      setFeed((current) => current ? {
        ...current,
        videos: [...(current.videos ?? []), ...(data.videos ?? [])],
        nextPageToken: data.nextPageToken,
      } : data);
    } catch {
      setFeed((current) => current ? { ...current, error: "More videos could not be loaded. Please try again." } : current);
    } finally {
      setLoadingMore(false);
    }
  }

  if (!feed) return <div className="py-16 text-center text-sm text-white/60">Connecting to the Tokha video library…</div>;

  if (!feed.configured) return (
    <div className="rounded-xl border border-dashed border-[#f5c400]/40 bg-[#f5c400]/[.04] p-8 text-center sm:p-12">
      <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#f5c400]">Tokha video library</p>
      <h2 className="mt-4 font-serif text-3xl sm:text-4xl">The channel will live here.</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">Connect the official TOKHA CREATIONS YouTube channel and its public uploads will appear here automatically. Visitors will be able to watch each video without leaving this website.</p>
    </div>
  );

  if (feed.error) return <p role="status" className="rounded-lg border border-white/15 p-6 text-sm text-white/70">{feed.error}</p>;

  const videos = feed.videos ?? [];
  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-5">
        <div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#f5c400]">{feed.channelTitle ?? "TOKHA CREATIONS"}</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Videos from the channel</h2></div>
        <span className="text-xs text-white/45">{videos.length} videos loaded</span>
      </div>
      {selectedVideo && (
        <div className="mb-10 overflow-hidden rounded-xl border border-[#f5c400]/30 bg-[#141d15]">
          <div className="aspect-video bg-black"><iframe key={selectedVideo.id} src={selectedVideo.embedUrl + "?autoplay=1&rel=0"} title={selectedVideo.title} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>
          <div className="flex flex-wrap items-start justify-between gap-3 p-5 sm:p-7"><div><h3 className="font-serif text-2xl">{selectedVideo.title}</h3><p className="mt-2 max-w-3xl whitespace-pre-line text-sm leading-6 text-white/55">{selectedVideo.description}</p></div><button onClick={() => setSelectedVideo(null)} className="rounded-full border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white/70 hover:border-[#f5c400]">Close player</button></div>
        </div>
      )}
      {videos.length === 0 ? <p className="py-12 text-center text-sm text-white/55">No public videos were found on this channel yet.</p> : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <button key={video.id} onClick={() => { setSelectedVideo(video); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="group overflow-hidden rounded-xl border border-white/10 bg-[#141d15] text-left transition hover:-translate-y-1 hover:border-[#f5c400]/60">
              <div className="relative aspect-video overflow-hidden bg-black"><img src={video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute inset-0 flex items-center justify-center bg-black/15"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5c400] text-xl text-[#10160f] shadow-xl">▶</span></span></div>
              <div className="p-4"><h3 className="line-clamp-2 font-semibold leading-6 text-white">{video.title}</h3><p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">{video.publishedAt ? new Date(video.publishedAt).toLocaleDateString() : "TOKHA CREATIONS"}</p></div>
            </button>
          ))}
        </div>
      )}
      {feed.error && <p role="status" className="mt-5 text-sm text-white/60">{feed.error}</p>}
      {feed.nextPageToken && <div className="mt-10 text-center"><button onClick={loadMore} disabled={loadingMore} className="rounded-full border border-[#f5c400]/60 px-7 py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#f5c400] transition hover:bg-[#f5c400] hover:text-[#10160f] disabled:opacity-50">{loadingMore ? "Loading…" : "Load more videos"}</button></div>}
    </div>
  );
}
