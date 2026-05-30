import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["hu", "en", "hr", "ro"] as const,
  defaultLocale: "hu",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
