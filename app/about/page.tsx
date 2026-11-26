import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#eee9dd] text-[#20251f]">
      <section className="bg-[#171d18] px-6 py-20 text-[#f4efe4] sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">Art · Talent · Culture</p>
          <h1 className="mt-6 font-serif text-5xl leading-[.98] sm:text-7xl lg:text-8xl">Meet<br /><em className="text-[#c9a96c]">TOKHA CREATIONS.</em></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#d7d3c8]">A creative movement focused on art, talent, culture and youth empowerment.</p>
          <figure className="mt-12 bg-[#242b23] p-2 sm:p-3">
            <Image src="/images/tokha-creative-team-wide.webp" alt="TOKHA CREATIONS creative team together" width={1800} height={1000} priority sizes="(min-width: 1024px) 80vw, 100vw" className="block !h-auto w-full max-h-none object-contain" />
          </figure>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[1.1fr_.9fr] lg:px-20 lg:py-20">
        <div className="space-y-6">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Our purpose</p>
          <h2 className="font-serif text-4xl sm:text-5xl">Creativity with a shared purpose.</h2>
          <p className="text-base leading-8 text-[#686b61]">Founded by Chikondi Simple Chagoma, TOKHA CREATIONS specializes in music production and promotion, scriptwriting, acting, movie directing and film production. The movement brings these creative disciplines together through a focus on art, talent, culture and youth empowerment.</p>
          <p className="text-sm leading-7 text-[#686b61]">This space will continue to grow with the team’s approved biographies, individual credits and project stories.</p>
          <Link href="/hire" className="inline-flex border-b border-[#92713d] pb-2 text-[10px] font-bold uppercase tracking-[.2em]">Connect with TOKHA ↗</Link>
        </div>
        <figure className="h-fit overflow-hidden bg-[#e3ddcf] p-3">
          <Image src="/images/tokha-creative-team-portrait.webp" alt="TOKHA CREATIONS team portrait" width={1200} height={1500} sizes="(min-width: 1024px) 35vw, 100vw" className="h-auto w-full object-contain" />
          <figcaption className="px-3 py-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#92713d]">The TOKHA CREATIONS team</figcaption>
        </figure>
      </section>
      <section className="bg-[#20271f] px-6 py-16 text-[#f1eee5] sm:px-12 lg:px-20"><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[.7fr_1.3fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">Creative disciplines</p><h2 className="mt-4 font-serif text-4xl">What we do.</h2></div><ul className="grid gap-3 sm:grid-cols-2">{["Music production & promotion","Scriptwriting","Acting","Movie directing","Film production"].map((item) => <li key={item} className="border-b border-white/15 py-4 font-serif text-2xl">{item}</li>)}</ul></div></section>
    </main>
  );
}
