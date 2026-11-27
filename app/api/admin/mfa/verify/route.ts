import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, PENDING_CHALLENGE_COOKIE, PENDING_SESSION_COOKIE, appwriteRequest, hasSameOrigin, isAllowedAdmin } from "@/lib/tokha-admin-auth";

const secureCookie = process.env.NODE_ENV === "production";

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  const jar = await cookies();
  const pendingSession = jar.get(PENDING_SESSION_COOKIE)?.value;
  const challengeId = jar.get(PENDING_CHALLENGE_COOKIE)?.value;
  if (!pendingSession || !challengeId) return NextResponse.json({ error: "Your verification session expired. Request a new sign-in link." }, { status: 401 });

  try {
    const { otp } = await request.json();
    if (typeof otp !== "string" || !/^(\d{6}|[A-Za-z0-9-]{8,32})$/.test(otp.trim())) return NextResponse.json({ error: "Enter a six-digit authenticator code or a valid recovery code." }, { status: 400 });

    const verifiedResponse = await appwriteRequest("/account/mfa/challenges", "PUT", pendingSession, { challengeId, otp: otp.trim() });
    const verified = await verifiedResponse.json().catch(() => ({}));
    if (!verifiedResponse.ok) return NextResponse.json({ error: "That code was not accepted. Check it and try again." }, { status: 401 });

    const finalSecret = typeof verified.secret === "string" ? verified.secret : pendingSession;
    const accountResponse = await appwriteRequest("/account", "GET", finalSecret);
    const account = await accountResponse.json().catch(() => ({}));
    if (!accountResponse.ok || !isAllowedAdmin(account.email) || account.mfa !== true) {
      await appwriteRequest("/account/sessions/current", "DELETE", finalSecret).catch(() => undefined);
      return NextResponse.json({ error: "The account did not pass the final security check." }, { status: 403 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_SESSION_COOKIE, finalSecret, {
      httpOnly: true, secure: secureCookie, sameSite: "strict", path: "/",
      ...(verified.expire ? { expires: new Date(verified.expire) } : { maxAge: 8 * 60 * 60 }),
    });
    response.cookies.delete(PENDING_SESSION_COOKIE);
    response.cookies.delete(PENDING_CHALLENGE_COOKIE);
    return response;
  } catch {
    return NextResponse.json({ error: "Unable to verify your code." }, { status: 400 });
  }
}
