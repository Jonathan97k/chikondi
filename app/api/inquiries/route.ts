import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_SESSION_COOKIE,
  MFA_VERIFIED_COOKIE,
  appwriteRequest,
  hasSameOrigin,
  isAllowedAdmin,
} from "@/lib/tokha-admin-auth";

const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const PROJECT_ID = "6b08286d00341553344a";
const DATABASE_ID = "tokha_main";
const TABLE_ID = "inquiries";
const OWNER_USER_ID = "tokha-owner-simplechicco";
const DEVELOPER_USER_ID = "17175ad5-31ef-4bc2-bdff-a00e26b48c51";
const ADMIN_ROW_PERMISSIONS = [
  `read("user:${OWNER_USER_ID}")`,
  `update("user:${OWNER_USER_ID}")`,
  `delete("user:${OWNER_USER_ID}")`,
  `read("user:${DEVELOPER_USER_ID}")`,
  `update("user:${DEVELOPER_USER_ID}")`,
  `delete("user:${DEVELOPER_USER_ID}")`,
];

// Best-effort per-instance throttling plus input validation and a honeypot.
// Appwrite's own endpoint limits remain an additional protection.
const recentSubmissions = new Map<string, { count: number; resetAt: number }>();

function allowSubmission(ip: string): boolean {
  const now = Date.now();
  const current = recentSubmissions.get(ip);
  if (!current || current.resetAt <= now) {
    recentSubmissions.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (current.count >= 5) return false;
  current.count += 1;
  return true;
}

function getApiKey(): string | null {
  return process.env.TOKHA_APPWRITE_API_KEY?.trim() || null;
}

async function requireAdmin() {
  const jar = await cookies();
  const session = jar.get(ADMIN_SESSION_COOKIE)?.value;
  if (!session || jar.get(MFA_VERIFIED_COOKIE)?.value !== "1") return null;

  const accountResponse = await appwriteRequest("/account", "GET", session);
  const account = await accountResponse.json().catch(() => ({}));
  if (!accountResponse.ok || !isAllowedAdmin(account.email) || account.mfa !== true) return null;
  return { email: String(account.email).toLowerCase() };
}

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
  if (!allowSubmission(ip)) {
    return NextResponse.json(
      { error: "Too many enquiries have been submitted from this connection. Please try again later." },
      { status: 429, headers: { "Retry-After": "600", "Cache-Control": "no-store" } },
    );
  }

  try {
    const body = await request.json();
    // Quietly accept honeypot submissions so automated bots do not learn the field name.
    if (typeof body?.website === "string" && body.website.trim()) {
      return NextResponse.json({ success: true }, { status: 201, headers: { "Cache-Control": "no-store" } });
    }

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const serviceType = typeof body?.serviceType === "string" ? body.serviceType.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const allowedTypes = new Set(["booking", "writing", "production", "partnership", "general"]);

    if (name.length < 2 || name.length > 160) {
      return NextResponse.json({ error: "Please enter your name (2–160 characters)." }, { status: 400 });
    }
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (phone.length > 40 || !allowedTypes.has(serviceType)) {
      return NextResponse.json({ error: "Please check your contact details and inquiry type." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Please provide a message between 10 and 5,000 characters." }, { status: 400 });
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      return NextResponse.json(
        { error: "The inquiry service is temporarily being configured. Please try again later." },
        { status: 503, headers: { "Cache-Control": "no-store" } },
      );
    }

    const response = await fetch(
      `${APPWRITE_ENDPOINT}/tablesdb/${DATABASE_ID}/tables/${TABLE_ID}/rows`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Appwrite-Project": PROJECT_ID,
          "X-Appwrite-Key": apiKey,
        },
        body: JSON.stringify({
          rowId: crypto.randomUUID(),
          data: {
            name,
            email,
            phone,
            service_type: serviceType,
            message,
            status: "new",
          },
          permissions: ADMIN_ROW_PERMISSIONS,
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const detail = await response.json().catch(() => ({}));
      console.error("TOKHA inquiry storage failed:", response.status, detail?.type ?? "unknown");
      return NextResponse.json(
        { error: "We could not receive your enquiry right now. Please try again later." },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }

    return NextResponse.json(
      { success: true, message: "Thank you. Your enquiry has been received by TOKHA CREATIONS." },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ error: "Unable to process your enquiry. Please try again." }, { status: 400 });
  }
}

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Administrator access with authenticator verification is required." }, { status: 401 });
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    return NextResponse.json({ error: "The server-side Appwrite key has not been configured." }, { status: 503 });
  }

  const query = new URLSearchParams();
  query.append("queries[]", JSON.stringify({ method: "limit", values: [50] }));
  query.append("queries[]", JSON.stringify({ method: "orderDesc", attribute: "$createdAt" }));

  const response = await fetch(
    `${APPWRITE_ENDPOINT}/tablesdb/${DATABASE_ID}/tables/${TABLE_ID}/rows?${query.toString()}`,
    {
      headers: { "X-Appwrite-Project": PROJECT_ID, "X-Appwrite-Key": apiKey },
      cache: "no-store",
    },
  );
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    console.error("TOKHA admin inbox read failed:", response.status, result?.type ?? "unknown");
    return NextResponse.json({ error: "The enquiry inbox could not be loaded." }, { status: 502 });
  }

  return NextResponse.json(
    { rows: Array.isArray(result.rows) ? result.rows : [] },
    { headers: { "Cache-Control": "no-store, private" } },
  );
}

export async function PATCH(request: Request) {
  if (!hasSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Administrator access with authenticator verification is required." }, { status: 401 });
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    return NextResponse.json({ error: "The server-side Appwrite key has not been configured." }, { status: 503 });
  }

  try {
    const body = await request.json();
    const rowId = typeof body?.rowId === "string" ? body.rowId.trim() : "";
    const status = typeof body?.status === "string" ? body.status : "";
    const allowedStatuses = new Set(["new", "contacted", "in_discussion", "confirmed", "declined", "closed"]);
    if (!/^[A-Za-z0-9._-]{1,36}$/.test(rowId) || !allowedStatuses.has(status)) {
      return NextResponse.json({ error: "Invalid enquiry update." }, { status: 400 });
    }

    const response = await fetch(
      `${APPWRITE_ENDPOINT}/tablesdb/${DATABASE_ID}/tables/${TABLE_ID}/rows/${encodeURIComponent(rowId)}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-Appwrite-Project": PROJECT_ID,
          "X-Appwrite-Key": apiKey,
        },
        body: JSON.stringify({ data: { status } }),
        cache: "no-store",
      },
    );
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error("TOKHA enquiry status update failed:", response.status, result?.type ?? "unknown");
      return NextResponse.json({ error: "The enquiry status could not be updated." }, { status: 502 });
    }

    return NextResponse.json({ success: true, row: result }, { headers: { "Cache-Control": "no-store, private" } });
  } catch {
    return NextResponse.json({ error: "Unable to update the enquiry." }, { status: 400 });
  }
}
