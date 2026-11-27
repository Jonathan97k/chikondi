"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function requestLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not send sign-in link.");
      setMessage(data.message);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not send sign-in link.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-5 py-20 text-[#20251F]">
      <section className="w-full max-w-md rounded-2xl border border-[#D6D9D1] bg-white p-8 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18B35]">TOKHA CREATIONS · Admin CMS</p>
          <h1 className="text-3xl font-extrabold">Administrator sign in</h1>
          <p className="text-sm leading-6 text-[#5B6259]">Enter your authorised Gmail address. We’ll send a one-time sign-in link to that inbox. After opening it, you’ll verify with Google Authenticator. No website password is required.</p>
        </div>
        <form onSubmit={requestLink} className="space-y-4">
          <label htmlFor="admin-email" className="block text-sm font-semibold">Email address</label>
          <input id="admin-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-sm outline-none focus:border-[#B18B35]" />
          <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B18B35] disabled:opacity-60">{loading ? "Sending secure link…" : "Email me a sign-in link"}</button>
        </form>
        {message && <p role="status" className="rounded-lg border border-[#D6D9D1] bg-[#F7F6F1] p-3 text-sm leading-6 text-[#4F594D]">{message}</p>}
        <p className="text-xs leading-5 text-[#777D73]">Access is restricted to approved TOKHA administrators. Public registration is disabled.</p>
        <Link href="/" className="inline-block text-sm font-semibold text-[#5B6259] underline underline-offset-4">Return to website</Link>
      </section>
    </main>
  );
}
