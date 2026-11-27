import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  MFA_VERIFIED_COOKIE,
  PENDING_CHALLENGE_COOKIE,
  PENDING_SESSION_COOKIE,
  appwriteRequest,
} from "@/lib/tokha-admin-auth";

export async function POST(request: NextRequest) {
  const secret = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (secret) {
    await appwriteRequest("/account/sessions/current", "DELETE", secret).catch(() => undefined);
  }
  const response = NextResponse.redirect(new URL("/admin/login", request.url));
  response.cookies.delete(ADMIN_SESSION_COOKIE);
  response.cookies.delete(MFA_VERIFIED_COOKIE);
  response.cookies.delete(PENDING_SESSION_COOKIE);
  response.cookies.delete(PENDING_CHALLENGE_COOKIE);
  return response;
}
