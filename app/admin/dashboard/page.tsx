import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-12 flex justify-between items-center border-b border-[#D6D9D1] pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Admin CMS</span>
          <h1 className="text-3xl font-extrabold mt-1">Dashboard & Publishing Control</h1>
        </div>
        <Link
          href="/admin/login"
          className="px-4 py-2 rounded bg-red-800 text-white text-xs font-semibold hover:bg-red-900 transition-all"
        >
          Sign Out
        </Link>
      </div>

      {/* Brand Logo System Approval Notice */}
      <div className="bg-[#20251F] text-[#E8E4D9] rounded-xl p-6 mb-8 border border-[#C9A54D]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Branding Status</span>
          <h2 className="text-xl font-bold mt-1">Logo System & Assets (Draft - Pending Owner Approval)</h2>
          <p className="text-sm text-[#E8E4D9]/80 mt-1">
            Brand logo system variants and assets are generated in <code className="text-[#C9A54D]">design/branding/</code>. Not final until Chikondi signs off.
          </p>
        </div>
        <span className="px-3 py-1.5 rounded bg-[#C9A54D] text-[#20251F] text-xs font-bold uppercase tracking-wider">
          Pending Review
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border border-[#D6D9D1] shadow-sm">
          <span className="text-xs font-bold uppercase text-[#5B6259]">New Inquiries</span>
          <p className="text-3xl font-extrabold text-[#C9A54D] mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#D6D9D1] shadow-sm">
          <span className="text-xs font-bold uppercase text-[#5B6259]">Published Releases</span>
          <p className="text-3xl font-extrabold text-[#20251F] mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#D6D9D1] shadow-sm">
          <span className="text-xs font-bold uppercase text-[#5B6259]">Writing Projects</span>
          <p className="text-3xl font-extrabold text-[#20251F] mt-2">2</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm space-y-6">
        <h2 className="text-xl font-bold">Recent Inquiries Inbox</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#5B6259]">
            <thead className="border-b border-[#D6D9D1] text-xs uppercase text-[#20251F]">
              <tr>
                <th className="pb-3">Name</th>
                <th className="pb-3">Type</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D9D1]">
              <tr>
                <td className="py-3 font-medium text-[#20251F]">John Organizer</td>
                <td className="py-3">Music Booking</td>
                <td className="py-3">john@example.com</td>
                <td className="py-3"><span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 text-xs font-bold">New</span></td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-[#20251F]">Sarah Producer</td>
                <td className="py-3">Scriptwriting</td>
                <td className="py-3">sarah@example.com</td>
                <td className="py-3"><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-bold">Reviewed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
