"use client";

import { useState } from "react";
import Link from "next/link";

type Track = { title: string; type: string; duration: string; src: string | null; cover: string };
type Film = { title: string; category: string; year: string; src: string | null; poster: string; description: string };

const tracks: Track[] = [
  { title: "Featured track", type: "Music", duration: "—:——", src: null, cover: "https://images.unsplash.com/photo-1746211991067-9877b87601a3?auto=format&fit=crop&w=700&q=80" },
  { title: "Track two", type: "Single", duration: "—:——", src: null, cover: "https://images.unsplash.com/photo-1714793625539-da7478f34a43?auto=format&fit=crop&w=700&q=80" },
  { title: "Track three", type: "Roots reggae", duration: "—:——", src: null, cover: "https://images.unsplash.com/photo-1759539648807-43156d225950?auto=format&fit=crop&w=700&q=80" },
];

const films: Film[] = [
  { title: "Featured music video", category: "Music video", year: "Coming soon", src: null, poster: "https://images.unsplash.com/photo-1746211991067-9877b87601a3?auto=format&fit=crop&w=1200&q=85", description: "The official music video will be available here." },
  { title: "Featured film", category: "Film & storytelling", year: "Coming soon", src: null, poster: "https://images.unsplash.com/photo-1759539648807-43156d225950?auto=format&fit=crop&w=1200&q=85", description: "A film project by Chikondi will be presented here." },
  { title: "Behind the scenes", category: "Creative process", year: "Coming soon", src: null, poster: "https://images.unsplash.com/photo-1714793625539-da7478f34a43?auto=format&fit=crop&w=1200&q=85", description: "Studio sessions and production stories will appear here." },
];

