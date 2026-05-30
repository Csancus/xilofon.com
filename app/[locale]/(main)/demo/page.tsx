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

const headings: Record<string, { title: string; subtitle: string; cta: string }> = {
  hu: {
    title: "Weboldal minták",
    subtitle: "Így nézhet ki a te weboldalad is. Minden minta valódi one-pager, ugyanolyan, amit te is kaphatsz.",
    cta: "Kérj ajánlatot",
  },
  en: {
    title: "Website samples",
    subtitle: "This is what your website could look like. Each sample is a real one-pager, exactly like what you'd get.",
    cta: "Get a quote",
  },
  hr: {
    title: "Uzorci web stranica",
    subtitle: "Ovako može izgledati i vaša web stranica. Svaki uzorak je pravi one-pager, baš kao onaj koji biste dobili.",
    cta: "Zatražite ponudu",
  },
  ro: {
    title: "Exemple site-uri",
    subtitle: "Așa ar putea arăta și site-ul tău. Fiecare exemplu este un one-pager real, exact ca cel pe care l-ai primi.",
    cta: "Solicită ofertă",
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

  const h = headings[loc] ?? headings.hu;
  const viewLabel = viewLabels[loc] ?? viewLabels.hu;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 border-b border-slate-200 dark:border-white/[0.06] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {h.title}
          </h1>
          <p className="text-slate-600 dark:text-white/60 text-lg max-w-2xl mx-auto mb-8">
            {h.subtitle}
          </p>
          <Link
            href="/landing"
            className="inline-flex items-center px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
          >
            {h.cta}
          </Link>
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
