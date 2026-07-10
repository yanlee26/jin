import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-charcoal/10 bg-cream-dark/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Logo />

          <nav className="flex flex-wrap justify-center gap-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-charcoal-soft hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-charcoal-soft text-center sm:text-right">
            <a href={siteConfig.phoneHref} className="block hover:text-primary transition-colors">
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-charcoal-soft">
          © {new Date().getFullYear()} {siteConfig.name}. Serving {siteConfig.areaServed}.
        </p>
      </div>
    </footer>
  );
}
