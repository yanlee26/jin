"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";

type Errors = Partial<Record<"name" | "phone" | "email" | "suburb" | "service", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function BookingForm() {
  const { t } = useLanguage();
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
    if (!name) nextErrors.name = t.bookingForm.errors.name;
    if (!phone) nextErrors.phone = t.bookingForm.errors.phone;
    if (!email) {
      nextErrors.email = t.bookingForm.errors.email;
    } else if (!emailPattern.test(email)) {
      nextErrors.email = t.bookingForm.errors.emailInvalid;
    }
    if (!suburb) nextErrors.suburb = t.bookingForm.errors.suburb;
    if (!service) nextErrors.service = t.bookingForm.errors.service;

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const message = String(form.get("message") ?? "").trim();
      const eb = t.bookingForm.emailBody;
      const subject = `${t.bookingForm.subjectPrefix} — ${service}`;
      const body = [
        `${eb.nameLabel}: ${name}`,
        `${eb.phoneLabel}: ${phone}`,
        `${eb.emailLabel}: ${email}`,
        `${eb.suburbLabel}: ${suburb}`,
        `${eb.serviceLabel}: ${service}`,
        "",
        eb.detailsLabel,
        message || eb.noneProvided,
      ].join("\n");

      const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.click();

      setSubmitted(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            {t.bookingForm.heading}
          </h2>
          <p className="mt-3 text-charcoal-soft max-w-md">{t.bookingForm.description}</p>

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
              {t.common.areaServed}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-charcoal/10 bg-surface p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10">
              <CheckCircle2 size={40} className="text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-charcoal">
                {t.bookingForm.success.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal-soft max-w-xs">
                {t.bookingForm.success.description(siteConfig.email)}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                {t.bookingForm.success.sendAnother}
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label={t.bookingForm.fields.name}
                  name="name"
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label={t.bookingForm.fields.phone}
                  name="phone"
                  type="tel"
                  error={errors.phone}
                  autoComplete="tel"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label={t.bookingForm.fields.email}
                  name="email"
                  type="email"
                  error={errors.email}
                  autoComplete="email"
                />
                <Field
                  label={t.bookingForm.fields.suburb}
                  name="suburb"
                  error={errors.suburb}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-charcoal">
                  {t.bookingForm.fields.service}
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className={`mt-1 w-full rounded-lg border bg-surface px-3 py-2 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                    errors.service ? "border-red-400" : "border-charcoal/20"
                  }`}
                >
                  <option value="" disabled>
                    {t.bookingForm.selectPlaceholder}
                  </option>
                  {t.bookingForm.serviceOptions.map((option) => (
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
                  {t.bookingForm.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-charcoal/20 bg-surface px-3 py-2 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder={t.bookingForm.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                {t.bookingForm.submitButton}
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
        className={`mt-1 w-full rounded-lg border bg-surface px-3 py-2 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 ${
          error ? "border-red-400" : "border-charcoal/20"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
