"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
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
  ChevronDown,
  Menu,
  Send,
} from "lucide-react";
import type { Demo, DemoContent, DemoWhyUs, DemoFaq, Locale } from "@/lib/demos";

type CustomField = {
  id: string;
  type: "select" | "checkbox";
  label: string;
  options: string[];
};

type Props = {
  demo: Demo;
  content: DemoContent;
  locale: Locale;
};

const adminLabels: Record<Locale, { adminBtn: string; editMode: string; exitEdit: string; back: string; editHint: string }> = {
  hu: { adminBtn: "Szerkesztés", editMode: "Szerkesztési mód aktív – kattints bármely szövegre a módosításhoz", exitEdit: "Kilépés", back: "← Vissza", editHint: "Kattints ide a szerkesztéshez!" },
  en: { adminBtn: "Edit", editMode: "Edit mode active – click any text to modify", exitEdit: "Exit", back: "← Back", editHint: "Click here to edit!" },
  hr: { adminBtn: "Uredi", editMode: "Način uređivanja aktivan – kliknite bilo koji tekst", exitEdit: "Izlaz", back: "← Natrag", editHint: "Kliknite ovdje za uređivanje!" },
  ro: { adminBtn: "Editează", editMode: "Modul editare activ – fă clic pe orice text", exitEdit: "Ieșire", back: "← Înapoi", editHint: "Apasă aici pentru editare!" },
};

const iconMap: Record<string, string> = {
  heart: "❤️", leaf: "🌿", star: "⭐", truck: "🚚", gift: "🎁", clock: "⏰",
  cake: "🎂", cookie: "🍪", shield: "🛡️", check: "✅", smile: "😊", award: "🏆",
  phone: "📞", map: "📍", users: "👥", bolt: "⚡", scissors: "✂️", home: "🏠",
  camera: "📷", brush: "🖌️", tool: "🔧", chart: "📊", lock: "🔒", sun: "☀️",
  droplet: "💧", sparkle: "✨", fire: "🔥", gem: "💎", zap: "⚡", key: "🔑",
};

function getIcon(name: string) {
  return iconMap[name] ?? "✦";
}

