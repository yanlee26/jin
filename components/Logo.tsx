import { siteConfig } from "@/lib/site-config";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="10" fill="var(--color-primary)" />
        <path
          d="M12 9h9a5 5 0 0 1 0 10h-4v8h-5V9Zm5 6h3.5a1.5 1.5 0 0 0 0-3H17v3Z"
          fill="var(--color-cream)"
        />
      </svg>
      <span className="font-heading font-semibold text-lg leading-tight text-charcoal">
        {siteConfig.shortName}
      </span>
    </span>
  );
}
