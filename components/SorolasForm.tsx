"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";
import type { Locale } from "@/lib/demos";

type Props = { locale: Locale };

const labels: Record<Locale, {
  name: string; namePh: string;
  email: string; emailPh: string;
  phone: string; phonePh: string;
  platform: string; platformWA: string; platformEmail: string;
  domain: string; domainOptions: string[]; domainNote?: string;
  industry: string; industryPh: string;
  submit: string; sending: string;
  successTitle: string; successText: string;
  errorText: string;
  consentPrivacy: string; consentAszf: string; consentLabel: string;
  interestedLabel: string; interestedYes: string; interestedNo: string;
  emailError: string;
}> = {
  hu: {
    name: "Teljes neve", namePh: "Kovács János",
    email: "E-mail cím", emailPh: "kovacs@example.hu",
    phone: "Telefonszám *", phonePh: "+36 30 123 4567",
    platform: "Hol kereshetünk inkább?",
    platformWA: "WhatsApp", platformEmail: "E-mailben",
    domain: "Milyen domain típust szeretnél?",
    domainOptions: [".hu (pl. nev.hu)", ".com (pl. nev.com)", "Mindegy"],
    domainNote: "A SEO-lehetőségek nem függnek a domain nevétől. A .com egy nemzetközi, megbízható domain mindenki számára.",
    industry: "Milyen területen dolgozol, milyen weboldalt szeretnél?",
    industryPh: "Pl. masszőr vagyok Debrecenben, szeretnék egy egyszerű bemutatkozó oldalt foglalással...",
    submit: "Foglalom a helyet", sending: "Küldés...",
    successTitle: "Köszönjük!",
    successText: "1-2 munkanapon belül visszajelzünk.",
    errorText: "Hiba történt. Kérjük, próbáld újra.",
    consentLabel: "Elfogadom az", consentPrivacy: "adatkezelési tájékoztatót", consentAszf: "ÁSZF-et",
    interestedLabel: "Ha nem kerülnél be az 5 partner közé, akkor is érdekel az oldal évi 188 EUR-ért?",
    interestedYes: "Igen, érdekel", interestedNo: "Nem most",
    emailError: "Kérjük, adj meg egy érvényes e-mail címet (pl. nev@domain.hu)",
  },
  en: {
    name: "Full name", namePh: "John Smith",
    email: "Email address", emailPh: "john@example.com",
    phone: "Phone number *", phonePh: "+44 7700 123456",
    platform: "How should we contact you?",
    platformWA: "WhatsApp", platformEmail: "By email",
    domain: "What domain type would you prefer?",
    domainOptions: [".com (e.g. yoursite.com)", ".co.uk (e.g. yoursite.co.uk)", "No preference"],
    domainNote: "SEO potential is independent of your domain name. .com is an international, trusted domain for everyone.",
    industry: "What industry are you in and what kind of website do you need?",
    industryPh: "e.g. I'm a massage therapist in London, looking for a simple one-page site with booking...",
    submit: "Reserve my spot", sending: "Sending...",
    successTitle: "Thank you!",
    successText: "We'll be in touch within 1-2 business days.",
    errorText: "Something went wrong. Please try again.",
    consentLabel: "I accept the", consentPrivacy: "Privacy Policy", consentAszf: "Terms of Service",
    interestedLabel: "If you don't get selected as one of the 5 partners, would you still be interested in the site for €188/year?",
    interestedYes: "Yes, I'm interested", interestedNo: "Not right now",
    emailError: "Please enter a valid email address (e.g. name@domain.com)",
  },
  hr: {
    name: "Puno ime", namePh: "Ivan Horvat",
    email: "E-mail adresa", emailPh: "ivan@primjer.hr",
    phone: "Broj telefona *", phonePh: "+385 91 234 5678",
    platform: "Kako da vas kontaktiramo?",
    platformWA: "WhatsApp", platformEmail: "E-mailom",
    domain: "",
    domainOptions: [],
    industry: "Kojom se djelatnošću bavite i kakvu web stranicu trebate?",
    industryPh: "npr. Masažerica sam u Zagrebu, trebam jednostavnu predstavničku stranicu s rezervacijom...",
    submit: "Rezerviram mjesto", sending: "Slanje...",
    successTitle: "Hvala!",
    successText: "Javit ćemo se u roku 1-2 radna dana.",
    errorText: "Došlo je do pogreške. Molimo pokušajte ponovo.",
    consentLabel: "Prihvaćam", consentPrivacy: "Pravila privatnosti", consentAszf: "Opće uvjete poslovanja",
    interestedLabel: "",
    interestedYes: "", interestedNo: "",
    emailError: "Unesite valjanu e-mail adresu (npr. ime@domena.hr)",
  },
  ro: {
    name: "Nume complet", namePh: "Ion Popescu",
    email: "Adresă e-mail", emailPh: "ion@exemplu.ro",
    phone: "Număr de telefon *", phonePh: "+40 721 234 567",
    platform: "Cum preferați să vă contactăm?",
    platformWA: "WhatsApp", platformEmail: "Prin e-mail",
    domain: "Ce tip de domeniu preferi?",
    domainOptions: [".ro (ex. numetau.ro)", ".com (ex. numetau.com)", "Nu contează"],
    domainNote: "Potențialul SEO nu depinde de numele domeniului. .com este un domeniu internațional, de încredere, pentru toți.",
    industry: "În ce domeniu activezi și ce tip de site dorești?",
    industryPh: "ex. Sunt kinetoterapeut în Cluj, am nevoie de o pagină simplă de prezentare cu programări...",
    submit: "Rezerv locul meu", sending: "Se trimite...",
    successTitle: "Mulțumim!",
    successText: "Te vom contacta în 1-2 zile lucrătoare.",
    errorText: "A apărut o eroare. Te rugăm să încerci din nou.",
    consentLabel: "Accept", consentPrivacy: "Politica de confidențialitate", consentAszf: "Termenii și condițiile",
    interestedLabel: "Dacă nu ești selectat/ă dintre cei 5 parteneri, te interesează site-ul la 188 EUR/an?",
    interestedYes: "Da, mă interesează", interestedNo: "Nu acum",
    emailError: "Introduceți o adresă de e-mail validă (ex. nume@domeniu.ro)",
  },
};

