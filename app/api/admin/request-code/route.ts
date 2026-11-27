import { randomInt } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { ADMIN_EMAILS, ADMIN_OTP_COOKIE, otpDigest, signPayload } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  try {
    const { email: rawEmail } = await request.json();
    const email = String(rawEmail ?? "").trim().toLowerCase();
    if (!ADMIN_EMAILS.has(email)) {
      return NextResponse.json({ error: "This email is not authorised for TOKHA admin access." }, { status: 403 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.TOKHA_EMAIL_FROM;
    if (!apiKey || !from || !process.env.TOKHA_OTP_SECRET) {
      return NextResponse.json({
        error: "Email-code sign-in is not fully configured yet. The email provider and secure signing settings must be added before codes can be sent."
      }, { status: 503 });
    }

    const code = String(randomInt(0, 1_000_000)).padStart(6, "0");
    const exp = Date.now() + 5 * 60 * 1000;
    const token = signPayload({ email, exp, hash: otpDigest(email, code, exp), attempts: 0 });

    const mail = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [email],
        subject: "Your TOKHA CREATIONS admin verification code",
        text: `Your TOKHA CREATIONS sign-in code is ${code}. It expires in 5 minutes. If you did not request this code, you can ignore this email.`,
        html: `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;padding:28px;color:#20251f"><p style="color:#a17d2f;font-weight:bold;letter-spacing:2px">TOKHA CREATIONS</p><h2>Administrator sign-in</h2><p>Use this one-time verification code to access the admin dashboard:</p><p style="font-size:32px;font-weight:bold;letter-spacing:8px;padding:16px;background:#f6f5f0;text-align:center">${code}</p><p>This code expires in 5 minutes. If you did not request it, ignore this email.</p></div>`,
      }),
      cache: "no-store",
    });

    if (!mail.ok) {
      const detail = await mail.json().catch(() => ({}));
      console.error("TOKHA OTP email delivery failed:", mail.status, detail?.message ?? "unknown provider error");
      return NextResponse.json({ error: "The verification email could not be delivered. Please try again later." }, { status: 502 });
    }

    const response = NextResponse.json({ success: true, message: `A six-digit verification code has been sent to ${email}. It expires in 5 minutes.` });
    response.cookies.set(ADMIN_OTP_COOKIE, token, {
      httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict",
      path: "/", maxAge: 5 * 60,
    });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch (error) {
    console.error("TOKHA OTP request error:", error);
    return NextResponse.json({ error: "Unable to start sign-in. Please try again." }, { status: 400 });
  }
}
