import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  PENDING_CHALLENGE_COOKIE,
  PENDING_SESSION_COOKIE,
  appwriteRequest,
  hasSameOrigin,
  isAllowedAdmin,
} from "@/lib/tokha-admin-auth";

const secureCookie = process.env.NODE_ENV === "production";

async function startMfaChallenge(sessionSecret: string) {
  const challengeResponse = await appwriteRequest(
    "/account/mfa/challenges",
    "POST",
    sessionSecret,
    { factor: "totp" },
  );
  const challenge = await challengeResponse.json().catch(() => ({}));
  if (!challengeResponse.ok || typeof challenge.$id !== "string") {
    await appwriteRequest("/account/sessions/current", "DELETE", sessionSecret).catch(() => undefined);
    return NextResponse.json(
      { error: "We could not start authenticator verification. Please request a new sign-in link." },
      { status: 502 },
    );
  }

  const response = NextResponse.json({ success: true, mfaRequired: true });
  response.cookies.set(PENDING_SESSION_COOKIE, sessionSecret, {
    httpOnly: true, secure: secureCookie, sameSite: "strict", path: "/", maxAge: 5 * 60,
  });
  response.cookies.set(PENDING_CHALLENGE_COOKIE, challenge.$id, {
    httpOnly: true, secure: secureCookie, sameSite: "strict", path: "/", maxAge: 5 * 60,
  });
  response.cookies.delete(ADMIN_SESSION_COOKIE);
  return response;
}

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  try {
    const { userId, secret } = await request.json();
    if (typeof userId !== "string" || typeof secret !== "string" || !userId || !secret) {
      return NextResponse.json({ error: "The sign-in link is incomplete or invalid." }, { status: 400 });
    }

    const sessionResponse = await appwriteRequest("/account/sessions/token", "POST", undefined, { userId, secret });
    const session = await sessionResponse.json();
    if (!sessionResponse.ok || typeof session.secret !== "string") {
      return NextResponse.json({ error: "This sign-in link has expired or has already been used. Request a new one." }, { status: 401 });
    }

    const accountResponse = await appwriteRequest("/account", "GET", session.secret);
    const account = await accountResponse.json().catch(() => ({}));

    // Never issue a normal admin session to an account that already has MFA enabled.
    // Challenge it even if Appwrite happens to return the account payload successfully.
    if (accountResponse.ok && isAllowedAdmin(account.email)) {
      if (account.mfa === true) return await startMfaChallenge(session.secret);

      // First-time setup only: this session can reach the MFA-enrolment screen,
      // but the admin dashboard itself rejects accounts until MFA is enabled.
      const response = NextResponse.json({ success: true, mfaRequired: false, setupRequired: true });
      response.cookies.set(ADMIN_SESSION_COOKIE, session.secret, {
        httpOnly: true, secure: secureCookie, sameSite: "strict", path: "/",
        expires: new Date(session.expire),
      });
      response.cookies.delete(PENDING_SESSION_COOKIE);
      response.cookies.delete(PENDING_CHALLENGE_COOKIE);
      return response;
    }

    if (!accountResponse.ok && account?.type === "user_more_factors_required") {
      return await startMfaChallenge(session.secret);
    }

    await appwriteRequest("/account/sessions/current", "DELETE", session.secret).catch(() => undefined);
    return NextResponse.json(
      { error: "This account is not authorised or could not complete secure sign-in." },
      { status: 403 },
    );
  } catch {
    return NextResponse.json({ error: "Unable to complete sign-in. Please request a fresh link." }, { status: 400 });
  }
}
