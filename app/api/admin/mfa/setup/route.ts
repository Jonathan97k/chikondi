import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  appwriteRequest,
  hasSameOrigin,
  isAllowedAdmin,
} from "@/lib/tokha-admin-auth";

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!session) {
    return NextResponse.json({ error: "Sign in again to set up account security." }, { status: 401 });
  }

  const accountResponse = await appwriteRequest("/account", "GET", session);
  const account = await accountResponse.json().catch(() => ({}));
  if (!accountResponse.ok || !isAllowedAdmin(account.email)) {
    return NextResponse.json({ error: "This account is not authorised." }, { status: 403 });
  }
  if (account.mfa === true) {
    return NextResponse.json({ enabled: true, message: "Authenticator verification is already enabled. Sign out and sign in again to verify it." });
  }

  // Do not silently enable a pre-existing TOTP factor. The user must prove
  // possession by submitting a current authenticator code to /mfa/enroll.
  const factorsResponse = await appwriteRequest("/account/mfa/factors", "GET", session);
  const factors = await factorsResponse.json().catch(() => ({}));
  if (factorsResponse.ok && factors.totp === true) {
    return NextResponse.json(
      { error: "An authenticator is already registered. It must be verified before MFA can be enabled; contact the developer to safely reset this enrolment." },
      { status: 409 },
    );
  }

  const setupResponse = await appwriteRequest("/account/mfa/authenticators/totp", "POST", session, {});
  const setup = await setupResponse.json().catch(() => ({}));
  if (!setupResponse.ok || typeof setup.uri !== "string" || typeof setup.secret !== "string") {
    return NextResponse.json({ error: "Could not create authenticator setup. Please retry." }, { status: 502 });
  }

  const qrUrl = new URL("https://fra.cloud.appwrite.io/v1/avatars/qr");
  qrUrl.searchParams.set("text", setup.uri);
  qrUrl.searchParams.set("size", "320");
  qrUrl.searchParams.set("margin", "1");
  qrUrl.searchParams.set("project", "6b08286d00341553344a");
  return NextResponse.json(
    { enabled: false, secret: setup.secret, qrUrl: qrUrl.toString() },
    { headers: { "Cache-Control": "no-store, private" } },
  );
}
