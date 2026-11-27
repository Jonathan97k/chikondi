import { NextRequest, NextResponse } from "next/server";
import { ADMIN_OTP_COOKIE, ADMIN_SESSION_COOKIE, otpDigest, readSignedPayload, safeEqualHex, signPayload } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const otpToken = request.cookies.get(ADMIN_OTP_COOKIE)?.value;
  const state = otpToken ? readSignedPayload(otpToken) : null;
  if (!state?.hash) {
    const response = NextResponse.json({ error: "Your code has expired. Request a new one." }, { status: 401 });
    response.cookies.delete(ADMIN_OTP_COOKIE);
    return response;
  }

  try {
    const { code: rawCode } = await request.json();
    const code = String(rawCode ?? "").trim();
    if (!/^\d{6}$/.test(code)) {
      return NextResponse.json({ error: "Enter the six-digit code from your email." }, { status: 400 });
    }

    if ((state.attempts ?? 0) >= 5) {
      const response = NextResponse.json({ error: "Too many incorrect attempts. Request a new code." }, { status: 429 });
      response.cookies.delete(ADMIN_OTP_COOKIE);
      return response;
    }

    const expected = otpDigest(state.email, code, state.exp);
    if (!safeEqualHex(state.hash, expected)) {
      const attempts = (state.attempts ?? 0) + 1;
      const response = NextResponse.json({
        error: attempts >= 5 ? "Too many incorrect attempts. Request a new code." : "That code is incorrect. Check your email and try again.",
      }, { status: attempts >= 5 ? 429 : 401 });
      if (attempts >= 5) response.cookies.delete(ADMIN_OTP_COOKIE);
      else response.cookies.set(ADMIN_OTP_COOKIE, signPayload({ ...state, attempts }), {
        httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: Math.max(1, Math.floor((state.exp - Date.now()) / 1000)),
      });
      return response;
    }

    const sessionExp = Date.now() + 12 * 60 * 60 * 1000;
    const sessionToken = signPayload({ email: state.email, exp: sessionExp });
    const response = NextResponse.json({ success: true, redirectTo: "/admin" });
    response.cookies.set(ADMIN_SESSION_COOKIE, sessionToken, {
      httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
      path: "/", expires: new Date(sessionExp),
    });
    response.cookies.delete(ADMIN_OTP_COOKIE);
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    return NextResponse.json({ error: "Unable to verify the code. Please request a new one." }, { status: 400 });
  }
}
