import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();

  const copy: Record<string, { title: string; subtitle: string; back: string; home: string }> = {
    hu: { title: "Az oldal nem található", subtitle: "A keresett oldal nem létezik, vagy áthelyezték.", back: "Vissza", home: "Főoldal" },
    en: { title: "Page not found", subtitle: "The page you're looking for doesn't exist or has been moved.", back: "Go back", home: "Home" },
    hr: { title: "Stranica nije pronađena", subtitle: "Stranica koju tražite ne postoji ili je premještena.", back: "Natrag", home: "Početna" },
    ro: { title: "Pagina nu a fost găsită", subtitle: "Pagina pe care o cauți nu există sau a fost mutată.", back: "Înapoi", home: "Acasă" },
  };

  const c = copy[locale] ?? copy.hu;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="text-8xl font-black text-slate-100 dark:text-white/5 select-none mb-6 leading-none">404</div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{c.title}</h1>
      <p className="text-slate-500 dark:text-white/50 mb-8 max-w-sm">{c.subtitle}</p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors text-sm"
        >
          {c.home}
        </Link>
      </div>
    </div>
  );
}
