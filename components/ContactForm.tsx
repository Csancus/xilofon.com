"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-violet-400" />
        <h3 className="text-xl font-semibold text-white">{t("successTitle")}</h3>
        <p className="text-white/60">{t("successText")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-violet-400 font-medium hover:text-violet-300 transition-colors"
        >
          {t("newMessage")}
        </button>
      </div>
    );
  }

  const inputClass =
    "px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-white/60">
            {t("name")} <span className="text-violet-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-white/60">
            {t("email")} <span className="text-violet-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-white/60">
          {t("phone")} <span className="text-white/30 text-xs">{t("phoneOptional")}</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder={t("phonePlaceholder")}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-white/60">
          {t("message")} <span className="text-violet-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle size={16} />
          {t("errorText")}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold transition-colors"
      >
        {status === "loading" ? (
          <span className="animate-pulse">{t("sending")}</span>
        ) : (
          <>
            <Send size={16} />
            {t("submit")}
          </>
        )}
      </button>

      <p className="text-xs text-white/30 text-center">
        {t.rich("privacyNote", {
          link: (chunks) => (
            <Link key="privacy" href="/adatkezeles" className="underline hover:text-white/60 transition-colors">
              {chunks}
            </Link>
          ),
        })}
      </p>
    </form>
  );
}
