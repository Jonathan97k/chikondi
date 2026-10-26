import Link from "next/link";

export default function ProductionPage() {
  const services = [
    {
      title: "Audio Production & Sound Consultation",
      description: "Professional mixing, arrangement, and sound supervision for music and media projects.",
      deliverables: "Stems, master audio files, consultation notes.",
      pricing: "Quote-based",
    },
    {
      title: "Creative Direction & Narrative Supervision",
      description: "Guiding visual media, storytelling projects, and cultural content from concept to final cut.",
      deliverables: "Creative treatments, narrative bibles, supervision.",
      pricing: "Quote-based",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Production Services</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Professional Audio & Creative Production</h1>
        <p className="text-lg text-[#5B6259] max-w-3xl">
          Confirmed professional services, deliverables, and collaboration processes for creative clients and partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="py-1 px-3 rounded-full bg-[#C9A54D]/20 text-[#20251F] text-xs font-semibold uppercase">
                  {service.pricing}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-[#20251F]">{service.title}</h2>
              <p className="text-[#5B6259] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="bg-[#E8E4D9]/50 p-4 rounded-lg mb-6">
                <span className="block text-xs font-bold text-[#20251F] uppercase mb-1">Key Deliverables:</span>
                <p className="text-xs text-[#5B6259]">{service.deliverables}</p>
              </div>
            </div>
            <Link
              href="/hire"
              className="block text-center py-2.5 px-4 rounded bg-[#20251F] text-[#E8E4D9] text-sm font-semibold hover:bg-[#C9A54D] hover:text-[#20251F] transition-all"
            >
              Request Quote
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-[#20251F] text-[#E8E4D9] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3 text-[#C9A54D]">Have a Production Brief?</h3>
        <p className="text-sm text-[#E8E4D9]/80 max-w-xl mx-auto mb-6">
          Submit project scope, deliverables, desired timeline, and reference links for professional review.
        </p>
        <Link
          href="/hire"
          className="inline-block py-3 px-6 rounded bg-[#C9A54D] text-[#20251F] font-bold text-sm hover:bg-[#b8933e] transition-all"
        >
          Submit Production Inquiry
        </Link>
      </div>
    </div>
  );
}
