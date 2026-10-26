import Link from "next/link";

export default function PressPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Press & Media</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Press Kit & Biography</h1>
        <p className="text-lg text-[#5B6259]">
          Approved short and long biographies, official media links, credits, and press inquiry channels.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        <div className="bg-white p-8 rounded-xl border border-[#D6D9D1] shadow-sm space-y-4">
          <h2 className="text-2xl font-bold">Approved Short Bio</h2>
          <p className="text-[#5B6259] leading-relaxed">
            Chikondi is an acclaimed roots musician, scriptwriter, and creative producer dedicated to authentic cultural storytelling and community care initiatives.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl border border-[#D6D9D1] shadow-sm space-y-4">
          <h2 className="text-2xl font-bold">Approved Long Bio</h2>
          <p className="text-[#5B6259] leading-relaxed">
            Operating under approved professional standards, Chikondi integrates music, narrative screenplays, and grassroots orphan care. Grounded in Rastafari principles, his creative work emphasizes spiritual strength, cultural heritage, and dedicated community upliftment.
          </p>
        </div>
      </div>

      <div className="bg-[#20251F] text-[#E8E4D9] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-[#C9A54D]">Media Inquiries & Interviews</h3>
        <p className="text-sm text-[#E8E4D9]/80 mb-6">
          For press kits, interviews, or media scheduling, submit an inquiry.
        </p>
        <Link
          href="/hire"
          className="inline-block py-3 px-6 rounded bg-[#C9A54D] text-[#20251F] font-bold text-sm hover:bg-[#b8933e] transition-all"
        >
          Submit Press Inquiry
        </Link>
      </div>
    </div>
  );
}
