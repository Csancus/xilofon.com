import { Globe, Share2, MapPin, TrendingUp, ArrowRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ServicesPage" });

  const serviceKeys = ["web", "social", "gbp", "seo"] as const;
  const icons = [Globe, Share2, MapPin, TrendingUp];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-violet-400/15 dark:bg-violet-600/15 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-slate-900 dark:text-white">
              {t("heroTitle")}{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {t("heroHighlight")}
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {serviceKeys.map((key, i) => {
            const Icon = icons[i];
            const includes = t.raw(`${key}.includes`) as string[];
            return (
              <div
                key={key}
                className="p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-violet-300 dark:hover:border-violet-500/20 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t(`${key}.title`)}</h2>
                        <span className="text-xs text-violet-600 dark:text-violet-400 font-medium">{t(`${key}.price`)}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 dark:text-white/40 text-sm italic mb-4">{t(`${key}.tagline`)}</p>
                    <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed">{t(`${key}.desc`)}</p>
                    <Link
                      href="/landing"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25"
                    >
                      {t("quoteBtn")}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 dark:text-white/30 uppercase tracking-widest mb-4">
                      {t("includes")}
                    </h3>
                    <ul className="space-y-2.5">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/60">
                          <Check size={15} className="text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-900/40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-violet-400/15 dark:bg-violet-600/15 blur-[100px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t("ctaTitle")}
          </h2>
          <p className="text-slate-500 dark:text-white/50 mb-8 max-w-lg mx-auto">{t("ctaSubtitle")}</p>
          <Link
            href="/landing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            {t("ctaBtn")}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
