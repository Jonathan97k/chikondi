"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import YouTubeChannelVideos from "@/components/media/YouTubeChannelVideos";

export default function PlayPage() {
  const [tab, setTab] = useState<"music" | "video">("music");

  return (
    <main className="min-h-screen bg-[#080e09] text-[#f5f0e5]">
      <section className="relative overflow-hidden border-b border-white/10 px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <Image src="/images/tokha-creative-team-wide.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080e09] via-[#080e09]/90 to-[#080e09]/55" />
        <div className="relative mx-auto max-w-[1400px]">
          <p className="text-[10px] font-bold uppercase tracking-[.32em] text-[#f5c400]">TOKHA CREATIONS media room</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[.98] sm:text-7xl lg:text-8xl">Press play.<br/><em className="text-[#f5c400]">Feel the story.</em></h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">Explore music artwork and watch videos from the TOKHA CREATIONS channel. More approved releases and media will be added as they become available.</p>
          <div className="mt-8 inline-flex rounded-full border border-[#f5c400]/40 bg-black/30 p-1">
            <button type="button" onClick={() => setTab("music")} aria-pressed={tab === "music"} className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition ${tab === "music" ? "bg-[#f5c400] text-[#10160f]" : "text-white/75 hover:text-white"}`}>♫ Music</button>
            <button type="button" onClick={() => setTab("video")} aria-pressed={tab === "video"} className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition ${tab === "video" ? "bg-[#f5c400] text-[#10160f]" : "text-white/75 hover:text-white"}`}>▷ Watch</button>
          </div>
        </div>
      </section>

      {tab === "music" ? <section className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-10 lg:grid-cols-[.9fr_1.1fr] lg:px-16 lg:py-16">
        <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#141d15] p-3 shadow-2xl">
          <Image src="/images/simple-chicco-dzinia-lanu-cover.webp" alt="Simple Chicco — Dzinia Lanu cover artwork" width={1200} height={1200} sizes="(min-width: 1024px) 42vw, 100vw" className="aspect-square w-full rounded-xl object-cover" />
          <figcaption className="p-4"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#f5c400]">Featured artwork</p><h2 className="mt-2 font-serif text-3xl">Simple Chicco — Dzinia Lanu</h2><p className="mt-2 text-xs leading-6 text-white/55">Artwork supplied by TOKHA CREATIONS. Audio playback will be added when the approved audio or listening link is available.</p></figcaption>
        </figure>
        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#f5c400]">The music library</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Music & releases</h2>
          <p className="mt-5 text-sm leading-7 text-white/65">This media room features the Dzinia Lanu artwork while the complete music catalogue is being prepared. Track listings, credits, audio files and streaming links will only be published once confirmed by the artist.</p>
          <Link href="/music" className="mt-8 inline-flex w-fit rounded-full bg-[#f5c400] px-6 py-4 text-[10px] font-black uppercase tracking-[.18em] text-[#11170f]">Explore music portfolio ↗</Link>
        </div>
      </section> : <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-10 lg:px-16 lg:py-16"><YouTubeChannelVideos /></section>}

      <section className="border-t border-white/10 bg-[#101810] px-5 py-12 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#f5c400]">Creative catalogue</p><h2 className="mt-3 font-serif text-3xl">Music, film and stories in one place.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">New work and approved media will be added as the catalogue grows.</p></div><Link href="/hire" className="shrink-0 rounded-full bg-[#f5c400] px-6 py-4 text-center text-[10px] font-black uppercase tracking-[.18em] text-[#11170f]">Contact TOKHA ↗</Link></div></section>
    </main>
  );
}
