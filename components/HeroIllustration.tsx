export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 420"
      className={className}
      role="img"
      aria-label="Illustration of a house being freshly painted"
    >
      {/* backdrop */}
      <circle cx="240" cy="230" r="190" fill="var(--color-primary)" opacity="0.07" />

      {/* sun */}
      <circle cx="70" cy="70" r="26" fill="var(--color-primary-light)" opacity="0.5" />

      {/* ground */}
      <line
        x1="30"
        y1="374"
        x2="450"
        y2="374"
        stroke="var(--color-charcoal)"
        strokeOpacity="0.15"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* roof */}
      <polygon points="100,180 240,88 380,180" fill="var(--color-charcoal)" />
      <rect x="298" y="108" width="26" height="52" fill="var(--color-charcoal)" />

      {/* wall */}
      <rect
        x="120"
        y="180"
        width="240"
        height="170"
        rx="6"
        fill="var(--color-cream-dark)"
        stroke="var(--color-charcoal)"
        strokeWidth="4"
      />

      {/* left window */}
      <rect
        x="145"
        y="208"
        width="52"
        height="52"
        rx="4"
        fill="var(--color-cream)"
        stroke="var(--color-charcoal)"
        strokeWidth="3"
      />
      <line x1="171" y1="208" x2="171" y2="260" stroke="var(--color-charcoal)" strokeWidth="3" />
      <line x1="145" y1="234" x2="197" y2="234" stroke="var(--color-charcoal)" strokeWidth="3" />

      {/* door */}
      <rect x="222" y="270" width="56" height="80" rx="6" fill="var(--color-primary-dark)" />
      <circle cx="266" cy="312" r="3" fill="var(--color-cream)" />

      {/* fresh paint swipe on the right side of the wall */}
      <g transform="rotate(-3 317 270)">
        <rect x="290" y="200" width="55" height="140" rx="14" fill="var(--color-primary)" />
        <rect x="290" y="200" width="14" height="140" rx="7" fill="var(--color-primary-light)" />
      </g>

      {/* roller tool mid-stroke at the top of the swipe */}
      <line
        x1="345"
        y1="150"
        x2="315"
        y2="196"
        stroke="var(--color-charcoal)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="345" cy="150" r="6" fill="var(--color-charcoal)" />
      <rect
        x="296"
        y="185"
        width="46"
        height="20"
        rx="10"
        fill="var(--color-primary-light)"
        stroke="var(--color-primary-dark)"
        strokeWidth="3"
        transform="rotate(-35 319 195)"
      />

      {/* paint can on the ground */}
      <ellipse cx="85" cy="330" rx="25" ry="7" fill="var(--color-charcoal)" />
      <rect
        x="60"
        y="330"
        width="50"
        height="44"
        rx="6"
        fill="var(--color-cream)"
        stroke="var(--color-charcoal)"
        strokeWidth="3"
      />
      <rect x="60" y="344" width="50" height="14" fill="var(--color-primary)" />
      <path d="M95 374 q4 10 -2 16 q-6 -2 -3 -12 Z" fill="var(--color-primary)" />

      {/* sparkle accents */}
      <circle cx="420" cy="120" r="5" fill="var(--color-primary-light)" />
      <circle cx="435" cy="145" r="3" fill="var(--color-primary-light)" />
      <circle cx="405" cy="100" r="3" fill="var(--color-primary-light)" />
    </svg>
  );
}
