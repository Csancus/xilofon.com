export type Locale = "hu" | "en" | "hr" | "ro";

export type DemoService = {
  icon: string;
  title: string;
  desc: string;
  price: string;
};

export type DemoReview = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export type DemoContent = {
  businessName: string;
  ownerName: string;
  profession: string;
  tagline: string;
  heroSubtitle: string;
  ctaText: string;
  phone: string;
  email: string;
  address: string;
  hours: string[];
  services: DemoService[];
  reviews: DemoReview[];
  aboutTitle: string;
  aboutText: string;
  navServices: string;
  navAbout: string;
  navContact: string;
  bannerText: string;
  bannerCta: string;
};

export type DemoTheme = {
  heroBg: string;
  heroText: string;
  accentText: string;
  accentBg: string;
  accentHover: string;
  accentLight: string;
  accentBorder: string;
  iconBg: string;
  iconText: string;
  footerBg: string;
  contactBg: string;
};

export type Demo = {
  slug: string;
  emoji: string;
  galleryLabel: Record<Locale, { type: string; name: string }>;
  theme: DemoTheme;
  content: Record<Locale, DemoContent>;
};

export const themes: Record<string, DemoTheme> = {
  rose: {
    heroBg: "bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50",
    heroText: "text-rose-900",
    accentText: "text-rose-600",
    accentBg: "bg-rose-600",
    accentHover: "hover:bg-rose-500",
    accentLight: "bg-rose-50",
    accentBorder: "border-rose-200",
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    footerBg: "bg-rose-950",
    contactBg: "bg-rose-900",
  },
  amber: {
    heroBg: "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50",
    heroText: "text-amber-900",
    accentText: "text-amber-600",
    accentBg: "bg-amber-600",
    accentHover: "hover:bg-amber-500",
    accentLight: "bg-amber-50",
    accentBorder: "border-amber-200",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    footerBg: "bg-amber-950",
    contactBg: "bg-amber-900",
  },
  teal: {
    heroBg: "bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50",
    heroText: "text-teal-900",
    accentText: "text-teal-600",
    accentBg: "bg-teal-600",
    accentHover: "hover:bg-teal-500",
    accentLight: "bg-teal-50",
    accentBorder: "border-teal-200",
    iconBg: "bg-teal-100",
    iconText: "text-teal-600",
    footerBg: "bg-teal-950",
    contactBg: "bg-teal-900",
  },
  blue: {
    heroBg: "bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50",
    heroText: "text-blue-900",
    accentText: "text-blue-600",
    accentBg: "bg-blue-600",
    accentHover: "hover:bg-blue-500",
    accentLight: "bg-blue-50",
    accentBorder: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    footerBg: "bg-blue-950",
    contactBg: "bg-blue-900",
  },
};

