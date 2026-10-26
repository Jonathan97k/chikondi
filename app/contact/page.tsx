import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Contact Channels</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Get in Touch</h1>
        <p className="text-lg text-[#5B6259]">
          Distinct contact routes for general inquiries, business bookings, press, and community partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl border border-[#D6D9D1] shadow-sm space-y-3">
          <h3 className="text-lg font-bold text-[#20251F]">General & Business</h3>
          <p className="text-sm text-[#5B6259]">
            For general professional inquiries, music bookings, and production requests.
          </p>
          <Link href="/hire" className="inline-block pt-2 text-sm font-semibold text-[#C9A54D] hover:underline">
            Use Hire & Booking Form →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl border border-[#D6D9D1] shadow-sm space-y-3">
          <h3 className="text-lg font-bold text-[#20251F]">Press & Media</h3>
          <p className="text-sm text-[#5B6259]">
            For interviews, press bios, media kits, and promotional requests.
          </p>
          <Link href="/press" className="inline-block pt-2 text-sm font-semibold text-[#C9A54D] hover:underline">
            Visit Press Kit →
          </Link>
        </div>
      </div>

      <div className="bg-[#20251F] text-[#E8E4D9] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-[#C9A54D]">Direct Inquiry Route</h3>
        <p className="text-sm text-[#E8E4D9]/80 mb-6">
          All submissions are reviewed securely by our administrative team.
        </p>
        <Link
          href="/hire"
          className="inline-block py-3 px-6 rounded bg-[#C9A54D] text-[#20251F] font-bold text-sm hover:bg-[#b8933e] transition-all"
        >
          Open Inquiry Form
        </Link>
      </div>
    </div>
  );
}
