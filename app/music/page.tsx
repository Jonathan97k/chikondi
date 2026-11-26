import Image from "next/image";
import Link from "next/link";

export default function MusicPage() {
  return (
    <main className="bg-[#eee9dd] text-[#20251f]">
      <section className="bg-[#171d18] px-6 py-20 text-[#f4efe4] sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">The sound · Artist portfolio</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[.98] tracking-tight sm:text-7xl lg:text-8xl">Music that<br /><em className="text-[#c9a96c]">speaks from the roots.</em></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#d7d3c8]">Explore music and artwork from TOKHA CREATIONS. More approved releases, listening links and credits can be added as the catalogue is confirmed.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[.9fr_1.1fr] lg:px-20 lg:py-20">
        <figure className="overflow-hidden bg-[#20271f] p-3 text-[#f1eee5]"><Image src="/images/simple-chicco-dzinia-lanu-cover.webp" alt="Simple Chicco — Dzinia Lanu cover artwork" width={1200} height={1200} priority sizes="(min-width: 1024px) 42vw, 100vw" className="aspect-square w-full object-cover" /><figcaption className="px-4 py-4"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#c9a96c]">Featured artwork</p><h2 className="mt-2 font-serif text-3xl">Simple Chicco — Dzinia Lanu</h2></figcaption></figure>
        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Discography</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">The catalogue.</h2>
          <p className="mt-6 text-sm leading-7 text-[#686b61]">The supplied Dzinia Lanu artwork is featured here. Official audio, release information, credits and streaming destinations will be added when the artist provides or approves them. No playback or release details are assumed.</p>
          <Link href="/play" className="mt-8 inline-flex w-fit bg-[#20271f] px-6 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-[#f1eee5]">Open the media room ↗</Link>
        </div>
      </section>
      <section className="bg-[#e3ddcf] px-6 py-16 sm:px-12 lg:px-20"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Performance & collaboration</p><h2 className="mt-3 font-serif text-4xl">Bring the sound to your project.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[#686b61]">For performance availability, music collaborations and related enquiries, contact TOKHA CREATIONS.</p></div><Link href="/hire" className="inline-flex w-fit bg-[#20271f] px-6 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-[#f1eee5]">Make an inquiry ↗</Link></div></section>
    </main>
  );
}
