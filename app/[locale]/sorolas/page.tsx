import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/lib/demos";
import DemoGrid from "@/components/DemoGrid";
import SorolasForm from "@/components/SorolasForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Star, Check } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    hu: "Júniusi referencia ajánlat – 94 EUR weboldal | Xilofon Digital",
    en: "June reference offer – €94 website | Xilofon Digital",
    hr: "Lipanjska referentna ponuda – 94 EUR web stranica | Xilofon Digital",
    ro: "Ofertă referință iunie – 94 EUR site | Xilofon Digital",
  };
  return { title: titles[locale] ?? titles.hu };
}

const copy: Record<Locale, {
  badge: string;
  spotsLeft: string;
  title: string;
  highlight: string;
  normalPrice: string;
  offerPrice: string;
  subtitle: string;
  bullets: string[];
  formTitle: string;
  formSubtitle: string;
  demosTitle: string;
  demosSubtitle: string;
  viewDemo: string;
  reviewsTitle: string;
  servicesTitle: string;
  services: { emoji: string; title: string; desc: string; price: string }[];
  reviews: { name: string; role: string; text: string }[];
  formDisclaimer: string;
  demosBtn: string;
}> = {
  hu: {
    badge: "Június • 5 hely • Referencia ajánlat",
    spotsLeft: "Maradék helyek: 4/5",
    title: "Weboldal már",
    highlight: "94 EUR / év",
    normalPrice: "Normál ár: 188 EUR / év",
    offerPrice: "Júniusi ár: 94 EUR / év",
    subtitle: "Júniusban 5 partnernek készítünk weboldalt 50% kedvezménnyel. Kedvezményes ár, referencia céljából.",
    bullets: [
      "Személyre szabott one-page weboldal",
      "Domain és hosting benne",
      "SEO-optimalizált, Google-barát",
      "Mobil-barát, gyors",
      "6 napon belül kész",
      "Éves felülvizsgálat és korszerűsítés",
    ],
    formTitle: "Foglald le a helyed",
    formSubtitle: "Már csak 4/5 hely szabad – 1-2 munkanapon belül visszajelzünk.",
    demosTitle: "Ilyen weboldalat kapsz",
    demosSubtitle: "Nézd meg a minta weboldalainkat – ezeket kapják a partnerek.",
    viewDemo: "Megnézem →",
    reviewsTitle: "Mit mondanak az ügyfeleink?",
    servicesTitle: "Egyéb szolgáltatásaink",
    services: [
      { emoji: "📱", title: "Facebook kampányok", desc: "Célzott hirdetések és kampánymenedzsment", price: "Ajánlatkérés" },
      { emoji: "📍", title: "Google Business Profil", desc: "Helyi SEO, Google Térkép jelenlét", price: "Egyszeri + havidíj" },
      { emoji: "🔍", title: "SEO tanácsadás", desc: "Kulcsszókutatás, technikai audit, stratégia", price: "Projekt alapú" },
    ],
    reviews: [
      { name: "Horváth Eszter", role: "Masszőr", text: "Korábban csak Facebookon voltam. Most az oldalamon keresztül jönnek az új ügyfeleim, és minden hónapban több foglalást kapok." },
      { name: "Fekete Dávid", role: "Személyi edző", text: "Két héttel az indítás után már az első oldalon voltam a Google-on a városomban. 94 euróért ez elképesztő eredmény." },
      { name: "Németh Katalin", role: "Könyvelő", text: "Eddig féltem az internet-marketingtől. A csapat végigvezetett mindenen, és most van egy profi weboldalam, ami valóban ügyfeleket hoz." },
    ],
    formDisclaimer: "A programba jelentkező vállalkozások közül a Xilofon választja ki az együttműködésre legalkalmasabb projekteket. A programban részt vevő partnerek hozzájárulnak ahhoz, hogy az elkészült weboldal referenciaanyagként megjelenjen a Xilofon kommunikációjában.",
    demosBtn: "Példaoldalakhoz ↓",
  },
  en: {
    badge: "June • 5 spots • Reference offer",
    spotsLeft: "Spots remaining: 4/5",
    title: "Website now for",
    highlight: "€94 / year",
    normalPrice: "Regular price: €188 / year",
    offerPrice: "June price: €94 / year",
    subtitle: "In June we're building 5 websites at 50% off. Discounted price in exchange for a reference.",
    bullets: [
      "Custom one-page website",
      "Domain and hosting included",
      "SEO-optimized, Google-friendly",
      "Mobile-friendly and fast",
      "Ready in 6 days",
      "Annual review and update included",
    ],
    formTitle: "Reserve your spot",
    formSubtitle: "Only 4/5 spots left – we'll reply within 1-2 business days.",
    demosTitle: "This is what you'll get",
    demosSubtitle: "Browse our sample websites – this is what reference clients receive.",
    viewDemo: "View →",
    reviewsTitle: "What our clients say",
    servicesTitle: "Other services",
    services: [
      { emoji: "📱", title: "Facebook campaigns", desc: "Targeted ads and campaign management", price: "Quote on request" },
      { emoji: "📍", title: "Google Business Profile", desc: "Local SEO, Google Maps presence", price: "One-time + monthly" },
      { emoji: "🔍", title: "SEO consulting", desc: "Keyword research, technical audit, strategy", price: "Project-based" },
    ],
    reviews: [
      { name: "Sarah M.", role: "Massage therapist", text: "I used to rely only on Facebook. Now new clients come through my website, and I get more bookings every month." },
      { name: "Michael O.", role: "Personal trainer", text: "Two weeks after launch I was already on the first page of Google. What you get for €94 is truly remarkable." },
      { name: "Kate N.", role: "Accountant", text: "I was afraid of digital marketing. The team guided me through everything, and now I have a professional website that actually brings clients." },
    ],
    formDisclaimer: "Xilofon selects the most suitable projects from all applicants. Partners participating in the program agree that the completed website may be used as a reference in Xilofon's communications.",
    demosBtn: "See sample sites ↓",
  },
  hr: {
    badge: "Lipanj • 5 mjesta • Referentna ponuda",
    spotsLeft: "Preostala mjesta: 4/5",
    title: "Web stranica sada za",
    highlight: "94 EUR / god",
    normalPrice: "Redovna cijena: 188 EUR / god",
    offerPrice: "Lipanjska cijena: 94 EUR / god",
    subtitle: "U lipnju izrađujemo 5 web stranica s popustom od 50%. Snižena cijena u zamjenu za referencu.",
    bullets: [
      "Personalizirana one-page web stranica",
      "Domena i hosting uključeni",
      "SEO optimizirana, Google prilagođena",
      "Prilagođena mobitelu i brza",
      "Gotova za 6 dana",
      "Godišnji pregled i nadogradnja uključeni",
    ],
    formTitle: "Rezervirajte svoje mjesto",
    formSubtitle: "Još samo 4/5 mjesta – javit ćemo se u roku 1-2 radna dana.",
    demosTitle: "Ovo ćete dobiti",
    demosSubtitle: "Pogledajte naše uzorke – to dobivaju referentni klijenti.",
    viewDemo: "Pogledajte →",
    reviewsTitle: "Što kažu naši klijenti?",
    servicesTitle: "Ostale usluge",
    services: [
      { emoji: "📱", title: "Facebook kampanje", desc: "Ciljani oglasi i upravljanje kampanjama", price: "Ponuda na upit" },
      { emoji: "📍", title: "Google Business profil", desc: "Lokalni SEO, prisutnost na Google karti", price: "Jednokratno + mjesečno" },
      { emoji: "🔍", title: "SEO savjetovanje", desc: "Istraživanje ključnih riječi, tehnički pregled, strategija", price: "Prema projektu" },
    ],
    reviews: [
      { name: "Ana Kovač", role: "Maserka", text: "Prije sam bila samo na Facebooku. Sada novi klijenti dolaze kroz moju web stranicu i svaki mjesec imam više rezervacija." },
      { name: "Tomislav Jurić", role: "Osobni trener", text: "Dva tjedna nakon objave već sam bio na prvoj stranici Googlea. Za 94 eura ovo je nevjerojatan rezultat." },
      { name: "Maja Novak", role: "Računovođa", text: "Bojala sam se digitalnog marketinga. Tim me proveo kroz sve, a sada imam profesionalnu web stranicu koja stvarno donosi klijente." },
    ],
    formDisclaimer: "Xilofon odabire najprikladnije projekte među svim prijavama. Partneri koji sudjeluju u programu pristaju da dovršena web stranica može biti korištena kao referenca u Xilofonovim komunikacijama.",
    demosBtn: "Primjeri stranica ↓",
  },
  ro: {
    badge: "Iunie • 5 locuri • Ofertă de referință",
    spotsLeft: "Locuri rămase: 4/5",
    title: "Site acum la",
    highlight: "94 EUR / an",
    normalPrice: "Preț normal: 188 EUR / an",
    offerPrice: "Preț iunie: 94 EUR / an",
    subtitle: "În iunie realizăm 5 site-uri cu reducere de 50%. Preț redus în schimbul unei referințe.",
    bullets: [
      "Site one-page personalizat",
      "Domeniu și hosting incluse",
      "Optimizat SEO, prieten cu Google",
      "Rapid și adaptat pentru mobil",
      "Gata în 6 zile",
      "Revizuire și actualizare anuală inclusă",
    ],
    formTitle: "Rezervă-ți locul",
    formSubtitle: "Doar 4/5 locuri rămase – te contactăm în 1-2 zile lucrătoare.",
    demosTitle: "Asta vei primi",
    demosSubtitle: "Răsfoiește exemplele noastre – asta primesc clienții de referință.",
    viewDemo: "Vezi →",
    reviewsTitle: "Ce spun clienții noștri",
    servicesTitle: "Alte servicii",
    services: [
      { emoji: "📱", title: "Campanii Facebook", desc: "Reclame targetate și managementul campaniilor", price: "Ofertă la cerere" },
      { emoji: "📍", title: "Profil Google Business", desc: "SEO local, prezență pe Google Maps", price: "O dată + lunar" },
      { emoji: "🔍", title: "Consultanță SEO", desc: "Cercetare cuvinte cheie, audit tehnic, strategie", price: "Pe proiect" },
    ],
    reviews: [
      { name: "Maria C.", role: "Terapeut de masaj", text: "Înainte mă bazam doar pe Facebook. Acum clienți noi vin prin website-ul meu și primesc mai multe rezervări în fiecare lună." },
      { name: "Andrei B.", role: "Antrenor personal", text: "La două săptămâni după lansare eram deja pe prima pagină Google. Ce obții pentru 94 de euro este cu adevărat remarcabil." },
      { name: "Elena N.", role: "Contabil", text: "Mi-era teamă de marketing digital. Echipa m-a ghidat prin tot și acum am un website profesional care chiar aduce clienți." },
    ],
    formDisclaimer: "Xilofon selectează proiectele cele mai potrivite dintre toate aplicațiile. Partenerii care participă în program sunt de acord ca site-ul realizat să fie utilizat ca material de referință în comunicările Xilofon.",
    demosBtn: "Vezi exemple ↓",
  },
};

