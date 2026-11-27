"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type SetupData = { enabled?: boolean; secret?: string; qrUrl?: string; recoveryCodes?: string[] };

export default function AdminSecuritySetupPage() {
  const router = useRouter();
  const [setup, setSetup] = useState<SetupData | null>(null);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/mfa/setup", { method: "POST" }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not start setup.");
      setSetup(data);
      if (data.enabled && !data.recoveryCodes) router.replace("/admin");
    }).catch((error: Error) => setMessage(error.message)).finally(() => setLoading(false));
  }, [router]);

  async function verifySetup() {
    setSaving(true); setMessage("");
    try {
      const response = await fetch("/api/admin/mfa/enroll", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ otp }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not enable MFA.");
      setSetup({ enabled: true, recoveryCodes: data.recoveryCodes }); setOtp("");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Could not enable MFA."); }
    finally { setSaving(false); }
  }

  async function copyCodes() {
    if (!setup?.recoveryCodes) return;
    await navigator.clipboard.writeText(setup.recoveryCodes.join("\n"));
    setMessage("Recovery codes copied. Store them somewhere private and secure.");
  }

  if (loading) return <main className="min-h-[70vh] flex items-center justify-center px-5 text-sm text-[#5B6259]">Preparing secure authenticator setup…</main>;

  return <main className="min-h-[70vh] flex items-center justify-center px-5 py-16 text-[#20251F]">
    <section className="w-full max-w-xl rounded-2xl border border-[#D6D9D1] bg-white p-8 shadow-sm space-y-6">
      <div className="space-y-2"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18B35]">TOKHA CREATIONS · Account protection</p><h1 className="text-3xl font-extrabold">Set up Google Authenticator</h1><p className="text-sm leading-6 text-[#5B6259]">Each administrator must enrol their own phone. This is required before the admin dashboard can be used.</p></div>
      {setup?.recoveryCodes ? <div className="space-y-4">
        <div className="rounded-xl border border-[#D8C58E] bg-[#FBF8EC] p-4"><h2 className="font-bold">Save your recovery codes now</h2><p className="mt-2 text-sm leading-6">Each code works once if you lose your phone. These codes will not be shown again.</p></div>
        <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#F7F6F1] p-4 font-mono text-sm">{setup.recoveryCodes.map((code) => <span key={code}>{code}</span>)}</div>
        <button onClick={copyCodes} className="w-full rounded-lg border border-[#C9CEC4] px-5 py-3 text-sm font-bold">Copy recovery codes</button>
        <button onClick={() => router.replace("/admin")} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white">I've saved my codes — continue</button>
      </div> : setup?.qrUrl && setup.secret ? <div className="space-y-5">
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5B6259]"><li>Open Google Authenticator on your phone.</li><li>Tap + and choose Scan a QR code.</li><li>Scan the QR code. If that fails, enter the setup key manually.</li></ol>
        <div className="flex justify-center rounded-xl bg-white p-4"><img src={setup.qrUrl} alt="Google Authenticator setup QR code" width={280} height={280} className="h-[280px] w-[280px] object-contain" /></div>
        <div className="space-y-2"><label className="block text-sm font-semibold">Manual setup key</label><code className="block break-all rounded-lg bg-[#F7F6F1] p-3 text-sm">{setup.secret}</code><p className="text-xs leading-5 text-[#777D73]">Keep this key private. Anyone with it can generate your verification codes.</p></div>
        <div className="space-y-2"><label htmlFor="setup-otp" className="block text-sm font-semibold">Enter the six-digit code from the app</label><input id="setup-otp" value={otp} onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" placeholder="000000" className="w-full rounded-lg border border-[#D6D9D1] bg-[#FAFAF7] px-4 py-3 text-lg tracking-[0.25em]" /><button onClick={verifySetup} disabled={saving || otp.length !== 6} className="w-full rounded-lg bg-[#20251F] px-5 py-3 text-sm font-bold text-white disabled:opacity-60">{saving ? "Enabling protection…" : "Verify and enable MFA"}</button></div>
      </div> : <p className="rounded-lg border border-[#D6D9D1] bg-[#F7F6F1] p-3 text-sm leading-6 text-[#5B6259]">{message || "Could not prepare authenticator setup. Please sign in again."}</p>}
      {message && <p role="alert" className="text-sm leading-6 text-[#8B3D31]">{message}</p>}
    </section>
  </main>;
}
