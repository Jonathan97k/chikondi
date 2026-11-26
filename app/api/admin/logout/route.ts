import { NextRequest, NextResponse } from "next/server";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const COOKIE_NAME = "tokha_admin_session";

export async function POST(request: NextRequest) {
  const session = request.cookies.get(COOKIE_NAME)?.value;
  if (session) {
    await fetch(`${ENDPOINT}/account/sessions/current`, {
      method: "DELETE",
      headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Session": session },
      cache: "no-store",
    }).catch(() => undefined);
  }
  const response = NextResponse.redirect(new URL("/admin/login", request.url));
  response.cookies.set(COOKIE_NAME, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 0 });
  return response;
}
