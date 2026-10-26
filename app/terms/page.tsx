export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Legal & Terms</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Terms of Service</h1>
        <p className="text-lg text-[#5B6259]">
          Terms governing the use of the Chikondi Official website and professional services.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm space-y-6 text-[#5B6259]">
        <h2 className="text-xl font-bold text-[#20251F]">1. Intellectual Property</h2>
        <p>
          All content on this website, including text, artwork, music references, scripts, and imagery, is protected by copyright and intellectual property rights owned or licensed by Chikondi. Unauthorized reproduction or commercial use is strictly prohibited.
        </p>

        <h2 className="text-xl font-bold text-[#20251F]">2. Professional Services & Inquiries</h2>
        <p>
          Submitting an inquiry or booking request via the website does not constitute a binding contract until formal agreements and terms are mutually agreed upon and confirmed in writing.
        </p>

        <h2 className="text-xl font-bold text-[#20251F]">3. Limitation of Liability</h2>
        <p>
          Chikondi Official provides this website on an "as is" basis without warranties of any kind. We are not liable for any damages arising from the use or inability to use this platform.
        </p>
      </div>
    </div>
  );
}
