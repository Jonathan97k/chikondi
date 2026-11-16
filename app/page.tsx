import Link from "next/link";

const services = [
  { number: "01", title: "Music Production & Promotion", description: "Support for music projects from creative development and production through promotion.", href: "/music", mark: "♫" },
  { number: "02", title: "Scriptwriting", description: "Story development and scriptwriting for film and other creative productions.", href: "/writing", mark: "✍" },
  { number: "03", title: "Acting & Performance", description: "Creative performance and acting for screen and storytelling projects.", href: "/writing", mark: "✳" },
  { number: "04", title: "Movie Direction & Production", description: "Film direction and production shaped around strong stories, culture and creative talent.", href: "/production", mark: "◉" },
];

export default function HomePage() {
  return (
    <div className="bg-[#E8E4D9] text-[#20251F]">
      <section className="relative isolate overflow-hidden bg-[#20251F] text-[#E8E4D9]">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[34%] border-l border-[#C9A54D]/20 lg:block">
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(135deg, transparent 49.5%, #C9A54D 50%, transparent 50.5%)", backgroundSize: "34px 34px" }} />
          <div className="absolute right-[-7rem] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-[#C9A54D]/30" />
          <div className="absolute right-[-3rem] top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full border border-[#C9A54D]/25" />
          <div className="absolute right-[4rem] top-1/2 h-[8rem] w-[8rem] -translate-y-1/2 rounded-full border border-[#C9A54D]/30 bg-[#C9A54D]/[0.04]" />
          <div className="absolute bottom-12 right-10 flex gap-2">
            <span className="h-1.5 w-12 bg-[#B64236]" /><span className="h-1.5 w-12 bg-[#C9A54D]" /><span className="h-1.5 w-12 bg-[#496348]" />
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#B64236] via-[#C9A54D] to-[#496348]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A54D]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A54D]">Art · Talent · Culture · Youth</span>
            </div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#E8E4D9]/55">A creative movement</p>
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Stories that move us. <span className="italic text-[#C9A54D]">Culture that connects us.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#E8E4D9]/75 sm:text-lg">
              Tokha Creations is a movement focused on art, talent, culture and youth empowerment. We bring creative ideas to life through music and film.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/production" className="inline-flex items-center gap-3 bg-[#C9A54D] px-7 py-4 text-sm font-bold text-[#20251F] transition hover:bg-[#dfc16e]">Explore our work <span aria-hidden="true">↗</span></Link>
              <Link href="/about" className="inline-flex items-center border border-[#E8E4D9]/35 px-7 py-4 text-sm font-semibold text-[#E8E4D9] transition hover:border-[#C9A54D] hover:text-[#C9A54D]">Our story</Link>
            </div>
          </div>
          <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-[#E8E4D9]/15 pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8E4D9]/45">
            <span>Music</span><span>Storytelling</span><span>Performance</span><span>Film</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#98752E]">What we create</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">Creative work with <span className="italic text-[#98752E]">meaning.</span></h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#5B6259]">From the first idea to the final production, Tokha Creations brings together different forms of creative expression.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-3 border-b border-[#C9A54D] pb-2 text-sm font-bold hover:text-[#98752E]">Talk to our team <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#D1CCBF] bg-[#D1CCBF] sm:grid-cols-2">
            {services.map((service) => (
              <Link key={service.number} href={service.href} className="group bg-[#F3F0E8] p-7 transition hover:bg-white sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#98752E]">{service.number}</span>
                  <span className="font-serif text-3xl text-[#98752E]/70 transition group-hover:-translate-y-1 group-hover:text-[#20251F]">{service.mark}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl font-semibold leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#62665D]">{service.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#98752E]">Discover <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#D6D9D1] bg-[#DED8CA]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#98752E]">The movement</p>
            <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">Art and culture can open doors for the next generation.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-[#555B52]">Tokha Creations brings creative disciplines together with a focus on talent, culture and youth empowerment. The work spans music, storytelling, acting and film production.</p>
            <Link href="/about" className="mt-7 inline-flex bg-[#20251F] px-6 py-3 text-sm font-semibold text-[#E8E4D9] transition hover:bg-[#496348]">Discover our story</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#20251F] px-6 py-20 text-center text-[#E8E4D9] sm:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-1"><span className="w-1/3 bg-[#B64236]" /><span className="w-1/3 bg-[#C9A54D]" /><span className="w-1/3 bg-[#496348]" /></div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A54D]">Work with us</p>
        <h2 className="mx-auto max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">Have a creative idea or project?</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#E8E4D9]/65">Get in touch with Tokha Creations to discuss a music, writing, acting or film production project.</p>
        <Link href="/hire" className="mt-9 inline-flex bg-[#C9A54D] px-7 py-4 text-sm font-bold text-[#20251F] transition hover:bg-[#dfc16e]">Make an inquiry <span className="ml-3">↗</span></Link>
      </section>
    </div>
  );
}
