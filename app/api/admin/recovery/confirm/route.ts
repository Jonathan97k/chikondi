import { NextResponse } from "next/server";

const PROJECT_ID = "6b08286d00341553344a";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userId = String(body?.userId ?? "");
    const secret = String(body?.secret ?? "");
    const password = String(body?.password ?? "");
    if (!userId || !secret || password.length < 12 || password.length > 256) {
      return NextResponse.json({ error: "The reset link or password is invalid. Use at least 12 characters." }, { status: 400 });
    }
    const upstream = await fetch(`${ENDPOINT}/account/recovery`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Appwrite-Project": PROJECT_ID },
      body: JSON.stringify({ userId, secret, password }),
      cache: "no-store",
    });
    if (!upstream.ok) {
      console.error("TOKHA password reset confirmation failed:", upstream.status);
      return NextResponse.json({ error: "This reset link may have expired. Request a new one." }, { status: 400 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unable to update the password." }, { status: 400 });
  }
}
