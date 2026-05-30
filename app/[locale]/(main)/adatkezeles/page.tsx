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

export default async function AdatkezelesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t("title")}</h1>
        <p className="text-slate-400 dark:text-white/40 mb-10 text-sm">{t("effective")}</p>

        <div className="space-y-8 text-slate-600 dark:text-white/60 leading-relaxed text-sm">

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">1. Adatkezelő adatai</h2>
            <p>
              <strong className="text-slate-800 dark:text-white/80">Adatkezelő neve:</strong> Xilofon Digital<br />
              <strong className="text-slate-800 dark:text-white/80">Székhely:</strong> [Cím – töltsd ki]<br />
              <strong className="text-slate-800 dark:text-white/80">E-mail:</strong> info@xilofon.com<br />
              <strong className="text-slate-800 dark:text-white/80">Weboldal:</strong> https://xilofon.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">2. Bevezetés</h2>
            <p>A Xilofon Digital elkötelezett az Ön személyes adatainak védelme iránt. Jelen tájékoztató a GDPR (2016/679/EU rendelet) és a vonatkozó magyar jogszabályokkal összhangban készült.</p>
            <p className="mt-3"><strong className="text-slate-800 dark:text-white/80">Fontos:</strong> Ez a weboldal nem használ sütit (cookie-t), és nem alkalmaz analitikai, marketing vagy nyomkövető technológiát.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">3. Kezelt adatok és az adatkezelés célja</h2>
            <h3 className="font-semibold text-slate-800 dark:text-white/80 mb-2 mt-4">3.1. Kapcsolatfelvételi form</h3>
            <p>Ha a kapcsolatfelvételi formot kitölti, az alábbi adatokat kezeljük:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-slate-800 dark:text-white/80">Név</strong> – azonosításhoz és megszólításhoz</li>
              <li><strong className="text-slate-800 dark:text-white/80">E-mail-cím</strong> – visszajelzés küldéséhez</li>
              <li><strong className="text-slate-800 dark:text-white/80">Telefonszám</strong> (opcionális) – telefonos kapcsolatfelvételhez</li>
              <li><strong className="text-slate-800 dark:text-white/80">Üzenet tartalma</strong> – az igény felméréséhez</li>
            </ul>
            <p className="mt-3">
              <strong className="text-slate-800 dark:text-white/80">Jogalap:</strong> Hozzájárulás (GDPR 6. cikk (1) a) pont).<br />
              <strong className="text-slate-800 dark:text-white/80">Cél:</strong> Kapcsolatfelvétel, ajánlatadás.<br />
              <strong className="text-slate-800 dark:text-white/80">Megőrzési idő:</strong> 2 év az utolsó kapcsolatfelvételtől.
            </p>
            <h3 className="font-semibold text-slate-800 dark:text-white/80 mb-2 mt-6">3.2. Ügyféladatok (szerződéses viszony)</h3>
            <p>Megrendelés esetén: számlázási adatok, e-mail, telefonszám, megrendelés részletei.</p>
            <p className="mt-3">
              <strong className="text-slate-800 dark:text-white/80">Jogalap:</strong> Szerződés teljesítése (GDPR 6. cikk (1) b) pont).<br />
              <strong className="text-slate-800 dark:text-white/80">Megőrzési idő:</strong> Számlák 8 év (számviteli törvény), egyéb iratok 5 év.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">4. Sütik (cookie-k)</h2>
            <p>Ez a weboldal <strong className="text-slate-800 dark:text-white/80">nem használ sütit</strong>. Nem alkalmaz Google Analytics, Facebook Pixel vagy egyéb nyomkövető eszközt.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">5. Adattovábbítás, adatfeldolgozók</h2>
            <p>Az Ön adatait harmadik félnek nem adjuk el. Az adatfeldolgozók:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-slate-800 dark:text-white/80">E-mail küldő szolgáltatás (Resend, Inc.):</strong> Az üzenet továbbításához. GDPR-kompatibilis feltételek szerint.</li>
              <li><strong className="text-slate-800 dark:text-white/80">Tárhelyszolgáltató:</strong> A weboldal üzemeltetéséhez.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">6. Az érintett jogai</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-slate-800 dark:text-white/80">Hozzáférési jog</strong></li>
              <li><strong className="text-slate-800 dark:text-white/80">Helyesbítési jog</strong></li>
              <li><strong className="text-slate-800 dark:text-white/80">Törlési jog</strong></li>
              <li><strong className="text-slate-800 dark:text-white/80">Az adatkezelés korlátozásához való jog</strong></li>
              <li><strong className="text-slate-800 dark:text-white/80">Adathordozhatóság</strong></li>
              <li><strong className="text-slate-800 dark:text-white/80">Tiltakozás joga</strong></li>
              <li><strong className="text-slate-800 dark:text-white/80">Hozzájárulás visszavonása</strong></li>
            </ul>
            <p className="mt-3">Jogai gyakorlásához írjon az <strong className="text-slate-800 dark:text-white/80">info@xilofon.com</strong> címre. Válasz 30 napon belül.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">7. Panasz, jogorvoslat</h2>
            <p>Panasz esetén a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat:</p>
            <p className="mt-2">
              <strong className="text-slate-800 dark:text-white/80">NAIH</strong><br />
              1055 Budapest, Falk Miksa utca 9–11.<br />
              <a href="https://www.naih.hu" className="text-violet-600 dark:text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">www.naih.hu</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">8. Adatbiztonság</h2>
            <p>Az adatokat titkosított csatornán (HTTPS/SSL) továbbítjuk. Technikai és szervezési intézkedésekkel védjük az adatokat a jogosulatlan hozzáféréstől.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">9. A tájékoztató módosítása</h2>
            <p>Fenntartjuk a jogot a tájékoztató módosítására. Az aktuális verzió mindig ezen az oldalon érhető el.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
