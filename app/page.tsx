import Link from "next/link";

const pillars = [
  { number: "01", title: "Music & Artist Portfolio", detail: "A home for original music, listening links, releases and the stories behind the sound.", href: "/music", action: "Explore the music" },
  { number: "02", title: "Scriptwriting & Film", detail: "Screenwriting, story development and film projects presented with respect for creative ownership.", href: "/writing", action: "Explore the writing" },
  { number: "03", title: "Music & Video Production", detail: "Creative production services, collaborations and project enquiries.", href: "/production", action: "View production" },
  { number: "04", title: "The Story of Chikondi", detail: "Biography, creative journey, values and Rastafari identity—in his own words.", href: "/about", action: "Read the story" },
  { number: "05", title: "Community & Orphan Support", detail: "A thoughtful space for community care, responsible support and partnership enquiries.", href: "/community", action: "Explore community" },
  { number: "06", title: "Bookings & Inquiries", detail: "A clear route for performances, commissions, production work and collaborations.", href: "/hire", action: "Start an inquiry" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#eee9dd] text-[#20251f]">
      <section className="relative isolate min-h-[720px] overflow-hidden bg-[#171d18] text-[#f4efe4] sm:min-h-[800px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_34%,rgba(190,151,82,.24),transparent_34%),radial-gradient(ellipse_at_12%_85%,rgba(70,104,73,.3),transparent_42%)]" />
        <div className="absolute inset-0 -z-10 opacity-[.09] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="mx-auto flex min-h-[720px] max-w-[1440px] flex-col justify-between px-6 pb-10 pt-12 sm:min-h-[800px] sm:px-12 sm:pb-14 lg:px-20">
          <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[.3em] text-[#d2b477]">
            <span>Independent creative platform</span><span>Music · Film · Purpose</span>
          </div>
          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div className="max-w-4xl">
              <p className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.34em] text-[#d2b477]"><span className="h-px w-10 bg-[#d2b477]" /> Art with roots. Stories with meaning.</p>
              <h1 className="font-serif text-[clamp(4.5rem,13vw,11.5rem)] leading-[.76] tracking-[-.075em]">CHIKONDI<span className="text-[#c9a96c]">.</span></h1>
              <p className="mt-10 max-w-xl text-base leading-8 text-[#d7d3c8] sm:text-lg">A creative world shaped by music, storytelling, production and a commitment to community.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/music" className="bg-[#c9a96c] px-7 py-4 text-[10px] font-bold uppercase tracking-[.22em] text-[#171d18] transition hover:bg-[#e1c58e]">Enter the world <span aria-hidden="true">↗</span></Link>
                <Link href="/hire" className="border border-white/30 px-7 py-4 text-[10px] font-bold uppercase tracking-[.22em] transition hover:border-[#c9a96c] hover:text-[#c9a96c]">Work together</Link>
              </div>
            </div>
            <div className="relative hidden min-h-[390px] items-end justify-end lg:flex">
              <div className="absolute bottom-0 right-0 h-[390px] w-[82%] border border-[#c9a96c]/40" />
              <div className="absolute bottom-8 right-8 flex h-[330px] w-[82%] items-center justify-center bg-[linear-gradient(145deg,#394838,#202a21_58%,#171d18)]">
                <div className="absolute inset-5 border border-[#d2b477]/30" />
                <div className="text-center"><img src="https://images.unsplash.com/photo-1638389746430-82c12a2d0bb2?auto=format&fit=crop&w=1100&q=85" alt="Sample image of an African voice artist recording in a studio; not a photograph of Chikondi" className="absolute inset-0 h-full w-full object-cover opacity-75" /><div className="absolute inset-0 bg-gradient-to-t from-[#171d18]/90 via-transparent to-[#171d18]/10" /><div className="absolute bottom-8 left-8 right-8"><p className="text-[9px] font-bold uppercase tracking-[.28em] text-[#e8dfca]">Visual direction · Sample image</p><p className="mt-2 font-serif text-3xl text-white">The artist at work.</p></div></div>
              </div>
              <p className="absolute bottom-0 left-0 max-w-[160px] text-[9px] uppercase leading-5 tracking-[.2em] text-[#bdb9ad]">An evolving portrait of an independent creative voice.</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/15 pt-5 text-[9px] uppercase tracking-[.24em] text-[#bdb9ad]"><span>Official artist platform</span><span>Explore below ↓</span><span className="hidden sm:block">Malawi · Beyond</span></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-24 sm:px-12 lg:grid-cols-[.8fr_1.2fr] lg:px-20 lg:py-32">
        <div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">The creative identity</p><h2 className="mt-5 max-w-md font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl">Many forms.<br /><em className="text-[#92713d]">One purpose.</em></h2></div>
        <div className="max-w-2xl lg:pt-8"><p className="text-lg leading-9 text-[#55594f]">Chikondi’s work moves across music, film storytelling and creative production, with community care as an important part of the wider vision. This platform brings those different expressions together while leaving room for the work—and the story—to speak for itself.</p><Link href="/about" className="mt-8 inline-flex items-center gap-4 border-b border-[#92713d] pb-2 text-[10px] font-bold uppercase tracking-[.22em]">Discover the story <span>↗</span></Link></div>
      </section>

      <section className="bg-[#e3ddcf] py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Explore the platform</p><h2 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">Six creative dimensions.</h2></div><p className="max-w-sm text-sm leading-7 text-[#686b61]">From the first note to the final frame—and the people beyond the work.</p></div>
          <div className="grid gap-px border border-[#cfc7b7] bg-[#cfc7b7] md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((item) => <Link key={item.number} href={item.href} className="group flex min-h-[260px] flex-col bg-[#eee9dd] p-7 transition hover:bg-[#f7f3ea] sm:p-9"><span className="text-[10px] tracking-[.25em] text-[#987846]">{item.number}</span><h3 className="mt-8 font-serif text-3xl leading-tight">{item.title}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-[#686b61]">{item.detail}</p><span className="mt-auto flex items-center justify-between pt-8 text-[9px] font-bold uppercase tracking-[.2em] text-[#92713d]">{item.action}<span className="text-lg transition group-hover:translate-x-2">↗</span></span></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#20271f] px-6 py-24 text-[#f1eee5] sm:px-12 lg:px-20 lg:py-28"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">Community matters</p><h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-7xl">Creative work can<br /><em className="text-[#c9a96c]">carry a wider purpose.</em></h2><p className="mt-7 max-w-xl text-sm leading-7 text-[#d0d0c5]">Learn about the community vision and find appropriate ways to discuss support or partnership. Children’s dignity, privacy and safety come first.</p></div><Link href="/community" className="inline-flex w-fit items-center gap-5 border border-[#c9a96c]/70 px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] transition hover:bg-[#c9a96c] hover:text-[#20271f]">Community & care <span>↗</span></Link></div></section>

      <section className="px-6 py-24 text-center sm:px-12 lg:py-28"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#92713d]">Bookings · commissions · collaborations</p><h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">Let’s make something that matters.</h2><p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#686b61]">For performances, writing, production and community partnerships, start a conversation.</p><Link href="/hire" className="mt-9 inline-flex items-center gap-5 bg-[#20271f] px-8 py-4 text-[10px] font-bold uppercase tracking-[.22em] text-[#f1eee5] transition hover:bg-[#92713d]">Make an inquiry <span>↗</span></Link></section>
    </div>
  );
}
