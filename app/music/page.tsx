import Link from "next/link";

export default function MusicPage() {
  const releases = [
    {
      slug: "jah-guidance",
      title: "Jah Guidance",
      type: "Single",
      releaseDate: "2026",
      summary: "A meditative roots reggae anthem reflecting on spiritual strength, endurance, and collective upliftment.",
      genre: "Roots Reggae",
    },
    {
      slug: "rising-sun",
      title: "Rising Sun",
      type: "EP",
      releaseDate: "2025",
      summary: "A 4-track collection exploring themes of cultural heritage, resilience, and community solidarity.",
      genre: "Reggae / Dub",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Discography</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Music & Audio Releases</h1>
        <p className="text-lg text-[#5B6259] max-w-3xl">
          Explore official releases, track lists, credits, and authorized streaming platform links.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {releases.map((release) => (
          <div key={release.slug} className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="py-1 px-3 rounded-full bg-[#C9A54D]/20 text-[#20251F] text-xs font-semibold uppercase">
                  {release.type}
                </span>
                <span className="text-xs text-[#5B6259]">{release.releaseDate}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-[#20251F]">{release.title}</h2>
              <p className="text-xs text-[#C9A54D] font-semibold mb-4 uppercase tracking-wider">{release.genre}</p>
              <p className="text-[#5B6259] text-sm leading-relaxed mb-6">
                {release.summary}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#D6D9D1]">
              <span className="text-xs text-[#5B6259]">Official Streaming Link</span>
              <span className="text-xs font-semibold text-[#20251F] bg-[#E8E4D9] py-1.5 px-3 rounded">
                Available on Approved Platforms
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#20251F] text-[#E8E4D9] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3 text-[#C9A54D]">Booking & Performance Inquiries</h3>
        <p className="text-sm text-[#E8E4D9]/80 max-w-xl mx-auto mb-6">
          Interested in live musical performances, collaborative audio production, or appearances? Submit a booking inquiry.
        </p>
        <Link
          href="/hire"
          className="inline-block py-3 px-6 rounded bg-[#C9A54D] text-[#20251F] font-bold text-sm hover:bg-[#b8933e] transition-all"
        >
          Submit Booking Inquiry
        </Link>
      </div>
    </div>
  );
}
