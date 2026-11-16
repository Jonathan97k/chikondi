import Link from "next/link";

export default function WritingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-[#20251F] sm:px-6 lg:px-8">
      <header className="mb-14 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98752E]">Stories begin with an idea</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Scriptwriting & Acting</h1>
        <p className="mt-5 text-lg leading-relaxed text-[#62665D]">Tokha Creations works across scriptwriting and acting, bringing stories to life through words and performance.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-[#DED9CC] bg-white p-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#98752E]">Writing</span>
          <h2 className="mt-4 text-2xl font-bold">Scriptwriting</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#62665D]">Story concepts and scripts developed for film and creative productions. Share your idea, intended format and project goals to begin a conversation.</p>
        </article>
        <article className="rounded-2xl border border-[#DED9CC] bg-white p-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#98752E]">Performance</span>
          <h2 className="mt-4 text-2xl font-bold">Acting</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#62665D]">Acting and performance for storytelling and screen projects, with a focus on communicating the heart of each story.</p>
        </article>
      </div>
      <section className="mt-12 rounded-2xl bg-[#17251F] p-8 text-center text-[#F5F2EA]">
        <h2 className="text-2xl font-bold">Have a story to tell?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">Tell us about your script, film or acting project.</p>
        <Link href="/hire" className="mt-6 inline-flex rounded-md bg-[#D5B15D] px-6 py-3 text-sm font-bold text-[#17251F]">Discuss a project</Link>
      </section>
    </main>
  );
}