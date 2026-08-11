import Link from "next/link";

export function LogoMark({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="zyntraForest" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#16624b" />
          <stop offset="1" stopColor="#0a3327" />
        </linearGradient>
        <linearGradient id="zyntraGold" x1="10" y1="12" x2="38" y2="36">
          <stop stopColor="#d8bd86" />
          <stop offset="1" stopColor="#c6a15b" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13"
        fill="url(#zyntraForest)"
        stroke="url(#zyntraGold)"
        strokeWidth="1.4"
      />
      {/* stylised Z formed by roofline + base */}
      <path
        d="M15 17.5H33L17.5 30.5H33"
        stroke="url(#zyntraGold)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* subtle roof accent */}
      <path
        d="M14 18.5L24 12L34 18.5"
        stroke="#f7f3ea"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "dark",
  showWordmark = true,
}: {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}) {
  const wordColor = variant === "light" ? "text-paper" : "text-ink";
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Zyntra — home"
    >
      <LogoMark size={38} className="transition-transform duration-300 group-hover:scale-105" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.35rem] font-semibold tracking-tight ${wordColor}`}
          >
            Zyntra
          </span>
          <span
            className={`text-[0.6rem] font-medium uppercase tracking-[0.28em] ${
              variant === "light" ? "text-gold-soft" : "text-gold-deep"
            }`}
          >
            Real Estate
          </span>
        </span>
      )}
    </Link>
  );
}
