"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-dark to-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary-dark">
              {t.common.areaServed} · {siteConfig.yearsExperience}+ {t.hero.yearsSuffix}
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-charcoal">
              {t.hero.tagline}
            </h1>
            <p className="mx-auto lg:mx-0 mt-4 max-w-2xl text-lg text-charcoal-soft">
              {t.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                {t.hero.quoteButton}
              </a>
              <a
                href={siteConfig.phoneHref}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal hover:bg-cream-dark transition-colors"
              >
                <Phone size={16} />
                {t.hero.callButton(siteConfig.phone)}
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <HeroIllustration className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
