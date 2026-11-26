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
    const { userId, secret } = await request.json();
    if (typeof userId !== "string" || typeof secret !== "string" || !userId || !secret) {
      return NextResponse.json({ error: "The sign-in link is incomplete or invalid." }, { status: 400 });
    }

    const sessionResponse = await fetch(`${ENDPOINT}/account/sessions/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Appwrite-Project": PROJECT_ID },
      body: JSON.stringify({ userId, secret }),
      cache: "no-store",
    });
    const session = await sessionResponse.json();
    if (!sessionResponse.ok || typeof session.secret !== "string") {
      return NextResponse.json({ error: "This sign-in link has expired or has already been used. Request a new one." }, { status: 401 });
    }

    const accountResponse = await fetch(`${ENDPOINT}/account`, {
      headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Session": session.secret },
      cache: "no-store",
    });
    const account = await accountResponse.json();

    if (!accountResponse.ok || !ALLOWED_EMAILS.has(String(account.email ?? "").toLowerCase())) {
      await fetch(`${ENDPOINT}/account/sessions/current`, {
        method: "DELETE",
        headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Session": session.secret },
      }).catch(() => undefined);
      return NextResponse.json({ error: "This account is not authorised to access the admin area." }, { status: 403 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: new Date(session.expire),
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Unable to complete sign-in. Please request a fresh link." }, { status: 400 });
  }
}
