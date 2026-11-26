"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      router.replace("/admin/dashboard");
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function requestReset() {
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
      setMessage(data.message);
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
          <h1 className="text-3xl font-extrabold">Sign in to your dashboard</h1>
          <p className="text-sm leading-6 text-[#5B6259]">Use the email address and password assigned to your authorised account. Public registration is disabled.</p>
        </div>
        <form onSubmit={signIn} className="space-y-4">
          <div>
            <label htmlFor="admin-email" className="mb-1 block text-sm font-semibold">Email address</label>
            <input id="admin-email" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-sm outline-none focus:border-[#B18B35]" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="admin-password" className="mb-1 block text-sm font-semibold">Password</label>
            <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-sm outline-none focus:border-[#B18B35]" placeholder="Enter your password" />
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B18B35] disabled:opacity-60">{loading ? "Signing in…" : "Sign in"}</button>
        </form>
        <button type="button" disabled={loading} onClick={requestReset} className="text-sm font-semibold text-[#5B6259] underline underline-offset-4 disabled:opacity-60">Forgot password?</button>
        {message && <p role="status" aria-live="polite" className="rounded-lg border border-[#D6D9D1] bg-[#F7F6F1] p-3 text-sm leading-6 text-[#4F594D]">{message}</p>}
        <p className="text-xs leading-5 text-[#777D73]">Only approved TOKHA administrators can access this area. Contact your administrator if you do not yet have an account.</p>
        <Link href="/" className="inline-block text-sm font-semibold text-[#5B6259] underline underline-offset-4">Return to website</Link>
      </section>
    </main>
  );
}
