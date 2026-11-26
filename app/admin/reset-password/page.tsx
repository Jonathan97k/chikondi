"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AdminResetPasswordPage() {
  const params = useSearchParams();
  const userId = params.get("userId") ?? "";
  const secret = params.get("secret") ?? "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function reset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId || !secret) { setMessage("This reset link is incomplete. Request a new password-reset email."); return; }
    if (password.length < 8) { setMessage("Choose a password with at least 8 characters."); return; }
    if (password !== confirm) { setMessage("The passwords do not match."); return; }
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/recovery/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, secret, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Password reset failed.");
      setMessage("Your password has been updated. You can now sign in.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Password reset failed.");
    } finally { setLoading(false); }
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-5 py-20 text-[#20251F]">
      <section className="w-full max-w-md rounded-2xl border border-[#D6D9D1] bg-white p-8 shadow-sm space-y-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18B35]">TOKHA CREATIONS · Admin CMS</p>
        <h1 className="text-2xl font-extrabold">Set a new password</h1>
        <form onSubmit={reset} className="space-y-4">
          <label className="block text-sm font-semibold">New password
            <input type="password" autoComplete="new-password" minLength={8} required value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-sm" />
          </label>
          <label className="block text-sm font-semibold">Confirm new password
            <input type="password" autoComplete="new-password" minLength={8} required value={confirm} onChange={e => setConfirm(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-sm" />
          </label>
          <button disabled={loading} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white disabled:opacity-60">{loading ? "Updating…" : "Update password"}</button>
        </form>
        {message && <p role="status" className="rounded-lg border border-[#D6D9D1] bg-[#F7F6F1] p-3 text-sm">{message}</p>}
        <Link href="/admin/login" className="text-sm font-semibold underline underline-offset-4">Return to sign in</Link>
      </section>
    </main>
  );
}
