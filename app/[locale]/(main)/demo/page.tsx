import { setRequestLocale, getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { demos } from "@/lib/demos";
import type { Locale } from "@/lib/demos";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    hu: "Weboldal minták | Xilofon Digital",
    en: "Website samples | Xilofon Digital",
    hr: "Uzorci web stranica | Xilofon Digital",
    ro: "Exemple site-uri | Xilofon Digital",
  };
  const descs: Record<string, string> = {
    hu: "Nézd meg, hogyan nézhet ki a te weboldalad – 4 valós iparágból.",
    en: "See how your website could look – examples from 4 real industries.",
    hr: "Pogledajte kako vaša web stranica može izgledati – primjeri iz 4 prave industrije.",
    ro: "Vezi cum ar putea arăta site-ul tău – exemple din 4 industrii reale.",
  };
  return { title: titles[locale] ?? titles.hu, description: descs[locale] ?? descs.hu };
}

const headings: Record<string, { title: string; subtitle: string; note: string; cta: string }> = {
  hu: {
    title: "Példaoldalak – próbáld ki!",
    subtitle: "Ezek valódi, működő one-pager weboldalak. Kattints rá bármelyikre és próbáld ki! Minden elem változtatható – szín, szöveg, kép, struktúra – és egyedi kéréseket is szívesen fogadunk.",
    note: "Nem találtad meg a szakmádat? Írj nekünk – egyedi ajánlatot is küldünk!",
    cta: "Egyedi ajánlatkérés",
  },
  en: {
    title: "Sample sites — try them out!",
    subtitle: "These are real, working one-page websites. Click any card to try it out! Everything can be changed — colours, text, images, structure — and we welcome custom requests too.",
    note: "Don't see your industry? Write to us — we'll send a personalised quote!",
    cta: "Request a custom quote",
  },
  hr: {
    title: "Uzorci stranica — isprobajte!",
    subtitle: "Ovo su stvarne, funkcionalne one-page web stranice. Kliknite na bilo koju i isprobajte! Sve se može promijeniti — boje, tekst, slike, struktura — a dočekujemo i posebne zahtjeve.",
    note: "Niste pronašli svoju branšu? Pišite nam — poslat ćemo individualnu ponudu!",
    cta: "Zatražite individualnu ponudu",
  },
  ro: {
    title: "Pagini exemplu — încearcă-le!",
    subtitle: "Acestea sunt site-uri one-page reale, funcționale. Apasă pe oricare și încearcă! Totul poate fi schimbat — culori, text, imagini, structură — și primim cu drag cereri personalizate.",
    note: "Nu ți-ai găsit domeniul? Scrie-ne — îți trimitem o ofertă personalizată!",
    cta: "Solicită ofertă personalizată",
  },
};

const viewLabels: Record<string, string> = {
  hu: "Megnézem →",
  en: "View →",
  hr: "Pogledaj →",
  ro: "Vezi →",
};

export default async function DemoGalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const h = (headings[loc] ?? headings.hu) as typeof headings.hu;
  const viewLabel = viewLabels[loc] ?? viewLabels.hu;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 border-b border-slate-200 dark:border-white/[0.06] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {h.title}
          </h1>
          <p className="text-slate-600 dark:text-white/60 text-lg max-w-2xl mx-auto mb-6">
            {h.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/landing"
              className="inline-flex items-center px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
            >
              {h.cta}
            </Link>
          </div>
          <p className="text-sm text-slate-400 dark:text-white/40 mt-6">{h.note}</p>
        </div>
      </div>

      {/* Demo cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo) => {
            const label = demo.galleryLabel[loc];
            const content = demo.content[loc];
            return (
              <Link
                key={demo.slug}
                href={`/demo/${demo.slug}` as "/demo/[slug]"}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.07] hover:border-violet-300 dark:hover:border-violet-500/40 hover:shadow-lg dark:hover:shadow-violet-500/10 transition-all"
              >
                {/* Color preview strip */}
                <div className={`h-24 ${demo.theme.heroBg} flex items-center justify-center text-4xl`}>
                  {demo.emoji}
                </div>

                {/* Info */}
                <div className="p-5 bg-white dark:bg-white/[0.03]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/30 mb-1">
                    {label.type}
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {label.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-white/50 mb-4 line-clamp-2">
                    {content.tagline}
                  </div>
                  <div className={`text-sm font-semibold ${demo.theme.accentText} group-hover:underline`}>
                    {viewLabel}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
