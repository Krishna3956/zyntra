export const WEB3FORMS_ACCESS_KEY = "e209f40f-7f3b-425c-b525-6efb47eb0088";

export const site = {
  name: "Zyntra",
  tagline: "Real Estate, Reimagined",
  description:
    "Zyntra is a full-spectrum real estate house — buy, sell, rent, and co-develop premium property across Gurugram and Indore. Advisory, transactions and joint ventures, handled end to end.",
  email: "hello@zyntra.in",
  salesEmail: "sales@zyntra.in",
  phoneDisplay: "+91 98110 45678",
  phoneHref: "+919811045678",
  whatsapp: "+919811045678",
  url: "https://zyntra.in",
} as const;

export const offices = [
  {
    id: "gurugram",
    city: "Gurugram",
    region: "Haryana",
    label: "Gurugram — Head Office",
    address: "Zyntra House, SCO 23, Main Market, Sector 14, Gurugram, Haryana 122001",
    area: "Sector 14",
    phoneDisplay: "+91 98110 45678",
    phoneHref: "+919811045678",
    email: "gurugram@zyntra.in",
    hours: "Mon–Sat · 10:00 AM – 7:30 PM",
    mapQuery: "Sector 14 Main Market, Gurugram, Haryana 122001",
    blurb:
      "Our flagship office in the heart of old Gurugram — steps from Sector 14 market, minutes from the Delhi–Gurugram Expressway and Cyber Hub.",
  },
  {
    id: "indore",
    city: "Indore",
    region: "Madhya Pradesh",
    label: "Indore — Regional Office",
    address: "Zyntra House, 201 Scheme No. 54, Vijay Nagar, Indore, Madhya Pradesh 452010",
    area: "Vijay Nagar",
    phoneDisplay: "+91 90390 12345",
    phoneHref: "+919039012345",
    email: "indore@zyntra.in",
    hours: "Mon–Sat · 10:00 AM – 7:30 PM",
    mapQuery: "Vijay Nagar Square, Scheme 54, Indore, Madhya Pradesh 452010",
    blurb:
      "Our central-India base at Vijay Nagar Square — the commercial nerve centre of Indore, surrounded by the city's fastest-appreciating corridors.",
  },
] as const;

export const stats = [
  { value: "2", label: "Cities we operate in" },
  { value: "4", label: "Services, one roof" },
  { value: "100%", label: "Verified before we list" },
  { value: "1 day", label: "Typical response time" },
] as const;

export type ServiceKey = "buy" | "sell" | "rent" | "joint-ventures";