export const demos: Demo[] = [
  {
    slug: "cukraszda",
    emoji: "🎂",
    galleryLabel: {
      hu: { type: "Cukrászda", name: "Édes Percek" },
      en: { type: "Pastry shop", name: "Sweet Moments" },
      hr: { type: "Slastičarna", name: "Slatki Trenuci" },
      ro: { type: "Cofetărie", name: "Clipe Dulci" },
    },
    theme: themes.rose,
    content: {
      hu: {
        businessName: "Édes Percek Cukrászda",
        ownerName: "Balogh Kinga",
        profession: "Cukrász mester",
        tagline: "Minden falat egy különleges pillanat.",
        heroSubtitle: "Kézzel készített torták, sütemények és desszertek – minden alkalomra. Rendelj már ma, vagy látogass el hozzánk!",
        ctaText: "Rendelés & időpont",
        phone: "+36 70 234 5678",
        email: "kinga@edespercek.hu",
        address: "Miskolc, Széchenyi utca 14.",
        hours: ["H–P: 9:00–18:00", "Sz: 9:00–16:00", "V: 10:00–14:00"],
        services: [
          { icon: "cake", title: "Egyedi torták", desc: "Születésnap, esküvő, keresztelő – minden alkalomra kézzel díszített, személyre szabott torta.", price: "8 000 Ft/kg-tól" },
          { icon: "cookie", title: "Sütemények & finomságok", desc: "Napi friss péksütemények, krémes szeletek, macaronok és szezonális édességek.", price: "450 Ft-tól" },
          { icon: "gift", title: "Ajándékcsomagok", desc: "Válogatott édességek díszdobozban – céges ajándéknak, születésnapra vagy ünnepre.", price: "3 500 Ft-tól" },
        ],
        reviews: [
          { name: "Szabó Eszter", role: "Törzsvásárló", text: "Az esküvői tortánk tökéletes volt – pontosan olyan, ahogyan elképzeltük. Mindenki kérdezte, honnan van!", rating: 5 },
          { name: "Fekete Ádám", role: "Vállalkozó", text: "Céges rendezvényre rendeltem ajándékcsomagokat – profi csomagolás, mennyei ízek, mindenki oda volt érte.", rating: 5 },
          { name: "Horváth Lili", role: "Anyuka", text: "A gyermekem születésnapjára rendeltünk tortát. Kinga csodát tett – az egész parti a tortáról szólt!", rating: 5 },
        ],
        aboutTitle: "Szia, Kinga vagyok!",
        aboutText: "12 éve sütök profi szinten, és minden tortába beleadom a szívem. Hiszem, hogy az édesség több mint finomság – egy emlékezetes pillanat kezdete. Minden rendelést személyesen intézek, hogy pontosan olyat kapj, amilyet elképzeltél.",
        navServices: "Kínálat",
        navAbout: "Rólam",
        navContact: "Kapcsolat",
        bannerText: "Ez egy minta weboldal. Ilyen weboldalad is lehet.",
        bannerCta: "Kérj ajánlatot",
      },
      en: {
        businessName: "Sweet Moments Bakery",
        ownerName: "Katherine Baker",
        profession: "Master Pastry Chef",
        tagline: "Every bite is a special moment.",
        heroSubtitle: "Handcrafted cakes, pastries and desserts – for every occasion. Order today or visit us in store!",
        ctaText: "Order & appointment",
        phone: "+44 7700 234567",
        email: "katherine@sweetmoments.co.uk",
        address: "14 High Street, York",
        hours: ["Mon–Fri: 9:00–18:00", "Sat: 9:00–16:00", "Sun: 10:00–14:00"],
        services: [
          { icon: "cake", title: "Custom cakes", desc: "Birthday, wedding, christening – handcrafted, personalised cakes for every occasion.", price: "From £8 / slice" },
          { icon: "cookie", title: "Pastries & treats", desc: "Fresh daily pastries, cream slices, macarons and seasonal sweets.", price: "From £3" },
          { icon: "gift", title: "Gift boxes", desc: "Curated sweets in a gift box – perfect for corporate gifts, birthdays or celebrations.", price: "From £22" },
        ],
        reviews: [
          { name: "Sarah Williams", role: "Regular customer", text: "Our wedding cake was absolutely perfect – exactly as we imagined. Everyone asked where it came from!", rating: 5 },
          { name: "Adam Black", role: "Business owner", text: "Ordered gift boxes for a corporate event – professional packaging, divine flavours, everyone loved them.", rating: 5 },
          { name: "Lily Hart", role: "Mum", text: "Ordered a birthday cake for my daughter. Katherine worked magic – the whole party was about the cake!", rating: 5 },
        ],
        aboutTitle: "Hi, I'm Katherine!",
        aboutText: "I've been baking professionally for 12 years, putting my heart into every cake. I believe sweets are more than food – they're the start of a memorable moment. I handle every order personally to make sure you get exactly what you imagined.",
        navServices: "Menu",
        navAbout: "About",
        navContact: "Contact",
        bannerText: "This is a sample website. You could have one just like it.",
        bannerCta: "Get a quote",
      },
      hr: {
        businessName: "Slatki Trenuci Slastičarna",
        ownerName: "Katarina Šimić",
        profession: "Majstorica slastičarstva",
        tagline: "Svaki zalogaj poseban je trenutak.",
        heroSubtitle: "Ručno rađene torte, kolači i deserti – za svaku prigodu. Naručite danas ili nas posjetite!",
        ctaText: "Narudžba & termin",
        phone: "+385 91 234 5678",
        email: "katarina@slatki-trenuci.hr",
        address: "Zagreb, Ilica 32",
        hours: ["Pon–Pet: 9:00–18:00", "Sub: 9:00–16:00", "Ned: 10:00–14:00"],
        services: [
          { icon: "cake", title: "Individualne torte", desc: "Rođendan, vjenčanje, krštenje – ručno ukrašene, personalizirane torte za svaku prigodu.", price: "Od 60 €/kg" },
          { icon: "cookie", title: "Kolači & slatkiši", desc: "Svježi svakodnevni kolači, kremasti rezovi, macaroni i sezonski specijaliteti.", price: "Od 3 €" },
          { icon: "gift", title: "Poklon kutije", desc: "Odabrani slatkiši u ukrasnoj kutiji – za poslovne darove, rođendane ili proslave.", price: "Od 25 €" },
        ],
        reviews: [
          { name: "Ana Kovač", role: "Stalna kupcica", text: "Naša svadbena torta bila je savršena – točno onakva kakvu smo zamislili. Svi su pitali odakle je!", rating: 5 },
          { name: "Tomislav Jurić", role: "Poduzetnik", text: "Naručio poklon kutije za poslovni događaj – profesionalno pakiranje, božanstveni okusi, svi su bili oduševljeni.", rating: 5 },
          { name: "Maja Novak", role: "Mama", text: "Naručila tortu za rođendan kćerke. Katarina je napravila čudo – cijela zabava bila je o torti!", rating: 5 },
        ],
        aboutTitle: "Bok, ja sam Katarina!",
        aboutText: "Profesionalno pečem 12 godina i u svaku tortu ulažem srce. Vjerujem da su slatkiši više od hrane – oni su početak nezaboravnog trenutka. Svaku narudžbu osobno vodim kako biste dobili točno ono što ste zamislili.",
        navServices: "Ponuda",
        navAbout: "O meni",
        navContact: "Kontakt",
        bannerText: "Ovo je primjer web stranice. I vi možete imati ovakvu.",
        bannerCta: "Zatražite ponudu",
      },
      ro: {
        businessName: "Clipe Dulci Cofetărie",
        ownerName: "Cristina Moldovan",
        profession: "Maistru cofetar",
        tagline: "Fiecare îmbucătură e un moment special.",
        heroSubtitle: "Torturi, prăjituri și deserturi lucrate manual – pentru orice ocazie. Comandă azi sau vizitează-ne!",
        ctaText: "Comandă & programare",
        phone: "+40 721 234 567",
        email: "cristina@clipedulci.ro",
        address: "Cluj-Napoca, Str. Eroilor 14",
        hours: ["Lun–Vin: 9:00–18:00", "Sâm: 9:00–16:00", "Dum: 10:00–14:00"],
        services: [
          { icon: "cake", title: "Torturi personalizate", desc: "Zi de naștere, nuntă, botez – torturi decorate manual, personalizate pentru fiecare ocazie.", price: "De la 120 lei/kg" },
          { icon: "cookie", title: "Prăjituri & delicii", desc: "Prăjituri proaspete zilnic, felii cu cremă, macarons și specialități sezoniere.", price: "De la 12 lei" },
          { icon: "gift", title: "Cutii cadou", desc: "Dulciuri alese în cutii decorative – cadouri corporate, zile de naștere sau sărbători.", price: "De la 80 lei" },
        ],
        reviews: [
          { name: "Ioana Popa", role: "Client fidel", text: "Tortul de nuntă a fost perfect – exact cum am visat. Toți au întrebat de unde e!", rating: 5 },
          { name: "Bogdan Rusu", role: "Antreprenor", text: "Am comandat cutii cadou pentru un eveniment de business – ambalaj profesional, gusturi divine, toți au fost impresionați.", rating: 5 },
          { name: "Raluca Stan", role: "Mămică", text: "Am comandat tort pentru ziua fiicei mele. Cristina a făcut minuni – tot petrecerea a fost despre tort!", rating: 5 },
        ],
        aboutTitle: "Bună, sunt Cristina!",
        aboutText: "Fac cofetărie la nivel profesional de 12 ani și pun suflet în fiecare tort. Cred că dulciurile sunt mai mult decât mâncare – sunt începutul unui moment memorabil. Fiecare comandă o gestionez personal pentru ca tu să primești exact ce ai imaginat.",
        navServices: "Ofertă",
        navAbout: "Despre mine",
        navContact: "Contact",
        bannerText: "Acesta este un site demonstrativ. Poți avea unul la fel.",
        bannerCta: "Solicită ofertă",
      },
    },
  },
  {
    slug: "pizzazo",
    emoji: "🍕",
    galleryLabel: {
      hu: { type: "Pizzázó", name: "Napoli Pizzéria" },
      en: { type: "Pizza restaurant", name: "Napoli Pizzeria" },
      hr: { type: "Pizzeria", name: "Napoli Pizzeria" },
      ro: { type: "Pizzerie", name: "Napoli Pizzeria" },
    },
    theme: themes.amber,
    content: {
      hu: {
        businessName: "Napoli Pizzéria",
        ownerName: "Tóth Gábor",
        profession: "Pizzaiolo mester",
        tagline: "Igazi nápolyi pizza, szívből sütve.",
        heroSubtitle: "Kézzel nyújtott tészta, friss alapanyagok, fából tüzelt kemence – a legjobb pizza, amit valaha ettél. Rendeld házhozszállítással vagy gyere be hozzánk!",
        ctaText: "Rendelés most",
        phone: "+36 20 345 6789",
        email: "gabor@napolipizza.hu",
        address: "Budapest, Bartók Béla út 22.",
        hours: ["H–Cs: 11:00–22:00", "P–Sz: 11:00–23:00", "V: 12:00–21:00"],
        services: [
          { icon: "pizza", title: "Klasszikus pizzák", desc: "Margherita, Diavola, Quattro Stagioni és még 15 féle pizza – mind fából tüzelt kemencéből.", price: "2 400 Ft-tól" },
          { icon: "flame", title: "Speciális pizzák", desc: "Szezonális alkotásaink prémium feltétekkel: trüffel, burrata, füstölt sonka és friss bazsalikom.", price: "3 200 Ft-tól" },
          { icon: "package", title: "Házhozszállítás", desc: "30 percen belül ajtódig hozzuk a frissen sült pizzát. Min. rendelés: 2 500 Ft.", price: "Ingyenes 4 500 Ft felett" },
        ],
        reviews: [
          { name: "Varga Péter", role: "Törzsvendég", text: "A legjobb pizza Budapesten – nem kérdés. Az impasto pont olyan, mint Nápolyban. Hetente visszajárok!", rating: 5 },
          { name: "Kiss Éva", role: "Gasztroblogger", text: "A fából tüzelt kemence mindent megváltoztat. A tészta ropog, a feltétek frissek, az ízek autentikusak.", rating: 5 },
          { name: "Molnár Bence", role: "Irodai dolgozó", text: "Ebédidőben rendeljük az irodába. Mindig pontosan érkezik és isteni. Az egész csapat oda van érte.", rating: 5 },
        ],
        aboutTitle: "Szia, Gábor vagyok!",
        aboutText: "Nápolyban tanultam a pizzakészítés tudományát, és azóta is ugyanazokat az elveket követem: jó liszt, hosszú érlelés, friss alapanyagok, forró kemence. A Napoli Pizzéria nem egy fast food – egy szeretetteli hely, ahol a pizzának ideje van.",
        navServices: "Étlap",
        navAbout: "Rólunk",
        navContact: "Kapcsolat",
        bannerText: "Ez egy minta weboldal. Ilyen weboldalad is lehet.",
        bannerCta: "Kérj ajánlatot",
      },
      en: {
        businessName: "Napoli Pizzeria",
        ownerName: "Gabriel Stone",
        profession: "Master Pizzaiolo",
        tagline: "Authentic Neapolitan pizza, baked with heart.",
        heroSubtitle: "Hand-stretched dough, fresh ingredients, wood-fired oven – the best pizza you'll ever eat. Order delivery or dine in!",
        ctaText: "Order now",
        phone: "+44 7800 345678",
        email: "gabriel@napolipizzeria.co.uk",
        address: "22 Brick Lane, London",
        hours: ["Mon–Thu: 11:00–22:00", "Fri–Sat: 11:00–23:00", "Sun: 12:00–21:00"],
        services: [
          { icon: "pizza", title: "Classic pizzas", desc: "Margherita, Diavola, Quattro Stagioni and 15 more – all from our wood-fired oven.", price: "From £11" },
          { icon: "flame", title: "Special pizzas", desc: "Seasonal creations with premium toppings: truffle, burrata, smoked ham and fresh basil.", price: "From £15" },
          { icon: "package", title: "Home delivery", desc: "Fresh pizza at your door within 30 minutes. Min. order: £12.", price: "Free over £22" },
        ],
        reviews: [
          { name: "Peter Green", role: "Regular", text: "The best pizza in London – no question. The dough is just like in Naples. I come back every week!", rating: 5 },
          { name: "Eva Clark", role: "Food blogger", text: "The wood-fired oven changes everything. Crispy base, fresh toppings, authentic flavours.", rating: 5 },
          { name: "Ben Miller", role: "Office worker", text: "We order to the office at lunchtime. Always on time and delicious. The whole team loves it.", rating: 5 },
        ],
        aboutTitle: "Hi, I'm Gabriel!",
        aboutText: "I learned the art of pizza-making in Naples and I follow the same principles to this day: good flour, long fermentation, fresh ingredients, hot oven. Napoli Pizzeria isn't fast food – it's a place of love where pizza has time to be perfect.",
        navServices: "Menu",
        navAbout: "About",
        navContact: "Contact",
        bannerText: "This is a sample website. You could have one just like it.",
        bannerCta: "Get a quote",
      },
      hr: {
        businessName: "Napoli Pizzeria",
        ownerName: "Gabriele Moretti",
        profession: "Majstor pizzar",
        tagline: "Autentična napolitanska pizza, pečena iz srca.",
        heroSubtitle: "Ručno razvučeno tijesto, svježi sastojci, krušna peć na drva – najukusnija pizza koju ste jeli. Naručite dostavu ili dođite k nama!",
        ctaText: "Naruči odmah",
        phone: "+385 91 345 6789",
        email: "gabriele@napolipizzeria.hr",
        address: "Zagreb, Tratinska 22",
        hours: ["Pon–Čet: 11:00–22:00", "Pet–Sub: 11:00–23:00", "Ned: 12:00–21:00"],
        services: [
          { icon: "pizza", title: "Klasične pizze", desc: "Margherita, Diavola, Quattro Stagioni i još 15 vrsta – sve iz peći na drva.", price: "Od 12 €" },
          { icon: "flame", title: "Specijalne pizze", desc: "Sezonska kreativna pizza s premium dodacima: tartuf, burrata, dimljeni pršut i svježi bosiljak.", price: "Od 16 €" },
          { icon: "package", title: "Dostava na kućnu adresu", desc: "Svježa pizza na vašim vratima za 30 minuta. Min. narudžba: 12 €.", price: "Besplatno iznad 25 €" },
        ],
        reviews: [
          { name: "Ivan Horvat", role: "Stalni gost", text: "Najbolja pizza u Zagrebu – bez pitanja. Tijesto je kao u Napulju. Vraćam se svaki tjedan!", rating: 5 },
          { name: "Petra Marić", role: "Food blogerica", text: "Peć na drva mijenja sve. Hrskavo tijesto, svježi dodaci, autentični okusi.", rating: 5 },
          { name: "Matej Novak", role: "Uredski radnik", text: "Naručujemo u ured za ručak. Uvijek na vrijeme i božanstveno. Cijeli tim je oduševljen.", rating: 5 },
        ],
        aboutTitle: "Bok, ja sam Gabriele!",
        aboutText: "Naučio sam umijeće pizze u Napulju i slijedim ista načela do danas: dobro brašno, dugo fermentiranje, svježi sastojci, vruća peć. Napoli Pizzeria nije fast food – mjesto je ljubavi gdje pizza ima vremena biti savršena.",
        navServices: "Jelovnik",
        navAbout: "O nama",
        navContact: "Kontakt",
        bannerText: "Ovo je primjer web stranice. I vi možete imati ovakvu.",
        bannerCta: "Zatražite ponudu",
      },
      ro: {
        businessName: "Napoli Pizzeria",
        ownerName: "Gabriel Ionescu",
        profession: "Maestru pizzar",
        tagline: "Pizza napolitană autentică, coaptă cu suflet.",
        heroSubtitle: "Aluat întins manual, ingrediente proaspete, cuptor pe lemne – cea mai bună pizza pe care ai mâncat-o. Comandă livrare sau vino la noi!",
        ctaText: "Comandă acum",
        phone: "+40 721 345 678",
        email: "gabriel@napolipizzeria.ro",
        address: "București, Calea Victoriei 22",
        hours: ["Lun–Joi: 11:00–22:00", "Vin–Sâm: 11:00–23:00", "Dum: 12:00–21:00"],
        services: [
          { icon: "pizza", title: "Pizze clasice", desc: "Margherita, Diavola, Quattro Stagioni și încă 15 variante – toate din cuptorul pe lemne.", price: "De la 35 lei" },
          { icon: "flame", title: "Pizze speciale", desc: "Creații sezoniere cu toppinguri premium: trufe, burrata, șuncă afumată și busuioc proaspăt.", price: "De la 50 lei" },
          { icon: "package", title: "Livrare la domiciliu", desc: "Pizza proaspătă la ușa ta în 30 de minute. Comandă minimă: 40 lei.", price: "Gratuită peste 80 lei" },
        ],
        reviews: [
          { name: "Andrei Popescu", role: "Client fidel", text: "Cea mai bună pizza din București – fără discuție. Aluatul e ca în Napoli. Vin săptămânal!", rating: 5 },
          { name: "Maria Ionescu", role: "Food blogger", text: "Cuptorul pe lemne schimbă totul. Blat crocant, toppinguri proaspete, arome autentice.", rating: 5 },
          { name: "Bogdan Stan", role: "Angajat de birou", text: "Comandăm la birou la prânz. Mereu la timp și delicios. Toată echipa e îndrăgostită.", rating: 5 },
        ],
        aboutTitle: "Bună, sunt Gabriel!",
        aboutText: "Am învățat arta pizzei la Napoli și urmez aceleași principii până astăzi: făină bună, fermentare lungă, ingrediente proaspete, cuptor fierbinte. Napoli Pizzeria nu e fast food – e un loc al dragostei unde pizza are timp să fie perfectă.",
        navServices: "Meniu",
        navAbout: "Despre noi",
        navContact: "Contact",
        bannerText: "Acesta este un site demonstrativ. Poți avea unul la fel.",
        bannerCta: "Solicită ofertă",
      },
    },
  },
  {
    slug: "borapalas",
    emoji: "🌿",
    galleryLabel: {
      hu: { type: "Bőrápolás", name: "Tiszta Bőr Stúdió" },
      en: { type: "Skin care", name: "Clear Skin Studio" },
      hr: { type: "Njega kože", name: "Čista Koža Studio" },
      ro: { type: "Îngrijire piele", name: "Studio Piele Curată" },
    },
    theme: themes.teal,
    content: {
      hu: {
        businessName: "Tiszta Bőr Stúdió",
        ownerName: "Szabó Virág",
        profession: "Bőrgyógyászati kozmetikus",
        tagline: "Az egészséges bőr a legjobb kozmetikum.",
        heroSubtitle: "Szakmai bőranalízissel kezdünk, majd személyre szabott kezelésekkel dolgozzuk ki a legjobb rutint a te bőrödnek. Foglalj konzultációt!",
        ctaText: "Ingyenes konzultáció",
        phone: "+36 30 456 7891",
        email: "virag@tisztabor.hu",
        address: "Budapest, Király utca 38.",
        hours: ["H–P: 10:00–19:00", "Sz: 10:00–16:00", "V: Zárva"],
        services: [
          { icon: "droplets", title: "Bőranalízis & rutin tervezés", desc: "Részletes bőranalízis digitális eszközzel, személyre szabott otthoni és szaloni rutin összeállítása.", price: "Ingyenes" },
          { icon: "sparkles", title: "Mélytisztítás & hidratálás", desc: "Professzionális mélytisztítás, pórusszűkítés és intenzív hidratáló kezelés – korosztálytól függetlenül.", price: "14 000 Ft-tól" },
          { icon: "zap", title: "Bőrmegújító kezelések", desc: "Mikroneedling, kémiai hámlasztás és LED-fényes kezelések a tökéletes, ragyogó bőrért.", price: "22 000 Ft-tól" },
        ],
        reviews: [
          { name: "Kovács Bori", role: "Ügyvéd", text: "3 hónap alatt teljesen megváltozott a bőröm. Virág pontosan tudta, mire van szükségem – és bevált!", rating: 5 },
          { name: "Tóth Zsuzsi", role: "Anyuka", text: "Végre valaki, aki nem csak krémeket ad el, hanem valóban megérti a bőrömet. Aranybánya ez a stúdió.", rating: 5 },
          { name: "Fekete Réka", role: "Marketing menedzser", text: "Stresszes életem ellenére ragyog a bőröm. A rendszeres kezelések csodát tesznek – ajánlom mindenkinek!", rating: 5 },
        ],
        aboutTitle: "Szia, Virág vagyok!",
        aboutText: "Bőrgyógyászati kozmetikusként 9 éve segítem az ügyfeleimet megtalálni a tökéletes bőrápolási rutint. Nem hiszek az egységes megoldásokban – minden bőr más, és minden kezelési tervet az adott bőr igényeihez szabok. Nálam az eredmény nem ígéret, hanem cél.",
        navServices: "Kezelések",
        navAbout: "Rólam",
        navContact: "Kapcsolat",
        bannerText: "Ez egy minta weboldal. Ilyen weboldalad is lehet.",
        bannerCta: "Kérj ajánlatot",
      },
      en: {
        businessName: "Clear Skin Studio",
        ownerName: "Violet Shaw",
        profession: "Skin Care Specialist",
        tagline: "Healthy skin is the best cosmetic.",
        heroSubtitle: "We start with a professional skin analysis, then create personalised treatments and routines for your specific skin. Book a consultation!",
        ctaText: "Free consultation",
        phone: "+44 7912 456789",
        email: "violet@clearskin.co.uk",
        address: "38 King Street, Edinburgh",
        hours: ["Mon–Fri: 10:00–19:00", "Sat: 10:00–16:00", "Sun: Closed"],
        services: [
          { icon: "droplets", title: "Skin analysis & routine", desc: "Detailed digital skin analysis with a personalised home and salon routine designed just for you.", price: "Free" },
          { icon: "sparkles", title: "Deep cleanse & hydration", desc: "Professional deep cleansing, pore minimising and intense hydration treatment – for all ages.", price: "From £85" },
          { icon: "zap", title: "Skin renewal treatments", desc: "Microneedling, chemical peels and LED light therapy for flawless, glowing skin.", price: "From £130" },
        ],
        reviews: [
          { name: "Brenda Collins", role: "Lawyer", text: "My skin completely transformed in 3 months. Violet knew exactly what I needed – and it worked!", rating: 5 },
          { name: "Susan Thomas", role: "Mum", text: "Finally someone who doesn't just sell creams but truly understands my skin. This studio is a gem.", rating: 5 },
          { name: "Rebecca Ford", role: "Marketing manager", text: "Despite my stressful life, my skin glows. Regular treatments work wonders – I recommend to everyone!", rating: 5 },
        ],
        aboutTitle: "Hi, I'm Violet!",
        aboutText: "As a skin care specialist for 9 years, I help clients find the perfect skincare routine. I don't believe in one-size-fits-all – every skin is different, and I tailor every treatment plan to that specific skin's needs. Results aren't a promise here – they're the goal.",
        navServices: "Treatments",
        navAbout: "About",
        navContact: "Contact",
        bannerText: "This is a sample website. You could have one just like it.",
        bannerCta: "Get a quote",
      },
      hr: {
        businessName: "Čista Koža Studio",
        ownerName: "Viola Šarić",
        profession: "Specijalistica njege kože",
        tagline: "Zdrava koža je najbolji kozmetik.",
        heroSubtitle: "Počinjemo profesionalnom analizom kože, zatim kreiramo personalizirane tretmane i rutinu za vašu kožu. Rezervirajte konzultaciju!",
        ctaText: "Besplatna konzultacija",
        phone: "+385 91 456 7891",
        email: "viola@cistakoza.hr",
        address: "Split, Marmontova 38",
        hours: ["Pon–Pet: 10:00–19:00", "Sub: 10:00–16:00", "Ned: Zatvoreno"],
        services: [
          { icon: "droplets", title: "Analiza kože & rutina", desc: "Detaljna digitalna analiza kože s personaliziranom rutinom za kući i salon samo za vas.", price: "Besplatno" },
          { icon: "sparkles", title: "Duboko čišćenje & hidratacija", desc: "Profesionalno duboko čišćenje, smanjivanje pora i intenzivni hidratantni tretman – za sve dobi.", price: "Od 65 €" },
          { icon: "zap", title: "Tretmani obnove kože", desc: "Mikroneedling, kemijski piling i LED svjetlosna terapija za savršenu, sjajnu kožu.", price: "Od 100 €" },
        ],
        reviews: [
          { name: "Branka Kovač", role: "Odvjetnica", text: "Koža mi se potpuno promijenila za 3 mjeseca. Viola je znala točno što mi treba – i djelovalo je!", rating: 5 },
          { name: "Suzana Jurić", role: "Mama", text: "Konačno netko tko ne prodaje samo kreme već zaista razumije moju kožu. Ovaj studio je dragulj.", rating: 5 },
          { name: "Rebeka Novak", role: "Marketing menadžerica", text: "Usprkos stresnom životu, koža mi sija. Redoviti tretmani čine čuda – preporučujem svima!", rating: 5 },
        ],
        aboutTitle: "Bok, ja sam Viola!",
        aboutText: "Kao specijalistica njege kože radim 9 godina i pomažem klijentima pronaći savršenu rutinu. Ne vjerujem u rješenja za sve – svaka koža je drugačija i svaki plan tretmana prilagođavam specifičnim potrebama te kože. Kod mene rezultati nisu obećanje – oni su cilj.",
        navServices: "Tretmani",
        navAbout: "O meni",
        navContact: "Kontakt",
        bannerText: "Ovo je primjer web stranice. I vi možete imati ovakvu.",
        bannerCta: "Zatražite ponudu",
      },
      ro: {
        businessName: "Studio Piele Curată",
        ownerName: "Violeta Sandu",
        profession: "Specialist îngrijire piele",
        tagline: "Pielea sănătoasă este cel mai bun cosmetic.",
        heroSubtitle: "Începem cu o analiză profesională a pielii, apoi creăm tratamente și rutine personalizate pentru pielea ta. Rezervă o consultație!",
        ctaText: "Consultație gratuită",
        phone: "+40 745 456 789",
        email: "violeta@pielesanatas.ro",
        address: "Timișoara, Bd. Republicii 38",
        hours: ["Lun–Vin: 10:00–19:00", "Sâm: 10:00–16:00", "Dum: Închis"],
        services: [
          { icon: "droplets", title: "Analiză piele & rutină", desc: "Analiză digitală detaliată cu rutină personalizată pentru acasă și salon, creată special pentru tine.", price: "Gratuită" },
          { icon: "sparkles", title: "Curățare profundă & hidratare", desc: "Curățare profesională profundă, minimizarea porilor și tratament intens de hidratare – pentru toate vârstele.", price: "De la 200 lei" },
          { icon: "zap", title: "Tratamente de reînnoire", desc: "Microneedling, peelinguri chimice și terapie cu lumină LED pentru o piele perfectă, strălucitoare.", price: "De la 350 lei" },
        ],
        reviews: [
          { name: "Brândușa Popa", role: "Avocat", text: "Pielea mea s-a transformat complet în 3 luni. Violeta a știut exact ce am nevoie – și a funcționat!", rating: 5 },
          { name: "Suzana Ionescu", role: "Mămică", text: "În sfârșit cineva care nu vinde doar creme ci înțelege cu adevărat pielea mea. Acest studio e o comoară.", rating: 5 },
          { name: "Rebeca Stan", role: "Manager marketing", text: "În ciuda vieții stresante, pielea mea strălucește. Tratamentele regulate fac minuni – recomand tuturor!", rating: 5 },
        ],
        aboutTitle: "Bună, sunt Violeta!",
        aboutText: "Sunt specialist în îngrijirea pielii de 9 ani și ajut clienții să găsească rutina perfectă. Nu cred în soluții universale – fiecare piele e diferită și fiecare plan de tratament îl adaptez nevoilor specifice ale acelei pieli. La mine rezultatele nu sunt promisiuni – sunt obiective.",
        navServices: "Tratamente",
        navAbout: "Despre mine",
        navContact: "Contact",
        bannerText: "Acesta este un site demonstrativ. Poți avea unul la fel.",
        bannerCta: "Solicită ofertă",
      },
    },
  },
  {
    slug: "ingatlan",
    emoji: "🏠",
    galleryLabel: {
      hu: { type: "Ingatlanközvetítő", name: "Molnár Ingatlan" },
      en: { type: "Real estate agent", name: "Mason Realty" },
      hr: { type: "Agent za nekretnine", name: "Milić Nekretnine" },
      ro: { type: "Agent imobiliar", name: "Marin Imobiliare" },
    },
    theme: themes.blue,
    content: {
      hu: {
        businessName: "Molnár Ingatlan",
        ownerName: "Molnár Péter",
        profession: "Ingatlanközvetítő szakértő",
        tagline: "A legjobb ingatlanüzlet, ami valaha volt.",
        heroSubtitle: "Vásárolnál, eladnál vagy befektetnél? 12 év tapasztalatával segítek megtalálni az ideális ingatlant – vagy a legjobb vevőt a tiédre.",
        ctaText: "Ingyenes konzultáció",
        phone: "+36 30 567 8901",
        email: "peter@molnaringatlan.hu",
        address: "Budapest, Andrássy út 55. (5. em.)",
        hours: ["H–P: 9:00–18:00", "Sz: Csak előzetes egyeztetéssel", "V: Zárva"],
        services: [
          { icon: "home", title: "Ingatlan eladás", desc: "Professzionális értékbecslés, fotózás, marketing és teljes körű ügyintézés. Eladjuk az ingatlanodat a lehető legjobb áron.", price: "Sikerdíjas" },
          { icon: "key", title: "Ingatlan vásárlás", desc: "Segítünk megtalálni az igényeidhez és büdzséjéhez illő ingatlant. Tárgyalunk, ellenőrzünk, intézünk.", price: "Ingyenes vásárlónak" },
          { icon: "building", title: "Befektetési tanácsadás", desc: "Melyek a legjobb befektetési célpontok most? Elemeззük a piacot és megmutatjuk a lehetőségeket.", price: "Konzultáció ingyenes" },
        ],
        reviews: [
          { name: "Farkas Judit", role: "Eladó", text: "Péterrel 3 héten belül eladtuk a lakást – a kért ár felett! Profizmus, kommunikáció, ügyintézés: minden tökéletes volt.", rating: 5 },
          { name: "Szilágyi Tamás", role: "Vásárló", text: "Első lakásvásárlóként tele voltam kérdésekkel. Péter mindent megmagyarázott, végig ott volt, és megtalálta a tökéletes lakást.", rating: 5 },
          { name: "Bíró Katalin", role: "Befektető", text: "2 befektetési ingatlanomat Péterrel vettem. Mindkétszer kiváló tanácsot adott, és az üzlet is megérte.", rating: 5 },
        ],
        aboutTitle: "Szia, Péter vagyok!",
        aboutText: "12 éve vagyok ingatlanközvetítő, és több mint 400 sikeres üzletet zártam le Budapesten és a vonzáskörzetében. Nem egy irodát képviselek – az én érdekemnek és a tiédnek egyaránt az számít, hogy a legjobb üzletet kösd. Ezért egyeztetünk, mielőtt bármiről döntünk.",
        navServices: "Szolgáltatások",
        navAbout: "Rólam",
        navContact: "Kapcsolat",
        bannerText: "Ez egy minta weboldal. Ilyen weboldalad is lehet.",
        bannerCta: "Kérj ajánlatot",
      },
      en: {
        businessName: "Mason Realty",
        ownerName: "Peter Mason",
        profession: "Real Estate Agent & Consultant",
        tagline: "The best property deal you'll ever make.",
        heroSubtitle: "Buying, selling or investing? With 12 years of experience, I help you find the ideal property – or the best buyer for yours.",
        ctaText: "Free consultation",
        phone: "+44 7900 567890",
        email: "peter@masonrealty.co.uk",
        address: "55 Park Lane, 5th Floor, London",
        hours: ["Mon–Fri: 9:00–18:00", "Sat: By appointment only", "Sun: Closed"],
        services: [
          { icon: "home", title: "Property sales", desc: "Professional valuation, photography, marketing and full management. We sell your property at the best price.", price: "Commission-based" },
          { icon: "key", title: "Property buying", desc: "We help you find a property that matches your needs and budget. We negotiate, verify, manage.", price: "Free for buyers" },
          { icon: "building", title: "Investment consulting", desc: "What are the best investment targets right now? We analyse the market and show you the opportunities.", price: "Free consultation" },
        ],
        reviews: [
          { name: "Judith Parker", role: "Seller", text: "We sold our flat in 3 weeks with Peter – above asking price! Professionalism, communication, management: everything was perfect.", rating: 5 },
          { name: "Thomas Silva", role: "Buyer", text: "As a first-time buyer I had so many questions. Peter explained everything, was there throughout, and found the perfect flat.", rating: 5 },
          { name: "Katherine Brown", role: "Investor", text: "I bought 2 investment properties with Peter. Both times he gave excellent advice and the deals were worth it.", rating: 5 },
        ],
        aboutTitle: "Hi, I'm Peter!",
        aboutText: "I've been a real estate agent for 12 years and closed over 400 successful deals in London and the surrounding area. I don't represent an office – what matters is that both my interest and yours align on getting the best deal. That's why we talk before deciding anything.",
        navServices: "Services",
        navAbout: "About",
        navContact: "Contact",
        bannerText: "This is a sample website. You could have one just like it.",
        bannerCta: "Get a quote",
      },
      hr: {
        businessName: "Milić Nekretnine",
        ownerName: "Petar Milić",
        profession: "Agent za nekretnine i savjetnik",
        tagline: "Najbitniji posao s nekretninama koji ćete ikada napraviti.",
        heroSubtitle: "Kupujete, prodajete ili investirate? S 12 godina iskustva pomažem vam pronaći idealnu nekretninu – ili najboljeg kupca za vašu.",
        ctaText: "Besplatna konzultacija",
        phone: "+385 91 567 8901",
        email: "petar@milic-nekretnine.hr",
        address: "Zagreb, Ilica 55, 5. kat",
        hours: ["Pon–Pet: 9:00–18:00", "Sub: Samo uz dogovor", "Ned: Zatvoreno"],
        services: [
          { icon: "home", title: "Prodaja nekretnina", desc: "Profesionalna procjena vrijednosti, fotografiranje, marketing i potpuna administracija. Prodajemo vašu nekretninu po najboljoj cijeni.", price: "Provizija na uspjeh" },
          { icon: "key", title: "Kupnja nekretnina", desc: "Pomažemo vam pronaći nekretninu koja odgovara vašim potrebama i budžetu. Pregovaramo, provjeravamo, rješavamo.", price: "Besplatno za kupce" },
          { icon: "building", title: "Investicijsko savjetovanje", desc: "Koji su trenutno najbolji investicijski ciljevi? Analiziramo tržište i pokazujemo prilike.", price: "Konzultacija besplatna" },
        ],
        reviews: [
          { name: "Judita Kovač", role: "Prodavačica", text: "S Petrom smo prodali stan za 3 tjedna – iznad tražene cijene! Profesionalnost, komunikacija, administracija: sve savršeno.", rating: 5 },
          { name: "Tomislav Jurić", role: "Kupac", text: "Kao kupac stana po prvi put imao sam puno pitanja. Petar je sve objasnio, bio je tu kroz sve i pronašao savršen stan.", rating: 5 },
          { name: "Katarina Horvat", role: "Investitorica", text: "Kupila sam 2 investicijske nekretnine s Petrom. Oba puta dao je odličan savjet i poslovi su se isplatili.", rating: 5 },
        ],
        aboutTitle: "Bok, ja sam Petar!",
        aboutText: "Radim kao agent za nekretnine 12 godina i zatvorio sam više od 400 uspješnih poslova u Zagrebu i okolici. Ne zastupam ured – ono što je važno jest da su moji interesi i vaši usklađeni da se postigne najbolji posao. Zato razgovaramo prije nego što odlučimo bilo što.",
        navServices: "Usluge",
        navAbout: "O meni",
        navContact: "Kontakt",
        bannerText: "Ovo je primjer web stranice. I vi možete imati ovakvu.",
        bannerCta: "Zatražite ponudu",
      },
      ro: {
        businessName: "Marin Imobiliare",
        ownerName: "Petru Marin",
        profession: "Agent imobiliar & consultant",
        tagline: "Cea mai bună tranzacție imobiliară pe care o vei face.",
        heroSubtitle: "Cumperi, vinzi sau investești? Cu 12 ani de experiență, te ajut să găsești proprietatea ideală – sau cel mai bun cumpărător pentru a ta.",
        ctaText: "Consultație gratuită",
        phone: "+40 756 567 890",
        email: "petru@marinimobiliare.ro",
        address: "București, Calea Victoriei 55, et. 5",
        hours: ["Lun–Vin: 9:00–18:00", "Sâm: Doar cu programare", "Dum: Închis"],
        services: [
          { icon: "home", title: "Vânzare proprietăți", desc: "Evaluare profesională, fotografiere, marketing și administrare completă. Vindem proprietatea ta la cel mai bun preț.", price: "Comision la succes" },
          { icon: "key", title: "Cumpărare proprietăți", desc: "Te ajutăm să găsești o proprietate care se potrivește nevoilor și bugetului tău. Negociem, verificăm, gestionăm.", price: "Gratuit pentru cumpărători" },
          { icon: "building", title: "Consultanță investiții", desc: "Care sunt cele mai bune ținte de investiție acum? Analizăm piața și îți arătăm oportunitățile.", price: "Consultație gratuită" },
        ],
        reviews: [
          { name: "Iudita Popa", role: "Vânzătoare", text: "Am vândut apartamentul în 3 săptămâni cu Petru – peste prețul cerut! Profesionalism, comunicare, administrare: totul perfect.", rating: 5 },
          { name: "Teodor Ionescu", role: "Cumpărător", text: "Ca prim cumpărător de apartament aveam multe întrebări. Petru a explicat totul, a fost prezent pe tot parcursul și a găsit apartamentul perfect.", rating: 5 },
          { name: "Cătălina Rusu", role: "Investitoare", text: "Am cumpărat 2 proprietăți de investiție cu Petru. De ambele ori a dat sfaturi excelente și tranzacțiile au meritat.", rating: 5 },
        ],
        aboutTitle: "Bună, sunt Petru!",
        aboutText: "Sunt agent imobiliar de 12 ani și am încheiat peste 400 de tranzacții de succes în București și împrejurimi. Nu reprezint un birou – ceea ce contează este că interesele mele și ale tale se aliniază pentru a obține cea mai bună tranzacție. De aceea discutăm înainte de a decide orice.",
        navServices: "Servicii",
        navAbout: "Despre mine",
        navContact: "Contact",
        bannerText: "Acesta este un site demonstrativ. Poți avea unul la fel.",
        bannerCta: "Solicită ofertă",
      },
    },
  },
];

export function getDemoBySlug(slug: string): Demo | undefined {
  return demos.find((d) => d.slug === slug);
}
