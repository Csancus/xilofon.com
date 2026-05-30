"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  const links = [
    { href: "/szolgaltatasok" as const, label: t("services") },
    { href: "/rolunk" as const, label: t("about") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Xilofon"
                width={120}
                height={40}
                className="h-8 w-auto dark:brightness-0 dark:invert"
                priority
              />
              <span className="font-bold text-slate-900 dark:text-white text-base hidden sm:inline">Xilofon</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === l.href
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-white/50 hover:text-slate-800 dark:hover:text-white/90"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-slate-500 dark:text-white/50 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link
              href="/landing"
              className="inline-flex items-center px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
            >
              {t("quote")}
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
            aria-label="Menü"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-white/[0.06] bg-white dark:bg-zinc-950 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/[0.06]">
            <div className="flex items-center gap-3">
              <LanguageSwitcher currentLocale={locale} />
              <button
                onClick={toggle}
                className="p-2 rounded-lg text-slate-500 dark:text-white/50 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
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
