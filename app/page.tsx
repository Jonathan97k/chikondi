import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Music Production & Promotion",
    description: "Support for music projects from creative development and production through promotion.",
    href: "/music",
  },
  {
    number: "02",
    title: "Scriptwriting",
    description: "Story development and scriptwriting for film and other creative productions.",
    href: "/writing",
  },
  {
    number: "03",
    title: "Acting & Performance",
    description: "Creative performance and acting for screen and storytelling projects.",
    href: "/writing",
  },
  {
    number: "04",
    title: "Movie Direction & Production",
    description: "Film direction and production shaped around strong stories, culture and creative talent.",
    href: "/production",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#F5F2EA] text-[#20251F]">
      <section className="relative overflow-hidden bg-[#17251F] text-[#F5F2EA]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C9A54D_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#C9A54D]/20" />
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#C9A54D]/20" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex rounded-full border border-[#C9A54D]/40 bg-[#C9A54D]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E6C879]">
              Art • Talent • Culture • Youth
            </span>
            <h1 className="mb-7 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-7xl">
              Creativity that celebrates culture and <span className="text-[#E6C879]">empowers youth.</span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#F5F2EA]/75 sm:text-xl">
              Tokha Creations is a movement focused on art, talent, culture and youth empowerment. We bring creative ideas to life through music and film.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/production" className="rounded-md bg-[#D5B15D] px-7 py-4 font-bold text-[#17251F] transition hover:bg-[#E6C879]">
                Explore Our Services
              </Link>
              <Link href="/about" className="rounded-md border border-[#F5F2EA]/40 px-7 py-4 font-semibold text-[#F5F2EA] transition hover:border-[#E6C879] hover:text-[#E6C879]">
                Discover Tokha Creations
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-[#D5B15D]/40 bg-[#F5F2EA]/5 p-5 shadow-2xl backdrop-blur">
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-dashed border-[#D5B15D]/50 bg-[#F5F2EA]/[0.03] p-8 text-center">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-2xl border border-[#D5B15D]/60 bg-[#D5B15D]/10 text-3xl font-black tracking-tight text-[#E6C879]">
                  TC
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E6C879]">Tokha Creations</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#F5F2EA]/60">Official brand identity area</p>
                <span className="mt-6 rounded-full border border-[#F5F2EA]/15 px-4 py-2 text-xs text-[#F5F2EA]/50">Logo placement reserved</span>
              </div>
              <p className="px-3 pb-2 pt-5 text-center text-xs text-[#F5F2EA]/50">A platform for creative expression and cultural storytelling</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98752E]">What we do</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Creative services with a purpose.</h2>
          <p className="mt-4 leading-relaxed text-[#62665D]">From the first idea to the final production, Tokha Creations brings together different forms of creative expression.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.number} href={service.href} className="group rounded-2xl border border-[#DED9CC] bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-[#C9A54D] hover:shadow-xl">
              <span className="text-sm font-bold tracking-widest text-[#A9853B]">{service.number}</span>
              <h3 className="mt-7 text-xl font-bold leading-snug group-hover:text-[#98752E]">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#62665D]">{service.description}</p>
              <span className="mt-7 inline-block text-sm font-bold text-[#98752E]">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#E9E3D5] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98752E]">The movement</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Art and culture can open doors for the next generation.</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-[#555B52]">Tokha Creations brings creative disciplines together with a focus on talent, culture and youth empowerment. The work spans music, storytelling, acting and film production.</p>
            <Link href="/about" className="mt-7 inline-flex rounded-md bg-[#17251F] px-6 py-3 font-semibold text-white transition hover:bg-[#30473A]">Our story</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#17251F] px-4 py-20 text-center text-[#F5F2EA] sm:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#E6C879]">Work with us</p>
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold sm:text-4xl">Have a creative idea or project?</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#F5F2EA]/70">Get in touch with Tokha Creations to discuss a music, writing, acting or film production project.</p>
        <Link href="/hire" className="mt-8 inline-flex rounded-md bg-[#D5B15D] px-7 py-4 font-bold text-[#17251F] transition hover:bg-[#E6C879]">Make an inquiry</Link>
      </section>
    </div>
  );
}
