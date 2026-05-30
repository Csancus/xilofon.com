import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getDemoBySlug, demos } from "@/lib/demos";
import type { Locale } from "@/lib/demos";
import DemoPage from "@/components/DemoPage";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    demos.map((d) => ({ locale, slug: d.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) return {};
  const content = demo.content[locale as Locale];
  return {
    title: `${content.businessName} – minta weboldal | Xilofon Digital`,
    description: content.tagline,
  };
}

export default async function DemoSlugPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const demo = getDemoBySlug(slug);
  if (!demo) notFound();

  const loc = locale as Locale;
  const content = demo.content[loc];

  return <DemoPage demo={demo} content={content} locale={loc} />;
}
