import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, appwriteRequest, hasSameOrigin, isAllowedAdmin } from "@/lib/tokha-admin-auth";

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!session) return NextResponse.json({ error: "Your session expired. Sign in again." }, { status: 401 });

  try {
    const { otp } = await request.json();
    if (typeof otp !== "string" || !/^\d{6}$/.test(otp)) return NextResponse.json({ error: "Enter the six-digit code from Google Authenticator." }, { status: 400 });
    const accountResponse = await appwriteRequest("/account", "GET", session);
    const account = await accountResponse.json().catch(() => ({}));
    if (!accountResponse.ok || !isAllowedAdmin(account.email) || account.mfa === true) return NextResponse.json({ error: "This account cannot complete authenticator setup." }, { status: 403 });

    const verify = await appwriteRequest("/account/mfa/authenticators/totp", "PUT", session, { otp });
    if (!verify.ok) return NextResponse.json({ error: "The code was not accepted. Check your phone's time and try again." }, { status: 401 });

    const recoveryResponse = await appwriteRequest("/account/mfa/recovery-codes", "POST", session, {});
    const recovery = await recoveryResponse.json().catch(() => ({}));
    if (!recoveryResponse.ok || !Array.isArray(recovery.recoveryCodes)) return NextResponse.json({ error: "Authenticator verified, but recovery codes could not be generated. Keep this session open and contact the developer." }, { status: 502 });

    const enable = await appwriteRequest("/account/mfa", "PATCH", session, { mfa: true });
    if (!enable.ok) return NextResponse.json({ error: "Authenticator verified, but Appwrite could not enforce MFA. Keep this session open and retry." }, { status: 502 });
    return NextResponse.json({ success: true, recoveryCodes: recovery.recoveryCodes });
  } catch {
    return NextResponse.json({ error: "Unable to finish authenticator setup." }, { status: 400 });
  }
}
