import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Bed = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M2 16h20M5 10V7a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3" />
  </svg>
);

export const Bath = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12V6a2 2 0 0 1 2-2 1.7 1.7 0 0 1 1.7 1.7M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3ZM6 20l-1 2M18 20l1 2M8 6l.5-.5" />
  </svg>
);

export const Ruler = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 8h18v8H3zM7 8v3M11 8v4M15 8v3M19 8v4" />
  </svg>
);

export const Building = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 21V9h4a1 1 0 0 1 1 1v11M2 21h20M8 8h3M8 12h3M8 16h3" />
  </svg>
);

export const KeyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="7.5" cy="15.5" r="4.5" />
    <path d="m10.5 12.5 8-8M17 6l2 2M14 9l2 2" />
  </svg>
);

export const Handshake = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6a1 1 0 0 0 0-1.4L14 9.6M8.5 8.5 6 11a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l1-1M2 9l3-3 6 2M22 9l-3-3-4 1.5" />
  </svg>
);

export const Tag = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.6 13.4 13 21a1.4 1.4 0 0 1-2 0l-8-8V3h10l7.6 7.6a1.4 1.4 0 0 1 0 2Z" />
    <circle cx="7.5" cy="7.5" r="1.2" />
  </svg>
);

export const Search = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);

export const Chart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 3v18h18M7 15l3-4 3 2 4-6" />
  </svg>
);

export const Quote = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={0} fill="currentColor">
    <path d="M9.5 5C6.5 6.4 4.8 9 4.8 12.2c0 .5.1 1 .3 1.5A3.5 3.5 0 1 0 9 14.4c0-1.5-1-2.8-2.4-3.2.3-1.6 1.4-3 3-3.8L9.5 5Zm9 0c-3 1.4-4.7 4-4.7 7.2 0 .5.1 1 .3 1.5a3.5 3.5 0 1 0 3.9.7c0-1.5-1-2.8-2.4-3.2.3-1.6 1.4-3 3-3.8L18.5 5Z" />
  </svg>
);

export const Whatsapp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21l1.6-4.5A8.4 8.4 0 1 1 12 20.4a8.5 8.5 0 0 1-4-1L3 21Z" />
    <path d="M8.5 8.2c-.2 0-.4.1-.6.3-.2.3-.7.8-.7 1.8s.8 2.1 1 2.3c.1.2 1.5 2.4 3.8 3.3 1.9.7 2.3.6 2.7.6.4-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1l-.6-.3s-1-.5-1.2-.6c-.2-.1-.4-.1-.5.1l-.6.8c-.1.1-.2.2-.4.1a4.7 4.7 0 0 1-1.5-.9 5.6 5.6 0 0 1-1-1.3c-.1-.2 0-.3.1-.4l.3-.4.2-.4v-.4l-.6-1.4c-.1-.4-.3-.3-.5-.3h-.5Z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

export const LinkedIn = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1Z" />
  </svg>
);

export const iconForType = {
  buy: KeyIcon,
  sell: Tag,
  rent: Building,
  jv: Handshake,
} as const;
