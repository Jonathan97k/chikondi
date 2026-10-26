import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">About Chikondi</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Creative Journey & Identity</h1>
        <p className="text-lg text-[#5B6259] max-w-3xl">
          An overview of Chikondi&apos;s professional path in music, narrative storytelling, creative production, and community care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold">Biography & Principles</h2>
          <p className="leading-relaxed text-[#5B6259]">
            Chikondi is a dedicated creative professional whose work bridges music, screenwriting, and impactful community outreach. Operating under approved professional standards, his artistry is guided by Rastafari principles emphasizing truth, cultural grounding, unity, and genuine community welfare.
          </p>
          <p className="leading-relaxed text-[#5B6259]">
            With years of experience refining narrative scripts, producing audio releases, and organizing grassroots care initiatives for vulnerable youth and orphans, Chikondi maintains a steadfast commitment to integrity and quality across all endeavors.
          </p>

          <h3 className="text-xl font-bold pt-4">Professional Pillars</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#5B6259]">
            <li><strong>Music:</strong> Roots-infused audio artistry, authentic lyricism, and official distribution.</li>
            <li><strong>Scriptwriting:</strong> Narrative screenplays, compelling loglines, and structured storytelling.</li>
            <li><strong>Production:</strong> Professional media production, creative consultation, and project deliverables.</li>
            <li><strong>Community Care:</strong> Transparent support programs and initiatives for orphaned children.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#D6D9D1] shadow-sm h-fit space-y-6">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#C9A54D] font-bold mb-2">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-[#5B6259]">
              <li><strong>Professional Name:</strong> Chikondi</li>
              <li><strong>Primary Focus:</strong> Music, Writing, Production, Community</li>
              <li><strong>Identity:</strong> Rastafari Man</li>
              <li><strong>Contact Route:</strong> Via <Link href="/contact" className="text-[#C9A54D] underline">Contact</Link> or <Link href="/hire" className="text-[#C9A54D] underline">Hire</Link></li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#D6D9D1]">
            <h3 className="text-sm uppercase tracking-wider text-[#C9A54D] font-bold mb-2">Media & Press</h3>
            <p className="text-xs text-[#5B6259] mb-4">
              Access approved press biographies, high-resolution imagery, and official media contact channels.
            </p>
            <Link
              href="/press"
              className="block text-center w-full py-2.5 px-4 rounded bg-[#20251F] text-[#E8E4D9] text-sm font-semibold hover:bg-[#C9A54D] hover:text-[#20251F] transition-all"
            >
              Visit Press Kit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
