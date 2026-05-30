import { Check, Phone } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LandingPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "LandingPage" });

  const benefits = t.raw("benefits") as string[];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-white">
      <Navbar />

      {/* Main content */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-400/15 dark:bg-violet-600/20 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/15 blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: value prop */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
                {t("available")}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-3 text-slate-900 dark:text-white">
                {t("title")}{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {t("highlight")}
                </span>
              </h1>
              <p className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-5">{t("price")}</p>
              <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-8">{t("subtitle")}</p>

              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700 dark:text-white/70">
                    <Check size={16} className="text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {(["clients", "time", "price"] as const).map((key) => (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] text-center"
                  >
                    <div className="text-xl font-bold text-slate-900 dark:text-white">{t(`${key}Num`)}</div>
                    <div className="text-xs text-slate-400 dark:text-white/40 mt-0.5">{t(`${key}Label`)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-8">
              <div className="p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t("formTitle")}</h2>
                <p className="text-slate-500 dark:text-white/50 text-sm mb-6">{t("formSubtitle")}</p>
                <ContactForm />
              </div>

              <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 dark:text-white/40 text-sm">
                <Phone size={14} />
                {t("callText")}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
