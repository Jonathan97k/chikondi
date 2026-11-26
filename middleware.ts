import { NextRequest, NextResponse } from "next/server";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const COOKIE_NAME = "tokha_admin_session";
const ALLOWED_EMAILS = new Set([
  "kaphirikwikwete97@gmail.com",
  "simplechicco864@gmail.com",
]);

export async function middleware(request: NextRequest) {
  const session = request.cookies.get(COOKIE_NAME)?.value;
  if (!session) return NextResponse.redirect(new URL("/admin/login", request.url));

  try {
    const accountResponse = await fetch(`${ENDPOINT}/account`, {
      headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Session": session },
      cache: "no-store",
    });
    if (!accountResponse.ok) throw new Error("Invalid Appwrite session");
    const account = await accountResponse.json();
    if (!ALLOWED_EMAILS.has(String(account.email ?? "").toLowerCase())) {
      throw new Error("Account is not authorised");
    }
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/admin/login", request.url));
    response.cookies.delete(COOKIE_NAME);
    return response;
  }
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
