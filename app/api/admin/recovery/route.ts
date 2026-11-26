import { NextResponse } from "next/server";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const ALLOWED_EMAILS = new Set(["kaphirikwikwete97@gmail.com", "simplechicco864@gmail.com"]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body?.email ?? "").trim().toLowerCase();
    if (!ALLOWED_EMAILS.has(email)) {
      return NextResponse.json({ error: "This email is not authorised for TOKHA admin access." }, { status: 403 });
    }
    const upstream = await fetch(`${ENDPOINT}/account/recovery`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Appwrite-Project": PROJECT_ID },
      body: JSON.stringify({ email, url: "https://tokha-creations.vercel.app/admin/reset-password" }),
      cache: "no-store",
    });
    if (!upstream.ok) {
      const detail = await upstream.json().catch(() => ({}));
      console.error("TOKHA password recovery request failed:", upstream.status, detail?.type ?? "unknown");
      return NextResponse.json({ error: "Appwrite could not send a reset email. Check that this account exists and the website URL is added under Appwrite project platforms." }, { status: 502 });
    }
    return NextResponse.json({ success: true, message: "Password-reset instructions have been requested. Check your inbox and spam folder." });
  } catch {
    return NextResponse.json({ error: "Unable to process the password-reset request." }, { status: 400 });
  }
}
