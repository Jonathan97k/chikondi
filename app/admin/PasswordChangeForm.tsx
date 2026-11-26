"use client";

import { FormEvent, useState } from "react";

export default function PasswordChangeForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function changePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    if (password !== confirmPassword) {
      setMessage("The new passwords do not match.");
      return;
    }
    if (password.length < 12) {
      setMessage("Choose a new password with at least 12 characters.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/admin/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldPassword, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Password could not be changed.");
      setOldPassword("");
      setPassword("");
      setConfirmPassword("");
      setMessage(data.message || "Password updated.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Password could not be changed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-xl border border-[#D6D9D1] bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold">Account security</h3>
      <p className="mt-2 text-sm leading-6 text-[#687064]">Change your temporary password after your first sign-in, and update it whenever necessary.</p>
      <form onSubmit={changePassword} className="mt-5 grid gap-3 sm:grid-cols-2">
        <input type="password" autoComplete="current-password" required minLength={8} value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} placeholder="Current password" aria-label="Current password" className="rounded-lg border border-[#D6D9D1] px-4 py-3 text-sm outline-none focus:border-[#B18B35]" />
        <input type="password" autoComplete="new-password" required minLength={12} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="New password (12+ characters)" aria-label="New password" className="rounded-lg border border-[#D6D9D1] px-4 py-3 text-sm outline-none focus:border-[#B18B35]" />
        <input type="password" autoComplete="new-password" required minLength={12} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm new password" aria-label="Confirm new password" className="rounded-lg border border-[#D6D9D1] px-4 py-3 text-sm outline-none focus:border-[#B18B35] sm:col-span-2" />
        <button type="submit" disabled={loading} className="rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white hover:bg-[#B18B35] disabled:opacity-60 sm:col-span-2">{loading ? "Updating…" : "Change password"}</button>
      </form>
      {message && <p role="status" className="mt-3 text-sm text-[#5B6259]">{message}</p>}
    </section>
  );
}
