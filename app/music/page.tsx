import Link from "next/link";

export default function MusicPage() {
  return (
    <div className="bg-[#eee9dd] text-[#20251f]">
      <section className="bg-[#171d18] px-6 py-20 text-[#f4efe4] sm:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">The sound · Artist portfolio</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[.98] tracking-tight sm:text-7xl lg:text-8xl">Music that<br /><em className="text-[#c9a96c]">speaks from the roots.</em></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#d7d3c8]">A dedicated space for Chikondi’s music, releases, listening links and the ideas behind each body of work.</p>
          <figure className="mt-12 overflow-hidden rounded-sm">
            <img src="https://images.unsplash.com/photo-1746211991067-9877b87601a3?auto=format&fit=crop&w=1800&q=85" alt="Temporary Rastafarian music-gathering stock photograph; not Chikondi" className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]" />
            <figcaption className="mt-2 text-[9px] uppercase tracking-[.18em] text-[#c9a96c]">Temporary Rastafarian music photography · Unsplash · Not Chikondi</figcaption>
          </figure>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Discography</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">The catalogue.</h2></div><div className="border-y border-[#d2cbbb] py-8"><p className="text-sm leading-7 text-[#686b61]">Official release titles, artwork, track listings, credits and streaming destinations will appear here once Chikondi’s approved catalogue and links have been supplied. No releases or credits are being invented for this portfolio.</p><p className="mt-5 text-xs font-semibold uppercase tracking-[.18em] text-[#92713d]">Catalogue awaiting approved materials</p></div></div>
        <div className="mt-16 bg-[#20271f] p-8 text-[#f1eee5] sm:p-12"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">Performance & collaboration</p><h2 className="mt-4 font-serif text-4xl">Bring the sound to your project.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#d0d0c5]">For performance availability, music collaborations and related enquiries, use the official inquiry route.</p><Link href="/hire" className="mt-7 inline-flex bg-[#c9a96c] px-6 py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#171d18]">Make an inquiry ↗</Link></div>
      </section>
    </div>
  );
}