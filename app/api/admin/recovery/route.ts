import { NextResponse } from "next/server";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const ALLOWED_EMAILS = new Set([
  "kaphirikwikwete97@gmail.com",
  "simplechicco864@gmail.com",
]);

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
      body: JSON.stringify({
        email,
        url: "https://tokha-creations.vercel.app/admin/reset-password",
      }),
      cache: "no-store",
    });
    if (!upstream.ok) {
      const detail = await upstream.json().catch(() => ({}));
      console.error("TOKHA Appwrite password recovery request failed:", upstream.status, detail?.type ?? "unknown");
      return NextResponse.json({ error: "Appwrite could not send the reset email. Confirm that this account exists and the recovery URL is allowed in Appwrite Auth settings." }, { status: 502 });
    }
    return NextResponse.json({ success: true, message: "If your authorised account is registered, Appwrite will send password-reset instructions to that email address." });
  } catch {
    return NextResponse.json({ error: "Unable to process the password-reset request." }, { status: 400 });
  }
}
