import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#D5B15D]/30 bg-[#17251F] py-14 text-[#F5F2EA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-bold text-[#E6C879]">Tokha Creations</h3>
            <p className="max-w-sm text-sm leading-relaxed text-[#F5F2EA]/70">A movement focused on art, talent, culture and youth empowerment.</p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E6C879]">Explore</h4>
            <ul className="space-y-2 text-sm text-[#F5F2EA]/75">
              <li><Link href="/about" className="hover:text-[#E6C879]">About the Movement</Link></li>
              <li><Link href="/music" className="hover:text-[#E6C879]">Music Production & Promotion</Link></li>
              <li><Link href="/writing" className="hover:text-[#E6C879]">Scriptwriting & Acting</Link></li>
              <li><Link href="/production" className="hover:text-[#E6C879]">Film Direction & Production</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E6C879]">Connect</h4>
            <p className="mb-4 text-sm leading-relaxed text-[#F5F2EA]/70">Have an idea, collaboration or production in mind? Get in touch.</p>
            <Link href="/contact" className="inline-flex rounded-md border border-[#D5B15D]/60 px-4 py-2 text-sm font-semibold text-[#E6C879] transition hover:bg-[#D5B15D] hover:text-[#17251F]">Contact Tokha Creations</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-[#F5F2EA]/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Tokha Creations. All rights reserved.</p>
          <p>Art • Talent • Culture • Youth Empowerment</p>
        </div>
      </div>
    </footer>
  );
}