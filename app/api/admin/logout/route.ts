import { NextRequest, NextResponse } from "next/server";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const COOKIE_NAME = "tokha_admin_session";

export async function POST(request: NextRequest) {
  const secret = request.cookies.get(COOKIE_NAME)?.value;
  if (secret) {
    await fetch(`${ENDPOINT}/account/sessions/current`, {
      method: "DELETE",
      headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Session": secret },
      cache: "no-store",
    }).catch(() => undefined);
  }
  const response = NextResponse.redirect(new URL("/admin/login", request.url));
  response.cookies.delete(COOKIE_NAME);
  return response;
}
