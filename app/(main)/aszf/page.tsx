import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek",
  description: "A Xilofon Digital általános szerződési feltételei.",
};

export default function AszfPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Általános Szerződési Feltételek</h1>
      <p className="text-slate-500 mb-10">Hatályos: 2025. január 1-től</p>

      <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">1. A szolgáltató adatai</h2>
          <p>
            <strong>Cégnév:</strong> Xilofon Digital<br />
            <strong>Székhely:</strong> [Cím – töltsd ki]<br />
            <strong>Adószám:</strong> [Adószám – töltsd ki]<br />
            <strong>E-mail:</strong> info@xilofon.com<br />
            <strong>Weboldal:</strong> https://xilofon.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Az ÁSZF hatálya</h2>
          <p>
            Jelen Általános Szerződési Feltételek (továbbiakban: ÁSZF) a Xilofon Digital (továbbiakban: Szolgáltató) és az általa nyújtott szolgáltatásokat igénybe vevő természetes vagy jogi személyek (továbbiakban: Megrendelő) között létrejött jogviszonyra vonatkoznak.
          </p>
          <p>
            A szolgáltatás megrendelésével a Megrendelő elfogadja a jelen ÁSZF-ben foglalt feltételeket.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">3. A szolgáltatások leírása</h2>
          <p>A Szolgáltató az alábbi szolgáltatásokat nyújtja:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Weboldal csomag (140 EUR/év):</strong> One-pager weboldal tervezése, elkészítése, domain regisztráció, hosting, szerkesztési hozzáférés biztosítása és alapszintű SEO-optimalizálás.</li>
            <li><strong>Facebook & Social Media kezelés:</strong> Közösségi média tartalom tervezése és kezelése, hirdetések futtatása.</li>
            <li><strong>Google Business Profil:</strong> Google Business profil létrehozása és optimalizálása.</li>
            <li><strong>SEO tanácsadás:</strong> Keresőoptimalizálási tanácsadás és audit.</li>
          </ul>
          <p className="mt-3">
            A Facebook & Social Media kezelés, a Google Business Profil és az SEO tanácsadás egyedi árajánlat alapján kerülnek díjazásra.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">4. A weboldal csomag részletei</h2>
          <p>
            A weboldal csomag éves előfizetéses konstrukcióban működik. Az éves díj <strong>140 EUR + ÁFA</strong>, amelybe beletartozik:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>One-pager weboldal tervezése és elkészítése</li>
            <li>Domain regisztráció (1 év, .hu vagy .com domain)</li>
            <li>Weboldal hosting</li>
            <li>SSL tanúsítvány</li>
            <li>Szerkesztési hozzáférés a Megrendelő számára</li>
            <li>Alapszintű SEO-optimalizálás</li>
            <li>Kapcsolatfelvételi form</li>
            <li>Magyar nyelvű support (e-mailben)</li>
          </ul>
          <p className="mt-3">
            A Megrendelő felelős az általa a weboldalra feltöltött tartalom jogszerűségéért és helyességéért.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Megrendelés és fizetés</h2>
          <p>
            A megrendelés a kapcsolatfelvételi formon, e-mailben vagy telefonon kezdeményezhető. A megrendelés visszaigazolása után a Szolgáltató díjbekérőt állít ki. A szolgáltatás a díj beérkezése után indul.
          </p>
          <p>
            A fizetés átutalással történik. A számlát a Szolgáltató elektronikusan küldi meg.
          </p>
          <p>
            A weboldal csomag éves előfizetés: a megújítási díj az évforduló előtt 30 nappal kerül kiállításra. Ha a Megrendelő a megújítást nem kívánja, ezt legalább 14 nappal az évforduló előtt jelzi.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Teljesítési határidő</h2>
          <p>
            A weboldal csomag esetén a Szolgáltató a díj beérkezésétől számított 10 munkanapon belül elkészíti és élesíti a weboldalt. Ennél hosszabb átfutási idő esetén a Szolgáltató tájékoztatja a Megrendelőt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Elállás, felmondás</h2>
          <p>
            A fogyasztónak minősülő Megrendelő az ÁSZF elfogadásától számított 14 napon belül indoklás nélkül elállhat a szerződéstől, amennyiben a szolgáltatás teljesítése még nem kezdődött meg. A digitális tartalom / szolgáltatás megkezdésével az elállási jog megszűnik, amennyiben a Megrendelő ehhez előzetesen hozzájárult.
          </p>
          <p>
            Az éves előfizetés év közben nem mondható fel visszatérítés igényével.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Felelősségkorlátozás</h2>
          <p>
            A Szolgáltató nem vállal felelősséget a weboldal által elért keresési helyezésekért, látogatói számokért vagy ügyfélforgalomért, mivel ezeket számos külső tényező befolyásolja.
          </p>
          <p>
            A Szolgáltató nem felelős a Megrendelő által a weboldalra feltöltött tartalomért, annak jogi megfelelőségéért.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Szerzői jogok</h2>
          <p>
            A Szolgáltató által készített weboldal design szellemi tulajdona a Szolgáltatónak. A Megrendelő jogosult a weboldalt üzleti célra használni az előfizetés ideje alatt. A design harmadik félnek nem adható át és nem másolható.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Panaszkezelés</h2>
          <p>
            Panasz esetén a Megrendelő az info@xilofon.com e-mail-címen érheti el a Szolgáltatót. A Szolgáltató a panaszt 5 munkanapon belül megválaszolja.
          </p>
          <p>
            Ha a panasz nem rendezhető peres úton, a Megrendelő a lakóhelye szerint illetékes békéltető testülethez fordulhat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Irányadó jog</h2>
          <p>
            Jelen ÁSZF-re és az annak alapján létrejött szerződésekre a magyar jog az irányadó, különös tekintettel a Polgári Törvénykönyvről szóló 2013. évi V. törvényre és az elektronikus kereskedelmi szolgáltatásokról szóló 2001. évi CVIII. törvényre.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">12. Módosítás</h2>
          <p>
            A Szolgáltató fenntartja a jogot az ÁSZF egyoldalú módosítására. A változásokról a Megrendelőket e-mailben értesíti. A módosítás a közzétételét követő 15. napon lép hatályba.
          </p>
        </section>

      </div>
    </div>
  );
}
