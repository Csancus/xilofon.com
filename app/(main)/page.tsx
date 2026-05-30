import Link from "next/link";
import { Globe, Share2, MapPin, TrendingUp, Check, ArrowRight, Star } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    icon: Globe,
    title: "Weboldal készítés",
    desc: "Professzionális one-pager weboldal, amelyet te szerkesztesz. SEO-optimalizált, gyors, és kapcsolatfelvételi formmal.",
    tag: "140 EUR / év",
  },
  {
    icon: Share2,
    title: "Facebook & Social Media",
    desc: "Stratégiai tartalomkezelés, hirdetések és közösségi média jelenléted felépítése – több ügyfél, erősebb márka.",
    tag: "Ajánlatkérés",
  },
  {
    icon: MapPin,
    title: "Google Business Profil",
    desc: "Helyi keresőoptimalizálás: legyen ott a vállalkozásod a Google Térképen, és fogadjon online véleményeket.",
    tag: "Ajánlatkérés",
  },
  {
    icon: TrendingUp,
    title: "SEO tanácsadás",
    desc: "Átfogó kulcsszókutatás, technikai audit és tartalom-stratégia – hogy magasabban szerepelj a Google találatai közt.",
    tag: "Ajánlatkérés",
  },
];

const steps = [
  {
    n: "01",
    title: "Kapcsolatfelvétel",
    desc: "Küldj egy rövid üzenetet – mondd el, mivel foglalkozol, és mit szeretnél elérni.",
  },
  {
    n: "02",
    title: "Weboldal elkészítése",
    desc: "Mi elkészítjük a weboldalad: szöveg, design, domain, hosting – minden benne van.",
  },
  {
    n: "03",
    title: "Te szerkesztesz, ügyfelek jönnek",
    desc: "Megkapod a hozzáférést, szerkesztheted a tartalmat, és a Google megtalálja az oldalad.",
  },
];

const testimonials = [
  {
    name: "Horváth Eszter",
    role: "Masszőr",
    text: "Korábban csak Facebookon voltam. Most az oldalamon keresztül jönnek az új ügyfeleim, és minden hónapban több foglalást kapok.",
  },
  {
    name: "Balogh Péter",
    role: "Villanyszerelő",
    text: "Elképesztő, hogy 140 euróért ennyit kapok. A Google-on az első oldalon vagyok a városomban.",
  },
  {
    name: "Németh Katalin",
    role: "Könyvelő",
    text: "Eddig féltem az internet-marketingtől. A csapat végigvezetett mindenen, és most van profi weboldalam.",
  },
];

const features = [
  "Domain és hosting benne van",
  "Te szerkesztesz – bármikor",
  "Kapcsolatfelvételi form",
  "Google-barát (SEO alapok)",
  "Mobilon is gyors és szép",
  "GDPR-megfelelő",
  "Magyar nyelvű support",
  "Fix ár, nincsenek meglepetések",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Fix ár • 140 EUR / év • Nincs meglepetés
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Profi weboldal,{" "}
              <span className="text-violet-400">amit te szerkesztesz</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Egyéni vállalkozóknak és kis cégeknek készítünk Google-barát weboldalakat.
              Fix éves díjért – domain, hosting, szerkesztés és support mind benne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/landing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-lg transition-colors"
              >
                Ingyenes ajánlatkérés
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/szolgaltatasok"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 font-semibold text-lg transition-colors"
              >
                Szolgáltatások
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-violet-50 border-y border-violet-100 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-violet-600" /> Cookie-mentes oldal
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-violet-600" /> GDPR-megfelelő
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-violet-600" /> Domain + hosting benne
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-violet-600" /> 1-2 héten belül él az oldal
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-violet-600" /> Magyar nyelvű support
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Amiben segíthetünk
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Minden, amire egy kis vállalkozásnak szüksége van az online jelenléthez.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="relative p-8 rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center transition-colors">
                    <s.icon size={22} className="text-violet-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                      <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/szolgaltatasok"
              className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
            >
              Részletes szolgáltatásleírás
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Átlátható árazás
            </h2>
            <p className="text-lg text-slate-500">Egy csomag, egy ár. Nincsenek rejtett költségek.</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl border-2 border-violet-500 shadow-xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-violet-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  Legnépszerűbb
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Weboldal csomag</h3>
              <div className="flex items-end justify-center gap-1 my-6">
                <span className="text-5xl font-bold text-slate-900">140</span>
                <span className="text-2xl font-semibold text-slate-500 mb-1">EUR</span>
                <span className="text-slate-400 mb-1">/év</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-700">
                    <Check size={16} className="text-violet-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/landing"
                className="block w-full py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
              >
                Ajánlatkérés
              </Link>
              <p className="text-sm text-slate-400 mt-4">Éves díj, megújítható. Nincs kötöttség.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hogyan működik?
            </h2>
            <p className="text-lg text-slate-500">Három egyszerű lépés, és él az oldalad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="text-6xl font-bold text-violet-100 mb-4 leading-none">{s.n}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mit mondanak az ügyfeleink?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-violet-400 fill-violet-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="kapcsolat" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Írj nekünk!
            </h2>
            <p className="text-lg text-slate-500">
              Mondd el, mivel foglalkozol – 1-2 munkanapon belül visszakeresünk.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
