import { Quote } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">What customers say</h2>
        <p className="mt-3 text-charcoal-soft">
          Sample feedback — swap these for real customer quotes once you have them.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm"
          >
            <Quote size={22} className="text-primary/50" />
            <p className="mt-3 text-sm text-charcoal-soft">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-charcoal">
              {t.name} <span className="font-normal text-charcoal-soft">— {t.location}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
