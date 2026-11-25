import type { Locale } from "./demos";

export type Reference = {
  domain: string;
  url: string;
  emoji: string;
  heroBg: string;
  accentText: string;
  cat: Record<Locale, string>;
  desc: Record<Locale, string>;
};

export const references: Reference[] = [
  {
    domain: "zsuzsi-neni-mesei.hu",
    url: "https://www.zsuzsi-neni-mesei.hu/",
    emoji: "🌙",
    heroBg: "bg-gradient-to-br from-indigo-50 via-violet-50 to-amber-50",
    accentText: "text-indigo-600",
    cat: {
      hu: "Esti mesék",
      en: "Bedtime stories",
      hr: "Priče za laku noć",
      ro: "Povești de seară",
    },
    desc: {
      hu: "Zsuzsi néni meséi: minden este három esti mese e-mailben, 500+ mesével és képeskönyvekkel.",
      en: "Bedtime story subscription: three stories by email every evening, 500+ stories and picture books.",
      hr: "Pretplata na priče za laku noć: tri priče e-poštom svake večeri, 500+ priča i slikovnica.",
      ro: "Abonament la povești de seară: trei povești pe e-mail în fiecare seară, peste 500 de povești și cărți ilustrate.",
    },
  },
  {
    domain: "lelkekgyogyasza.hu",
    url: "https://lelkekgyogyasza.hu/",
    emoji: "🌿",
    heroBg: "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50",
    accentText: "text-emerald-600",
    cat: {
      hu: "Kineziológia",
      en: "Kinesiology",
      hr: "Kineziologija",
      ro: "Kineziologie",
    },
    desc: {
      hu: "Kineziológus Budapesten. A „gyermek kineziológia” keresésre az első három találat között.",
      en: "Kinesiologist in Budapest. Ranks in the top three Google results for its main keyword.",
      hr: "Kineziolog u Budimpešti. Među prva tri Google rezultata za svoju glavnu ključnu riječ.",
      ro: "Kineziolog în Budapesta. Între primele trei rezultate Google pentru cuvântul-cheie principal.",
    },
  },
  {
    domain: "budapest-dietetikus.hu",
    url: "https://budapest-dietetikus.hu/",
    emoji: "🥗",
    heroBg: "bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50",
    accentText: "text-cyan-600",
    cat: {
      hu: "Dietetikus",
      en: "Dietitian",
      hr: "Dijetetičar",
      ro: "Dietetician",
    },
    desc: {
      hu: "Rónay Barbara dietetikus oldala, 100+ kerületi aloldallal a helyi keresésekre.",
      en: "Dietitian Barbara Rónay's site, with 100+ district pages built for local searches.",
      hr: "Stranica dijetetičarke Barbare Rónay sa 100+ podstranica za lokalne pretrage.",
      ro: "Site-ul dieteticianei Barbara Rónay, cu peste 100 de subpagini pentru căutări locale.",
    },
  },
  {
    domain: "enzodesign.hu",
    url: "https://www.enzodesign.hu/",
    emoji: "🧵",
    heroBg: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50",
    accentText: "text-orange-600",
    cat: {
      hu: "Kárpitos",
      en: "Upholstery",
      hr: "Tapetar",
      ro: "Tapițer",
    },
    desc: {
      hu: "Kárpitos műhely Zala megyében. Saját bútor-katalógus és online ajánlatkérés.",
      en: "Upholstery workshop with its own furniture catalogue and online quote requests.",
      hr: "Tapetarska radionica s vlastitim katalogom namještaja i online upitima.",
      ro: "Atelier de tapițerie cu catalog propriu de mobilier și cereri de ofertă online.",
    },
  },
  {
    domain: "iii-kerulet-etterem.hu",
    url: "https://iii-kerulet-etterem.hu/",
    emoji: "🍽️",
    heroBg: "bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50",
    accentText: "text-pink-600",
    cat: {
      hu: "Étterem",
      en: "Restaurant",
      hr: "Restoran",
      ro: "Restaurant",
    },
    desc: {
      hu: "Étterem-oldal Óbudán. Az „óbuda éttermek” keresésre az első három találat között.",
      en: "Restaurant site in Budapest, in the top three results for its district keyword.",
      hr: "Stranica restorana u Budimpešti, među prva tri rezultata za ključnu riječ kvarta.",
      ro: "Site de restaurant din Budapesta, în primele trei rezultate pentru cuvântul-cheie local.",
    },
  },
  {
    domain: "cukraszda-obuda.hu",
    url: "https://cukraszda-obuda.hu/",
    emoji: "🎂",
    heroBg: "bg-gradient-to-br from-rose-50 via-red-50 to-orange-50",
    accentText: "text-rose-600",
    cat: {
      hu: "Cukrászda",
      en: "Patisserie",
      hr: "Slastičarnica",
      ro: "Cofetărie",
    },
    desc: {
      hu: "Cukrászda-oldal torta-galériával. A „cukrászda 3. kerület” keresésre az első ötben.",
      en: "Patisserie site with a cake gallery, in the top five for its local keyword.",
      hr: "Stranica slastičarnice s galerijom torti, među prvih pet za lokalnu ključnu riječ.",
      ro: "Site de cofetărie cu galerie de torturi, în primele cinci pentru cuvântul-cheie local.",
    },
  },
  {
    domain: "pizza-obuda.hu",
    url: "https://pizza-obuda.hu/",
    emoji: "🍕",
    heroBg: "bg-gradient-to-br from-yellow-50 via-amber-50 to-lime-50",
    accentText: "text-amber-600",
    cat: {
      hu: "Pizzázó",
      en: "Pizzeria",
      hr: "Pizzeria",
      ro: "Pizzerie",
    },
    desc: {
      hu: "Pizzázó-oldal étlappal és rendelési ponttal, a helyi keresésekre optimalizálva.",
      en: "Pizzeria site with a menu and ordering point, optimised for local searches.",
      hr: "Stranica pizzerije s jelovnikom i narudžbama, optimizirana za lokalne pretrage.",
      ro: "Site de pizzerie cu meniu și comenzi, optimizat pentru căutări locale.",
    },
  },
];
