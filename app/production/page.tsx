import Link from "next/link";

const services = [
  { title: "Movie Direction", description: "Creative direction for film projects, helping shape the story, visual approach and performances." },
  { title: "Movie Production", description: "Production support to help move a film project from planning and coordination into production." },
  { title: "Creative Collaboration", description: "A space to discuss ideas, creative roles and potential collaborations across film and media." },
];

export default function ProductionPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-[#20251F] sm:px-6 lg:px-8">
      <header className="mb-14 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98752E]">Behind the scenes</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Movie Direction & Production</h1>
        <p className="mt-5 text-lg leading-relaxed text-[#62665D]">From shaping a film's creative vision to bringing a production together, Tokha Creations is focused on storytelling through film.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.title} className="rounded-2xl border border-[#DED9CC] bg-white p-8">
            <span className="text-sm font-bold tracking-widest text-[#A9853B]">0{index + 1}</span>
            <h2 className="mt-6 text-xl font-bold">{service.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#62665D]">{service.description}</p>
          </article>
        ))}
      </div>
      <section className="mt-12 rounded-2xl bg-[#E9E3D5] p-8 sm:p-10">
        <h2 className="text-2xl font-bold">Let's discuss your film project</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#62665D]">Share your concept, preferred timeline and the kind of production support you are looking for.</p>
        <Link href="/hire" className="mt-6 inline-flex rounded-md bg-[#17251F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#30473A]">Make an inquiry</Link>
      </section>
    </main>
  );
}