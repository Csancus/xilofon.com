import { createHmac, timingSafeEqual } from "crypto";

// Stateless, HMAC-aláírt összeadós captcha. A kliens GET-tel kér egy
// challenge-et (a, b, expires, sig), a POST-ban visszaküldi a megoldással.
// A sig nélkül nem hamisítható, így a botok API-n keresztül sem kerülhetik meg.

const SECRET =
  process.env.CAPTCHA_SECRET ??
  process.env.RESEND_API_KEY ??
  "xilofon-captcha-v1";

const TTL_MS = 60 * 60 * 1000; // 1 óra — bőven elég a form kitöltésére

export type CaptchaChallenge = {
  a: number;
  b: number;
  expires: number;
  sig: string;
};

function sign(a: number, b: number, expires: number): string {
  return createHmac("sha256", SECRET).update(`${a}:${b}:${expires}`).digest("hex");
}

export function createCaptchaChallenge(): CaptchaChallenge {
  const a = 1 + Math.floor(Math.random() * 9);
  const b = 1 + Math.floor(Math.random() * 9);
  const expires = Date.now() + TTL_MS;
  return { a, b, expires, sig: sign(a, b, expires) };
}

export function verifyCaptcha(input: unknown): boolean {
  if (typeof input !== "object" || input === null) return false;
  const c = input as Record<string, unknown>;
  const a = Number(c.a);
  const b = Number(c.b);
  const expires = Number(c.expires);
  const answer = Number(typeof c.answer === "string" ? c.answer.trim() : c.answer);
  const sig = typeof c.sig === "string" ? c.sig : "";

  if (!Number.isInteger(a) || !Number.isInteger(b)) return false;
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  if (!sig) return false;

  const expected = sign(a, b, expires);
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) return false;

  return answer === a + b;
}
