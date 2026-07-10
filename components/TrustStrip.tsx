import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function TrustStrip() {
  return (
    <section className="bg-primary/5 border-y border-primary/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-sm font-medium text-charcoal-soft"
            >
              <CheckCircle2 size={18} className="text-primary shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