export default function DemoPage({ demo, content: initialContent, locale }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState<DemoContent>(initialContent);
  const [galleryImages, setGalleryImages] = useState<string[]>(demo.galleryImages);
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [dismissed, setDismissed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { theme } = demo;
  const al = adminLabels[locale];

  const editable = useCallback(
    (value: string, onChange: (v: string) => void, tag: "span" | "p" | "div" = "span", className = "") => {
      if (!editMode) return <span className={className}>{value}</span>;
      const Tag = tag;
      return (
        <Tag
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => onChange(e.currentTarget.textContent ?? "")}
          className={`${className} outline outline-2 outline-violet-400/60 rounded cursor-text focus:outline-violet-500 bg-violet-50/40`}
        >
          {value}
        </Tag>
      );
    },
    [editMode]
  );

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone") ?? "",
          message: fd.get("message"),
          source: `demo-${demo.slug}`,
        }),
      });
      if (!res.ok) throw new Error("err");
      setFormState("sent");
      formRef.current?.reset();
    } catch {
      setFormState("error");
    }
  }

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(content.mapQuery)}&output=embed&z=15`;

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Demo banner */}
      {!dismissed && (
        <div className="sticky top-0 z-50 bg-violet-600 text-white text-sm">
          <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.history.back()}
                className="text-white/80 hover:text-white font-medium text-xs flex-shrink-0 hover:underline transition-colors"
              >
                {al.back}
              </button>
              <span className="text-white/30 hidden sm:block">|</span>
              <span className="font-medium hidden sm:block">{content.bannerText}</span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/sorolas"
                className="inline-flex items-center gap-1 bg-white text-violet-700 font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-violet-50 transition-colors"
              >
                {content.bannerCta} <ChevronRight size={12} />
              </Link>
              <button onClick={() => setDismissed(true)} className="text-white/70 hover:text-white transition-colors" aria-label="Close">
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin edit bar – fixed so it stays on screen while scrolling */}
      {editMode && (
        <div className={`fixed left-0 right-0 z-[60] bg-amber-500 text-white text-xs px-4 py-2 flex items-center justify-between gap-4 ${dismissed ? "top-0" : "top-10"}`}>
          <span className="flex items-center gap-2"><Pencil size={12} />{al.editMode}</span>
          <button onClick={() => setEditMode(false)} className="flex items-center gap-1.5 bg-white text-amber-700 font-semibold px-3 py-1 rounded-full hover:bg-amber-50 transition-colors">
            <Check size={12} /> {al.exitEdit}
          </button>
        </div>
      )}

      {/* Admin floating button with pulse hint */}
      {!editMode && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {/* Tooltip hint */}
          <div className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap animate-bounce">
            {al.editHint} ↓
          </div>
          {/* Button with ping ring */}
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-slate-500 animate-ping opacity-40" />
            <button
              onClick={() => setEditMode(true)}
              className="relative flex items-center gap-2 bg-slate-800 text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-lg hover:bg-slate-700 transition-colors"
            >
              <Pencil size={14} />{al.adminBtn}
            </button>
          </div>
        </div>
      )}

      {/* Business navbar */}
      <header className={`sticky z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm ${!dismissed && editMode ? "top-[72px]" : !dismissed ? "top-10" : editMode ? "top-8" : "top-0"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-slate-900 text-lg truncate max-w-[180px] sm:max-w-none">{content.businessName}</span>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#services" className="text-slate-500 hover:text-slate-900 transition-colors">{content.navServices}</a>
              <a href="#about" className="text-slate-500 hover:text-slate-900 transition-colors">{content.navAbout}</a>
              <a href="#reviews" className="text-slate-500 hover:text-slate-900 transition-colors">{content.navReviews}</a>
              <a href="#faq" className="text-slate-500 hover:text-slate-900 transition-colors">{content.navFaq}</a>
              <a href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">{content.navContact}</a>
              <a
                href={`tel:${content.phone}`}
                className={`inline-flex items-center gap-1.5 ${theme.accentBg} ${theme.accentHover} text-white font-semibold px-4 py-2 rounded-full transition-colors`}
              >
                <Phone size={14} /> {content.ctaPhone}
              </a>
            </nav>
            {/* Mobile phone + hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <a href={`tel:${content.phone}`} className={`inline-flex items-center gap-1 ${theme.accentBg} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}>
                <Phone size={12} /> {content.ctaPhone}
              </a>
              <button onClick={() => setMobileMenuOpen((o) => !o)} className="p-1 text-slate-500 hover:text-slate-900" aria-label="Menu">
                <Menu size={22} />
              </button>
            </div>
          </div>
          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-slate-100 flex flex-col gap-3 text-sm font-medium pb-4">
              {[content.navServices, content.navAbout, content.navReviews, content.navFaq, content.navContact].map((label, i) => (
                <a key={i} href={["#services","#about","#reviews","#faq","#contact"][i]} className="text-slate-600 hover:text-slate-900 px-1" onClick={() => setMobileMenuOpen(false)}>{label}</a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src={demo.heroImageUrl}
          alt={content.businessName}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            {content.businessName}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white/90 mb-3 drop-shadow">
            {editable(content.tagline, (v) => setContent((c) => ({ ...c, tagline: v })))}
          </p>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed drop-shadow">
            {editable(content.heroSubtitle, (v) => setContent((c) => ({ ...c, heroSubtitle: v })), "p")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className={`inline-flex items-center justify-center gap-2 ${theme.accentBg} ${theme.accentHover} text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-lg shadow-lg`}>
              {editable(content.ctaText, (v) => setContent((c) => ({ ...c, ctaText: v })))}
            </a>
            <a href={`tel:${content.phone}`} className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-lg border border-white/30">
              <Phone size={18} /> {editable(content.ctaPhone, (v) => setContent((c) => ({ ...c, ctaPhone: v })))}
            </a>
          </div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className={`${theme.accentBg} text-white py-5`}>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2.5">
            <MapPin size={18} className="flex-shrink-0 opacity-80" />
            <span className="text-sm font-medium leading-tight">{editable(content.address, (v) => setContent((c) => ({ ...c, address: v })))}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone size={18} className="flex-shrink-0 opacity-80" />
            <span className="text-sm font-medium">{editable(content.phone, (v) => setContent((c) => ({ ...c, phone: v })))}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail size={18} className="flex-shrink-0 opacity-80" />
            <span className="text-sm font-medium">{editable(content.email, (v) => setContent((c) => ({ ...c, email: v })))}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock size={18} className="flex-shrink-0 opacity-80" />
            <span className="text-sm font-medium leading-tight">{editable(content.hours[0], (v) => setContent((c) => ({ ...c, hours: c.hours.map((h, i) => i === 0 ? v : h) })))}</span>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">{content.sectionWhyUs}</h2>
          <div className={`w-12 h-1 ${theme.accentBg} rounded-full mx-auto mb-10`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.whyUs.map((item: DemoWhyUs, i: number) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4">
                <div className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center flex-shrink-0 text-2xl`}>
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    {editable(item.title, (v) => setContent((c) => ({ ...c, whyUs: c.whyUs.map((w, j) => j === i ? { ...w, title: v } : w) })))}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {editable(item.desc, (v) => setContent((c) => ({ ...c, whyUs: c.whyUs.map((w, j) => j === i ? { ...w, desc: v } : w) })), "p")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {editable(content.aboutTitle, (v) => setContent((c) => ({ ...c, aboutTitle: v })))}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              {editable(content.aboutText, (v) => setContent((c) => ({ ...c, aboutText: v })), "p")}
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${theme.iconBg} flex items-center justify-center text-lg`}>👤</div>
              <div>
                <div className="font-semibold text-slate-900">
                  {editable(content.ownerName, (v) => setContent((c) => ({ ...c, ownerName: v })))}
                </div>
                <div className={`text-sm ${theme.accentText}`}>
                  {editable(content.profession, (v) => setContent((c) => ({ ...c, profession: v })))}
                </div>
              </div>
            </div>
          </div>
          <div className={`w-full md:w-64 lg:w-72 rounded-2xl ${theme.accentLight} ${theme.accentBorder} border p-8 text-center flex-shrink-0`}>
            <div className="text-5xl mb-4">{demo.emoji}</div>
            <div className={`text-3xl font-bold ${theme.accentText} mb-1`}>{content.ratingScore}</div>
            <div className="flex gap-0.5 justify-center mb-2">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-slate-500 text-sm">{content.ratingCount}</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">{content.sectionServices}</h2>
          <div className={`w-12 h-1 ${theme.accentBg} rounded-full mx-auto mb-10`} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.services.map((svc, i) => (
              <div key={i} className={`rounded-2xl bg-white p-6 border ${theme.accentBorder} shadow-sm`}>
                <div className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center mb-4 text-2xl`}>
                  {getIcon(svc.icon)}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {editable(svc.title, (v) => setContent((c) => ({ ...c, services: c.services.map((s, j) => j === i ? { ...s, title: v } : s) })))}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {editable(svc.desc, (v) => setContent((c) => ({ ...c, services: c.services.map((s, j) => j === i ? { ...s, desc: v } : s) })), "p")}
                </p>
                <span className={`inline-block text-sm font-bold ${theme.accentText} ${theme.accentLight} px-3 py-1 rounded-full`}>
                  {editable(svc.price, (v) => setContent((c) => ({ ...c, services: c.services.map((s, j) => j === i ? { ...s, price: v } : s) })))}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#contact" className={`inline-flex items-center gap-2 ${theme.accentBg} ${theme.accentHover} text-white font-semibold px-8 py-3 rounded-full transition-colors`}>
              {content.ctaText} <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{content.sectionReviews}</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className={`text-3xl font-bold ${theme.accentText}`}>{content.ratingScore}</span>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-500 text-sm">({content.ratingCount})</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.reviews.map((rev, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: rev.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{editable(rev.text, (v) => setContent((c) => ({ ...c, reviews: c.reviews.map((r, j) => j === i ? { ...r, text: v } : r) })))}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {editable(rev.name, (v) => setContent((c) => ({ ...c, reviews: c.reviews.map((r, j) => j === i ? { ...r, name: v } : r) })))}
                  </div>
                  <div className="text-xs text-slate-400">
                    {editable(rev.role, (v) => setContent((c) => ({ ...c, reviews: c.reviews.map((r, j) => j === i ? { ...r, role: v } : r) })))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">{content.sectionFaq}</h2>
          <div className={`w-12 h-1 ${theme.accentBg} rounded-full mx-auto mb-10`} />
          <div className="flex flex-col gap-3">
            {content.faq.map((item: DemoFaq, i: number) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{editable(item.q, (v) => setContent((c) => ({ ...c, faq: c.faq.map((f, j) => j === i ? { ...f, q: v } : f) })))}</span>
                  <ChevronDown size={18} className={`flex-shrink-0 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-3">
                    {editable(item.a, (v) => setContent((c) => ({ ...c, faq: c.faq.map((f, j) => j === i ? { ...f, a: v } : f) })), "p")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">
            {editable(content.sectionGallery, (v) => setContent((c) => ({ ...c, sectionGallery: v })))}
          </h2>
          <div className={`w-12 h-1 ${theme.accentBg} rounded-full mx-auto mb-10`} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden aspect-square bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                {editMode && (
                  <button
                    onClick={() => setGalleryImages((imgs) => imgs.filter((_, j) => j !== i))}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                    aria-label="Remove"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}
            {editMode && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="rounded-2xl aspect-square border-2 border-dashed border-slate-300 hover:border-violet-400 flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-violet-500 transition-colors bg-slate-50"
              >
                <span className="text-3xl">+</span>
                <span className="text-xs font-medium">Kép hozzáadása</span>
              </button>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              const urls = files.map((f) => URL.createObjectURL(f));
              setGalleryImages((imgs) => [...imgs, ...urls]);
              e.target.value = "";
            }}
          />
        </div>
      </section>

      {/* Map + Contact details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">{content.sectionContact}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-72 lg:h-auto">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "280px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              />
            </div>
            {/* Contact details */}
            <div className="flex flex-col justify-center gap-5">
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <div className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Phone size={20} className={theme.iconText} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">{locale === "hu" ? "Telefon" : locale === "en" ? "Phone" : locale === "hr" ? "Telefon" : "Telefon"}</div>
                  <div className="font-bold text-slate-900">{editable(content.phone, (v) => setContent((c) => ({ ...c, phone: v })))}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <div className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Mail size={20} className={theme.iconText} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">E-mail</div>
                  <div className="font-bold text-slate-900">{editable(content.email, (v) => setContent((c) => ({ ...c, email: v })))}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <div className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <MapPin size={20} className={theme.iconText} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">{locale === "hu" ? "Cím" : locale === "en" ? "Address" : locale === "hr" ? "Adresa" : "Adresă"}</div>
                  <div className="font-bold text-slate-900">{editable(content.address, (v) => setContent((c) => ({ ...c, address: v })))}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <div className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Clock size={20} className={theme.iconText} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">{locale === "hu" ? "Nyitvatartás" : locale === "en" ? "Opening hours" : locale === "hr" ? "Radno vrijeme" : "Program"}</div>
                  {content.hours.map((h, i) => (
                    <div key={i} className="text-sm text-slate-700 font-medium">
                      {editable(h, (v) => setContent((c) => ({ ...c, hours: c.hours.map((hr, j) => j === i ? v : hr) })))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className={`py-16 px-4 ${theme.accentLight}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">{content.contactFormTitle}</h2>
          <div className={`w-12 h-1 ${theme.accentBg} rounded-full mx-auto mb-10`} />
          {formState === "sent" ? (
            <div className={`rounded-2xl ${theme.accentBg} text-white p-8 text-center`}>
              <div className="text-4xl mb-3">✅</div>
              <p className="font-semibold text-lg">{content.contactFormSuccess}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleFormSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{locale === "hu" ? "Neve" : locale === "en" ? "Name" : locale === "hr" ? "Ime" : "Nume"}</label>
                  <input name="name" required type="text" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">E-mail</label>
                  <input name="email" required type="email" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{locale === "hu" ? "Telefonszám" : locale === "en" ? "Phone" : locale === "hr" ? "Telefon" : "Telefon"} <span className="text-slate-400 font-normal">{locale === "hu" ? "(opcionális)" : locale === "en" ? "(optional)" : locale === "hr" ? "(neobavezno)" : "(opțional)"}</span></label>
                <input name="phone" type="tel" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">{locale === "hu" ? "Üzenet" : locale === "en" ? "Message" : locale === "hr" ? "Poruka" : "Mesaj"}</label>
                <textarea name="message" required rows={4} className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none" />
              </div>

              {/* Custom fields */}
              {customFields.map((field) => (
                <div key={field.id} className={editMode ? "relative rounded-xl border-2 border-dashed border-amber-400 p-4 bg-amber-50/40" : ""}>
                  {editMode && (
                    <button
                      type="button"
                      onClick={() => setCustomFields((fs) => fs.filter((f) => f.id !== field.id))}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                      aria-label="Remove field"
                    >
                      <X size={11} />
                    </button>
                  )}
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {editMode ? (
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => setCustomFields((fs) => fs.map((f) => f.id === field.id ? { ...f, label: e.currentTarget.textContent ?? f.label } : f))}
                        className="outline outline-2 outline-violet-400/60 rounded px-1 cursor-text focus:outline-violet-500 bg-violet-50/40"
                      >
                        {field.label}
                      </span>
                    ) : field.label}
                  </label>

                  {/* Field preview */}
                  <div className={editMode ? "pointer-events-none opacity-40" : undefined}>
                  {field.type === "select" ? (
                    <select name={field.id} className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white">
                      <option value="">—</option>
                      {field.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <div className="flex flex-col gap-2 pl-1">
                      {field.options.map((opt, oi) => (
                        <label key={oi} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                          <input type="checkbox" name={field.id} value={opt} className="rounded accent-violet-600 w-4 h-4" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}
                  </div>

                  {/* Options editor (edit mode only) */}
                  {editMode && (
                    <div className="mt-3 pt-3 border-t border-amber-200 space-y-1.5">
                      {field.options.map((opt, oi) => (
                        <div key={oi} className="flex items-center gap-2">
                          <span
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => setCustomFields((fs) => fs.map((f) => f.id === field.id ? { ...f, options: f.options.map((o, j) => j === oi ? (e.currentTarget.textContent ?? o) : o) } : f))}
                            className="flex-1 text-xs border border-violet-300 rounded-lg px-2.5 py-1 outline-none focus:ring-2 focus:ring-violet-400 bg-white"
                          >
                            {opt}
                          </span>
                          <button
                            type="button"
                            onClick={() => setCustomFields((fs) => fs.map((f) => f.id === field.id ? { ...f, options: f.options.filter((_, j) => j !== oi) } : f))}
                            className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 flex-shrink-0 transition-colors"
                          >
                            <X size={10} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => setCustomFields((fs) => fs.map((f) => f.id === field.id ? { ...f, options: [...f.options, `${locale === "hu" ? "Lehetőség" : "Option"} ${f.options.length + 1}`] } : f))}
                        className="text-xs text-violet-600 hover:text-violet-800 font-medium transition-colors"
                      >
                        + {locale === "hu" ? "Lehetőség hozzáadása" : locale === "en" ? "Add option" : locale === "hr" ? "Dodaj opciju" : "Adaugă opțiune"}
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Add field controls (edit mode only) */}
              {editMode && (
                <div className="flex flex-wrap items-center gap-2 border-t border-dashed border-slate-300 pt-4">
                  <span className="text-xs text-slate-500 font-medium">
                    {locale === "hu" ? "Kérdés hozzáadása:" : locale === "en" ? "Add question:" : locale === "hr" ? "Dodaj pitanje:" : "Adaugă întrebare:"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCustomFields((fs) => [...fs, { id: Math.random().toString(36).slice(2), type: "select", label: locale === "hu" ? "Válasszon egyet" : locale === "en" ? "Choose one" : locale === "hr" ? "Odaberite jedno" : "Alegeți una", options: [locale === "hu" ? "1. lehetőség" : "Option 1", locale === "hu" ? "2. lehetőség" : "Option 2"] }])}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-slate-300 hover:border-violet-400 hover:text-violet-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
                  >
                    📋 {locale === "hu" ? "Legördülő menü" : locale === "en" ? "Dropdown" : locale === "hr" ? "Padajući izbornik" : "Listă derulantă"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomFields((fs) => [...fs, { id: Math.random().toString(36).slice(2), type: "checkbox", label: locale === "hu" ? "Jelölje be a megfelelőt" : locale === "en" ? "Check all that apply" : locale === "hr" ? "Označite što odgovara" : "Bifați ce se aplică", options: [locale === "hu" ? "1. lehetőség" : "Option 1", locale === "hu" ? "2. lehetőség" : "Option 2"] }])}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-slate-300 hover:border-violet-400 hover:text-violet-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
                  >
                    ☑️ {locale === "hu" ? "Jelölőnégyzetek" : locale === "en" ? "Checkboxes" : locale === "hr" ? "Potvrdni okviri" : "Casete de selectare"}
                  </button>
                </div>
              )}

              {formState === "error" && (
                <p className="text-red-600 text-sm">{locale === "hu" ? "Hiba történt. Kérjük, próbáld újra." : locale === "en" ? "Something went wrong. Please try again." : locale === "hr" ? "Došlo je do pogreške." : "A apărut o eroare."}</p>
              )}
              <button type="submit" disabled={formState === "sending"} className={`inline-flex items-center justify-center gap-2 ${theme.accentBg} ${theme.accentHover} text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-60`}>
                <Send size={16} />
                {formState === "sending" ? "..." : content.contactFormSubmit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme.footerBg} py-8 px-4 text-white/60 text-sm`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="font-bold text-white text-base">{content.businessName}</span>
            <div className="text-xs mt-0.5">{content.address} · {content.phone}</div>
          </div>
          <span>
            {locale === "hu" ? "Weboldal készítette:" : locale === "en" ? "Website by:" : locale === "hr" ? "Web stranica izradila:" : "Site realizat de:"}{" "}
            <a href="/" className="text-white hover:underline font-medium">Xilofon Digital</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
