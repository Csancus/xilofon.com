"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  hu: "HU",
  en: "EN",
  hr: "HR",
  ro: "RO",
};

interface Props {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  function switchLocale(locale: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
            locale === currentLocale
              ? "text-white bg-white/10"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  );
}
