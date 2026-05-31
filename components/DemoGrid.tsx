"use client";

import { Link } from "@/i18n/navigation";
import { track } from "@/lib/track";
import { demos } from "@/lib/demos";
import type { Locale } from "@/lib/demos";

type Props = { locale: Locale; viewLabel: string };

export default function DemoGrid({ locale, viewLabel }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {demos.map((demo) => {
        const label = demo.galleryLabel[locale];
        return (
          <Link
            key={demo.slug}
            href={`/demo/${demo.slug}` as "/demo/[slug]"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("nav_click", `demo:${demo.slug}`, locale)}
            className="group block rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.07] hover:border-violet-300 dark:hover:border-violet-500/50 hover:shadow-md transition-all bg-white dark:bg-white/[0.03]"
          >
            <div className={`h-20 ${demo.theme.heroBg} flex items-center justify-center text-3xl`}>
              {demo.emoji}
            </div>
            <div className="p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/40 mb-0.5">
                {label.type}
              </div>
              <div className="font-bold text-slate-900 dark:text-white mb-1">{label.name}</div>
              <div className={`text-xs font-semibold ${demo.theme.accentText} group-hover:underline`}>
                {viewLabel}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
