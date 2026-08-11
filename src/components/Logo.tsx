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
      width={(size * 44) / 40}
      height={size}
      viewBox="0 0 44 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="zynGold" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e6cf95" />
          <stop offset="0.55" stopColor="#c9a24c" />
          <stop offset="1" stopColor="#9a7628" />
        </linearGradient>
        <linearGradient id="zynEmerald" x1="34" y1="4" x2="42" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2fb98d" />
          <stop offset="1" stopColor="#158063" />
        </linearGradient>
      </defs>
      {/* Bold Z ribbon monogram */}
      <path
        d="M8 8 H32 V13 L16.5 27 H32 V32 H8 V27 L23.5 13 H8 Z"
        fill="url(#zynGold)"
      />
      {/* Emerald gem accent */}
      <rect
        x="35.4"
        y="5.6"
        width="5.6"
        height="5.6"
        rx="1.3"
        transform="rotate(45 38.2 8.4)"
        fill="url(#zynEmerald)"
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
      aria-label="Zyntra home"
    >
      <LogoMark size={34} className="transition-transform duration-300 group-hover:scale-105" />
      {showWordmark && (
        <span
          className={`font-display text-[1.55rem] font-semibold leading-none tracking-tight ${wordColor}`}
        >
          Zyntra
        </span>
      )}
    </Link>
  );
}
