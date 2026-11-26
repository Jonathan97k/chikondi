import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-[#20251F]">
      <section className="bg-white rounded-xl p-8 sm:p-10 border border-[#D6D9D1] shadow-sm space-y-5">
        <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">TOKHA CREATIONS · Admin CMS</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Publishing dashboard not yet activated</h1>
        <p className="text-sm sm:text-base leading-relaxed text-[#5B6259]">
          This area will let the owner manage music, photographs, creative projects, and YouTube video links. It is currently unavailable while secure owner authentication and private content storage are being configured.
        </p>
        <p className="text-sm leading-relaxed text-[#5B6259]">
          No sample inquiries, invented activity figures, or unpublished owner content are displayed here.
        </p>
        <Link
          href="/admin/login"
          className="inline-flex px-5 py-3 rounded-lg bg-[#20251F] text-[#E8E4D9] text-sm font-bold hover:bg-[#C9A54D] hover:text-[#20251F] transition-all"
        >
          Admin access information
        </Link>
      </section>
    </main>
  );
}
