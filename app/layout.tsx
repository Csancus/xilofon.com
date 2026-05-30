import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Xilofon Digital | Weboldal készítés kis- és egyéni vállalkozásoknak",
    template: "%s | Xilofon Digital",
  },
  description:
    "Modern weboldal készítés fix 140 EUR/év áron. Google-barát one-pager oldalak, Facebook és social media kezelés, Google Business profil és SEO tanácsadás.",
  metadataBase: new URL("https://xilofon.com"),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen bg-zinc-950">{children}</body>
    </html>
  );
}
