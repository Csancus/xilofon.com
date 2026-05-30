"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();

  const links = [
    { href: "/szolgaltatasok" as const, label: t("services") },
    { href: "/rolunk" as const, label: t("about") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Xilofon"
              width={120}
              height={40}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-white"
                    : "text-white/50 hover:text-white/90"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href="/landing"
              className="inline-flex items-center px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
            >
              {t("quote")}
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5"
            aria-label="Menü"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-zinc-950 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white/70 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href="/landing"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
            >
              {t("quote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
