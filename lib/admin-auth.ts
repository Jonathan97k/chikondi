import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "tokha_admin_session";
export const ADMIN_OTP_COOKIE = "tokha_admin_otp";
export const ADMIN_EMAILS = new Set([
  "kaphirikwikwete97@gmail.com",
  "simplechicco864@gmail.com",
]);

export type SignedPayload = {
  email: string;
  exp: number;
  hash?: string;
  attempts?: number;
};

function signingSecret() {
  const secret = process.env.TOKHA_OTP_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("TOKHA_OTP_SECRET must be configured with at least 32 characters.");
  }
  return secret;
}

export function signPayload(payload: SignedPayload) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = createHmac("sha256", signingSecret()).update(body).digest("base64url");
  return `${body}.${signature}`;
}

export function readSignedPayload<T extends SignedPayload = SignedPayload>(token: string): T | null {
  try {
    const [body, suppliedSignature] = token.split(".");
    if (!body || !suppliedSignature) return null;
    const expected = createHmac("sha256", signingSecret()).update(body).digest();
    const supplied = Buffer.from(suppliedSignature, "base64url");
    if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null;
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as T;
    if (!payload.email || !ADMIN_EMAILS.has(payload.email) || !Number.isFinite(payload.exp) || payload.exp <= Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export function otpDigest(email: string, code: string, exp: number) {
  return createHmac("sha256", signingSecret()).update(`${email}:${code}:${exp}`).digest("hex");
}

export function safeEqualHex(a: string, b: string) {
  const left = Buffer.from(a, "hex");
  const right = Buffer.from(b, "hex");
  return left.length === right.length && left.length > 0 && timingSafeEqual(left, right);
}
