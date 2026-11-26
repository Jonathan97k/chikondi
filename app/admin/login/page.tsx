"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetRequested, setResetRequested] = useState(false);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Sign-in failed.");
      window.location.assign("/admin");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to sign in. Check your details and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function requestPasswordReset() {
    if (!email.trim()) {
      setMessage("Enter your authorised email address first, then choose Forgot password.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/recovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not request a password reset.");
      setResetRequested(true);
      setMessage(data.message || "If the account exists, reset instructions will be sent.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not request a password reset.");
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
          <p className="text-sm leading-6 text-[#5B6259]">Use your authorised email address and password. You will not need a sign-in email link.</p>
        </div>
        <form onSubmit={signIn} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="admin-email" className="block text-sm font-semibold">Email address</label>
            <input id="admin-email" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-sm outline-none focus:border-[#B18B35]" />
          </div>
          <div className="space-y-2">
            <label htmlFor="admin-password" className="block text-sm font-semibold">Password</label>
            <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-sm outline-none focus:border-[#B18B35]" />
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B18B35] disabled:opacity-60">{loading ? "Signing in…" : "Sign in to CMS"}</button>
        </form>
        <button type="button" onClick={requestPasswordReset} disabled={loading || resetRequested} className="text-sm font-semibold text-[#5B6259] underline underline-offset-4 disabled:opacity-60">Forgot password?</button>
        {message && <p role="alert" className="rounded-lg border border-[#E5C9C5] bg-[#FFF8F6] p-3 text-sm leading-6 text-[#8A3328]">{message}</p>}
        <p className="text-xs leading-5 text-[#777D73]">Only the TOKHA developer and owner accounts are authorised. Use “Forgot password?” to request a secure reset email.</p>
        <Link href="/" className="inline-block text-sm font-semibold text-[#5B6259] underline underline-offset-4">Return to website</Link>
      </section>
    </main>
  );
}
