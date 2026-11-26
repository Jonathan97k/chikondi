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
    const password = typeof body?.password === "string" ? body.password : "";

    if (!ALLOWED_EMAILS.has(email) || password.length < 8 || password.length > 256) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const sessionResponse = await fetch(`${ENDPOINT}/account/sessions/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Appwrite-Project": PROJECT_ID },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });
    const session = await sessionResponse.json().catch(() => ({}));

    if (!sessionResponse.ok || typeof session.secret !== "string") {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const accountResponse = await fetch(`${ENDPOINT}/account`, {
      headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Session": session.secret },
      cache: "no-store",
    });
    const account = await accountResponse.json().catch(() => ({}));

    if (!accountResponse.ok || !ALLOWED_EMAILS.has(String(account.email ?? "").trim().toLowerCase())) {
      await fetch(`${ENDPOINT}/account/sessions/current`, {
        method: "DELETE",
        headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Session": session.secret },
        cache: "no-store",
      }).catch(() => undefined);
      return NextResponse.json({ error: "This account is not authorised to access TOKHA administration." }, { status: 403 });
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
    return NextResponse.json({ error: "Unable to process sign-in. Please try again." }, { status: 400 });
  }
}
