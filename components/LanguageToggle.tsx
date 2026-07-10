"use client";

import { useLanguage } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="rounded-full border border-charcoal/20 px-3 py-1.5 text-xs font-semibold text-charcoal-soft hover:border-primary hover:text-primary transition-colors shrink-0"
      aria-label="Switch language"
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
