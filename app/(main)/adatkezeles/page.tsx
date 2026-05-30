import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató",
  description: "A Xilofon Digital adatkezelési tájékoztatója. GDPR-megfelelő, cookie-mentes weboldal.",
};

export default function AdatkezelesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Adatkezelési Tájékoztató</h1>
      <p className="text-slate-500 mb-10">Hatályos: 2025. január 1-től | Utolsó frissítés: 2025. január 1.</p>

      <div className="space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Adatkezelő adatai</h2>
          <p>
            <strong>Adatkezelő neve:</strong> Xilofon Digital<br />
            <strong>Székhely:</strong> [Cím – töltsd ki]<br />
            <strong>Adószám:</strong> [Adószám – töltsd ki]<br />
            <strong>E-mail:</strong> info@xilofon.com<br />
            <strong>Weboldal:</strong> https://xilofon.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Bevezetés</h2>
          <p>
            A Xilofon Digital elkötelezett az Ön személyes adatainak védelme iránt. Jelen tájékoztató az Európai Unió Általános Adatvédelmi Rendeletével (GDPR – 2016/679/EU rendelet) és a vonatkozó magyar jogszabályokkal összhangban készült.
          </p>
          <p>
            <strong>Fontos:</strong> Ez a weboldal nem használ sütit (cookie-t). Nem alkalmaz analitikai, marketing vagy egyéb nyomkövető technológiát.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Kezelt adatok és az adatkezelés célja</h2>

          <h3 className="font-semibold text-slate-800 mb-2 mt-4">3.1. Kapcsolatfelvételi form</h3>
          <p>Ha az oldalon lévő kapcsolatfelvételi formot kitölti, az alábbi adatokat kezeljük:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Név</strong> – az üzenet azonosításához és személyes megszólításhoz</li>
            <li><strong>E-mail-cím</strong> – visszajelzés küldéséhez</li>
            <li><strong>Telefonszám</strong> (opcionális) – telefonos kapcsolatfelvételhez</li>
            <li><strong>Üzenet tartalma</strong> – az igény felméréshez</li>
          </ul>
          <p className="mt-3">
            <strong>Az adatkezelés jogalapja:</strong> Az érintett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).<br />
            <strong>Cél:</strong> Kapcsolatfelvétel, ajánlatadás, üzleti kommunikáció.<br />
            <strong>Megőrzési idő:</strong> Az utolsó kapcsolatfelvételtől számított 2 év, illetve üzleti kapcsolat esetén a jogszabályi kötelezettség szerint.
          </p>

          <h3 className="font-semibold text-slate-800 mb-2 mt-6">3.2. Ügyféladatok (szerződéses viszony esetén)</h3>
          <p>Megrendelés esetén az alábbi adatokat kezeljük a szerződéses kötelezettség teljesítése érdekében:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Számlázási név, cím, adószám</li>
            <li>E-mail-cím, telefonszám</li>
            <li>A megrendelés részletei</li>
          </ul>
          <p className="mt-3">
            <strong>Az adatkezelés jogalapja:</strong> Szerződés teljesítése (GDPR 6. cikk (1) bekezdés b) pont); jogi kötelezettség (c) pont).<br />
            <strong>Megőrzési idő:</strong> A számviteli törvény szerint 8 év (számlák), egyéb iratok esetén 5 év.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Sütik (cookie-k)</h2>
          <p>
            Ez a weboldal <strong>nem használ sütit (cookie-t)</strong>. Nem alkalmaz analitikai (pl. Google Analytics), marketing (pl. Facebook Pixel) vagy egyéb nyomkövető eszközt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Adattovábbítás, adatfeldolgozók</h2>
          <p>
            Az Ön adatait harmadik félnek nem adjuk el és nem adjuk át marketing célokra. Az adatokat a következő adatfeldolgozók kezelhetik:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>E-mail küldő szolgáltatás</strong> (pl. Resend, Inc.) – az Ön üzenetének továbbításához az adatkezelő e-mail-postafiókjába. Az adatfeldolgozó az EU GDPR-nek megfelelő adatfeldolgozási feltételek szerint működik.</li>
            <li><strong>Tárhelyszolgáltató</strong> – a weboldal üzemeltetéséhez (szerverlogok rövid ideig tárolódhatnak).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Az érintett jogai</h2>
          <p>Az Ön adatkezeléssel kapcsolatos jogai:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Hozzáférési jog:</strong> Tájékoztatást kérhet arról, hogy kezeljük-e az adatait, és azokhoz másolatot kérhet.</li>
            <li><strong>Helyesbítési jog:</strong> Kérheti a pontatlan adatok javítását.</li>
            <li><strong>Törlési jog:</strong> Kérheti adatai törlését, amennyiben az adatkezelés nem kötelező.</li>
            <li><strong>Az adatkezelés korlátozásához való jog:</strong> Kérheti az adatkezelés korlátozását.</li>
            <li><strong>Adathordozhatóság:</strong> Kérheti adatainak elektronikus formában való kiadását.</li>
            <li><strong>Tiltakozás:</strong> Tiltakozhat az adatkezelés ellen.</li>
            <li><strong>Hozzájárulás visszavonása:</strong> Ha az adatkezelés hozzájáruláson alapul, azt bármikor visszavonhatja.</li>
          </ul>
          <p className="mt-3">
            Jogai gyakorlásához írjon az <strong>info@xilofon.com</strong> e-mail-címre. A kérést 30 napon belül megválaszoljuk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Panasz, jogorvoslat</h2>
          <p>
            Ha úgy véli, hogy adatkezelésünk sérti a GDPR-t, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):
          </p>
          <p className="mt-2">
            <strong>NAIH</strong><br />
            Cím: 1055 Budapest, Falk Miksa utca 9-11.<br />
            Web: <a href="https://www.naih.hu" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">www.naih.hu</a><br />
            E-mail: ugyfelszolgalat@naih.hu
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Adatbiztonság</h2>
          <p>
            Az adatokat titkosított csatornán (HTTPS/SSL) továbbítjuk. Megfelelő technikai és szervezési intézkedésekkel védjük az adatokat a jogosulatlan hozzáférés, módosítás vagy törlés ellen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">9. A tájékoztató módosítása</h2>
          <p>
            Fenntartjuk a jogot a tájékoztató módosítására. A változásokról az oldalon tájékoztatjuk a látogatókat. Az aktuális verzió mindig ezen az oldalon érhető el.
          </p>
        </section>

      </div>
    </div>
  );
}
