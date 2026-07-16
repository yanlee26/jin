"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const pairs = [
  { before: "/assets/project-1-before.jpg", after: "/assets/project-1-after.jpg" },
  { before: "/assets/project-2-before.jpg", after: "/assets/project-2-after.jpg" },
  // { before: "/assets/project-3-before.jpg", after: "/assets/project-3-after.jpg" },
  { before: "/assets/project-4-before.jpg", after: "/assets/project-4-after.jpg" },
  { before: "/assets/project-5-before.jpg", after: "/assets/project-5-after.jpg" },
  { before: "/assets/project-6-before.jpg", after: "/assets/project-6-after.jpg" },
];

// Extra clone at each end so the strip can scroll seamlessly past the real
// first/last slide; handleScroll snaps the loop back to the matching real
// slide once the user stops scrolling.
const slides = [pairs[pairs.length - 1], ...pairs, pairs[0]];

export default function BeforeAfterGallery() {
  const { t } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!zoomed) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setZoomed(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed]);

  function goToRaw(raw: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: raw * el.clientWidth, behavior: "smooth" });
  }

  function goToIndex(index: number) {
    goToRaw(index + 1);
  }

  function goPrev() {
    const el = scrollerRef.current;
    if (!el) return;
    goToRaw(Math.round(el.scrollLeft / el.clientWidth) - 1);
  }

  function goNext() {
    const el = scrollerRef.current;
    if (!el) return;
    goToRaw(Math.round(el.scrollLeft / el.clientWidth) + 1);
  }

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;

    const raw = Math.round(el.scrollLeft / el.clientWidth);
    if (raw >= 1 && raw <= pairs.length) {
      setActiveIndex(raw - 1);
    }

    if (settleTimer.current) clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      const el = scrollerRef.current;
      if (!el || el.clientWidth === 0) return;
      const raw = Math.round(el.scrollLeft / el.clientWidth);
      if (raw <= 0) {
        el.scrollTo({ left: pairs.length * el.clientWidth, behavior: "auto" });
      } else if (raw >= slides.length - 1) {
        el.scrollTo({ left: el.clientWidth, behavior: "auto" });
      }
    }, 120);
  }

  return (
    <>
      <section id="our-work" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">{t.ourWork.heading}</h2>
          <p className="mt-3 text-charcoal-soft">{t.ourWork.subheading}</p>
        </div>

        <div className="relative mt-12">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-2xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((pair, i) => (
              <div key={i} className="w-full shrink-0 snap-start px-1">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <figure className="relative">
                    <button
                      type="button"
                      onClick={() => setZoomed({ src: pair.before, alt: `${t.ourWork.before} ${i + 1}` })}
                      aria-label={t.ourWork.before}
                      className="relative block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-xl border border-charcoal/10 bg-surface"
                    >
                      <Image
                        src={pair.before}
                        alt={`${t.ourWork.before} ${i + 1}`}
                        fill
                        loading="lazy"
                        sizes="(min-width: 640px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </button>
                    <figcaption className="mt-2 text-center text-sm font-semibold text-charcoal-soft">
                      {t.ourWork.before}
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    <button
                      type="button"
                      onClick={() => setZoomed({ src: pair.after, alt: `${t.ourWork.after} ${i + 1}` })}
                      aria-label={t.ourWork.after}
                      className="relative block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-xl border border-charcoal/10 bg-surface"
                    >
                      <Image
                        src={pair.after}
                        alt={`${t.ourWork.after} ${i + 1}`}
                        fill
                        loading="lazy"
                        sizes="(min-width: 640px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </button>
                    <figcaption className="mt-2 text-center text-sm font-semibold text-primary">
                      {t.ourWork.after}
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label={t.ourWork.prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-surface border border-charcoal/10 shadow-sm text-charcoal hover:text-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={t.ourWork.next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-surface border border-charcoal/10 shadow-sm text-charcoal hover:text-primary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {pairs.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToIndex(i)}
              aria-label={`${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-primary" : "w-2 bg-charcoal/20"
              }`}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="flex items-center gap-1 rounded-full border border-charcoal/20 px-4 py-2 text-sm font-medium text-charcoal-soft"
          >
            <ChevronLeft size={16} />
            {t.ourWork.prev}
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex items-center gap-1 rounded-full border border-charcoal/20 px-4 py-2 text-sm font-medium text-charcoal-soft"
          >
            {t.ourWork.next}
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {zoomed && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4 sm:p-10"
          onClick={() => setZoomed(null)}
        >
          <button
            type="button"
            onClick={() => setZoomed(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
          >
            <X size={22} />
          </button>
          <div
            className="relative h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomed.src}
              alt={zoomed.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
