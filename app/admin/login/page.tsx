"use client";

import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="max-w-md mx-auto px-4 py-24 text-[#20251F]">
      <section className="bg-white rounded-xl p-8 border border-[#D6D9D1] shadow-sm space-y-5">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-[#C9A54D] font-bold">Admin CMS</span>
          <h1 className="text-2xl font-extrabold mt-1">Owner access is being prepared</h1>
          <p className="text-sm text-[#5B6259] mt-3">
            The private publishing dashboard is not active yet. Secure sign-in must be connected before an owner account can access it.
          </p>
        </div>
        <div className="rounded-lg border border-[#D6D9D1] bg-[#F7F6F1] p-4 text-sm text-[#5B6259]">
          No password is being requested or stored on this page. Public registration is not available.
        </div>
        <Link
          href="/"
          className="block w-full py-3 rounded-lg bg-[#20251F] text-[#E8E4D9] text-center font-bold text-sm hover:bg-[#C9A54D] hover:text-[#20251F] transition-all shadow"
        >
          Return to TOKHA CREATIONS
        </Link>
      </section>
    </main>
  );
}
