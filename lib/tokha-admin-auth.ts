export const APPWRITE_PROJECT_ID = "6b08286d00341553344a";
export const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
export const ADMIN_SESSION_COOKIE = "tokha_admin_session";
export const MFA_VERIFIED_COOKIE = "tokha_admin_mfa_verified";
export const PENDING_SESSION_COOKIE = "tokha_admin_pending";
export const PENDING_CHALLENGE_COOKIE = "tokha_admin_challenge";

export const ALLOWED_ADMIN_EMAILS = new Set([
  "kaphirikwikwete97@gmail.com",
  "simplechicco864@gmail.com",
]);

export async function appwriteRequest(
  path: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  sessionSecret?: string,
  body?: Record<string, unknown>,
) {
  const headers: Record<string, string> = {
    "X-Appwrite-Project": APPWRITE_PROJECT_ID,
    Accept: "application/json",
  };
  if (body) headers["Content-Type"] = "application/json";
  if (sessionSecret) headers["X-Appwrite-Session"] = sessionSecret;

  return fetch(`${APPWRITE_ENDPOINT}${path}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
    cache: "no-store",
  });
}

export function isAllowedAdmin(email: unknown): email is string {
  return typeof email === "string" && ALLOWED_ADMIN_EMAILS.has(email.trim().toLowerCase());
}

export function hasSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}
