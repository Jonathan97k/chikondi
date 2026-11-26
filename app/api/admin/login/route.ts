import { NextResponse } from "next/server";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const COOKIE_NAME = "tokha_admin_session";
const ALLOWED_EMAILS = new Set([
  "kaphirikwikwete97@gmail.com",
  "simplechicco864@gmail.com",
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const password = String(body?.password ?? "");

    if (!ALLOWED_EMAILS.has(email)) {
      return NextResponse.json({ error: "This email is not authorised for TOKHA admin access." }, { status: 403 });
    }
    if (!password || password.length > 256) {
      return NextResponse.json({ error: "Enter your account password." }, { status: 400 });
    }

    const upstream = await fetch(`${ENDPOINT}/account/sessions/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Appwrite-Project": PROJECT_ID },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });
    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok || !data.secret) {
      console.warn("TOKHA Appwrite password sign-in rejected:", upstream.status, data?.type ?? "unknown");
      return NextResponse.json({ error: "The email or password is incorrect, or this account has not been created in Appwrite yet." }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, data.secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: data.expire ? new Date(data.expire) : undefined,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Unable to process sign-in. Please try again." }, { status: 400 });
  }
}
