export default function AdminDashboardPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-[#20251F]">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#D6D9D1] pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">TOKHA CREATIONS · Admin CMS</span>
          <h1 className="mt-1 text-3xl font-extrabold">Publishing dashboard</h1>
        </div>
        <form action="/api/admin/logout" method="post">
          <button type="submit" className="rounded-lg bg-[#20251F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#B18B35]">Sign out</button>
        </form>
      </div>
      <section className="rounded-xl border border-[#D6D9D1] bg-white p-7 shadow-sm space-y-4">
        <h2 className="text-xl font-bold">Your CMS access is active</h2>
        <p className="text-sm leading-6 text-[#5B6259]">You are signed in. Content editing and media management will be enabled here after the publishing tools are connected.</p>
        <p className="text-sm leading-6 text-[#5B6259]">No sample inquiries, invented activity figures, or unpublished owner content are displayed.</p>
      </section>
    </main>
  );
}
