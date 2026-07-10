"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Errors = Partial<Record<"name" | "phone" | "email" | "suburb" | "service", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const suburb = String(form.get("suburb") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!phone) nextErrors.phone = "Please enter a phone number.";
    if (!email) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!suburb) nextErrors.suburb = "Please enter your suburb.";
    if (!service) nextErrors.service = "Please choose a service.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const message = String(form.get("message") ?? "").trim();
      const subject = `Free quote request — ${service}`;
      const body = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Suburb: ${suburb}`,
        `Service: ${service}`,
        "",
        "Project details:",
        message || "(none provided)",
      ].join("\n");

      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setSubmitted(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">Get a free quote</h2>
          <p className="mt-3 text-charcoal-soft max-w-md">
            Tell us a bit about your project and we&apos;ll get back to you with a free,
            no-obligation quote.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-3 text-charcoal-soft hover:text-primary transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone size={18} />
              </span>
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-charcoal-soft hover:text-primary transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail size={18} />
              </span>
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 text-charcoal-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin size={18} />
              </span>
              {siteConfig.areaServed}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-charcoal/10 bg-white p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10">
              <CheckCircle2 size={40} className="text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-charcoal">Thanks — got it!</h3>
              <p className="mt-2 text-sm text-charcoal-soft max-w-xs">
                Your email app should now be open with your quote request ready to send to{" "}
                {siteConfig.email}. Just hit send.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" error={errors.name} autoComplete="name" />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  error={errors.phone}
                  autoComplete="tel"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  error={errors.email}
                  autoComplete="email"
                />
                <Field label="Suburb" name="suburb" error={errors.suburb} />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-charcoal">
                  Service needed
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                    errors.service ? "border-red-400" : "border-charcoal/20"
                  }`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {siteConfig.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-red-500">{errors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                  Project details (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Request my free quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 ${
          error ? "border-red-400" : "border-charcoal/20"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
