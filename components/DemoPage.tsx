"use client";

import { useState, useRef, useCallback } from "react";
import { Link } from "@/i18n/navigation";
import {
  Pencil,
  X,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import type { Demo, DemoContent, Locale } from "@/lib/demos";

type Props = {
  demo: Demo;
  content: DemoContent;
  locale: Locale;
};

const bannerLabels: Record<Locale, { text: (t: string) => string; cta: string; adminBtn: string; editMode: string; exitEdit: string }> = {
  hu: {
    text: (t) => t,
    cta: "Kérj ajánlatot",
    adminBtn: "Szerkesztés",
    editMode: "Szerkesztési mód aktív – kattints bármely szövegre a módosításhoz (H1 és első H2 kivételével)",
    exitEdit: "Kilépés",
  },
  en: {
    text: (t) => t,
    cta: "Get a quote",
    adminBtn: "Edit",
    editMode: "Edit mode active – click any text to modify (except H1 and first H2)",
    exitEdit: "Exit",
  },
  hr: {
    text: (t) => t,
    cta: "Zatražite ponudu",
    adminBtn: "Uredi",
    editMode: "Način uređivanja aktivan – kliknite bilo koji tekst za izmjenu (osim H1 i prvog H2)",
    exitEdit: "Izlaz",
  },
  ro: {
    text: (t) => t,
    cta: "Solicită ofertă",
    adminBtn: "Editează",
    editMode: "Modul editare activ – fă clic pe orice text pentru modificare (cu excepția H1 și primului H2)",
    exitEdit: "Ieșire",
  },
};

export default function DemoPage({ demo, content: initialContent, locale }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState<DemoContent>(initialContent);
  const [dismissed, setDismissed] = useState(false);
  const { theme } = demo;
  const labels = bannerLabels[locale];

  const editable = useCallback(
    (
      value: string,
      onChange: (v: string) => void,
      tag: "span" | "p" | "div" = "span",
      className = ""
    ) => {
      if (!editMode) return <span className={className}>{value}</span>;
      const Tag = tag;
      return (
        <Tag
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => onChange(e.currentTarget.textContent ?? "")}
          className={`${className} outline outline-2 outline-violet-400/50 rounded cursor-text focus:outline-violet-500 bg-violet-50/30`}
        >
          {value}
        </Tag>
      );
    },
    [editMode]
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Demo banner */}
      {!dismissed && (
        <div className="sticky top-0 z-50 bg-violet-600 text-white text-sm">
          <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            <span className="font-medium">{content.bannerText}</span>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/landing"
                className="inline-flex items-center gap-1 bg-white text-violet-700 font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-violet-50 transition-colors"
              >
                {content.bannerCta} <ChevronRight size={12} />
              </Link>
              <button
                onClick={() => setDismissed(true)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin edit mode bar */}
      {editMode && (
        <div className="sticky top-0 z-40 bg-amber-500 text-white text-xs px-4 py-2 flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <Pencil size={12} />
            {labels.editMode}
          </span>
          <button
            onClick={() => setEditMode(false)}
            className="flex items-center gap-1.5 bg-white text-amber-700 font-semibold px-3 py-1 rounded-full hover:bg-amber-50 transition-colors"
          >
            <Check size={12} /> {labels.exitEdit}
          </button>
        </div>
      )}

      {/* Admin button (floating) */}
      {!editMode && (
        <button
          onClick={() => setEditMode(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-800 text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-lg hover:bg-slate-700 transition-colors"
        >
          <Pencil size={14} />
          {labels.adminBtn}
        </button>
      )}

      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <span className="font-bold text-slate-900 text-lg">{content.businessName}</span>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#services" className="text-slate-500 hover:text-slate-900 transition-colors">{content.navServices}</a>
              <a href="#about" className="text-slate-500 hover:text-slate-900 transition-colors">{content.navAbout}</a>
              <a href="#contact" className={`${theme.accentBg} ${theme.accentHover} text-white px-4 py-1.5 rounded-full transition-colors`}>{content.navContact}</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={`${theme.heroBg} py-20 px-4`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold ${theme.heroText} mb-4 tracking-tight`}>
            {content.businessName}
          </h1>
          <p className={`text-xl font-semibold ${theme.accentText} mb-5`}>
            {editable(content.tagline, (v) => setContent((c) => ({ ...c, tagline: v })))}
          </p>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {editable(content.heroSubtitle, (v) => setContent((c) => ({ ...c, heroSubtitle: v })), "p")}
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 ${theme.accentBg} ${theme.accentHover} text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-lg`}
          >
            {editable(content.ctaText, (v) => setContent((c) => ({ ...c, ctaText: v })))}
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
            {content.navServices}
          </h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-10" style={{ background: "currentColor" }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.services.map((svc, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 ${theme.accentLight} border ${theme.accentBorder}`}
              >
                <div className={`w-11 h-11 rounded-xl ${theme.iconBg} flex items-center justify-center mb-4`}>
                  <span className={`text-xl ${theme.iconText}`}>◆</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {editable(svc.title, (v) =>
                    setContent((c) => ({
                      ...c,
                      services: c.services.map((s, j) => j === i ? { ...s, title: v } : s),
                    }))
                  )}
                </h3>
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {editable(svc.desc, (v) =>
                    setContent((c) => ({
                      ...c,
                      services: c.services.map((s, j) => j === i ? { ...s, desc: v } : s),
                    })), "p"
                  )}
                </p>
                <span className={`text-sm font-semibold ${theme.accentText}`}>
                  {editable(svc.price, (v) =>
                    setContent((c) => ({
                      ...c,
                      services: c.services.map((s, j) => j === i ? { ...s, price: v } : s),
                    }))
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            {locale === "hu" ? "Ügyfélvélemények" :
             locale === "en" ? "Client reviews" :
             locale === "hr" ? "Recenzije klijenata" :
             "Recenzii clienți"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.reviews.map((rev, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: rev.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{editable(rev.text, (v) =>
                    setContent((c) => ({
                      ...c,
                      reviews: c.reviews.map((r, j) => j === i ? { ...r, text: v } : r),
                    }))
                  )}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {editable(rev.name, (v) =>
                      setContent((c) => ({
                        ...c,
                        reviews: c.reviews.map((r, j) => j === i ? { ...r, name: v } : r),
                      }))
                    )}
                  </div>
                  <div className="text-xs text-slate-400">
                    {editable(rev.role, (v) =>
                      setContent((c) => ({
                        ...c,
                        reviews: c.reviews.map((r, j) => j === i ? { ...r, role: v } : r),
                      }))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {editable(content.aboutTitle, (v) => setContent((c) => ({ ...c, aboutTitle: v })))}
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {editable(content.aboutText, (v) => setContent((c) => ({ ...c, aboutText: v })), "p")}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`${theme.contactBg} py-16 px-4 text-white`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">{content.navContact}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`tel:${content.phone}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors"
            >
              <Phone size={20} className="flex-shrink-0 opacity-70" />
              <div>
                <div className="text-xs opacity-60 mb-0.5">{locale === "hu" ? "Telefon" : locale === "en" ? "Phone" : locale === "hr" ? "Telefon" : "Telefon"}</div>
                <div className="font-semibold">{editable(content.phone, (v) => setContent((c) => ({ ...c, phone: v })))}</div>
              </div>
            </a>
            <a
              href={`mailto:${content.email}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-colors"
            >
              <Mail size={20} className="flex-shrink-0 opacity-70" />
              <div>
                <div className="text-xs opacity-60 mb-0.5">E-mail</div>
                <div className="font-semibold">{editable(content.email, (v) => setContent((c) => ({ ...c, email: v })))}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-5">
              <MapPin size={20} className="flex-shrink-0 opacity-70" />
              <div>
                <div className="text-xs opacity-60 mb-0.5">{locale === "hu" ? "Cím" : locale === "en" ? "Address" : locale === "hr" ? "Adresa" : "Adresă"}</div>
                <div className="font-semibold">{editable(content.address, (v) => setContent((c) => ({ ...c, address: v })))}</div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-6 bg-white/10 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} className="opacity-70" />
              <span className="font-semibold text-sm">{locale === "hu" ? "Nyitvatartás" : locale === "en" ? "Opening hours" : locale === "hr" ? "Radno vrijeme" : "Program"}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {content.hours.map((h, i) => (
                <div key={i} className="text-sm opacity-80">
                  {editable(h, (v) =>
                    setContent((c) => ({
                      ...c,
                      hours: c.hours.map((hr, j) => j === i ? v : hr),
                    }))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme.footerBg} py-8 px-4 text-white/60 text-sm text-center`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-semibold text-white">{content.businessName}</span>
          <span>
            {locale === "hu" ? "Weboldal készítette:" : locale === "en" ? "Website by:" : locale === "hr" ? "Web stranica izradila:" : "Site realizat de:"}{" "}
            <a href="/" className="text-white hover:underline">Xilofon Digital</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
