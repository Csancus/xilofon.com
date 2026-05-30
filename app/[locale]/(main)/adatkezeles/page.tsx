import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });
  return { title: t("title") };
}

type Section = { h: string; body: string | string[] };

const content: Record<string, { sections: Section[] }> = {
  hu: {
    sections: [
      { h: "1. Adatkezelő adatai", body: "Adatkezelő neve: Xilofon Digital\nSzékhely: [Cím – töltsd ki]\nE-mail: info@xilofon.com\nWeboldal: https://xilofon.com" },
      { h: "2. Bevezetés", body: ["A Xilofon Digital elkötelezett az Ön személyes adatainak védelme iránt. Jelen tájékoztató a GDPR (2016/679/EU rendelet) és a vonatkozó magyar jogszabályokkal összhangban készült.", "Fontos: Ez a weboldal nem használ sütit (cookie-t), és nem alkalmaz analitikai, marketing vagy nyomkövető technológiát."] },
      { h: "3. Kezelt adatok és az adatkezelés célja", body: ["Kapcsolatfelvételi form – kezelt adatok: Név (azonosításhoz), E-mail-cím (visszajelzés küldéséhez), Telefonszám (telefonos kapcsolatfelvételhez), Üzenet tartalma (az igény felméréséhez). Jogalap: Hozzájárulás (GDPR 6. cikk (1) a)). Megőrzési idő: 2 év.", "Ügyféladatok (szerződéses viszony): Számlázási adatok, e-mail, telefonszám, megrendelés részletei. Jogalap: Szerződés teljesítése (GDPR 6. cikk (1) b)). Megőrzési idő: számlák 8 év, egyéb iratok 5 év."] },
      { h: "4. Sütik (cookie-k)", body: "Ez a weboldal nem használ sütit. Nem alkalmaz Google Analytics, Facebook Pixel vagy egyéb nyomkövető eszközt." },
      { h: "5. Adattovábbítás, adatfeldolgozók", body: ["Az Ön adatait harmadik félnek nem adjuk el.", "E-mail küldő szolgáltatás (Resend, Inc.): Az üzenet továbbításához. GDPR-kompatibilis feltételek szerint.", "Tárhelyszolgáltató: A weboldal üzemeltetéséhez."] },
      { h: "6. Az érintett jogai", body: ["Hozzáférési jog", "Helyesbítési jog", "Törlési jog", "Az adatkezelés korlátozásához való jog", "Adathordozhatóság", "Tiltakozás joga", "Hozzájárulás visszavonása – Jogai gyakorlásához írjon az info@xilofon.com címre. Válasz 30 napon belül."] },
      { h: "7. Panasz, jogorvoslat", body: "Panasz esetén a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat. 1055 Budapest, Falk Miksa utca 9–11. www.naih.hu" },
      { h: "8. Adatbiztonság", body: "Az adatokat titkosított csatornán (HTTPS/SSL) továbbítjuk. Technikai és szervezési intézkedésekkel védjük az adatokat a jogosulatlan hozzáféréstől." },
      { h: "9. A tájékoztató módosítása", body: "Fenntartjuk a jogot a tájékoztató módosítására. Az aktuális verzió mindig ezen az oldalon érhető el." },
    ],
  },
  en: {
    sections: [
      { h: "1. Data controller details", body: "Data controller: Xilofon Digital\nRegistered address: [Address – fill in]\nEmail: info@xilofon.com\nWebsite: https://xilofon.com" },
      { h: "2. Introduction", body: ["Xilofon Digital is committed to protecting your personal data. This notice has been prepared in accordance with the GDPR (Regulation 2016/679/EU) and applicable law.", "Important: This website does not use cookies and does not employ any analytics, marketing or tracking technology."] },
      { h: "3. Data processed and purposes", body: ["Contact form – data processed: Name (identification), Email address (sending replies), Phone number (phone contact), Message content (assessing your needs). Legal basis: Consent (GDPR Art. 6(1)(a)). Retention: 2 years.", "Client data (contractual relationship): Billing details, email, phone number, order details. Legal basis: Performance of a contract (GDPR Art. 6(1)(b)). Retention: invoices 8 years, other records 5 years."] },
      { h: "4. Cookies", body: "This website does not use cookies. It does not use Google Analytics, Facebook Pixel or any other tracking tool." },
      { h: "5. Data transfers and processors", body: ["We do not sell your data to third parties.", "Email delivery service (Resend, Inc.): Used to send your message. Operates under GDPR-compatible terms.", "Hosting provider: Used to operate the website."] },
      { h: "6. Your rights", body: ["Right of access", "Right to rectification", "Right to erasure", "Right to restriction of processing", "Right to data portability", "Right to object", "Right to withdraw consent – To exercise your rights, write to info@xilofon.com. Response within 30 days."] },
      { h: "7. Complaints", body: "You may lodge a complaint with the relevant supervisory authority in your country or with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH). www.naih.hu" },
      { h: "8. Data security", body: "Data is transmitted over encrypted channels (HTTPS/SSL). We protect data against unauthorised access through technical and organisational measures." },
      { h: "9. Changes to this notice", body: "We reserve the right to update this notice. The current version is always available on this page." },
    ],
  },
  hr: {
    sections: [
      { h: "1. Podaci voditelja obrade", body: "Voditelj obrade: Xilofon Digital\nSjedište: [Adresa – popunite]\nE-mail: info@xilofon.com\nWeb stranica: https://xilofon.com" },
      { h: "2. Uvod", body: ["Xilofon Digital predano je zaštiti vaših osobnih podataka. Ova obavijest izrađena je u skladu s GDPR-om (Uredba 2016/679/EU) i primjenjivim zakonodavstvom.", "Važno: Ova web stranica ne koristi kolačiće (cookies) i ne primjenjuje nikakvu analitičku, marketinšku ili tehnologiju praćenja."] },
      { h: "3. Obrađeni podaci i svrhe", body: ["Kontakt forma – obrađeni podaci: Ime (identifikacija), E-mail adresa (slanje odgovora), Broj telefona (telefonski kontakt), Sadržaj poruke (procjena vaših potreba). Pravna osnova: Pristanak (GDPR čl. 6(1)(a)). Čuvanje: 2 godine.", "Podaci klijenta (ugovorni odnos): Podaci za naplatu, e-mail, broj telefona, detalji narudžbe. Pravna osnova: Izvršenje ugovora (GDPR čl. 6(1)(b)). Čuvanje: računi 8 godina, ostali zapisi 5 godina."] },
      { h: "4. Kolačići", body: "Ova web stranica ne koristi kolačiće. Ne koristi Google Analytics, Facebook Pixel niti bilo koji drugi alat za praćenje." },
      { h: "5. Prijenos podataka i izvršitelji obrade", body: ["Vaše podatke ne prodajemo trećim stranama.", "Usluga dostave e-pošte (Resend, Inc.): Koristi se za slanje vaše poruke. Posluje prema uvjetima kompatibilnim s GDPR-om.", "Pružatelj hostinga: Koristi se za rad web stranice."] },
      { h: "6. Vaša prava", body: ["Pravo pristupa", "Pravo na ispravak", "Pravo na brisanje", "Pravo na ograničenje obrade", "Pravo na prenosivost podataka", "Pravo na prigovor", "Pravo na povlačenje pristanka – Za ostvarivanje prava pišite na info@xilofon.com. Odgovor u roku od 30 dana."] },
      { h: "7. Pritužbe", body: "Pritužbu možete podnijeti Agenciji za zaštitu osobnih podataka (AZOP) u Republici Hrvatskoj. www.azop.hr" },
      { h: "8. Sigurnost podataka", body: "Podaci se prenose šifriranim kanalima (HTTPS/SSL). Podatke štitimo od neovlaštenog pristupa tehničkim i organizacijskim mjerama." },
      { h: "9. Izmjene ove obavijesti", body: "Zadržavamo pravo ažuriranja ove obavijesti. Aktualna verzija uvijek je dostupna na ovoj stranici." },
    ],
  },
  ro: {
    sections: [
      { h: "1. Datele operatorului", body: "Operator: Xilofon Digital\nSediu: [Adresă – completați]\nE-mail: info@xilofon.com\nSite web: https://xilofon.com" },
      { h: "2. Introducere", body: ["Xilofon Digital este angajat în protejarea datelor dumneavoastră personale. Această notificare a fost întocmită în conformitate cu GDPR (Regulamentul 2016/679/UE) și legislația aplicabilă.", "Important: Acest site web nu folosește cookie-uri și nu utilizează nicio tehnologie de analiză, marketing sau urmărire."] },
      { h: "3. Date prelucrate și scopuri", body: ["Formular de contact – date prelucrate: Nume (identificare), Adresă e-mail (trimitere răspuns), Număr de telefon (contact telefonic), Conținut mesaj (evaluarea nevoilor dumneavoastră). Temei juridic: Consimțământ (GDPR Art. 6(1)(a)). Păstrare: 2 ani.", "Date client (relație contractuală): Date de facturare, e-mail, număr de telefon, detalii comandă. Temei juridic: Executarea unui contract (GDPR Art. 6(1)(b)). Păstrare: facturi 8 ani, alte înregistrări 5 ani."] },
      { h: "4. Cookie-uri", body: "Acest site nu folosește cookie-uri. Nu utilizează Google Analytics, Facebook Pixel sau alte instrumente de urmărire." },
      { h: "5. Transferuri de date și împuterniciți", body: ["Nu vindem datele dumneavoastră unor terți.", "Serviciu de trimitere e-mail (Resend, Inc.): Folosit pentru a trimite mesajul dumneavoastră. Operează conform termenilor compatibili cu GDPR.", "Furnizor hosting: Folosit pentru operarea site-ului."] },
      { h: "6. Drepturile dumneavoastră", body: ["Dreptul de acces", "Dreptul la rectificare", "Dreptul la ștergere", "Dreptul la restricționarea prelucrării", "Dreptul la portabilitatea datelor", "Dreptul la opoziție", "Dreptul de a retrage consimțământul – Pentru exercitarea drepturilor, scrieți la info@xilofon.com. Răspuns în termen de 30 de zile."] },
      { h: "7. Reclamații", body: "Puteți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP). www.dataprotection.ro" },
      { h: "8. Securitatea datelor", body: "Datele sunt transmise prin canale criptate (HTTPS/SSL). Protejăm datele împotriva accesului neautorizat prin măsuri tehnice și organizatorice." },
      { h: "9. Modificări ale acestei notificări", body: "Ne rezervăm dreptul de a actualiza această notificare. Versiunea actuală este întotdeauna disponibilă pe această pagină." },
    ],
  },
};

function renderBody(body: string | string[]) {
  if (Array.isArray(body)) {
    return (
      <ul className="list-disc pl-5 space-y-1 mt-2">
        {body.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }
  return body.split("\n").map((line, i) => (
    <span key={i}>{line}<br /></span>
  ));
}

export default async function AdatkezelesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });
  const loc = locale in content ? locale : "hu";
  const { sections } = content[loc];

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t("title")}</h1>
        <p className="text-slate-400 dark:text-white/40 mb-10 text-sm">{t("effective")}</p>
        <div className="space-y-8 text-slate-600 dark:text-white/60 leading-relaxed text-sm">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{s.h}</h2>
              <p>{renderBody(s.body)}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
