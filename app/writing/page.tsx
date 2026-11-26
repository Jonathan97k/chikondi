import Image from "next/image";
import Link from "next/link";

export default function WritingPage() {
  return (
    <main className="bg-[#eee9dd] text-[#20251f]">
      <section className="bg-[#20271f] px-6 py-20 text-[#f1eee5] sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">Scriptwriting · Acting · Film</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[.98] sm:text-7xl lg:text-8xl">Stories built<br /><em className="text-[#c9a96c]">to be seen.</em></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#d0d0c5]">A space for screenwriting, acting, directing, film production and visual storytelling.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-12 lg:px-20 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <figure className="mx-auto w-full max-w-md overflow-hidden bg-[#20271f] p-3"><Image src="/images/nzotheka-film-poster.webp" alt="N'zotheka film poster supplied by TOKHA CREATIONS" width={1000} height={1400} priority sizes="(min-width: 768px) 35vw, 90vw" className="w-full object-contain" /><figcaption className="px-3 py-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#c9a96c]">Featured film artwork · N'zotheka</figcaption></figure>
          <div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Featured project</p><h2 className="mt-4 font-serif text-5xl">N'zotheka</h2><p className="mt-5 text-sm leading-7 text-[#686b61]">The supplied N'zotheka poster is presented as part of the TOKHA CREATIONS film portfolio. A synopsis, cast, credits, release information and viewing link can be added when confirmed by the team.</p><p className="mt-5 text-xs font-semibold uppercase tracking-[.18em] text-[#92713d]">Project details awaiting approval</p></div>
        </div>
        <div className="mt-16 bg-[#e3ddcf] p-8 sm:p-12"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Commission & collaboration</p><h2 className="mt-4 font-serif text-4xl">Have a story to develop?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#686b61]">Share the format, creative brief and intended timeline for a writing or film collaboration.</p><Link href="/hire" className="mt-7 inline-flex bg-[#20271f] px-6 py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#f1eee5]">Discuss a project ↗</Link></div>
      </section>
    </main>
  );
}
