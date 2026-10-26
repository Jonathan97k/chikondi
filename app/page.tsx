import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#E8E4D9] text-[#20251F]">
      {/* Hero Section */}
      <section className="relative bg-[#20251F] text-[#E8E4D9] py-24 sm:py-32 overflow-hidden border-b border-[#C9A54D]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A54D_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#C9A54D]/20 text-[#C9A54D] text-xs font-semibold tracking-wider uppercase mb-6">
              Official Professional Platform
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#E8E4D9] mb-6 leading-tight">
              Stories, Sound & <span className="text-[#C9A54D]">Purpose</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#E8E4D9]/80 mb-10 leading-relaxed">
              Welcome to the official portal of Chikondi — exploring roots music, compelling narrative scriptwriting, high-level production, and community support initiatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hire"
                className="px-8 py-3.5 rounded-md bg-[#C9A54D] text-[#20251F] font-bold text-base hover:bg-[#b8933e] transition-all shadow-lg"
              >
                Explore Work & Hire
              </Link>
              <Link
                href="/community"
                className="px-8 py-3.5 rounded-md border-2 border-[#C9A54D] text-[#E8E4D9] font-bold text-base hover:bg-[#C9A54D]/10 transition-all"
              >
                Community Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Bio Snippet */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm border border-[#D6D9D1]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#20251F]">
                Artistry Rooted in Truth & Culture
              </h2>
              <p className="text-[#5B6259] leading-relaxed mb-6">
                Chikondi is a multifaceted creative professional, musician, and scriptwriter rooted in Rastafari principles of unity, upliftment, and compassion. Through audio releases, screenwriting, and grassroots community care, every endeavor is dedicated to meaningful impact.
              </p>
              <Link
                href="/about"
                className="text-[#C9A54D] font-semibold hover:underline inline-flex items-center gap-2"
              >
                Read full biography & creative journey →
              </Link>
            </div>
            <div className="bg-[#20251F] text-[#E8E4D9] p-6 rounded-lg border border-[#C9A54D]/30">
              <h3 className="text-lg font-bold text-[#C9A54D] mb-2">Core Pillars</h3>
              <ul className="space-y-3 text-sm text-[#E8E4D9]/90">
                <li className="flex items-center gap-2">✓ Music & Audio Releases</li>
                <li className="flex items-center gap-2">✓ Screenwriting & Storytelling</li>
                <li className="flex items-center gap-2">✓ Production & Creative Services</li>
                <li className="flex items-center gap-2">✓ Community Care Initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#20251F] mb-4">
            Explore Pathways
          </h2>
          <p className="text-[#5B6259]">
            Discover music releases, writing portfolios, production offerings, and community projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Music Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#D6D9D1] flex flex-col justify-between hover:border-[#C9A54D] transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#20251F] text-[#C9A54D] flex items-center justify-center font-bold mb-6 text-xl">
                ♫
              </div>
              <h3 className="text-xl font-bold text-[#20251F] mb-3">Music & Releases</h3>
              <p className="text-[#5B6259] text-sm leading-relaxed mb-6">
                Listen to recent singles, explore release tracklists, credits, and official streaming platform links.
              </p>
            </div>
            <Link
              href="/music"
              className="inline-flex items-center text-sm font-semibold text-[#20251F] hover:text-[#C9A54D] transition-colors"
            >
              Browse music catalogue →
            </Link>
          </div>

          {/* Writing & Production Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#D6D9D1] flex flex-col justify-between hover:border-[#C9A54D] transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#20251F] text-[#C9A54D] flex items-center justify-center font-bold mb-6 text-xl">
                ✍
              </div>
              <h3 className="text-xl font-bold text-[#20251F] mb-3">Writing & Production</h3>
              <p className="text-[#5B6259] text-sm leading-relaxed mb-6">
                View narrative scripts, loglines, professional production services, and request a project quote.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/writing"
                className="text-sm font-semibold text-[#20251F] hover:text-[#C9A54D] transition-colors"
              >
                Writing →
              </Link>
              <Link
                href="/production"
                className="text-sm font-semibold text-[#20251F] hover:text-[#C9A54D] transition-colors"
              >
                Production →
              </Link>
            </div>
          </div>

          {/* Community Care Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#D6D9D1] flex flex-col justify-between hover:border-[#C9A54D] transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#20251F] text-[#C9A54D] flex items-center justify-center font-bold mb-6 text-xl">
                ♥
              </div>
              <h3 className="text-xl font-bold text-[#20251F] mb-3">Community Care</h3>
              <p className="text-[#5B6259] text-sm leading-relaxed mb-6">
                Learn about orphan care initiatives, transparent support options, and partnership opportunities.
              </p>
            </div>
            <Link
              href="/community"
              className="inline-flex items-center text-sm font-semibold text-[#20251F] hover:text-[#C9A54D] transition-colors"
            >
              View community initiatives →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-[#20251F] text-[#E8E4D9] py-20 mt-16 border-t border-[#C9A54D]/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Collaborate or Inquire?</h2>
          <p className="text-[#E8E4D9]/80 max-w-2xl mx-auto mb-8 text-lg">
            Submit a project inquiry, booking request, or partnership proposal through our secure inquiry system.
          </p>
          <Link
            href="/hire"
            className="inline-block px-8 py-4 rounded-md bg-[#C9A54D] text-[#20251F] font-bold text-base hover:bg-[#b8933e] transition-all shadow-md"
          >
            Submit an Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
