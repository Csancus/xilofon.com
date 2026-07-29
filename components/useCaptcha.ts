"use client";

import { useCallback, useEffect, useState } from "react";

export type CaptchaChallenge = {
  a: number;
  b: number;
  expires: number;
  sig: string;
};

export type CaptchaErrorCode = "loading" | "wrong" | "expired" | null;

// Összeadós captcha a kontakt formokhoz. A challenge-et a szerver adja
// (HMAC-aláírva), a beküldött payload-ot a szerver ellenőrzi. A hibakódot
// a hívó komponens fordítja le a saját nyelvén.
export function useCaptcha() {
  const [challenge, setChallenge] = useState<CaptchaChallenge | null>(null);
  const [answer, setAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState<CaptchaErrorCode>(null);

  const refresh = useCallback(async () => {
    setAnswer("");
    try {
      const res = await fetch("/api/contact", { cache: "no-store" });
      if (res.ok) setChallenge(await res.json());
    } catch {
      /* következő próbálkozásnál újra lekérjük */
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Kliens-oldali gyors ellenőrzés beküldés előtt
  const validate = useCallback(() => {
    if (!challenge) {
      setCaptchaError("loading");
      refresh();
      return false;
    }
    if (answer.trim() === "" || Number(answer.trim()) !== challenge.a + challenge.b) {
      setCaptchaError("wrong");
      return false;
    }
    setCaptchaError(null);
    return true;
  }, [challenge, answer, refresh]);

  const payload = challenge ? { ...challenge, answer: answer.trim() } : null;

  return { challenge, answer, setAnswer, captchaError, setCaptchaError, refresh, validate, payload };
}
