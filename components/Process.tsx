import { siteConfig } from "@/lib/site-config";

export default function Process() {
  return (
    <section id="process" className="bg-cream-dark/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">How it works</h2>
          <p className="mt-3 text-charcoal-soft">
            A simple, straightforward process from first contact to finished job.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.process.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-heading font-semibold">
                {item.step}
              </div>
              <h3 className="mt-4 font-semibold text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm text-charcoal-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