type Status = "idle" | "sending" | "success" | "error";

export default function SorolasForm({ locale }: Props) {
  const l = labels[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    platform: "", domain: "", industry: "", interested: "",
  });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const setRadio = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email);
  const showEmailError = emailTouched && !emailValid;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailTouched(true);
    if (!emailValid) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/sorolas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lottery: "–", locale }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setConsent(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{l.successTitle}</h3>
        <p className="text-slate-500 dark:text-white/50 text-sm">{l.successText}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.05] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder-slate-300 dark:placeholder-white/20";

  const radioOption = (name: string, value: string, label: string) => (
    <label
      key={value}
      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
        form[name as keyof typeof form] === value
          ? "border-violet-400 bg-violet-50 dark:bg-violet-500/10 dark:border-violet-500"
          : "border-slate-200 dark:border-white/[0.10] hover:border-violet-200 dark:hover:border-violet-500/40"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={form[name as keyof typeof form] === value}
        onChange={() => setRadio(name as keyof typeof form, value)}
        className="accent-violet-600"
      />
      <span className="text-sm text-slate-700 dark:text-white/70">{label}</span>
    </label>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-1.5">{l.name} *</label>
        <input required className={inputClass} placeholder={l.namePh} value={form.name} onChange={set("name")} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-1.5">{l.email} *</label>
        <input
          required
          type="email"
          className={`${inputClass} ${showEmailError ? "border-red-400 focus:ring-red-400" : ""}`}
          placeholder={l.emailPh}
          value={form.email}
          onChange={set("email")}
          onBlur={() => setEmailTouched(true)}
        />
        {showEmailError && (
          <div className="flex items-center gap-1.5 mt-1.5 text-red-500 dark:text-red-400 text-xs">
            <AlertCircle size={13} className="flex-shrink-0" />
            {l.emailError}
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-1.5">{l.phone}</label>
        <input
          required
          type="tel"
          className={inputClass}
          placeholder={l.phonePh}
          value={form.phone}
          onChange={(e) => {
            const clean = e.target.value.replace(/[^\d+]/g, "").replace(/(?<=.)\+/g, "");
            setForm((f) => ({ ...f, phone: clean }));
          }}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-2">{l.platform}</label>
        <div className="grid grid-cols-2 gap-2">
          {radioOption("platform", "whatsapp", l.platformWA)}
          {radioOption("platform", "email", l.platformEmail)}
        </div>
      </div>

      {l.domainOptions.length > 0 && <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-2">{l.domain}</label>
        <div className="space-y-2">
          {l.domainOptions.map((opt) => radioOption("domain", opt, opt))}
        </div>
        {l.domainNote && (
          <div className="mt-3 flex items-start gap-2.5 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl px-3.5 py-3">
            <span className="text-green-500 dark:text-green-400 flex-shrink-0 text-base leading-tight mt-0.5">✓</span>
            <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed font-medium">{l.domainNote}</p>
          </div>
        )}
      </div>}

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-1.5">{l.industry}</label>
        <textarea
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder={l.industryPh}
          value={form.industry}
          onChange={set("industry")}
        />
      </div>

      {l.interestedLabel && <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-2">{l.interestedLabel}</label>
        <div className="space-y-2">
          {radioOption("interested", "yes", l.interestedYes)}
          {radioOption("interested", "no", l.interestedNo)}
        </div>
      </div>}

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded accent-violet-600 flex-shrink-0"
        />
        <span className="text-xs text-slate-500 dark:text-white/50 leading-relaxed">
          {l.consentLabel}{" "}
          <a href="/adatkezeles" target="_blank" className="underline text-violet-600 dark:text-violet-400">{l.consentPrivacy}</a>
          {" "}&{" "}
          <a href="/aszf" target="_blank" className="underline text-violet-600 dark:text-violet-400">{l.consentAszf}</a>
          . <span className="text-violet-500">*</span>
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <span className="text-sm font-medium">{l.errorText}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending" || !consent}
        className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-colors"
      >
        {status === "sending" ? l.sending : l.submit}
      </button>
    </form>
  );
}
