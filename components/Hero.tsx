import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-dark to-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 text-center">
        <p className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary-dark">
          {siteConfig.areaServed} · {siteConfig.yearsExperience}+ years experience
        </p>
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-charcoal">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-soft">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Get a Free Quote
          </a>
          <a
            href={siteConfig.phoneHref}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal hover:bg-cream-dark transition-colors"
          >
            <Phone size={16} />
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
