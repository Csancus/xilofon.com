"use client";

import { useState } from "react";
import type { Locale } from "@/lib/demos";

type Props = { locale: Locale };

const labels: Record<Locale, {
  name: string; namePh: string;
  company: string; companyPh: string;
  email: string; emailPh: string;
  phone: string; phonePh: string;
  lottery: string; lotteryYes: string; lotteryNo: string;
  interested: string; interestedYes: string; interestedYesNote: string; interestedNo: string;
  platform: string; platformWA: string; platformEmail: string;
  domain: string; domainOptions: string[];
  industry: string; industryPh: string;
  submit: string; sending: string;
  successTitle: string; successText: string;
  errorText: string;
}> = {
  hu: {
    name: "Teljes neve", namePh: "Kovács János",
    company: "Cégnév (ha van)", companyPh: "Pl. Kovács Kft.",
    email: "E-mail cím", emailPh: "kovacs@example.hu",
    phone: "Telefon", phonePh: "+36 30 123 4567",
    lottery: "Részt szeretnél venni a 10 ingyenes weboldal sorsolásában?",
    lotteryYes: "Igen, részt veszek", lotteryNo: "Nem, kihagyom",
    interested: "Érdekel egy weboldal akkor is, ha nem nyerél? (140 EUR / év)",
    interestedYes: "Igen, érdekelne", interestedYesNote: "140 EUR / év",
    interestedNo: "Nem most",
    platform: "Hol kereshetünk inkább?",
    platformWA: "WhatsApp (telefonon)", platformEmail: "E-mailben",
    domain: "Milyen domain típust szeretnél?",
    domainOptions: [".hu domain (pl. nev.hu)", ".com domain (pl. nev.com)", "Mindegy"],
    industry: "Milyen területen dolgozol, milyen weboldalt szeretnél?",
    industryPh: "Pl. masszőr vagyok Debrecenben, szeretnék egy egyszerű bemutatkozó oldalt foglalással...",
    submit: "Regisztrálok a sorsolásba", sending: "Küldés...",
    successTitle: "Köszönjük a jelentkezést!",
    successText: "1-2 munkanapon belül visszajelzünk.",
    errorText: "Hiba történt. Kérjük, próbáld újra.",
  },
  en: {
    name: "Full name", namePh: "John Smith",
    company: "Company name (if applicable)", companyPh: "e.g. Smith Ltd.",
    email: "Email address", emailPh: "john@example.com",
    phone: "Phone", phonePh: "+44 7700 123456",
    lottery: "Would you like to enter the draw for 10 free websites?",
    lotteryYes: "Yes, enter me", lotteryNo: "No, I'll skip",
    interested: "Are you interested in a website even if you don't win? (€140/year)",
    interestedYes: "Yes, I'm interested", interestedYesNote: "€140/year",
    interestedNo: "Not right now",
    platform: "How should we contact you?",
    platformWA: "WhatsApp (by phone)", platformEmail: "By email",
    domain: "What domain type would you prefer?",
    domainOptions: [".com domain (e.g. yoursite.com)", ".co.uk domain (e.g. yoursite.co.uk)", "No preference"],
    industry: "What industry are you in and what kind of website do you need?",
    industryPh: "e.g. I'm a massage therapist in London, looking for a simple one-page site with booking...",
    submit: "Register for the draw", sending: "Sending...",
    successTitle: "Thank you for registering!",
    successText: "We'll be in touch within 1-2 business days.",
    errorText: "Something went wrong. Please try again.",
  },
  hr: {
    name: "Puno ime", namePh: "Ivan Horvat",
    company: "Naziv tvrtke (ako postoji)", companyPh: "npr. Horvat d.o.o.",
    email: "E-mail adresa", emailPh: "ivan@primjer.hr",
    phone: "Telefon", phonePh: "+385 91 234 5678",
    lottery: "Želite li sudjelovati u izvlačenju za 10 besplatnih web stranica?",
    lotteryYes: "Da, sudjelujem", lotteryNo: "Ne, preskačem",
    interested: "Zanimaju li vas web stranica i ako ne pobijedite? (140 EUR/god)",
    interestedYes: "Da, zanima me", interestedYesNote: "140 EUR/god",
    interestedNo: "Ne sada",
    platform: "Kako da vas kontaktiramo?",
    platformWA: "WhatsApp (telefonom)", platformEmail: "E-mailom",
    domain: "Kakav naziv domene biste željeli?",
    domainOptions: [".hr domena (npr. vaseime.hr)", ".com domena (npr. vaseime.com)", "Svejedno mi je"],
    industry: "Kojom se djelatnošću bavite i kakvu web stranicu trebate?",
    industryPh: "npr. Maserka sam u Zagrebu, trebam jednostavnu predstavničku stranicu s rezervacijom...",
    submit: "Prijavim se na izvlačenje", sending: "Slanje...",
    successTitle: "Hvala na prijavi!",
    successText: "Javit ćemo se u roku 1-2 radna dana.",
    errorText: "Došlo je do pogreške. Molimo pokušajte ponovo.",
  },
  ro: {
    name: "Nume complet", namePh: "Ion Popescu",
    company: "Denumire firmă (dacă există)", companyPh: "ex. Popescu SRL",
    email: "Adresă e-mail", emailPh: "ion@exemplu.ro",
    phone: "Telefon", phonePh: "+40 721 234 567",
    lottery: "Dorești să participi la tragerea la sorți pentru 10 site-uri gratuite?",
    lotteryYes: "Da, particip", lotteryNo: "Nu, trec",
    interested: "Te interesează un site chiar dacă nu câștigi? (140 EUR/an)",
    interestedYes: "Da, mă interesează", interestedYesNote: "140 EUR/an",
    interestedNo: "Nu acum",
    platform: "Cum preferați să vă contactăm?",
    platformWA: "WhatsApp (telefonic)", platformEmail: "Prin e-mail",
    domain: "Ce tip de domeniu preferi?",
    domainOptions: [".ro domeniu (ex. numetau.ro)", ".com domeniu (ex. numetau.com)", "Nu contează"],
    industry: "În ce domeniu activezi și ce tip de site dorești?",
    industryPh: "ex. Sunt kinetoterapeut în Cluj, am nevoie de o pagină simplă de prezentare cu programări...",
    submit: "Mă înscriu la tragere", sending: "Se trimite...",
    successTitle: "Mulțumim pentru înscriere!",
    successText: "Te vom contacta în 1-2 zile lucrătoare.",
    errorText: "A apărut o eroare. Te rugăm să încerci din nou.",
  },
};

