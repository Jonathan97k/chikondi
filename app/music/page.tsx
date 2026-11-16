import Link from "next/link";

export default function MusicPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-[#20251F] sm:px-6 lg:px-8">
      <header className="mb-14 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98752E]">Sound & expression</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Music Production & Promotion</h1>
        <p className="mt-5 text-lg leading-relaxed text-[#62665D]">Tokha Creations specialises in music production and promotion, supporting creative music projects and helping artists share their work.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-[#DED9CC] bg-white p-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#98752E]">Create</span>
          <h2 className="mt-4 text-2xl font-bold">Music Production</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#62665D]">Bring your musical idea or project brief to discuss production, creative direction and the next steps.</p>
        </article>
        <article className="rounded-2xl border border-[#DED9CC] bg-white p-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#98752E]">Share</span>
          <h2 className="mt-4 text-2xl font-bold">Music Promotion</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#62665D]">Discuss ways to present and promote your music to listeners and audiences.</p>
        </article>
      </div>
      <section className="mt-12 rounded-2xl bg-[#17251F] p-8 text-center text-[#F5F2EA]">
        <h2 className="text-2xl font-bold">Ready to work on your sound?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">Get in touch to discuss a music production or promotion project.</p>
        <Link href="/hire" className="mt-6 inline-flex rounded-md bg-[#D5B15D] px-6 py-3 text-sm font-bold text-[#17251F]">Start a music inquiry</Link>
      </section>
    </main>
  );
}