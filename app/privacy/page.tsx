export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 border-b border-[#D6D9D1] pb-8">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Legal & Privacy</span>
        <h1 className="text-4xl font-extrabold mt-2 mb-4">Privacy Policy</h1>
        <p className="text-lg text-[#5B6259]">
          Information regarding data collection, processing purposes, retention, and user rights.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm space-y-6 text-[#5B6259]">
        <h2 className="text-xl font-bold text-[#20251F]">1. Data Collection</h2>
        <p>
          We collect personal data strictly when submitted voluntarily through our inquiry and booking forms (such as name, email, phone number, and project details). This information is used solely to respond to inquiries and manage professional communications.
        </p>

        <h2 className="text-xl font-bold text-[#20251F]">2. Data Protection & Retention</h2>
        <p>
          Submitted inquiries are stored securely with restricted access. We retain personal data only as long as necessary for professional correspondence and legal compliance. We do not sell or share personal data with unauthorized third parties.
        </p>

        <h2 className="text-xl font-bold text-[#20251F]">3. User Rights</h2>
        <p>
          You have the right to request access, correction, or deletion of your personal data at any time by contacting us through our official contact routes.
        </p>
      </div>
    </div>
  );
}
