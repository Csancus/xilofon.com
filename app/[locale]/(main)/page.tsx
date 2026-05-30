import { Globe, Share2, MapPin, TrendingUp, Check, ArrowRight, Star } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "HomePage" });

  const serviceIcons = [Globe, Share2, MapPin, TrendingUp];
  const serviceKeys = ["web", "social", "gbp", "seo"] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        {/* gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              {t("hero.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              {t("hero.title")}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {t("hero.highlight")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/landing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-violet-500/25"
              >
                {t("hero.primaryCta")}
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/szolgaltatasok"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 text-white/70 hover:text-white font-semibold text-lg transition-all"
              >
                {t("hero.secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-zinc-900/50 border-y border-white/[0.06] py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm text-white/50">
            {(["cookie", "gdpr", "domain", "speed", "support"] as const).map((key) => (
              <span key={key} className="flex items-center gap-2">
                <Check size={14} className="text-violet-400 flex-shrink-0" />
                {t(`strip.${key}`)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t("servicesTitle")}
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              {t("servicesSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceKeys.map((key, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={key}
                  className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-violet-500/30 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-violet-500/10 group-hover:bg-violet-500/15 flex items-center justify-center transition-colors">
                      <Icon size={20} className="text-violet-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-base font-semibold text-white">{t(`${key}.title`)}</h3>
                        <span className="text-xs font-medium bg-white/5 border border-white/10 text-white/50 px-2.5 py-1 rounded-full">
                          {t(`${key}.tag`)}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{t(`${key}.desc`)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/szolgaltatasok"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors text-sm"
            >
              {t("servicesMore")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t("pricingTitle")}
            </h2>
            <p className="text-lg text-white/50">{t("pricingSubtitle")}</p>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-violet-500/10 to-transparent border border-violet-500/30 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-violet-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  {t("pricingPopular")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("pricingPackage")}</h3>
              <div className="flex items-end justify-center gap-1 my-6">
                <span className="text-6xl font-bold text-white">140</span>
                <span className="text-2xl font-semibold text-white/50 mb-1.5">EUR</span>
                <span className="text-white/40 mb-1.5">/év</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {(t.raw("features") as string[]).map((f: string) => (
                  <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                    <Check size={15} className="text-violet-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/landing"
                className="block w-full py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25"
              >
                {t("pricingCta")}
              </Link>
              <p className="text-xs text-white/30 mt-4">{t("pricingNote")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t("stepsTitle")}
            </h2>
            <p className="text-lg text-white/50">{t("stepsSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(["1", "2", "3"] as const).map((n) => (
              <div key={n} className="relative">
                <div className="text-7xl font-bold bg-gradient-to-b from-violet-500/20 to-transparent bg-clip-text text-transparent mb-4 leading-none select-none">
                  0{n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{t(`step${n}Title`)}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{t(`step${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t("testimonialsTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(["1", "2", "3"] as const).map((n) => (
              <div
                key={n}
                className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="text-violet-400 fill-violet-400" />
                  ))}
                </div>
                <p className="text-white/60 leading-relaxed mb-6 text-sm">
                  &ldquo;{t(`t${n}Text`)}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-white">{t(`t${n}Name`)}</div>
                  <div className="text-xs text-white/40">{t(`t${n}Role`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kapcsolat" className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t("contactTitle")}
            </h2>
            <p className="text-lg text-white/50">{t("contactSubtitle")}</p>
          </div>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
