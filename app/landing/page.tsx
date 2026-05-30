import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Globe, Share2, MapPin, TrendingUp } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Weboldal ajánlatkérés | Xilofon Digital",
  description: "Kérj ingyenes ajánlatot! Modern weboldal egyéni vállalkozóknak és kis cégeknek. Fix 140 EUR/év ár – domain, hosting, szerkesztés mind benne.",
  robots: "noindex",
};

const benefits = [
  "Profi weboldal 1-2 héten belül",
  "Domain és hosting benne van",
  "Te szerkeszted – bármikor, bárhol",
  "Megtalálnak a Google-on",
  "Kapcsolatfelvételi form az ügyfeleknek",
  "Fix ár – 140 EUR / év, nincs meglepetés",
  "GDPR-megfelelő, cookie-mentes",
  "Magyar nyelvű support",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Xilofon" width={110} height={36} className="h-8 w-auto" priority />
          </Link>
          <a href="tel:+36301234567" className="text-sm text-slate-500 hover:text-slate-700">
            Van kérdésed? Hívj minket
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Szabad időpontok vannak
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Legyen profi weboldalad,{" "}
              <span className="text-violet-600">amit te szerkesztesz</span>
              <br />
              <span className="text-2xl md:text-3xl text-slate-500 font-normal">– 140 EUR/év</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Egyéni vállalkozók és kis cégek számára készítünk Google-barát weboldalakat.
              Egy ajánlatkérés, és 1-2 héten belül él az oldalad.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-violet-600" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-500">elégedett ügyfél</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">1-2 hét</div>
                <div className="text-sm text-slate-500">átfutási idő</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">140 €</div>
                <div className="text-sm text-slate-500">fix éves díj</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Ingyenes ajánlatkérés</h2>
              <p className="text-sm text-slate-500">1-2 munkanapon belül visszajelzünk.</p>
            </div>
            <ContactForm />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Globe, label: "Weboldal készítés" },
            { icon: Share2, label: "Social Media" },
            { icon: MapPin, label: "Google Business" },
            { icon: TrendingUp, label: "SEO tanácsadás" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <s.icon size={22} className="text-violet-600" />
              <span className="text-sm font-medium text-slate-700">{s.label}</span>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-100 py-6 px-4 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Xilofon Digital</span>
          <div className="flex items-center gap-4">
            <Link href="/aszf" className="hover:text-slate-600">ÁSZF</Link>
            <Link href="/adatkezeles" className="hover:text-slate-600">Adatkezelés</Link>
            <Link href="/" className="hover:text-slate-600">Főoldal</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
