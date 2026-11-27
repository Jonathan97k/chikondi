import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PENDING_CHALLENGE_COOKIE, PENDING_SESSION_COOKIE, appwriteRequest, hasSameOrigin } from "@/lib/tokha-admin-auth";

const secureCookie = process.env.NODE_ENV === "production";

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  const jar = await cookies();
  const session = jar.get(PENDING_SESSION_COOKIE)?.value;
  if (!session) return NextResponse.json({ error: "Your sign-in has expired. Request a new link." }, { status: 401 });

  try {
    const body = await request.json();
    const factor = body?.factor === "recoveryCode" ? "recoveryCode" : "totp";
    const result = await appwriteRequest("/account/mfa/challenges", "POST", session, { factor });
    const challenge = await result.json().catch(() => ({}));
    if (!result.ok || typeof challenge.$id !== "string") return NextResponse.json({ error: "Could not start that verification method." }, { status: 400 });
    const response = NextResponse.json({ success: true });
    response.cookies.set(PENDING_CHALLENGE_COOKIE, challenge.$id, { httpOnly: true, secure: secureCookie, sameSite: "strict", path: "/", maxAge: 300 });
    return response;
  } catch {
    return NextResponse.json({ error: "Could not start verification." }, { status: 400 });
  }
}