export default async function SorolasPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const c = copy[loc];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-white">
      <Navbar />

      {/* Floating CTA */}
      <a
        href="#bottom-form"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/30 transition-colors"
      >
        {c.formTitle} →
      </a>

      {/* Hero + Form */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-400/15 dark:bg-violet-600/20 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/15 blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: value prop */}
            <div>
              {/* Spots counter */}
              <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
                {c.spotsLeft}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
                {c.title}{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {c.highlight}
                </span>
              </h1>

              {/* Price comparison */}
              <div className="flex items-center gap-2 mb-5 overflow-hidden">
                <span className="text-slate-400 dark:text-white/30 line-through text-xs sm:text-sm md:text-base whitespace-nowrap">{c.normalPrice}</span>
                <span className="text-violet-600 dark:text-violet-400 font-bold text-xs sm:text-base md:text-lg whitespace-nowrap">{c.offerPrice}</span>
              </div>

              <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed mb-6">{c.subtitle}</p>

              {loc === "hr" && (
                <div className="mb-8 flex items-start gap-3 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl px-4 py-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">📊</span>
                  <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
                    Prema{" "}
                    <a
                      href="https://podaci.dzs.hr/2024/hr/76941"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 font-semibold hover:text-blue-700 dark:hover:text-blue-100"
                    >
                      Hrvatskom zavodu za statistiku
                    </a>
                    , 4 od 10 tvrtki još nema web stranicu. Ne zaostajite — pretecite svoju konkurenciju!
                  </p>
                </div>
              )}

              {/* Bullets */}
              <ul className="space-y-2.5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700 dark:text-white/70">
                    <Check size={15} className="text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#pelda-oldalak"
                className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-400 dark:hover:text-white font-semibold text-sm transition-colors"
              >
                {c.demosBtn}
              </a>
            </div>

            {/* Right: form */}
            <div>
              <div className="p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{c.formTitle}</h2>
                <p className="text-slate-500 dark:text-white/50 text-sm mb-6">{c.formSubtitle}</p>
                <SorolasForm locale={loc} />
              </div>
              <div className="mt-3 flex gap-3 items-start bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl px-4 py-3">
                <span className="text-lg flex-shrink-0 mt-0.5">ℹ️</span>
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">{c.formDisclaimer}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Demo samples */}
      <section id="pelda-oldalak" className="py-16 px-4 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-2">{c.demosTitle}</h2>
          <p className="text-slate-500 dark:text-white/50 text-center mb-10">{c.demosSubtitle}</p>
          <DemoGrid locale={loc} viewLabel={c.viewDemo} />
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">{c.reviewsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.reviews.map((rev, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 dark:border-white/[0.07] p-6 bg-slate-50 dark:bg-white/[0.03]">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={13} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 dark:text-white/70 text-sm leading-relaxed mb-4 italic">&ldquo;{rev.text}&rdquo;</p>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">{rev.name}</div>
                <div className="text-xs text-slate-400 dark:text-white/40">{rev.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 px-4 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">{c.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.services.map((svc, i) => (
              <div key={i} className="rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] p-6 shadow-sm dark:shadow-none">
                <div className="text-3xl mb-3">{svc.emoji}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{svc.title}</h3>
                <p className="text-slate-500 dark:text-white/50 text-sm mb-3">{svc.desc}</p>
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 px-2.5 py-1 rounded-full">{svc.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repeat form at bottom */}
      <section id="bottom-form" className="py-16 px-4 bg-white dark:bg-zinc-950">
        <div className="max-w-lg mx-auto">
          <div className="p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{c.formTitle}</h2>
            <p className="text-slate-500 dark:text-white/50 text-sm mb-6">{c.formSubtitle}</p>
            <SorolasForm locale={loc} />
          </div>
          <div className="mt-3 flex gap-3 items-start bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl px-4 py-3">
            <span className="text-lg flex-shrink-0 mt-0.5">ℹ️</span>
            <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">{c.formDisclaimer}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
