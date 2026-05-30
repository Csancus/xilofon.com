"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";
import type { Locale } from "@/lib/demos";

type Props = { locale: Locale };

const labels: Record<Locale, {
  name: string; namePh: string;
  company: string; companyPh: string;
  email: string; emailPh: string;
  phone: string; phonePh: string;
  platform: string; platformWA: string; platformEmail: string;
  domain: string; domainOptions: string[];
  industry: string; industryPh: string;
  submit: string; sending: string;
  successTitle: string; successText: string;
  errorText: string;
  consentPrivacy: string; consentAszf: string; consentLabel: string;
  interestedLabel: string; interestedYes: string; interestedNo: string;
}> = {
  hu: {
    name: "Teljes neve", namePh: "Kovács János",
    company: "Cégnév (ha van)", companyPh: "Pl. Kovács Kft.",
    email: "E-mail cím", emailPh: "kovacs@example.hu",
    phone: "Telefonszám *", phonePh: "+36 30 123 4567",
    platform: "Hol kereshetünk inkább?",
    platformWA: "WhatsApp (telefonon)", platformEmail: "E-mailben",
    domain: "Milyen domain típust szeretnél?",
    domainOptions: [".hu (pl. nev.hu)", ".com (pl. nev.com)", "Mindegy"],
    industry: "Milyen területen dolgozol, milyen weboldalt szeretnél?",
    industryPh: "Pl. masszőr vagyok Debrecenben, szeretnék egy egyszerű bemutatkozó oldalt foglalással...",
    submit: "Foglalom a helyet", sending: "Küldés...",
    successTitle: "Köszönjük!",
    successText: "1-2 munkanapon belül visszajelzünk.",
    errorText: "Hiba történt. Kérjük, próbáld újra.",
    consentLabel: "Elfogadom az", consentPrivacy: "adatkezelési tájékoztatót", consentAszf: "ÁSZF-et",
    interestedLabel: "Ha nem kerülnél be az 5 partner közé, akkor is érdekel az oldal évi 188 EUR-ért?",
    interestedYes: "Igen, érdekel", interestedNo: "Nem most",
  },
  en: {
    name: "Full name", namePh: "John Smith",
    company: "Company name (if applicable)", companyPh: "e.g. Smith Ltd.",
    email: "Email address", emailPh: "john@example.com",
    phone: "Phone number", phonePh: "+44 7700 123456",
    platform: "How should we contact you?",
    platformWA: "WhatsApp (by phone)", platformEmail: "By email",
    domain: "What domain type would you prefer?",
    domainOptions: [".com (e.g. yoursite.com)", ".co.uk (e.g. yoursite.co.uk)", "No preference"],
    industry: "What industry are you in and what kind of website do you need?",
    industryPh: "e.g. I'm a massage therapist in London, looking for a simple one-page site with booking...",
    submit: "Reserve my spot", sending: "Sending...",
    successTitle: "Thank you!",
    successText: "We'll be in touch within 1-2 business days.",
    errorText: "Something went wrong. Please try again.",
    consentLabel: "I accept the", consentPrivacy: "Privacy Policy", consentAszf: "Terms of Service",
    interestedLabel: "If you don't get selected as one of the 5 partners, would you still be interested in the site for €188/year?",
    interestedYes: "Yes, I'm interested", interestedNo: "Not right now",
  },
  hr: {
    name: "Puno ime", namePh: "Ivan Horvat",
    company: "Naziv tvrtke (ako postoji)", companyPh: "npr. Horvat d.o.o.",
    email: "E-mail adresa", emailPh: "ivan@primjer.hr",
    phone: "Broj telefona", phonePh: "+385 91 234 5678",
    platform: "Kako da vas kontaktiramo?",
    platformWA: "WhatsApp (telefonom)", platformEmail: "E-mailom",
    domain: "Kakav naziv domene biste željeli?",
    domainOptions: [".com (npr. vaseime.com)"],
    industry: "Kojom se djelatnošću bavite i kakvu web stranicu trebate?",
    industryPh: "npr. Maserka sam u Zagrebu, trebam jednostavnu predstavničku stranicu s rezervacijom...",
    submit: "Rezerviram mjesto", sending: "Slanje...",
    successTitle: "Hvala!",
    successText: "Javit ćemo se u roku 1-2 radna dana.",
    errorText: "Došlo je do pogreške. Molimo pokušajte ponovo.",
    consentLabel: "Prihvaćam", consentPrivacy: "Pravila privatnosti", consentAszf: "Opće uvjete poslovanja",
    interestedLabel: "Ako ne budeš odabran/a među 5 partnera, zanima li te stranica za 188 EUR/god?",
    interestedYes: "Da, zanima me", interestedNo: "Ne, hvala",
  },
  ro: {
    name: "Nume complet", namePh: "Ion Popescu",
    company: "Denumire firmă (dacă există)", companyPh: "ex. Popescu SRL",
    email: "Adresă e-mail", emailPh: "ion@exemplu.ro",
    phone: "Număr de telefon", phonePh: "+40 721 234 567",
    platform: "Cum preferați să vă contactăm?",
    platformWA: "WhatsApp (telefonic)", platformEmail: "Prin e-mail",
    domain: "Ce tip de domeniu preferi?",
    domainOptions: [".ro (ex. numetau.ro)", ".com (ex. numetau.com)", "Nu contează"],
    industry: "În ce domeniu activezi și ce tip de site dorești?",
    industryPh: "ex. Sunt kinetoterapeut în Cluj, am nevoie de o pagină simplă de prezentare cu programări...",
    submit: "Rezerv locul meu", sending: "Se trimite...",
    successTitle: "Mulțumim!",
    successText: "Te vom contacta în 1-2 zile lucrătoare.",
    errorText: "A apărut o eroare. Te rugăm să încerci din nou.",
    consentLabel: "Accept", consentPrivacy: "Politica de confidențialitate", consentAszf: "Termenii și condițiile",
    interestedLabel: "Dacă nu ești selectat/ă dintre cei 5 parteneri, te interesează site-ul la 188 EUR/an?",
    interestedYes: "Da, mă interesează", interestedNo: "Nu acum",
  },
};

type Status = "idle" | "sending" | "success" | "error";

export default function SorolasForm({ locale }: Props) {
  const l = labels[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    platform: "", domain: "", industry: "", interested: "",
  });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const setRadio = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/sorolas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lottery: "–" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setConsent(false);
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
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-1.5">{l.company}</label>
        <input className={inputClass} placeholder={l.companyPh} value={form.company} onChange={set("company")} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-1.5">{l.email} *</label>
        <input required type="email" className={inputClass} placeholder={l.emailPh} value={form.email} onChange={set("email")} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-1.5">{l.phone}</label>
        <input required type="tel" className={inputClass} placeholder={l.phonePh} value={form.phone} onChange={set("phone")} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-2">{l.platform}</label>
        <div className="space-y-2">
          {radioOption("platform", "whatsapp", l.platformWA)}
          {radioOption("platform", "email", l.platformEmail)}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-2">{l.domain}</label>
        <div className="space-y-2">
          {l.domainOptions.map((opt) => radioOption("domain", opt, opt))}
        </div>
      </div>

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

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-white/50 mb-2">{l.interestedLabel}</label>
        <div className="space-y-2">
          {radioOption("interested", "yes", l.interestedYes)}
          {radioOption("interested", "no", l.interestedNo)}
        </div>
      </div>

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
