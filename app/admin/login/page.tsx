"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function requestCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not send verification code.");
      setCodeSent(true);
      setMessage(data.message);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not send verification code.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not verify code.");
      window.location.assign(data.redirectTo || "/admin");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not verify code.");
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
          <p className="text-sm leading-6 text-[#5B6259]">{codeSent ? "Enter the six-digit verification code sent to your authorised email address." : "Enter your authorised email address. We’ll send you a one-time six-digit verification code."}</p>
        </div>
        {!codeSent ? (
          <form onSubmit={requestCode} className="space-y-4">
            <label htmlFor="admin-email" className="block text-sm font-semibold">Email address</label>
            <input id="admin-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-sm outline-none focus:border-[#B18B35]" />
            <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B18B35] disabled:opacity-60">{loading ? "Sending code…" : "Send verification code"}</button>
          </form>
        ) : (
          <form onSubmit={verifyCode} className="space-y-4">
            <label htmlFor="admin-code" className="block text-sm font-semibold">Six-digit verification code</label>
            <input id="admin-code" type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="000000" className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-center text-2xl tracking-[0.35em] outline-none focus:border-[#B18B35]" />
            <button type="submit" disabled={loading || code.length !== 6} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B18B35] disabled:opacity-60">{loading ? "Verifying…" : "Verify and sign in"}</button>
            <button type="button" disabled={loading} onClick={() => { setCodeSent(false); setCode(""); setMessage(""); }} className="w-full text-sm font-semibold text-[#5B6259] underline underline-offset-4">Use a different email address</button>
          </form>
        )}
        {message && <p role="status" className="rounded-lg border border-[#D6D9D1] bg-[#F7F6F1] p-3 text-sm leading-6 text-[#4F594D]">{message}</p>}
        <p className="text-xs leading-5 text-[#777D73]">Access is restricted to approved TOKHA administrators. Codes expire after five minutes. Public registration is disabled.</p>
        <Link href="/" className="inline-block text-sm font-semibold text-[#5B6259] underline underline-offset-4">Return to website</Link>
      </section>
    </main>
  );
}
