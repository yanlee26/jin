import { siteConfig } from "@/lib/site-config";

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream-dark/60 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {siteConfig.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-charcoal/10 bg-white p-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-charcoal">
                {faq.question}
                <span className="ml-4 shrink-0 text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-charcoal-soft">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
