"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminMfaVerifyPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [factor, setFactor] = useState<"totp" | "recoveryCode">("totp");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function switchFactor(nextFactor: "totp" | "recoveryCode") {
    setLoading(true); setMessage("");
    try {
      const response = await fetch("/api/admin/mfa/challenge", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ factor: nextFactor === "recoveryCode" ? "recoverycode" : "totp" }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not change verification method.");
      setFactor(nextFactor); setOtp("");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Could not change verification method."); }
    finally { setLoading(false); }
  }

  async function verify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setMessage("");
    try {
      const response = await fetch("/api/admin/mfa/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ otp }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Verification failed.");
      router.replace("/admin");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Verification failed."); }
    finally { setLoading(false); }
  }

  return <main className="min-h-[70vh] flex items-center justify-center px-5 py-16 text-[#20251F]">
    <section className="w-full max-w-md rounded-2xl border border-[#D6D9D1] bg-white p-8 shadow-sm space-y-6">
      <div className="space-y-2"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18B35]">TOKHA CREATIONS · Second factor</p><h1 className="text-3xl font-extrabold">Verify it's you</h1><p className="text-sm leading-6 text-[#5B6259]">{factor === "totp" ? "Open Google Authenticator and enter the current six-digit TOKHA CREATIONS code." : "Enter one of the single-use recovery codes you saved during setup."}</p></div>
      <form onSubmit={verify} className="space-y-4">
        <label htmlFor="admin-mfa-code" className="block text-sm font-semibold">{factor === "totp" ? "Authenticator code" : "Recovery code"}</label>
        <input id="admin-mfa-code" value={otp} onChange={(event) => setOtp(event.target.value.replace(factor === "totp" ? /\D/g : /[^a-zA-Z0-9-]/g, "").slice(0, factor === "totp" ? 6 : 32))} inputMode={factor === "totp" ? "numeric" : "text"} autoComplete="one-time-code" required maxLength={factor === "totp" ? 6 : 32} placeholder={factor === "totp" ? "000000" : "Enter recovery code"} className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-lg tracking-[0.2em] outline-none focus:border-[#B18B35]" />
        <button type="submit" disabled={loading || (factor === "totp" ? otp.length !== 6 : otp.length < 8)} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white disabled:opacity-60">{loading ? "Verifying…" : "Verify and open dashboard"}</button>
      </form>
      <button type="button" disabled={loading} onClick={() => switchFactor(factor === "totp" ? "recoveryCode" : "totp")} className="text-sm font-semibold text-[#8A6A25] underline underline-offset-4 disabled:opacity-50">{factor === "totp" ? "Use a recovery code instead" : "Use Google Authenticator instead"}</button>
      {message && <p role="alert" className="rounded-lg border border-[#D6D9D1] bg-[#F7F6F1] p-3 text-sm leading-6 text-[#8B3D31]">{message}</p>}
      <Link href="/admin/login" className="inline-block text-sm font-semibold text-[#5B6259] underline underline-offset-4">Return to sign in</Link>
    </section>
  </main>;
}
