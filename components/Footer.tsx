import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-zinc-950 border-t border-white/[0.06] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Xilofon"
                width={110}
                height={36}
                className="h-7 w-auto brightness-0 invert opacity-70"
              />
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
