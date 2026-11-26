import { NextRequest, NextResponse } from "next/server";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const COOKIE_NAME = "tokha_admin_session";

export async function POST(request: NextRequest) {
  const session = request.cookies.get(COOKIE_NAME)?.value;
  if (!session) return NextResponse.json({ error: "Your session has expired. Sign in again." }, { status: 401 });

  try {
    const body = await request.json();
    const oldPassword = typeof body?.oldPassword === "string" ? body.oldPassword : "";
    const password = typeof body?.password === "string" ? body.password : "";
    if (oldPassword.length < 8 || password.length < 12 || password.length > 256) {
      return NextResponse.json({ error: "Use your current password and choose a new password of at least 12 characters." }, { status: 400 });
    }

    const result = await fetch(`${ENDPOINT}/account/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Appwrite-Project": PROJECT_ID,
        "X-Appwrite-Session": session,
      },
      body: JSON.stringify({ password, oldPassword }),
      cache: "no-store",
    });
    if (!result.ok) {
      const message = result.status === 401
        ? "Your current password is incorrect."
        : "Password could not be changed. Check the new password and try again.";
      return NextResponse.json({ error: message }, { status: result.status === 401 ? 401 : 400 });
    }
    return NextResponse.json({ success: true, message: "Password updated successfully." });
  } catch {
    return NextResponse.json({ error: "Unable to update your password. Please try again." }, { status: 400 });
  }
}
