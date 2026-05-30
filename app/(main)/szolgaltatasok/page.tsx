import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Share2, MapPin, TrendingUp, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Szolgáltatások",
  description:
    "Weboldal készítés 140 EUR/év áron, Facebook és social media kezelés, Google Business profil építés és SEO tanácsadás kis- és egyéni vállalkozásoknak.",
};

const services = [
  {
    icon: Globe,
    id: "weboldal",
    title: "Weboldal készítés",
    price: "140 EUR / év",
    tagline: "Minden benne van. Nincs meglepetés.",
    desc: "Professzionális, Google-barát one-pager weboldalt készítünk, amelyet te magad szerkeszthetsz. Célunk, hogy az oldalad ne csak szép legyen, hanem ügyfeleket is hozzon – keresőoptimalizálással, gyors betöltéssel és egyszerű kapcsolatfelvételi formmal.",
    includes: [
      "Személyre szabott one-pager design",
      "Domain regisztráció és hosting",
      "Te szerkeszted – bármikor, bárhol",
      "Kapcsolatfelvételi form az oldaladon",
      "SEO alapok (meta, alt tagek, sebesség)",
      "Mobilbarát, reszponzív megjelenés",
      "SSL tanúsítvány (https)",
      "GDPR-megfelelő, cookie-mentes",
      "Magyar nyelvű support",
    ],
  },
  {
    icon: Share2,
    id: "social-media",
    title: "Facebook & Social Media kezelés",
    price: "Ajánlatkérés alapján",
    tagline: "Rendszeres jelenlét a közösségi médiában.",
    desc: "Egy erős közösségi média jelenlét bizalmat épít és folyamatosan emlékezteti a leendő ügyfeleket a vállalkozásodra. Kezeljük a Facebook-oldaladat, tartalmat készítünk, hirdetéseket indítunk és figyelemmel kísérjük az eredményeket.",
    includes: [
      "Facebook oldal kezelése és posztolás",
      "Tartalomtervezés és szövegírás",
      "Facebook hirdetések futtatása",
      "Instagram jelenlét (opcionális)",
      "Havi riport és eredménykimutatás",
    ],
  },
  {
    icon: MapPin,
    id: "google-business",
    title: "Google Business Profil építés",
    price: "Egyszeri díj + havi karbantartás",
    tagline: "Legyen ott a vállalkozásod a Google Térképen.",
    desc: "Helyi keresőkben az első helyen jelenni meg rengeteg minőségi ügyfelet hozhat. Beállítjuk és optimalizáljuk a Google Business profilodat: fotók, leírás, szolgáltatások, nyitvatartás – minden, ami számít.",
    includes: [
      "Google Business profil létrehozása / optimalizálása",
      "Fotók és leírás feltöltése",
      "Kulcsszavak és kategóriák beállítása",
      "Vélemény-kezelés stratégia",
      "Havi karbantartás és frissítés",
    ],
  },
  {
    icon: TrendingUp,
    id: "seo",
    title: "SEO tanácsadás",
    price: "Projekt alapú árazás",
    tagline: "Kerülj előre a Google találatai között.",
    desc: "A keresőoptimalizálás hosszú távú befektetés: egyszer jól csinálni meg, és utána folyamatosan hoz eredményt. Elvégezzük a kulcsszókutatást, technikai auditot, és konkrét cselekvési tervet adunk, amit te – vagy mi – végre is hajtunk.",
    includes: [
      "Kulcsszókutatás és versenyelemzés",
      "Technikai SEO audit",
      "On-page optimalizálás",
      "Tartalom-stratégia",
      "Linképítési tanácsadás",
      "Havi teljesítmény-riport",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Minden, amire szükséged van az{" "}
              <span className="text-violet-400">online jelenléthez</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Szolgáltatásainkat kis vállalkozások és egyéni vállalkozók számára alakítottuk ki – érthetően, átlátható áron.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mb-5">
                  <s.icon size={26} className="text-violet-600" />
                </div>
                <div className="inline-block bg-slate-100 text-slate-600 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {s.price}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{s.title}</h2>
                <p className="text-violet-600 font-medium mb-4">{s.tagline}</p>
                <p className="text-slate-600 leading-relaxed mb-8">{s.desc}</p>
                <Link
                  href="/landing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
                >
                  Ajánlatkérés
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className={`bg-slate-50 rounded-2xl p-7 border border-slate-100 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-semibold text-slate-900 mb-4">Mi van benne?</h3>
                <ul className="space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <Check size={16} className="text-violet-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-violet-50 border-t border-violet-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Nem tudod, melyik kell? Írj nekünk!
          </h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Rövid kérdés alapján is el tudjuk mondani, mi az, ami neked tényleg segít.
          </p>
          <Link
            href="/landing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-lg transition-colors"
          >
            Ingyenes ajánlatkérés
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
