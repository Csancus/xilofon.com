import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function NotFound() {
  const locale = await getLocale();

  const copy: Record<string, { title: string; subtitle: string; home: string }> = {
    hu: { title: "Az oldal nem található", subtitle: "A keresett oldal nem létezik, vagy áthelyezték.", home: "Főoldal" },
    en: { title: "Page not found", subtitle: "The page you're looking for doesn't exist or has been moved.", home: "Home" },
    hr: { title: "Stranica nije pronađena", subtitle: "Stranica koju tražite ne postoji ili je premještena.", home: "Početna" },
    ro: { title: "Pagina nu a fost găsită", subtitle: "Pagina pe care o cauți nu există sau a fost mutată.", home: "Acasă" },
  };

  const c = copy[locale] ?? copy.hu;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="text-8xl font-black text-slate-100 dark:text-white/5 select-none mb-6 leading-none">404</div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{c.title}</h1>
        <p className="text-slate-500 dark:text-white/50 mb-8 max-w-sm">{c.subtitle}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors text-sm"
        >
          {c.home}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
