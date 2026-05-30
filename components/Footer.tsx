import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { demos } from "@/lib/demos";
import type { Locale } from "@/lib/demos";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const locale = (await getLocale()) as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-zinc-950 border-t border-white/[0.06] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-dark.png" alt="Xilofon" className="h-7 w-auto opacity-80" />
            </Link>
            <p className="text-sm leading-relaxed">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
              {t("navTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
              <li><Link href="/szolgaltatasok" className="hover:text-white transition-colors">{t("services")}</Link></li>
              <li><Link href="/rolunk" className="hover:text-white transition-colors">{t("about")}</Link></li>
              <li><Link href="/landing" className="hover:text-white transition-colors">{t("quote")}</Link></li>
              <li><Link href="/sorolas" className="hover:text-white transition-colors">{t("sorolas")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
              {t("demosTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/demo" className="hover:text-white transition-colors">{t("demosAll")}</Link></li>
              {demos.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/demo/${d.slug}` as "/demo/[slug]"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {d.emoji} {d.galleryLabel[locale].type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
              {t("legalTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/aszf" className="hover:text-white transition-colors">{t("aszf")}</Link></li>
              <li><Link href="/adatkezeles" className="hover:text-white transition-colors">{t("privacy")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-xs text-center text-white/30">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}
