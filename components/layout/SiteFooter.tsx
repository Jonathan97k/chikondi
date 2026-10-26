import Link from "next/link";

export default function SiteFooter() {
  const currentYear = "2026";

  return (
    <footer className="bg-[#20251F] text-[#E8E4D9] border-t border-[#C9A54D]/30 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-[#C9A54D] mb-3">Chikondi Official</h3>
            <p className="text-sm text-[#E8E4D9]/80 leading-relaxed">
              Stories, sound & purpose. Uniting music, scriptwriting, production, and dedicated community care.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C9A54D] mb-4">
              Pillars & Pathways
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8E4D9]/80">
              <li>
                <Link href="/music" className="hover:text-[#C9A54D] transition-colors">
                  Music & Releases
                </Link>
              </li>
              <li>
                <Link href="/writing" className="hover:text-[#C9A54D] transition-colors">
                  Writing Portfolio
                </Link>
              </li>
              <li>
                <Link href="/production" className="hover:text-[#C9A54D] transition-colors">
                  Production Services
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-[#C9A54D] transition-colors">
                  Community Care
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C9A54D] mb-4">
              Inquiries & Press
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8E4D9]/80">
              <li>
                <Link href="/hire" className="hover:text-[#C9A54D] transition-colors">
                  Hire & Booking
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-[#C9A54D] transition-colors">
                  Press Kit & Bio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9A54D] transition-colors">
                  Contact Channels
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C9A54D] mb-4">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8E4D9]/80">
              <li>
                <Link href="/privacy" className="hover:text-[#C9A54D] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C9A54D] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/safeguarding" className="hover:text-[#C9A54D] transition-colors">
                  Safeguarding
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E8E4D9]/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8E4D9]/60">
          <p>© {currentYear} Chikondi Official. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Authenticated professional brand platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
