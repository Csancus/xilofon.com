import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AszfPage" });
  return { title: t("title") };
}

type Section = { h: string; body: string | string[] };

const content: Record<string, { sections: Section[] }> = {
  hu: {
    sections: [
      { h: "1. A szolgáltató adatai", body: "Cégnév: Xilofon Digital\nSzékhely: [Cím – töltsd ki]\nAdószám: [Adószám – töltsd ki]\nE-mail: info@xilofon.com\nWeboldal: https://xilofon.com" },
      { h: "2. Az ÁSZF hatálya", body: ["Jelen Általános Szerződési Feltételek (ÁSZF) a Xilofon Digital (Szolgáltató) és az általa nyújtott szolgáltatásokat igénybe vevő személyek (Megrendelő) közötti jogviszonyra vonatkoznak.", "A szolgáltatás megrendelésével a Megrendelő elfogadja a jelen ÁSZF-ben foglalt feltételeket."] },
      { h: "3. A szolgáltatások leírása", body: ["Weboldal csomag (140 EUR/év): One-pager weboldal tervezése, elkészítése, domain regisztráció, hosting, szerkesztési hozzáférés és alapszintű SEO.", "Facebook & Social Media kezelés: Közösségi média tartalom és hirdetések.", "Google Business Profil: Profil létrehozása és optimalizálása.", "SEO tanácsadás: Keresőoptimalizálási tanácsadás és audit."] },
      { h: "4. A weboldal csomag részletei", body: ["Az éves díj 140 EUR + ÁFA, amelybe beletartozik: one-pager weboldal, domain regisztráció (1 év), hosting és SSL tanúsítvány, szerkesztési hozzáférés, alapszintű SEO, kapcsolatfelvételi form, support (e-mailben)."] },
      { h: "5. Megrendelés és fizetés", body: "A megrendelés a kapcsolatfelvételi formon, e-mailben vagy telefonon kezdeményezhető. A díjbekérő kifizetése után indul a szolgáltatás. A megújítási díj az évforduló előtt 30 nappal kerül kiállításra." },
      { h: "6. Teljesítési határidő", body: "A Szolgáltató a díj beérkezésétől számított 10 munkanapon belül elkészíti és élesíti a weboldalt." },
      { h: "7. Elállás, felmondás", body: "A fogyasztónak minősülő Megrendelő 14 napon belül elállhat a szerződéstől, ha a teljesítés még nem kezdődött meg. Az éves előfizetés év közben nem mondható fel visszatérítés igényével." },
      { h: "8. Felelősségkorlátozás", body: "A Szolgáltató nem vállal felelősséget a keresési helyezésekért, látogatói számokért vagy ügyfélforgalomért, mivel ezeket külső tényezők befolyásolják." },
      { h: "9. Szerzői jogok", body: "A weboldal design szellemi tulajdona a Szolgáltatónak. A Megrendelő jogosult az előfizetés ideje alatt üzleti célra használni. A design harmadik félnek nem adható át." },
      { h: "10. Panaszkezelés", body: "Panasz esetén az info@xilofon.com e-mail-címen érhető el a Szolgáltató. A panaszra 5 munkanapon belül válasz érkezik." },
      { h: "11. Irányadó jog", body: "Jelen ÁSZF-re a magyar jog az irányadó, különös tekintettel a Ptk.-ra és az elektronikus kereskedelmi szolgáltatásokról szóló törvényre." },
      { h: "12. Módosítás", body: "A Szolgáltató fenntartja a jogot az ÁSZF módosítására. A változásokról e-mailben értesíti a Megrendelőket. A módosítás a közzétételét követő 15. napon lép hatályba." },
    ],
  },
  en: {
    sections: [
      { h: "1. Service provider details", body: "Company name: Xilofon Digital\nRegistered address: [Address – fill in]\nTax number: [Tax number – fill in]\nEmail: info@xilofon.com\nWebsite: https://xilofon.com" },
      { h: "2. Scope of Terms", body: ["These General Terms and Conditions (Terms) govern the legal relationship between Xilofon Digital (Service Provider) and any person using its services (Client).", "By placing an order, the Client accepts the conditions set out in these Terms."] },
      { h: "3. Description of services", body: ["Website package (€140/year): Design and build of a one-page website, domain registration, hosting, editing access and basic SEO.", "Facebook & Social Media management: Social media content and advertising.", "Google Business Profile: Profile creation and optimisation.", "SEO consulting: Search engine optimisation advice and audit."] },
      { h: "4. Website package details", body: ["The annual fee is €140 + VAT and includes: one-page website design and build, domain registration (1 year), hosting and SSL certificate, editing access, basic SEO, contact form, email support."] },
      { h: "5. Ordering and payment", body: "Orders can be placed via the contact form, by email or by phone. The service starts after payment of the invoice. The renewal invoice is issued 30 days before the anniversary date." },
      { h: "6. Delivery time", body: "The Service Provider will complete and launch the website within 10 business days of receiving payment." },
      { h: "7. Cancellation and withdrawal", body: "A Client who qualifies as a consumer may withdraw from the contract within 14 days, provided that performance has not yet begun. The annual subscription cannot be cancelled mid-year with a refund." },
      { h: "8. Limitation of liability", body: "The Service Provider accepts no liability for search rankings, visitor numbers or client volumes, as these are influenced by external factors." },
      { h: "9. Intellectual property", body: "The website design is the intellectual property of the Service Provider. The Client is entitled to use it for business purposes during the subscription period. The design may not be transferred to third parties." },
      { h: "10. Complaints", body: "Complaints can be submitted to info@xilofon.com. A response will be provided within 5 business days." },
      { h: "11. Governing law", body: "These Terms are governed by the laws of Hungary, in particular the Civil Code and the Act on Electronic Commerce." },
      { h: "12. Amendments", body: "The Service Provider reserves the right to amend these Terms. Clients will be notified by email. Amendments take effect 15 days after publication." },
    ],
  },
  hr: {
    sections: [
      { h: "1. Podaci o pružatelju usluga", body: "Naziv tvrtke: Xilofon Digital\nSjedište: [Adresa – popunite]\nOIB: [OIB – popunite]\nE-mail: info@xilofon.com\nWeb stranica: https://xilofon.com" },
      { h: "2. Primjena Općih uvjeta", body: ["Ovi Opći uvjeti poslovanja (OUP) uređuju pravni odnos između tvrtke Xilofon Digital (Pružatelj usluga) i osoba koje koriste njezine usluge (Naručitelj).", "Davanjem narudžbe Naručitelj prihvaća uvjete utvrđene u ovim OUP-ovima."] },
      { h: "3. Opis usluga", body: ["Web paket (140 EUR/god): Dizajn i izrada jednospratne web stranice, registracija domene, hosting, pristup uređivanju i osnovna SEO optimizacija.", "Facebook & upravljanje društvenim mrežama: Sadržaj i oglašavanje na društvenim mrežama.", "Google Business profil: Izrada i optimizacija profila.", "SEO savjetovanje: Savjetovanje i revizija optimizacije za tražilice."] },
      { h: "4. Detalji web paketa", body: ["Godišnja naknada iznosi 140 EUR + PDV i uključuje: dizajn i izradu jednospratne stranice, registraciju domene (1 godina), hosting i SSL certifikat, pristup uređivanju, osnovu SEO optimizaciju, kontakt formu, podršku putem e-maila."] },
      { h: "5. Naručivanje i plaćanje", body: "Narudžbe se mogu dati putem kontakt forme, e-mailom ili telefonom. Usluga počinje nakon plaćanja računa. Račun za obnovu izdaje se 30 dana prije datuma godišnjice." },
      { h: "6. Rok isporuke", body: "Pružatelj usluga dovršit će i objaviti web stranicu u roku od 10 radnih dana od primitka uplate." },
      { h: "7. Odustanak i raskid", body: "Naručitelj koji se smatra potrošačem može odustati od ugovora u roku od 14 dana, pod uvjetom da izvršenje još nije počelo. Godišnja pretplata ne može se otkazati usred godine uz povrat sredstava." },
      { h: "8. Ograničenje odgovornosti", body: "Pružatelj usluga ne prihvaća odgovornost za pozicije u pretraživačima, broj posjetitelja ili promet klijenata, budući da na to utječu vanjski čimbenici." },
      { h: "9. Intelektualno vlasništvo", body: "Dizajn web stranice intelektualno je vlasništvo Pružatelja usluga. Naručitelj ga ima pravo koristiti u poslovne svrhe za vrijeme trajanja pretplate. Dizajn se ne smije prenositi trećim stranama." },
      { h: "10. Pritužbe", body: "Pritužbe se mogu poslati na info@xilofon.com. Odgovor će biti poslan u roku od 5 radnih dana." },
      { h: "11. Mjerodavno pravo", body: "Na ove OUP-ove primjenjuje se hrvatsko pravo, a sporovi se rješavaju pred nadležnim sudovima u Republici Hrvatskoj." },
      { h: "12. Izmjene", body: "Pružatelj usluga zadržava pravo izmjene ovih OUP-ova. Naručitelji će biti obaviješteni e-mailom. Izmjene stupaju na snagu 15 dana od objave." },
    ],
  },
  ro: {
    sections: [
      { h: "1. Datele furnizorului de servicii", body: "Denumire firmă: Xilofon Digital\nSediu: [Adresă – completați]\nCUI: [CUI – completați]\nE-mail: info@xilofon.com\nSite web: https://xilofon.com" },
      { h: "2. Domeniul de aplicare", body: ["Acești Termeni și Condiții Generale (TCG) reglementează raportul juridic dintre Xilofon Digital (Furnizor) și persoanele care utilizează serviciile sale (Client).", "Prin plasarea unei comenzi, Clientul acceptă condițiile stabilite în acești TCG."] },
      { h: "3. Descrierea serviciilor", body: ["Pachet website (140 EUR/an): Design și realizare site one-page, înregistrare domeniu, hosting, acces editare și SEO de bază.", "Gestionare Facebook & Social Media: Conținut pentru rețele sociale și publicitate.", "Profil Google Business: Creare și optimizare profil.", "Consultanță SEO: Consultanță și audit pentru optimizarea motoarelor de căutare."] },
      { h: "4. Detalii pachet website", body: ["Taxa anuală este de 140 EUR + TVA și include: design și realizare site one-page, înregistrare domeniu (1 an), hosting și certificat SSL, acces editare, SEO de bază, formular de contact, suport prin e-mail."] },
      { h: "5. Comandă și plată", body: "Comenzile pot fi plasate prin formularul de contact, prin e-mail sau telefon. Serviciul începe după achitarea facturii. Factura de reînnoire se emite cu 30 de zile înainte de data aniversară." },
      { h: "6. Termen de livrare", body: "Furnizorul va finaliza și lansa site-ul în termen de 10 zile lucrătoare de la primirea plății." },
      { h: "7. Retragere și reziliere", body: "Clientul care se califică drept consumator poate renunța la contract în termen de 14 zile, cu condiția că executarea nu a început încă. Abonamentul anual nu poate fi anulat în cursul anului cu rambursare." },
      { h: "8. Limitarea răspunderii", body: "Furnizorul nu acceptă răspunderea pentru pozițiile în motoarele de căutare, numărul de vizitatori sau traficul de clienți, deoarece acestea sunt influențate de factori externi." },
      { h: "9. Proprietate intelectuală", body: "Design-ul site-ului este proprietatea intelectuală a Furnizorului. Clientul are dreptul să îl utilizeze în scopuri comerciale pe durata abonamentului. Design-ul nu poate fi transferat terților." },
      { h: "10. Reclamații", body: "Reclamațiile pot fi trimise la info@xilofon.com. Răspunsul va fi furnizat în termen de 5 zile lucrătoare." },
      { h: "11. Legea aplicabilă", body: "Acești TCG sunt guvernați de legislația română. Litigiile vor fi soluționate de instanțele competente din România." },
      { h: "12. Modificări", body: "Furnizorul își rezervă dreptul de a modifica acești TCG. Clienții vor fi notificați prin e-mail. Modificările intră în vigoare la 15 zile de la publicare." },
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

export default async function AszfPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AszfPage" });
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