type Status = "idle" | "sending" | "success" | "error";

export default function SorolasForm({ locale }: Props) {
  const l = labels[locale];
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    lottery: "", interested: "", platform: "", domain: "", industry: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{l.successTitle}</h3>
        <p className="text-slate-500 text-sm">{l.successText}</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder-slate-300";
  const radioOption = (name: string, value: string, label: string, note?: string) => (
    <label
      key={value}
      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
        form[name as keyof typeof form] === value
          ? "border-violet-400 bg-violet-50"
          : "border-slate-200 hover:border-violet-200"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={form[name as keyof typeof form] === value}
        onChange={() => setRadio(name as keyof typeof form, value)}
        className="mt-0.5 accent-violet-600"
      />
      <span className="text-sm text-slate-700 leading-snug">
        {label}
        {note && <span className="text-xs text-slate-400 ml-1">({note})</span>}
      </span>
    </label>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5">{l.name} *</label>
        <input required className={inputClass} placeholder={l.namePh} value={form.name} onChange={set("name")} />
      </div>

      {/* Company */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5">{l.company}</label>
        <input className={inputClass} placeholder={l.companyPh} value={form.company} onChange={set("company")} />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5">{l.email} *</label>
        <input required type="email" className={inputClass} placeholder={l.emailPh} value={form.email} onChange={set("email")} />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5">{l.phone}</label>
        <input type="tel" className={inputClass} placeholder={l.phonePh} value={form.phone} onChange={set("phone")} />
      </div>

      {/* Lottery */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-2">{l.lottery}</label>
        <div className="space-y-2">
          {radioOption("lottery", "igen", l.lotteryYes)}
          {radioOption("lottery", "nem", l.lotteryNo)}
        </div>
      </div>

      {/* Interested anyway */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-2">{l.interested}</label>
        <div className="space-y-2">
          {radioOption("interested", "igen", l.interestedYes, l.interestedYesNote)}
          {radioOption("interested", "nem", l.interestedNo)}
        </div>
      </div>

      {/* Platform */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-2">{l.platform}</label>
        <div className="space-y-2">
          {radioOption("platform", "whatsapp", l.platformWA)}
          {radioOption("platform", "email", l.platformEmail)}
        </div>
      </div>

      {/* Domain */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-2">{l.domain}</label>
        <div className="space-y-2">
          {l.domainOptions.map((opt) => radioOption("domain", opt, opt))}
        </div>
      </div>

      {/* Industry */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5">{l.industry}</label>
        <textarea
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder={l.industryPh}
          value={form.industry}
          onChange={set("industry")}
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">{l.errorText}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white font-semibold transition-colors text-sm"
      >
        {status === "sending" ? l.sending : l.submit}
      </button>
    </form>
  );
}
