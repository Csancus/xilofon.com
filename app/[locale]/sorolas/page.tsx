import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { demos } from "@/lib/demos";
import type { Locale } from "@/lib/demos";
import SorolasForm from "@/components/SorolasForm";
import type { Metadata } from "next";
import { Star } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    hu: "Ingyenes weboldal sorsolás | Xilofon Digital",
    en: "Free website giveaway | Xilofon Digital",
    hr: "Nagradna izvlačenje web stranice | Xilofon Digital",
    ro: "Tragere la sorți site gratuit | Xilofon Digital",
  };
  return { title: titles[locale] ?? titles.hu };
}

const copy: Record<Locale, {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  formTitle: string;
  formSubtitle: string;
  demosTitle: string;
  demosSubtitle: string;
  viewDemo: string;
  reviewsTitle: string;
  servicesTitle: string;
  services: { emoji: string; title: string; desc: string; price: string }[];
  reviews: { name: string; role: string; text: string }[];
}> = {
  hu: {
    badge: "10 ingyenes weboldal kerül kisorsásra",
    title: "Nyerj egy",
    highlight: "ingyenes weboldalat",
    subtitle: "Sorsolunk 10 ingyenes, profi weboldalat egyéni vállalkozóknak és kis cégeknek. Regisztrálj most és növeld az esélyeid!",
    formTitle: "Regisztrálj a sorsolásba",
    formSubtitle: "1-2 munkanapon belül visszajelzünk.",
    demosTitle: "Ilyen weboldalt kaphatsz",
    demosSubtitle: "Nézd meg a minta weboldalainkat – ezeket kapják a nyertesek (és aki megveszi).",
    viewDemo: "Megnézem →",
    reviewsTitle: "Mit mondanak az ügyfeleink?",
    servicesTitle: "Egyéb szolgáltatásaink",
    services: [
      { emoji: "📱", title: "Facebook kampányok", desc: "Célzott hirdetések és kampánymenedzsment", price: "Ajánlatkérés" },
      { emoji: "📍", title: "Google Business Profil", desc: "Helyi SEO, Google Térkép jelenlét", price: "Egyszeri + havidíj" },
      { emoji: "🔍", title: "SEO tanácsadás", desc: "Kulcsszókutatás, technikai audit, stratégia", price: "Projekt alapú" },
    ],
    reviews: [
      { name: "Horváth Eszter", role: "Masszőr", text: "Korábban csak Facebookon voltam. Most az oldalamon keresztül jönnek az új ügyfeleim, és minden hónapban több foglalást kapok." },
      { name: "Fekete Dávid", role: "Személyi edző", text: "Két héttel az indítás után már az első oldalon voltam a Google-on a városomban. 140 euróért ez elképesztő eredmény." },
      { name: "Németh Katalin", role: "Könyvelő", text: "Eddig féltem az internet-marketingtől. A csapat végigvezetett mindenen, és most van egy profi weboldalam, ami valóban ügyfeleket hoz." },
    ],
  },
  en: {
    badge: "10 free websites up for giveaway",
    title: "Win a",
    highlight: "free website",
    subtitle: "We're giving away 10 professional websites for freelancers and small businesses. Register now and increase your chances!",
    formTitle: "Register for the giveaway",
    formSubtitle: "We'll get back to you within 1-2 business days.",
    demosTitle: "This is what you could get",
    demosSubtitle: "Browse our sample websites – this is what winners (and buyers) receive.",
    viewDemo: "View →",
    reviewsTitle: "What our clients say",
    servicesTitle: "Other services",
    services: [
      { emoji: "📱", title: "Facebook campaigns", desc: "Targeted ads and campaign management", price: "Quote on request" },
      { emoji: "📍", title: "Google Business Profile", desc: "Local SEO, Google Maps presence", price: "One-time + monthly" },
      { emoji: "🔍", title: "SEO consulting", desc: "Keyword research, technical audit, strategy", price: "Project-based" },
    ],
    reviews: [
      { name: "Sarah M.", role: "Massage therapist", text: "I used to rely only on Facebook. Now new clients come through my website, and I get more bookings every month." },
      { name: "Michael O.", role: "Personal trainer", text: "Two weeks after launch I was already on the first page of Google. What you get for €140 is truly remarkable." },
      { name: "Kate N.", role: "Accountant", text: "I was afraid of digital marketing. The team guided me through everything, and now I have a professional website that actually brings clients." },
    ],
  },
  hr: {
    badge: "10 besplatnih web stranica na izvlačenju",
    title: "Osvoji",
    highlight: "besplatnu web stranicu",
    subtitle: "Izvlačimo 10 besplatnih, profesionalnih web stranica za poduzetnike i male tvrtke. Prijavite se sada i povećajte svoje šanse!",
    formTitle: "Prijava za izvlačenje",
    formSubtitle: "Javit ćemo se u roku 1-2 radna dana.",
    demosTitle: "Ovako može izgledati vaša web stranica",
    demosSubtitle: "Pogledajte naše uzorke – to dobivaju pobjednici (i kupci).",
    viewDemo: "Pogledaj →",
    reviewsTitle: "Što kažu naši klijenti?",
    servicesTitle: "Ostale usluge",
    services: [
      { emoji: "📱", title: "Facebook kampanje", desc: "Ciljani oglasi i upravljanje kampanjama", price: "Ponuda na upit" },
      { emoji: "📍", title: "Google Business profil", desc: "Lokalni SEO, prisutnost na Google karti", price: "Jednokratno + mjesečno" },
      { emoji: "🔍", title: "SEO savjetovanje", desc: "Istraživanje ključnih riječi, tehnički pregled, strategija", price: "Prema projektu" },
    ],
    reviews: [
      { name: "Ana Kovač", role: "Maserka", text: "Prije sam bila samo na Facebooku. Sada novi klijenti dolaze kroz moju web stranicu i svaki mjesec imam više rezervacija." },
      { name: "Tomislav Jurić", role: "Osobni trener", text: "Dva tjedna nakon objave već sam bio na prvoj stranici Googlea. Za 140 eura ovo je nevjerojatan rezultat." },
      { name: "Maja Novak", role: "Računovođa", text: "Bojala sam se digitalnog marketinga. Tim me proveo kroz sve, a sada imam profesionalnu web stranicu koja stvarno donosi klijente." },
    ],
  },
  ro: {
    badge: "10 site-uri gratuite la tragere la sorți",
    title: "Câștigă un",
    highlight: "site gratuit",
    subtitle: "Tragem la sorți 10 site-uri profesionale pentru liber-profesioniști și afaceri mici. Înscrie-te acum și crește-ți șansele!",
    formTitle: "Înscrie-te la tragerea la sorți",
    formSubtitle: "Te vom contacta în 1-2 zile lucrătoare.",
    demosTitle: "Asta ai putea primi",
    demosSubtitle: "Răsfoiește exemplele noastre de site-uri – asta primesc câștigătorii (și cumpărătorii).",
    viewDemo: "Vezi →",
    reviewsTitle: "Ce spun clienții noștri",
    servicesTitle: "Alte servicii",
    services: [
      { emoji: "📱", title: "Campanii Facebook", desc: "Reclame targetate și managementul campaniilor", price: "Ofertă la cerere" },
      { emoji: "📍", title: "Profil Google Business", desc: "SEO local, prezență pe Google Maps", price: "Taxă unică + lunar" },
      { emoji: "🔍", title: "Consultanță SEO", desc: "Cercetare cuvinte cheie, audit tehnic, strategie", price: "Pe proiect" },
    ],
    reviews: [
      { name: "Maria C.", role: "Terapeut de masaj", text: "Înainte mă bazam doar pe Facebook. Acum clienți noi vin prin website-ul meu și primesc mai multe rezervări în fiecare lună." },
      { name: "Andrei B.", role: "Antrenor personal", text: "La două săptămâni după lansare eram deja pe prima pagină Google. Ce obții pentru 140 de euro este cu adevărat remarcabil." },
      { name: "Elena N.", role: "Contabil", text: "Mi-era teamă de marketing digital. Echipa m-a ghidat prin tot și acum am un website profesional care chiar aduce clienți." },
    ],
  },
};