export default function PlayPage() {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [selectedFilm, setSelectedFilm] = useState(0);
  const [tab, setTab] = useState<"music" | "video">("music");
  const track = tracks[selectedTrack];
  const film = films[selectedFilm];

  return (
    <main className="min-h-screen bg-[#080e09] text-[#f5f0e5]">
      <section className="relative overflow-hidden border-b border-white/10 px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="absolute inset-0 opacity-25"><img src="https://images.unsplash.com/photo-1746211991067-9877b87601a3?auto=format&fit=crop&w=1800&q=85" alt="" className="h-full w-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080e09] via-[#080e09]/90 to-[#080e09]/55" />
        <div className="relative mx-auto max-w-[1400px]">
          <p className="text-[10px] font-bold uppercase tracking-[.32em] text-[#f5c400]">The Chikondi media room</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[.98] sm:text-7xl lg:text-8xl">Press play.<br/><em className="text-[#f5c400]">Feel the story.</em></h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">Listen to music, watch music videos and explore films and visual stories. This preview shows how Chikondi’s media library will work once his approved files are added.</p>
          <div className="mt-8 inline-flex rounded-full border border-[#f5c400]/40 bg-black/30 p-1">
            <button onClick={() => setTab("music")} className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition ${tab === "music" ? "bg-[#f5c400] text-[#10160f]" : "text-white/75 hover:text-white"}`}>♫ Listen</button>
            <button onClick={() => setTab("video")} className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition ${tab === "video" ? "bg-[#f5c400] text-[#10160f]" : "text-white/75 hover:text-white"}`}>▷ Watch</button>
          </div>
        </div>
      </section>

      {tab === "music" ? (
        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-10 lg:grid-cols-[.9fr_1.1fr] lg:px-16 lg:py-16">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141d15] shadow-2xl">
            <div className="relative aspect-square overflow-hidden">
              <img src={track.cover} alt="Temporary sample music artwork, not an official Chikondi release" className="h-full w-full object-cover opacity-75" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 p-6 text-center">
                <span className="mb-4 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[.2em]">Sample player design</span>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#f5c400] bg-[#f5c400] text-3xl text-[#11170f] shadow-xl">♫</div>
                <p className="mt-5 font-serif text-3xl">{track.title}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[.2em] text-white/70">Official audio pending</p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4"><div><p className="text-sm font-bold">{track.title}</p><p className="mt-1 text-xs text-white/50">{track.type} · TOKHA CREATIONS</p></div><span className="text-xs tabular-nums text-white/50">{track.duration}</span></div>
              <div className="mt-6 h-1.5 rounded-full bg-white/10"><div className="h-full w-0 rounded-full bg-[#f5c400]" /></div>
              <div className="mt-5 flex items-center justify-between text-[10px] text-white/40"><span>00:00</span><span>Audio file not uploaded</span></div>
              <button disabled className="mt-6 w-full cursor-not-allowed rounded-full bg-white/10 px-5 py-4 text-xs font-bold uppercase tracking-[.18em] text-white/40">Playback activates when audio is added</button>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between border-b border-white/15 pb-5"><div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#f5c400]">Listen to TOKHA CREATIONS</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">The music library</h2></div><span className="text-xs text-white/40">03 sample slots</span></div>
            <div className="mt-5 space-y-3">{tracks.map((item, index) => <button key={item.title} onClick={() => setSelectedTrack(index)} className={`flex w-full items-center gap-4 rounded-xl border p-3 text-left transition sm:p-4 ${selectedTrack === index ? "border-[#f5c400]/60 bg-[#f5c400]/10" : "border-white/10 bg-white/[.03] hover:bg-white/[.07]"}`}><span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black/30"><img src={item.cover} alt="" className="h-full w-full object-cover" /></span><span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">{item.title}</span><span className="mt-1 block text-[10px] uppercase tracking-wider text-white/45">{item.type} · Audio placeholder</span></span><span className="text-lg text-[#f5c400]">{selectedTrack === index ? "●" : "▶"}</span></button>)}</div>
            <div className="mt-8 rounded-xl border border-dashed border-[#f5c400]/40 bg-[#f5c400]/[.04] p-5"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#f5c400]">Artist catalogue setup</p><p className="mt-2 text-sm leading-6 text-white/65">Track names, cover artwork, audio files, credits and release details will replace these sample slots after Chikondi approves the website.</p></div>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_.65fr]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141d15]">
              <div className="relative aspect-video bg-black"><img src={film.poster} alt="Temporary sample video thumbnail, not an official Chikondi film" className="h-full w-full object-cover opacity-55" /><div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 p-6 text-center"><span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#f5c400] bg-[#f5c400] text-3xl text-[#11170f]">▶</span><h2 className="mt-5 font-serif text-3xl sm:text-4xl">{film.title}</h2><p className="mt-2 text-[10px] uppercase tracking-[.2em] text-white/65">Video file pending</p></div></div>
              <div className="p-6 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#f5c400]">{film.category}</p><h3 className="mt-2 font-serif text-2xl">{film.title}</h3></div><span className="rounded-full border border-white/15 px-3 py-2 text-[10px] text-white/50">{film.year}</span></div><p className="mt-4 text-sm leading-7 text-white/60">{film.description}</p><p className="mt-5 rounded-lg bg-white/[.05] p-4 text-xs leading-6 text-white/45">The video player will become active when the approved video file or official streaming embed is connected.</p></div>
            </div>
            <div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#f5c400]">Watch & explore</p><h2 className="mt-3 font-serif text-4xl">Films and videos</h2><div className="mt-6 space-y-3">{films.map((item,index)=><button key={item.title} onClick={()=>setSelectedFilm(index)} className={`w-full overflow-hidden rounded-xl border text-left transition ${selectedFilm===index?"border-[#f5c400]/60 bg-[#f5c400]/10":"border-white/10 bg-white/[.03] hover:bg-white/[.07]"}`}><div className="flex gap-3 p-3"><img src={item.poster} alt="" className="h-20 w-28 rounded-lg object-cover" /><span className="min-w-0 self-center"><span className="block text-sm font-semibold">{item.title}</span><span className="mt-1 block text-[10px] uppercase tracking-wider text-white/45">{item.category}</span><span className="mt-2 block text-[10px] text-[#f5c400]">{item.year}</span></span></div></button>)}</div></div>
          </div>
        </section>
      )}

      <section className="border-t border-white/10 bg-[#101810] px-5 py-12 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#f5c400]">A growing creative catalogue</p><h2 className="mt-3 font-serif text-3xl">Music, film and stories in one place.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">This is a sample presentation. Final media, artwork, descriptions and credits will be supplied and approved by the artist.</p></div><Link href="/hire" className="shrink-0 rounded-full bg-[#f5c400] px-6 py-4 text-center text-[10px] font-black uppercase tracking-[.18em] text-[#11170f]">Contact the artist ↗</Link></div></section>
    </main>
  );
}