export const services: {
  key: ServiceKey;
  title: string;
  short: string;
  description: string;
  href: string;
  points: string[];
  icon: "buy" | "sell" | "rent" | "jv";
}[] = [
  {
    key: "buy",
    title: "Buy Property",
    short: "Find & acquire your next home or investment.",
    description:
      "Curated residential and commercial inventory, off-market opportunities, price benchmarking and end-to-end acquisition support — from shortlist to registry.",
    href: "/buy",
    icon: "buy",
    points: [
      "Handpicked, verified listings",
      "Off-market & pre-launch access",
      "Legal & title due diligence",
      "Home loan facilitation",
    ],
  },
  {
    key: "sell",
    title: "Sell Property",
    short: "List with us and reach serious, qualified buyers.",
    description:
      "Professional valuation, cinematic marketing, a vetted buyer network and disciplined negotiation to close at the right number — without the noise.",
    href: "/sell",
    icon: "sell",
    points: [
      "Data-backed valuation",
      "Photography & digital marketing",
      "Qualified buyer network",
      "Paperwork & closing support",
    ],
  },
  {
    key: "rent",
    title: "Rent — Lease or Let",
    short: "Take on rent or give on rent, hassle-free.",
    description:
      "Whether you want a place to live or income from a property you own, we match tenants and landlords, run background checks and manage agreements and handovers.",
    href: "/rent",
    icon: "rent",
    points: [
      "Tenant & landlord matching",
      "Background & document checks",
      "Rent agreements & registration",
      "Optional property management",
    ],
  },
  {
    key: "joint-ventures",
    title: "Joint Ventures",
    short: "Own land? Let's build on it, together.",
    description:
      "Bring your land; we bring capital, design, approvals and delivery. A transparent development partnership with clear revenue or area-share and milestone governance.",
    href: "/joint-ventures",
    icon: "jv",
    points: [
      "Land + development partnership",
      "Feasibility & design",
      "Approvals & construction",
      "Revenue / area-share models",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We understand your goal — a home, an exit, rental income or a development — and map the options that actually fit.",
  },
  {
    step: "02",
    title: "Diligence",
    body: "Title, valuation, approvals and numbers are verified up front, so every decision rests on facts, not hope.",
  },
  {
    step: "03",
    title: "Deal",
    body: "We negotiate, structure and paper the transaction — cleanly, transparently and in your interest.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "From registry to handover to post-sale support, we stay on until the outcome is genuinely done.",
  },
] as const;

export const differentiators = [
  {
    title: "Two cities, one standard",
    body: "The same disciplined, transparent process whether you're in Gurugram's Millennium City or Indore's growth corridors.",
  },
  {
    title: "Advisory, not just brokerage",
    body: "We're paid to be right, not just to close. Expect honest counsel — including when the answer is 'wait'.",
  },
  {
    title: "End-to-end, in-house",
    body: "Sourcing, legal, marketing, finance and development under one roof — fewer handoffs, fewer surprises.",
  },
  {
    title: "Skin in the game",
    body: "Through joint ventures we co-invest alongside landowners, so our incentives are genuinely aligned with yours.",
  },
];

export const testimonials = [
  {
    quote:
      "Zyntra sold our Sector 14 floor in five weeks at a number we didn't think was possible. Every step was documented and calm.",
    name: "Rohit & Ananya Mehra",
    role: "Sellers · Gurugram",
  },
  {
    quote:
      "We had ancestral land near Vijay Nagar sitting idle. Their joint venture turned it into a delivered project with a clean area-share. Genuinely fair partners.",
    name: "Suresh Agrawal",
    role: "Landowner · Indore",
  },
  {
    quote:
      "As an NRI buyer, trust was everything. The title diligence and video walkthroughs let me close from Dubai with total confidence.",
    name: "Kavita Nair",
    role: "Buyer · Gurugram",
  },
  {
    quote:
      "They found us a tenant in eleven days, ran the checks, and handled the agreement. Our flat has never sat empty since.",
    name: "Deepak Sharma",
    role: "Landlord · Indore",
  },
];

export const faqs = [
  {
    q: "Which cities does Zyntra operate in?",
    a: "We are currently active in Gurugram (head office in Sector 14) and Indore (regional office in Vijay Nagar). We selectively advise on transactions in the wider NCR and central-India corridors around these hubs.",
  },
  {
    q: "What does Zyntra actually do?",
    a: "Four things, end to end: help you buy property, help you sell property, handle rentals (both taking and giving on rent), and partner with landowners on joint-venture developments where we bring capital, design, approvals and delivery.",
  },
  {
    q: "How does a joint venture work?",
    a: "You contribute the land; Zyntra contributes development capital, design, approvals, construction and sales. Returns are shared as either a revenue-share or an area-share, governed by a registered agreement with clear milestones and audit rights. Every deal is structured transparently and reviewed by both parties' counsel.",
  },
  {
    q: "Do you charge buyers to search for property?",
    a: "Initial consultation and shortlisting are free. Standard brokerage applies only on a successful transaction, disclosed to you up front. There are no hidden fees.",
  },
  {
    q: "How do you verify listings and titles?",
    a: "Every property we take on goes through document and title verification. For buyers, we run independent legal due diligence — ownership chain, encumbrances, approvals and RERA status where applicable — before you commit.",
  },
  {
    q: "Can I list my property to sell or rent through the website?",
    a: "Yes. Use the Sell or Rent forms to submit your property details and share photos via a link. Our team reviews every submission, values it, and gets back to you — usually within one business day.",
  },
  {
    q: "Do you help with home loans and paperwork?",
    a: "Yes. We facilitate home-loan approvals with partner lenders and manage the full paperwork trail — agreement to sell, sale deed, registration and handover.",
  },
  {
    q: "How quickly will someone respond to my enquiry?",
    a: "Forms submitted through the site reach our team instantly. We aim to respond within one business day, and same-day for time-sensitive requests.",
  },
];

export const insights = [
  {
    slug: "gurugram-sector-14-guide",
    title: "Why Sector 14 is quietly Gurugram's most resilient address",
    excerpt:
      "Old Gurugram's original planned sector keeps outperforming on rental yield and liquidity. Here's what the data says — and who should be paying attention.",
    category: "Market Guide",
    city: "Gurugram",
    readTime: "6 min read",
    date: "Aug 2, 2026",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "indore-vijay-nagar-corridor",
    title: "Vijay Nagar: inside Indore's fastest-appreciating corridor",
    excerpt:
      "From a commercial square to a full-blown lifestyle destination — how Vijay Nagar re-rated, and where the next leg of value is likely to come from.",
    category: "Market Guide",
    city: "Indore",
    readTime: "7 min read",
    date: "Jul 24, 2026",
    image:
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "joint-venture-landowner-playbook",
    title: "The landowner's playbook for a fair joint venture",
    excerpt:
      "Revenue-share vs area-share, security deposits, milestone governance and the clauses that actually protect you. A plain-English guide before you sign.",
    category: "Joint Ventures",
    city: "Both cities",
    readTime: "9 min read",
    date: "Jul 11, 2026",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "renting-out-checklist",
    title: "Before you give your flat on rent: a 12-point checklist",
    excerpt:
      "Tenant screening, agreements, deposits, maintenance and taxes. The small things that decide whether renting out is passive income or a part-time job.",
    category: "Rentals",
    city: "Both cities",
    readTime: "5 min read",
    date: "Jun 29, 2026",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "first-time-buyer-nri",
    title: "The NRI's guide to buying property in India, without the anxiety",
    excerpt:
      "Power of attorney, repatriation, TDS, title diligence and remote closings. Everything an overseas buyer needs to move with confidence.",
    category: "Buying",
    city: "Both cities",
    readTime: "8 min read",
    date: "Jun 15, 2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "valuation-that-holds",
    title: "How to price a home so it sells — and the valuation still holds",
    excerpt:
      "Overpricing is the most expensive mistake in real estate. Here's the comparables-driven method we use to price for a real, timely close.",
    category: "Selling",
    city: "Both cities",
    readTime: "6 min read",
    date: "Jun 3, 2026",
    image:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80",
  },
];

export const navLinks = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Rent", href: "/rent" },
  { label: "Joint Ventures", href: "/joint-ventures" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];
