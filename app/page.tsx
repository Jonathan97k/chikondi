import Link from "next/link";

const pillars = [
  { number: "01", title: "Music", detail: "Original music, releases and the stories behind the sound.", href: "/music", action: "Explore music" },
  { number: "02", title: "Film & Writing", detail: "Screenwriting, story development and visual storytelling.", href: "/writing", action: "Explore stories" },
  { number: "03", title: "Production", detail: "Music, video and creative production collaborations.", href: "/production", action: "View production" },
  { number: "04", title: "About the creator", detail: "The creative journey, values and Rastafari identity—in his own words.", href: "/about", action: "Read the story" },
  { number: "05", title: "Community", detail: "Community care, responsible support and partnership enquiries.", href: "/community", action: "Learn more" },
  { number: "06", title: "Bookings", detail: "Performances, commissions, production work and collaborations.", href: "/hire", action: "Make an inquiry" },
];

const photos = [
  { src: "https://images.unsplash.com/photo-1746211991067-9877b87601a3?auto=format&fit=crop&w=1800&q=90", alt: "Reggae musicians performing together", cls: "chikondi-visual-main" },
  { src: "https://images.unsplash.com/photo-1714793625539-da7478f34a43?auto=format&fit=crop&w=1200&q=85", alt: "Portrait of a Rastafari-inspired musician", cls: "chikondi-visual-portrait" },
  { src: "https://images.unsplash.com/photo-1759539648807-43156d225950?auto=format&fit=crop&w=1200&q=85", alt: "Music production studio scene", cls: "chikondi-visual-studio" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#090f0b] text-[#f4efe4]">
      <section className="chikondi-reference-hero relative isolate min-h-[calc(100svh-5rem)] overflow-hidden">
        <div className="chikondi-hero-collage" aria-hidden="true">
          {photos.map((photo, i) => <div key={photo.cls} className={`chikondi-hero-image ${photo.cls}`}><img src={photo.src} alt="" /><span /></div>)}
          <div className="chikondi-hero-tint" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1600px] flex-col justify-between px-5 pb-6 pt-8 sm:px-10 sm:pb-8 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between gap-3 text-[9px] font-bold uppercase tracking-[.2em] text-white/85 sm:text-xs sm:tracking-[.3em]">
            <span>One love · One people · One Africa</span><span className="hidden sm:block">Reggae · Rastafari · Culture</span>
          </div>
          <div className="grid flex-1 items-center gap-8 py-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-3xl self-center">
              <p className="chikondi-script mb-2 text-3xl text-[#f5c400] sm:text-5xl">Welcome to the world of</p>
              <h1 className="font-serif text-[clamp(4.8rem,13vw,11rem)] font-black leading-[.78] tracking-[-.075em] text-[#fffaf0] drop-shadow-[0_8px_35px_rgba(0,0,0,.55)]">TOKHA CREATIONS</h1>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[.34em] text-white sm:text-sm">Reggae <span className="px-2 text-[#f5c400]">•</span> Rastafari <span className="px-2 text-[#f5c400]">•</span> Culture</p>
              <div className="mt-5 h-[5px] w-64 max-w-full bg-gradient-to-r from-[#e31b23] via-[#f5c400] to-[#168b42]" />
              <p className="mt-6 max-w-xl font-serif text-xl italic text-[#f5c400] sm:text-3xl">Music for peace, love and a better tomorrow.</p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/85 sm:text-base">Reggae, consciousness and positive vibes. Music and creative storytelling that uplift, inspire and unite.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/play" className="inline-flex items-center gap-3 rounded-full bg-[#f5c400] px-7 py-4 text-xs font-black uppercase tracking-wider text-[#11170f] shadow-xl transition hover:-translate-y-1 hover:bg-[#ffe05a]">▶ <span>Listen now</span></Link>
                <Link href="/play" className="inline-flex items-center gap-3 rounded-full border border-white/80 bg-black/20 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur transition hover:border-[#f5c400] hover:bg-white/10">▷ <span>Watch videos</span></Link>
              </div>
            </div>
            <div className="hidden h-full min-h-[360px] items-end justify-end lg:flex">
              <div className="mb-12 max-w-[230px] border-l-2 border-[#f5c400] pl-5 text-right">
                <p className="font-serif text-2xl italic leading-snug text-white">“One love.<br/>One people.<br/><span className="text-[#f5c400]">One Africa.</span>”</p>
                <p className="mt-3 text-[9px] font-bold uppercase tracking-[.25em] text-white/70">Music · Message · Unity</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/25 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[.24em] text-white/70">Artist · Writer · Producer</span>
            <Link href="/music" className="flex items-center gap-4 rounded-full border border-white/25 bg-black/50 px-4 py-3 backdrop-blur-md transition hover:border-[#f5c400] sm:min-w-[300px]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5c400] text-lg text-[#10160f]">♫</span>
              <span className="flex-1"><span className="block text-xs font-bold text-white">Discover the music</span><span className="block text-[10px] text-white/60">Explore releases and listening links</span></span><span className="text-[#f5c400]">↗</span>
            </Link>
            <span className="text-[9px] font-semibold uppercase tracking-[.24em] text-white/70">Malawi · Beyond</span>
          </div>
          <p className="mt-3 text-center text-[9px] text-white/50">Hero imagery is illustrative stock photography, not a verified portrait of Chikondi.</p>
        </div>
      </section>

      <section className="bg-[#090f0b] px-5 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item) => <Link key={item.number} href={item.href} className="group flex min-h-[210px] flex-col rounded-xl border border-white/15 bg-gradient-to-br from-[#202a20] to-[#101711] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#f5c400]/70"><span className="text-xs font-bold tracking-[.25em] text-[#f5c400]">{item.number}</span><h2 className="mt-6 font-serif text-3xl text-white">{item.title}</h2><p className="mt-3 text-sm leading-6 text-white/65">{item.detail}</p><span className="mt-auto flex items-center justify-between pt-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#f5c400]">{item.action}<span className="text-lg transition group-hover:translate-x-2">↗</span></span></Link>)}
        </div>
      </section>

      <section className="bg-[#f0eadc] px-5 py-20 text-[#1b241b] sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-[10px] font-black uppercase tracking-[.3em] text-[#98752e]">The creative journey</p><h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">Rooted in culture.<br/><em className="text-[#98752e]">Moving forward.</em></h2></div><div><p className="max-w-2xl text-base leading-8 text-[#55594f]">Explore Chikondi’s work across music, film storytelling and creative production, alongside a wider commitment to community care.</p><Link href="/about" className="mt-7 inline-flex border-b border-[#98752e] pb-2 text-[10px] font-black uppercase tracking-[.2em]">Discover the story ↗</Link></div></div></section>
    </div>
  );
}
