import Image from "next/image";
import Link from "next/link";

const releases = [
  {
    number: "01",
    type: "SINGLE · 2026",
    title: "Jah Guidance",
    description:
      "A meditative roots reggae anthem reflecting on spiritual strength, endurance and collective upliftment.",
    tone: "from-[#8b6b37] via-[#332b20] to-[#171a16]",
  },
  {
    number: "02",
    type: "EP · 2025",
    title: "Rising Sun",
    description:
      "A four-track collection exploring cultural heritage, resilience and community solidarity.",
    tone: "from-[#8c4d2c] via-[#39251f] to-[#171a16]",
  },
];

const disciplines = [
  {
    number: "01",
    title: "Music",
    description:
      "Roots reggae, honest lyricism and sound shaped by culture, reflection and spiritual grounding.",
    href: "/music",
    link: "Explore the music",
  },
  {
    number: "02",
    title: "Writing",
    description:
      "Story-led scripts and narrative work built around memorable characters, ideas and human experience.",
    href: "/writing",
    link: "View writing portfolio",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Creative development and production support for projects that deserve care and intention.",
    href: "/production",
    link: "Explore production",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#f1eee5] text-[#20251f]">
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#171b17] text-[#f1eee5] sm:min-h-[760px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_44%,rgba(183,139,65,0.22),transparent_34%),radial-gradient(ellipse_at_20%_85%,rgba(83,105,72,0.24),transparent_40%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="mx-auto flex min-h-[680px] max-w-[1440px] flex-col justify-between px-6 pb-12 pt-10 sm:min-h-[760px] sm:px-12 sm:pb-16 lg:px-20">
          <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr]">
            <div className="max-w-4xl">
              <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#c9a96c]">
                <span className="h-px w-10 bg-[#c9a96c]" /> Stories · Sound · Purpose
              </p>
              <h1 className="font-serif text-[clamp(4.6rem,13vw,11.5rem)] leading-[0.76] tracking-[-0.075em] text-[#f1eee5]">
                CHIKONDI<span className="text-[#c9a96c]">.</span>
              </h1>
              <p className="mt-9 max-w-xl text-base leading-8 text-[#d5d1c6] sm:text-lg">
                Music with roots. Stories with meaning. Creative work guided by truth, culture and a belief in community.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/music" className="bg-[#c9a96c] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#171b17] transition hover:bg-[#e0c58f]">
                  Discover the music <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/about" className="border border-white/30 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f1eee5] transition hover:border-[#c9a96c] hover:text-[#c9a96c]">
                  The story
                </Link>
              </div>
            </div>

            <div className="relative hidden min-h-[300px] items-end justify-end lg:flex">
              <div className="absolute bottom-0 right-0 h-[390px] w-[78%] border border-[#c9a96c]/30" />
              <div className="absolute bottom-8 right-8 h-[330px] w-[78%] bg-gradient-to-br from-[#5b6246] via-[#252c23] to-[#171b17]" />
              <div className="absolute bottom-16 right-16 flex h-[280px] w-[66%] items-center justify-center border border-[#c9a96c]/25 bg-[#1d241d]/70">
                <div className="text-center">
                  <span className="font-serif text-8xl text-[#c9a96c]/80">C</span>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.32em] text-[#e8dfca]/70">Art · Identity · Roots</p>
                </div>
              </div>
              <p className="absolute bottom-0 left-0 max-w-[170px] text-[9px] uppercase leading-5 tracking-[0.22em] text-[#b9b5a9]">An independent creative voice, shaped by purpose.</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/15 pt-5 text-[9px] uppercase tracking-[0.25em] text-[#b9b5a9]">
            <span>Official artist platform</span>
            <span>Scroll to explore <span className="ml-2 text-[#c9a96c]">↓</span></span>
            <span className="hidden sm:block">01 / 04</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-24 sm:px-12 lg:grid-cols-[.75fr_1.25fr] lg:px-20 lg:py-32">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#92713d]">A little about the artist</p>
          <h2 className="mt-5 max-w-md font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl">Rooted in <em className="text-[#92713d]">culture.</em><br />Driven by purpose.</h2>
        </div>
        <div className="max-w-2xl lg:pt-9">
          <p className="text-lg leading-9 text-[#55594f]">
            Chikondi brings together music, screenwriting and community-minded creative work. Guided by Rastafari principles of truth, unity and upliftment, his work aims to connect with people and leave something meaningful behind.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-4 border-b border-[#92713d] pb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#20251f] hover:text-[#92713d]">
            Get to know Chikondi <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="bg-[#e5e0d4] py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#92713d]">Selected releases</p>
              <h2 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">The sound.</h2>
            </div>
            <Link href="/music" className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5b604f] hover:text-[#92713d]">Full music catalogue ↗</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {releases.map((release) => (
              <article key={release.number} className="group grid min-h-[270px] grid-cols-[38%_1fr] overflow-hidden border border-[#d2cbbb] bg-[#f1eee5]">
                <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${release.tone}`}>
                  <div className="absolute inset-3 border border-white/20" />
                  <span className="font-serif text-7xl text-[#d5bd8c]/80 transition duration-500 group-hover:scale-110">{release.number}</span>
                  <span className="absolute bottom-5 left-5 text-[8px] uppercase tracking-[0.28em] text-white/65">Chikondi</span>
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-8">
                  <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#92713d]">{release.type}</p>
                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl">{release.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#686b61]">{release.description}</p>
                  <Link href="/music" className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#20251f] hover:text-[#92713d]">Explore release ↗</Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-[10px] text-[#77796f]">Streaming and listening links can be added to each release when the official URLs are confirmed.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <div className="mb-14 max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#92713d]">Beyond the music</p>
          <h2 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">The creative practice.</h2>
        </div>
        <div className="divide-y divide-[#d5d0c4] border-y border-[#d5d0c4]">
          {disciplines.map((item) => (
            <Link key={item.number} href={item.href} className="group grid gap-4 py-8 transition sm:grid-cols-[70px_1fr_1fr_auto] sm:items-center sm:gap-8">
              <span className="text-xs tracking-[0.2em] text-[#9b7b49]">{item.number}</span>
              <h3 className="font-serif text-3xl sm:text-4xl">{item.title}</h3>
              <p className="max-w-md text-sm leading-7 text-[#686b61]">{item.description}</p>
              <span className="text-xl text-[#92713d] transition group-hover:translate-x-2">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#20271f] px-6 py-24 text-[#f1eee5] sm:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a96c]">People before everything</p>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-7xl">Creativity should<br /><em className="text-[#c9a96c]">give something back.</em></h2>
            <p className="mt-7 max-w-xl text-sm leading-7 text-[#d0d0c5]">Community care is part of the purpose behind the work. Discover the initiatives, learn how they are developing and find ways to connect.</p>
          </div>
          <Link href="/community" className="inline-flex w-fit items-center gap-5 border border-[#c9a96c]/70 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:bg-[#c9a96c] hover:text-[#20271f]">Explore community work <span>↗</span></Link>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:px-12 lg:py-28">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#92713d]">Let's create something meaningful</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">Have a project in mind?</h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#686b61]">For performances, writing, production and collaborations, get in touch with Chikondi.</p>
        <Link href="/hire" className="mt-9 inline-flex items-center gap-5 bg-[#20271f] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f1eee5] transition hover:bg-[#92713d]">Start a conversation <span>↗</span></Link>
      </section>
    </div>
  );
}
