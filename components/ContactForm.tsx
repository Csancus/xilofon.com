"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCaptcha } from "./useCaptcha";

type Status = "idle" | "loading" | "success" | "error";

// Form kikapcsolva (spam miatt). Visszakapcsoláshoz: true
// — a szerver oldali párja: app/api/contact/route.ts FORM_ENABLED
const FORM_ENABLED = false;

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const { challenge, answer, setAnswer, captchaError, setCaptchaError, refresh, validate, payload } = useCaptcha();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORM_ENABLED) return;
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captcha: payload }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        if (body?.error === "captcha") {
          setStatus("idle");
          setCaptchaError("expired");
          refresh();
          return;
        }
        throw new Error();
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "", website: "" });
      setConsent(false);
      refresh();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{t("successTitle")}</h3>
        <p className="text-slate-500 dark:text-white/60">{t("successText")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-violet-600 dark:text-violet-400 font-medium hover:underline"
        >
          {t("newMessage")}
        </button>
      </div>
    );
  }

  const inputClass =
    "px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400/40 dark:focus:ring-violet-500/40 focus:border-violet-400 dark:focus:border-violet-500/50 transition";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-white/60">
            {t("name")} <span className="text-violet-500">*</span>
          </label>
          <input
            id="name" name="name" type="text" required
            value={form.name} onChange={handleChange}
            placeholder={t("namePlaceholder")} className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-white/60">
            {t("email")} <span className="text-violet-500">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder={t("emailPlaceholder")} className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-slate-600 dark:text-white/60">
          {t("phone")} <span className="text-violet-500">*</span>
        </label>
        <input
          id="phone" name="phone" type="tel" required
          value={form.phone} onChange={handleChange}
          placeholder={t("phonePlaceholder")} className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-white/60">
          {t("message")} <span className="text-violet-500">*</span>
        </label>
        <textarea
          id="message" name="message" rows={4} required
          value={form.message} onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Honeypot — emberi látogató nem látja, bot kitölti */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={handleChange}
        className="hidden"
        aria-hidden="true"
      />

      {/* Spam-védelem: egyszerű összeadás */}
      {FORM_ENABLED && (
      <div className="flex flex-col gap-1.5">
        <label htmlFor="captcha" className="text-sm font-medium text-slate-600 dark:text-white/60">
          {challenge
            ? t("captcha", { a: challenge.a, b: challenge.b })
            : t("captcha", { a: "…", b: "…" })}{" "}
          <span className="text-violet-500">*</span>
        </label>
        <input
          id="captcha"
          type="text"
          inputMode="numeric"
          required
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setCaptchaError(null);
          }}
          placeholder={t("captchaPlaceholder")}
          className={`${inputClass} sm:max-w-[180px]`}
        />
        {captchaError && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {captchaError === "wrong"
              ? t("captchaErrorWrong")
              : captchaError === "expired"
                ? t("captchaErrorExpired")
                : t("captchaErrorLoading")}
          </p>
        )}
      </div>
      )}

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded accent-violet-600 flex-shrink-0"
        />
        <span className="text-xs text-slate-500 dark:text-white/50 leading-relaxed">
          {t.rich("consent", {
            privacyLink: (chunks) => (
              <Link href="/adatkezeles" className="underline text-violet-600 dark:text-violet-400 hover:opacity-80">{chunks}</Link>
            ),
            aszfLink: (chunks) => (
              <Link href="/aszf" className="underline text-violet-600 dark:text-violet-400 hover:opacity-80">{chunks}</Link>
            ),
          })}
          {" "}<span className="text-violet-500">*</span>
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <span className="text-sm font-medium">{t("errorText")}</span>
        </div>
      )}

      {!FORM_ENABLED && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-800 dark:text-amber-300">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <span className="text-sm font-medium">
            {t("disabledNotice")}{" "}
            <a href="mailto:info@xilofon.com" className="underline font-semibold hover:opacity-80">
              info@xilofon.com
            </a>
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={!FORM_ENABLED || status === "loading" || !consent}
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-colors"
      >
        {status === "loading" ? (
          <span className="animate-pulse">{t("sending")}</span>
        ) : (
          <><Send size={16} />{t("submit")}</>
        )}
      </button>
    </form>
  );
}
