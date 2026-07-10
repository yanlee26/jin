import { Building2, Fence, Home, PaintRoller, Sun } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const icons = [PaintRoller, Sun, Home, Building2, Fence];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">What we paint</h2>
        <p className="mt-3 text-charcoal-soft">
          From single rooms to full commercial fitouts, we cover every kind of painting job.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.services.map((service, i) => {
          const Icon = icons[i];
          return (
            <div
              key={service.title}
              className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
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
    </section>
  );
}
