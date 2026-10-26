export default function SafeguardingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Child Safeguarding</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Safeguarding Statement</h1>
        <p className="text-lg text-[#5B6259]">
          Our absolute commitment to protecting the privacy, dignity, and safety of children in community programs.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm space-y-6 text-[#5B6259]">
        <h2 className="text-xl font-bold text-[#20251F]">1. Protection of Children</h2>
        <p>
          We strictly prohibit publishing children&apos;s full names, personal contact details, medical records, or sensitive locations. All community care activities prioritize child welfare above all else.
        </p>

        <h2 className="text-xl font-bold text-[#20251F]">2. Imagery & Consent</h2>
        <p>
          Visual media and stories involving children are published only with verified parental or guardian consent, ensuring full respect for their dignity and safety. Exploitative or sensationalized imagery is strictly avoided.
        </p>
      </div>
    </div>
  );
}