export default async function SorolasPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const c = copy[loc];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Logo bar */}
      <div className="border-b border-slate-200 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Xilofon Digital"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Hero + Form */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-400/15 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-indigo-400/10 blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {c.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
                {c.title}{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  {c.highlight}
                </span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">{c.subtitle}</p>
            </div>

            {/* Right: form */}
            <div>
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-1">{c.formTitle}</h2>
                <p className="text-slate-500 text-sm mb-6">{c.formSubtitle}</p>
                <SorolasForm locale={loc} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo samples */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">{c.demosTitle}</h2>
          <p className="text-slate-500 text-center mb-10">{c.demosSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {demos.map((demo) => {
              const label = demo.galleryLabel[loc];
              const demoContent = demo.content[loc];
              return (
                <Link
                  key={demo.slug}
                  href={`/demo/${demo.slug}` as "/demo/[slug]"}
                  className="group block rounded-2xl overflow-hidden border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all bg-white"
                >
                  <div className={`h-20 ${demo.theme.heroBg} flex items-center justify-center text-3xl`}>
                    {demo.emoji}
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{label.type}</div>
                    <div className="font-bold text-slate-900 mb-1">{label.name}</div>
                    <div className={`text-xs font-semibold ${demo.theme.accentText} group-hover:underline`}>{c.viewDemo}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">{c.reviewsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.reviews.map((rev, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={13} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">&ldquo;{rev.text}&rdquo;</p>
                <div className="font-semibold text-slate-900 text-sm">{rev.name}</div>
                <div className="text-xs text-slate-400">{rev.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 px-4 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">{c.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.services.map((svc, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-3xl mb-3">{svc.emoji}</div>
                <h3 className="font-bold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-slate-500 text-sm mb-3">{svc.desc}</p>
                <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">{svc.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <div className="border-t border-slate-200 py-6 px-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Xilofon Digital
      </div>
    </div>
  );
}
