import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-[#C9A54D]/25 bg-[#20251F] py-14 text-[#E8E4D9]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-[#C9A54D]/60 font-serif text-lg font-bold text-[#C9A54D]">T</span>
              <span className="font-serif text-xl font-semibold">Tokha Creations</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#E8E4D9]/60">A movement focused on art, talent, culture and youth empowerment.</p>
            <div className="mt-6 flex gap-2"><span className="h-1 w-8 bg-[#B64236]" /><span className="h-1 w-8 bg-[#C9A54D]" /><span className="h-1 w-8 bg-[#496348]" /></div>
          </div>
          <div>
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9A54D]">Explore</h4>
            <ul className="space-y-3 text-sm text-[#E8E4D9]/65">
              <li><Link href="/about" className="transition hover:text-[#C9A54D]">About the Movement</Link></li>
              <li><Link href="/music" className="transition hover:text-[#C9A54D]">Music Production & Promotion</Link></li>
              <li><Link href="/writing" className="transition hover:text-[#C9A54D]">Scriptwriting & Acting</Link></li>
              <li><Link href="/production" className="transition hover:text-[#C9A54D]">Film Direction & Production</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9A54D]">Connect</h4>
            <p className="mb-5 max-w-xs text-sm leading-6 text-[#E8E4D9]/60">Have an idea, collaboration or production in mind? Get in touch.</p>
            <Link href="/contact" className="inline-flex border border-[#C9A54D]/60 px-4 py-2.5 text-xs font-bold text-[#C9A54D] transition hover:bg-[#C9A54D] hover:text-[#20251F]">Contact Tokha Creations ↗</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.14em] text-[#E8E4D9]/35 sm:flex-row">
          <p>© Tokha Creations. All rights reserved.</p>
          <p>Art · Talent · Culture · Youth Empowerment</p>
        </div>
      </div>
    </footer>
  );
}
