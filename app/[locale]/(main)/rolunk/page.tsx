import { Heart, Target, Lightbulb, ArrowRight } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "AboutPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  const valueIcons = [Target, Heart, Lightbulb];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-400/15 dark:bg-violet-600/15 blur-[120px]" />
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

      {/* Story */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t("storyTitle")}</h2>
              <div className="space-y-4 text-slate-600 dark:text-white/60 leading-relaxed text-sm">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] shadow-sm dark:shadow-none">
              <div className="text-center space-y-6">
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent mb-1">
                    188 €
                  </div>
                  <div className="text-slate-700 dark:text-white/70 font-medium text-sm">{t("priceLabel")}</div>
                  <div className="text-slate-400 dark:text-white/40 text-xs mt-0.5">{t("priceSub")}</div>
                </div>
                <div className="h-px bg-slate-200 dark:bg-white/[0.07]" />
                <div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">{t("clientsNum")}</div>
                  <div className="text-slate-500 dark:text-white/50 text-sm">{t("clientsLabel")}</div>
                </div>
                <div className="h-px bg-slate-200 dark:bg-white/[0.07]" />
                <div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">{t("timeNum")}</div>
                  <div className="text-slate-500 dark:text-white/50 text-sm">{t("timeLabel")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {t("valuesTitle")}
            </h2>
            <p className="text-slate-500 dark:text-white/50">{t("valuesSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(["1", "2", "3"] as const).map((n, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={n}
                  className="p-7 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-violet-300 dark:hover:border-violet-500/20 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-3">{t(`val${n}Title`)}</h3>
                  <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">{t(`val${n}Desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-900/40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-violet-400/15 dark:bg-violet-600/15 blur-[100px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
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
