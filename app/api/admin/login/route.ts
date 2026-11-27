import { NextResponse } from "next/server";
import { hasSameOrigin } from "@/lib/tokha-admin-auth";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const ALLOWED_EMAILS = new Set([
  "kaphirikwikwete97@gmail.com",
  "simplechicco864@gmail.com",
]);

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  try {
    const body = await request.json();
    const email = String(body?.email ?? "").trim().toLowerCase();

    if (!ALLOWED_EMAILS.has(email)) {
      return NextResponse.json({ error: "This email is not authorised for TOKHA admin access." }, { status: 403 });
    }

    const userId = crypto.randomUUID();
    const siteUrl = new URL(process.env.TOKHA_SITE_URL || "https://tokha-creations.vercel.app").origin;
    const response = await fetch(`${ENDPOINT}/account/tokens/magic-url`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Appwrite-Project": PROJECT_ID },
      body: JSON.stringify({
        userId,
        email,
        url: `${siteUrl}/admin/callback`,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const detail = await response.json().catch(() => ({}));
      console.error("Appwrite magic-link request failed:", response.status, detail?.message ?? "unknown error");
      return NextResponse.json(
        { error: "We could not send the sign-in link. Please try again shortly." },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }

    return NextResponse.json(
      { success: true, message: "A secure sign-in link has been sent to your authorised email address." },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ error: "Unable to process the sign-in request." }, { status: 400 });
  }
}
