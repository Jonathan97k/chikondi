import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-[#20251F] sm:px-6 lg:px-8">
      <header className="mb-14 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98752E]">Get in touch</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Let's create something meaningful.</h1>
        <p className="mt-5 text-lg leading-relaxed text-[#62665D]">For music, scriptwriting, acting, movie direction or production enquiries, send us a project brief.</p>
      </header>
      <section className="rounded-2xl bg-[#17251F] p-8 text-[#F5F2EA] sm:p-10">
        <h2 className="text-2xl font-bold">Start a conversation</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">Use the inquiry form to tell us who you are, what you are working on and how Tokha Creations could collaborate with you.</p>
        <Link href="/hire" className="mt-7 inline-flex rounded-md bg-[#D5B15D] px-6 py-3 text-sm font-bold text-[#17251F] hover:bg-[#E6C879]">Open inquiry form</Link>
      </section>
    </main>
  );
}