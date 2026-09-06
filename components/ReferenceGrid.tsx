"use client";

import { ArrowUpRight } from "lucide-react";
import { track } from "@/lib/track";
import { references } from "@/lib/references";
import type { Locale } from "@/lib/demos";

type Props = { locale: Locale; viewLabel: string };

export default function ReferenceGrid({ locale, viewLabel }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {references.map((ref) => (
        <a
          key={ref.domain}
          href={ref.url}
          target="_blank"
          rel="noopener"
          onClick={() => track("nav_click", `reference:${ref.domain}`, locale)}
          className="group block rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.07] hover:border-violet-300 dark:hover:border-violet-500/50 hover:shadow-md transition-all bg-white dark:bg-white/[0.03]"
        >
          <div className={`h-20 ${ref.heroBg} flex items-center justify-center text-3xl`}>
            {ref.emoji}
          </div>
          <div className="p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/40 mb-0.5">
              {ref.cat[locale]}
            </div>
            <div className="font-bold text-slate-900 dark:text-white mb-2 break-all">{ref.domain}</div>
            <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed mb-3">
              {ref.desc[locale]}
            </p>
            <span
              className={`inline-flex items-center gap-1 text-xs font-semibold ${ref.accentText} group-hover:underline`}
            >
              {viewLabel}
              <ArrowUpRight size={13} />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
