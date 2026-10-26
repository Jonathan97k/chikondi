import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Community Care</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Orphan Care & Community Support</h1>
        <p className="text-lg text-[#5B6259] max-w-3xl">
          Transparent overview of community initiatives, support programs, and partnership pathways.
        </p>
      </div>

      <div className="space-y-12 mb-16">
        <div className="bg-white rounded-xl p-8 sm:p-10 border border-[#D6D9D1] shadow-sm space-y-4">
          <h2 className="text-2xl font-bold">Mission & Operating Principles</h2>
          <p className="text-[#5B6259] leading-relaxed">
            Rooted in compassion and community responsibility, our community-care initiatives focus on supporting orphaned children with essential care, educational resources, and a nurturing environment. We maintain strict safeguarding policies, ensuring absolute privacy, dignity, and protection for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#20251F]">Support Options</h3>
            <p className="text-[#5B6259] text-sm leading-relaxed">
              We welcome inquiries regarding approved in-kind contributions, community volunteering, and strategic partnerships. Financial donations are managed only where operationally authorized and disclosed.
            </p>
            <Link
              href="/hire"
              className="inline-block pt-2 text-[#C9A54D] font-semibold text-sm hover:underline"
            >
              Inquire about partnership →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#20251F]">Safeguarding Commitment</h3>
            <p className="text-[#5B6259] text-sm leading-relaxed">
              In accordance with strict safeguarding standards, we never publish children&apos;s full names, medical details, or unsafe locations. All imagery and stories are strictly authorized and protected.
            </p>
            <Link
              href="/safeguarding"
              className="inline-block pt-2 text-[#C9A54D] font-semibold text-sm hover:underline"
            >
              Read safeguarding policy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
