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

export default async function AszfPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AszfPage" });

  return (
    <div className="bg-zinc-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">{t("title")}</h1>
        <p className="text-white/40 mb-10 text-sm">{t("effective")}</p>

        <div className="space-y-8 text-white/60 leading-relaxed text-sm">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. A szolgáltató adatai</h2>
            <p>
              <strong className="text-white/80">Cégnév:</strong> Xilofon Digital<br />
              <strong className="text-white/80">Székhely:</strong> [Cím – töltsd ki]<br />
              <strong className="text-white/80">Adószám:</strong> [Adószám – töltsd ki]<br />
              <strong className="text-white/80">E-mail:</strong> info@xilofon.com<br />
              <strong className="text-white/80">Weboldal:</strong> https://xilofon.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Az ÁSZF hatálya</h2>
            <p>
              Jelen Általános Szerződési Feltételek (ÁSZF) a Xilofon Digital (Szolgáltató) és az általa nyújtott szolgáltatásokat igénybe vevő személyek (Megrendelő) közötti jogviszonyra vonatkoznak.
            </p>
            <p className="mt-3">
              A szolgáltatás megrendelésével a Megrendelő elfogadja a jelen ÁSZF-ben foglalt feltételeket.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. A szolgáltatások leírása</h2>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-white/80">Weboldal csomag (140 EUR/év):</strong> One-pager weboldal tervezése, elkészítése, domain regisztráció, hosting, szerkesztési hozzáférés és alapszintű SEO.</li>
              <li><strong className="text-white/80">Facebook & Social Media kezelés:</strong> Közösségi média tartalom és hirdetések.</li>
              <li><strong className="text-white/80">Google Business Profil:</strong> Profil létrehozása és optimalizálása.</li>
              <li><strong className="text-white/80">SEO tanácsadás:</strong> Keresőoptimalizálási tanácsadás és audit.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. A weboldal csomag részletei</h2>
            <p>Az éves díj <strong className="text-white/80">140 EUR + ÁFA</strong>, amelybe beletartozik:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>One-pager weboldal tervezése és elkészítése</li>
              <li>Domain regisztráció (1 év)</li>
              <li>Weboldal hosting és SSL tanúsítvány</li>
              <li>Szerkesztési hozzáférés</li>
              <li>Alapszintű SEO-optimalizálás</li>
              <li>Kapcsolatfelvételi form</li>
              <li>Support (e-mailben)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Megrendelés és fizetés</h2>
            <p>
              A megrendelés a kapcsolatfelvételi formon, e-mailben vagy telefonon kezdeményezhető. A díjbekérő kifizetése után indul a szolgáltatás. A megújítási díj az évforduló előtt 30 nappal kerül kiállításra.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Teljesítési határidő</h2>
            <p>
              A Szolgáltató a díj beérkezésétől számított 10 munkanapon belül elkészíti és élesíti a weboldalt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Elállás, felmondás</h2>
            <p>
              A fogyasztónak minősülő Megrendelő 14 napon belül elállhat a szerződéstől, ha a teljesítés még nem kezdődött meg. Az éves előfizetés év közben nem mondható fel visszatérítés igényével.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Felelősségkorlátozás</h2>
            <p>
              A Szolgáltató nem vállal felelősséget a keresési helyezésekért, látogatói számokért vagy ügyfélforgalomért, mivel ezeket külső tényezők befolyásolják.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Szerzői jogok</h2>
            <p>
              A weboldal design szellemi tulajdona a Szolgáltatónak. A Megrendelő jogosult az előfizetés ideje alatt üzleti célra használni. A design harmadik félnek nem adható át.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Panaszkezelés</h2>
            <p>
              Panasz esetén az info@xilofon.com e-mail-címen érhető el a Szolgáltató. A panaszra 5 munkanapon belül válasz érkezik.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Irányadó jog</h2>
            <p>
              Jelen ÁSZF-re a magyar jog az irányadó, különös tekintettel a Ptk.-ra és az elektronikus kereskedelmi szolgáltatásokról szóló törvényre.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">12. Módosítás</h2>
            <p>
              A Szolgáltató fenntartja a jogot az ÁSZF módosítására. A változásokról e-mailben értesíti a Megrendelőket. A módosítás a közzétételét követő 15. napon lép hatályba.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
