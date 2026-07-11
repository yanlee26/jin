"use client";

import { DoorClosed, Droplets, Trees, Waves } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [DoorClosed, Droplets, Waves, Trees];

export default function PropertyServices() {
  const { t } = useLanguage();

  return (
    <section id="property-services" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            {t.propertyServices.heading}
          </h2>
          <p className="mt-3 text-charcoal-soft">{t.propertyServices.subheading}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.propertyServices.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-charcoal/10 bg-surface p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal">{service.title}</h3>
                <p className="mt-2 text-sm text-charcoal-soft">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
