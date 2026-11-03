import Link from "next/link";

const areas = [
  { title: "Music production", text: "A space to present confirmed recording, arrangement, mixing and music collaboration services." },
  { title: "Video & film production", text: "A portfolio for visual storytelling, production roles, creative direction and selected screen work." },
  { title: "Creative collaboration", text: "A clear starting point for discussing ideas, project scope, timelines and possible partnerships." },
];

export default function ProductionPage() {
  return (
    <div className="bg-[#eee9dd] text-[#20251f]">
      <section className="bg-[#171d18] px-6 py-24 text-[#f4efe4] sm:px-12 lg:px-20 lg:py-32"><div className="mx-auto max-w-6xl"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">Audio · Video · Creative work</p><h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[.95] sm:text-8xl">Ideas into<br /><em className="text-[#c9a96c]">finished work.</em></h1><p className="mt-8 max-w-2xl text-base leading-8 text-[#d7d3c8]">An overview of Chikondi’s music and video production interests, with space for selected projects and confirmed services.</p></div></section>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-12 lg:px-20"><div className="grid gap-px border border-[#d2cbbb] bg-[#d2cbbb] md:grid-cols-3">{areas.map((area, i) => <article key={area.title} className="bg-[#f7f3ea] p-8"><span className="text-[10px] tracking-[.25em] text-[#92713d]">0{i + 1}</span><h2 className="mt-8 font-serif text-3xl">{area.title}</h2><p className="mt-4 text-sm leading-7 text-[#686b61]">{area.text}</p></article>)}</div><p className="mt-8 max-w-3xl text-xs leading-6 text-[#77796f]">Specific equipment, technical capabilities, credits, deliverables and service availability will be added after confirmation. No unverified production claims are made here.</p><div className="mt-16 bg-[#20271f] p-8 text-[#f1eee5] sm:p-12"><p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#c9a96c]">Project inquiries</p><h2 className="mt-4 font-serif text-4xl">Have a production brief?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#d0d0c5]">Share your concept, expected deliverables and timeline to begin a conversation.</p><Link href="/hire" className="mt-7 inline-flex bg-[#c9a96c] px-6 py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#171d18]">Discuss a project ↗</Link></div></section>
    </div>
  );
}