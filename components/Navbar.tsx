"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/rolunk", label: "Rólunk" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-slate-900">
              xilofon<span className="text-amber-500">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/landing"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold transition-colors"
            >
              Ajánlatkérés
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Menü"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/landing"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold transition-colors"
          >
            Ajánlatkérés
          </Link>
        </div>
      )}
    </header>
  );
}
