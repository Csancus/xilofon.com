import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo.png"
                alt="Xilofon"
                width={110}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Modern weboldal és digitális marketing kis- és egyéni vállalkozásoknak. Fix áron, átláthatóan.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigáció
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Főoldal</Link></li>
              <li><Link href="/szolgaltatasok" className="hover:text-white transition-colors">Szolgáltatások</Link></li>
              <li><Link href="/rolunk" className="hover:text-white transition-colors">Rólunk</Link></li>
              <li><Link href="/landing" className="hover:text-white transition-colors">Ajánlatkérés</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Jogi
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/aszf" className="hover:text-white transition-colors">Általános Szerződési Feltételek</Link></li>
              <li><Link href="/adatkezeles" className="hover:text-white transition-colors">Adatkezelési Tájékoztató</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Xilofon Digital. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}
