"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function CompleteSignIn() {
  const params = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState("Verifying your secure sign-in link…");

  useEffect(() => {
    const userId = params.get("userId");
    const secret = params.get("secret");
    if (!userId || !secret) {
      setMessage("This sign-in link is incomplete. Return to the admin login page and request a new link.");
      return;
    }

    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete("userId");
    cleanUrl.searchParams.delete("secret");
    window.history.replaceState({}, "", cleanUrl.pathname);

    fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, secret }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Sign-in failed.");
        router.replace("/admin");
      })
      .catch((error: Error) => setMessage(error.message));
  }, [params, router]);

  return <p className="text-sm leading-6 text-[#5B6259]" role="status">{message}</p>;
}

export default function AdminCallbackPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-5 py-20 text-[#20251F]">
      <section className="w-full max-w-md rounded-2xl border border-[#D6D9D1] bg-white p-8 shadow-sm space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18B35]">TOKHA CREATIONS · Secure access</p>
        <h1 className="text-2xl font-extrabold">Signing you in</h1>
        <Suspense fallback={<p className="text-sm text-[#5B6259]">Checking your link…</p>}>
          <CompleteSignIn />
        </Suspense>
      </section>
    </main>
  );
}
