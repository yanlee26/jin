"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-charcoal/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal-soft hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-charcoal-soft hover:text-primary transition-colors"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-charcoal"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-charcoal/10 bg-cream px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-charcoal-soft hover:bg-cream-dark"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.phoneHref}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-charcoal-soft hover:bg-cream-dark"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
