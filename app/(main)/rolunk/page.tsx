import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Target, Lightbulb, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Rólunk",
  description:
    "Megismerjük a vállalkozásodat és személyre szabott online megoldásokat kínálunk. Kis csapatunk szenvedéllyel segíti az egyéni vállalkozókat és kis cégeket.",
};

const values = [
  {
    icon: Target,
    title: "Eredményorientált",
    desc: "Nem az a célunk, hogy szép oldalt csináljunk – hanem az, hogy a te oldalad valóban ügyfeleket hozzon.",
  },
  {
    icon: Heart,
    title: "Emberközpontú",
    desc: "Értjük, hogy nem mindenki ért a digitális marketinghez. Ezért minden lépésnél kézzel fogunk és elmagyarázunk mindent.",
  },
  {
    icon: Lightbulb,
    title: "Egyszerűség",
    desc: "Fix ár, egyszerű folyamat, átlátható kommunikáció. Nincsenek felesleges bonyodalmak.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              A Xilofon csapata{" "}
              <span className="text-amber-400">a kis vállalkozások oldalán áll</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Tudjuk, milyen nehéz online jelenlétet felépíteni akkor, amikor az ember egyedül viszi a vállalkozást. Mi abban segítünk, hogy ez könnyű legyen.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Miért csináljuk ezt?</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Sok egyéni vállalkozóval és kis céggel beszélgettünk, akiknek volt egy jó szolgáltatásuk, de nem tudtak ügyfeleket szerezni online. Volt, aki kipróbált egy drága ügynökséget, és semmit sem kapott a pénzéért. Volt, aki maga próbálta csinálni, de feladta.
                </p>
                <p>
                  A Xilofon arra jött létre, hogy ezt az állapotot megváltoztassa. Olyan weboldalakat készítünk, amelyek <strong className="text-slate-900">valóban működnek</strong> – amelyek megjelennek a Google-on, amelyek bizalmat sugároznak, és amelyek ügyfeleket hoznak.
                </p>
                <p>
                  Mindezt fix, átlátható áron – mert hisszük, hogy egy jó weboldal nem luxus, hanem alapszükséglet minden vállalkozás számára.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-500 mb-2">140 €</div>
                <div className="text-slate-700 font-medium mb-1">éves díj</div>
                <div className="text-slate-500 text-sm">Domain + hosting + szerkesztés + support</div>
                <div className="border-t border-amber-200 my-6" />
                <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-slate-600 text-sm">vállalkozás, akinek segítettünk</div>
                <div className="border-t border-amber-200 my-6" />
                <div className="text-4xl font-bold text-slate-900 mb-2">1-2 hét</div>
                <div className="text-slate-600 text-sm">átlagos átfutási idő</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Az értékeink</h2>
            <p className="text-lg text-slate-500">Ezek vezérelnek minket minden ügyfélnél.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Dolgozzunk együtt!
          </h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Mondd el, mivel foglalkozol – és megnézzük, hogyan tudunk segíteni.
          </p>
          <Link
            href="/landing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold text-lg transition-colors"
          >
            Ingyenes ajánlatkérés
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
