"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
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
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-semibold text-slate-900">Köszönjük az üzeneted!</h3>
        <p className="text-slate-600">1-2 munkanapon belül visszakeresünk.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-violet-600 font-medium hover:underline"
        >
          Új üzenet küldése
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Név <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Kovács János"
            className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="kovacs@example.hu"
            className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          Telefonszám <span className="text-slate-400 text-xs">(opcionális)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+36 30 123 4567"
          className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Üzenet <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Írj pár sort a vállalkozásodról, és mihez kérsz segítséget..."
          className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle size={16} />
          Hiba történt. Kérjük, próbáld újra, vagy írj e-mailt.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-300 text-white font-semibold transition-colors"
      >
        {status === "loading" ? (
          <span className="animate-pulse">Küldés...</span>
        ) : (
          <>
            <Send size={16} />
            Üzenet küldése
          </>
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        Az adataid kezeléséről az{" "}
        <a href="/adatkezeles" className="underline hover:text-slate-700">
          adatkezelési tájékoztatóban
        </a>{" "}
        olvashatsz.
      </p>
    </form>
  );
}
