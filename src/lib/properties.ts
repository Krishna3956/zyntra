export type ListingType = "sale" | "rent";
export type PropertyType =
  | "Apartment"
  | "Builder Floor"
  | "Villa"
  | "Plot"
  | "Commercial"
  | "Office";

export interface Property {
  slug: string;
  title: string;
  type: PropertyType;
  listingType: ListingType;
  city: "Gurugram" | "Indore";
  locality: string;
  address: string;
  price: number; // absolute INR
  priceLabel: string; // formatted
  rentPeriod?: "month";
  beds?: number;
  baths?: number;
  area: number; // sq ft
  furnishing?: "Unfurnished" | "Semi-furnished" | "Fully furnished";
  possession?: string;
  featured?: boolean;
  status?: "Ready to move" | "Under construction" | "New launch";
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  reraId?: string;
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    slug: "sky-villa-sector-14-gurugram",
    title: "The Sky Villa · Sector 14",
    type: "Villa",
    listingType: "sale",
    city: "Gurugram",
    locality: "Sector 14",
    address: "Sector 14, Gurugram, Haryana",
    price: 62500000,
    priceLabel: "₹6.25 Cr",
    beds: 4,
    baths: 5,
    area: 3850,
    furnishing: "Semi-furnished",
    possession: "Ready to move",
    status: "Ready to move",
    featured: true,
    image: u("photo-1613490493576-7fde63acd811"),
    gallery: [
      u("photo-1613490493576-7fde63acd811", 1600),
      u("photo-1600585154340-be6161a56a0c", 1600),
      u("photo-1600607687939-ce8a6c25118c", 1600),
      u("photo-1600566753086-00f18fb6b3ea", 1600),
    ],
    description:
      "A rare corner-plot villa in old Gurugram's most established sector. Four generous bedroom suites, a double-height living room framed by full-height glazing, a landscaped courtyard and a private terrace with skyline views. Walking distance to Sector 14 market and minutes from the expressway.",
    highlights: [
      "Corner plot with triple-side open",
      "Double-height living with skylight",
      "Private terrace & landscaped court",
      "Two covered car parks",
    ],
    amenities: ["Modular kitchen", "Power backup", "24×7 security", "Piped gas", "Rainwater harvesting"],
    reraId: "RC/REP/HARERA/GGM/2024/1042",
  },
  {
    slug: "emerald-heights-3bhk-sector-14",
    title: "Emerald Heights · 3 BHK",
    type: "Apartment",
    listingType: "sale",
    city: "Gurugram",
    locality: "Sector 14",
    address: "Sector 14, Gurugram, Haryana",
    price: 24500000,
    priceLabel: "₹2.45 Cr",
    beds: 3,
    baths: 3,
    area: 1875,
    furnishing: "Semi-furnished",
    possession: "Ready to move",
    status: "Ready to move",
    featured: true,
    image: u("photo-1600210492486-724fe5c67fb0"),
    gallery: [
      u("photo-1600210492486-724fe5c67fb0", 1600),
      u("photo-1600047509807-ba8f99d2cdde", 1600),
      u("photo-1600566753190-17f0baa2a6c3", 1600),
    ],
    description:
      "A bright, efficiently-planned 3 BHK in a well-managed low-rise, ideal for families who want the buzz of Sector 14 with the calm of a gated community. South-facing living, cross ventilation and a large balcony overlooking green.",
    highlights: [
      "South-facing, cross-ventilated",
      "Low-rise gated community",
      "Club, gym & kids' play area",
      "Reserved covered parking",
    ],
    amenities: ["Clubhouse", "Gymnasium", "Lift", "Power backup", "Visitor parking"],
    reraId: "RC/REP/HARERA/GGM/2023/0918",
  },
  {
    slug: "cyber-court-office-suite-gurugram",
    title: "Cyber Court · Grade-A Office Suite",
    type: "Office",
    listingType: "sale",
    city: "Gurugram",
    locality: "Sector 14 / MG Road",
    address: "Near MG Road, Gurugram, Haryana",
    price: 41000000,
    priceLabel: "₹4.10 Cr",
    area: 2200,
    furnishing: "Fully furnished",
    possession: "Ready to move",
    status: "Ready to move",
    image: u("photo-1497366216548-37526070297c"),
    gallery: [
      u("photo-1497366216548-37526070297c", 1600),
      u("photo-1605276374104-dee2a0ed3cd6", 1600),
      u("photo-1524758631624-e2822e304c36", 1600),
    ],
    description:
      "A plug-and-play Grade-A office suite on a prime commercial stretch, fitted with cabins, workstations and a boardroom. Excellent metro and expressway connectivity, ample structured parking and a professional building management team.",
    highlights: [
      "Plug-and-play fit-out",
      "50+ workstation capacity",
      "Metro & expressway access",
      "Structured parking",
    ],
    amenities: ["Central A/C", "High-speed lifts", "100% power backup", "Cafeteria", "24×7 access"],
  },
  {
    slug: "the-orchard-4bhk-penthouse-gurugram",
    title: "The Orchard · 4 BHK Penthouse",
    type: "Apartment",
    listingType: "sale",
    city: "Gurugram",
    locality: "Sector 15",
    address: "Sector 15, Gurugram, Haryana",
    price: 38500000,
    priceLabel: "₹3.85 Cr",
    beds: 4,
    baths: 4,
    area: 2960,
    furnishing: "Semi-furnished",
    possession: "New launch",
    status: "New launch",
    featured: true,
    image: u("photo-1600585152220-90363fe7e115"),
    gallery: [
      u("photo-1600585152220-90363fe7e115", 1600),
      u("photo-1600585154526-990dced4db0d", 1600),
      u("photo-1600047509358-9dc75507daeb", 1600),
    ],
    description:
      "A duplex penthouse with a private plunge terrace, wrap-around views and imported fittings. Designed for those who want a signature home in a boutique tower of just twelve residences.",
    highlights: [
      "Duplex with private terrace",
      "Boutique tower, 12 homes",
      "Imported kitchen & baths",
      "Three-side open views",
    ],
    amenities: ["Infinity pool", "Sky lounge", "Concierge", "EV charging", "Home automation"],
    reraId: "RC/REP/HARERA/GGM/2025/1187",
  },
  {
    slug: "vijay-nagar-3bhk-indore",
    title: "Palladium Residences · 3 BHK",
    type: "Apartment",
    listingType: "sale",
    city: "Indore",
    locality: "Vijay Nagar",
    address: "Vijay Nagar, Indore, Madhya Pradesh",
    price: 11500000,
    priceLabel: "₹1.15 Cr",
    beds: 3,
    baths: 3,
    area: 1650,
    furnishing: "Semi-furnished",
    possession: "Ready to move",
    status: "Ready to move",
    featured: true,
    image: u("photo-1600566753086-00f18fb6b3ea"),
    gallery: [
      u("photo-1600566753086-00f18fb6b3ea", 1600),
      u("photo-1600585154340-be6161a56a0c", 1600),
      u("photo-1600607687939-ce8a6c25118c", 1600),
    ],
    description:
      "A modern 3 BHK in the heart of Vijay Nagar, minutes from C21 Mall and the city's best schools and hospitals. Contemporary elevation, efficient layout and a vibrant, amenity-rich community.",
    highlights: [
      "Heart of Vijay Nagar",
      "Walk to malls & schools",
      "Clubhouse & pool",
      "Two-level basement parking",
    ],
    amenities: ["Swimming pool", "Clubhouse", "Gym", "Landscaped garden", "24×7 security"],
    reraId: "P-IND-24-0771",
  },
  {
    slug: "scheme-54-commercial-showroom-indore",
    title: "Scheme 54 · Commercial Showroom",
    type: "Commercial",
    listingType: "sale",
    city: "Indore",
    locality: "Scheme No. 54, Vijay Nagar",
    address: "Scheme No. 54, Vijay Nagar, Indore, Madhya Pradesh",
    price: 32000000,
    priceLabel: "₹3.20 Cr",
    area: 2400,
    possession: "Ready to move",
    status: "Ready to move",
    image: u("photo-1582407947304-fd86f028f716"),
    gallery: [
      u("photo-1582407947304-fd86f028f716", 1600),
      u("photo-1486406146926-c627a92ad1ab", 1600),
      u("photo-1497366811353-6870744d04b2", 1600),
    ],
    description:
      "A high-visibility double-height showroom on Vijay Nagar's prime commercial spine, with frontage on a main arterial road and heavy footfall. Ideal for retail, flagship or F&B use.",
    highlights: [
      "Main-road frontage",
      "Double-height display",
      "High footfall catchment",
      "Ample front parking",
    ],
    amenities: ["Wide frontage", "Power backup", "Fire safety", "Service lift"],
  },
  {
    slug: "riverside-plot-indore",
    title: "Riverside Residency · Corner Plot",
    type: "Plot",
    listingType: "sale",
    city: "Indore",
    locality: "Nipania",
    address: "Nipania, Indore, Madhya Pradesh",
    price: 8500000,
    priceLabel: "₹85 Lakh",
    area: 2400,
    possession: "Ready to move",
    status: "Ready to move",
    image: u("photo-1500382017468-9049fed747ef"),
    gallery: [
      u("photo-1500382017468-9049fed747ef", 1600),
      u("photo-1416331108676-a22ccb276e35", 1600),
    ],
    description:
      "A clear-title, RERA-approved corner residential plot in a gated township near Nipania, with wide internal roads, underground services and a ready community. Build your own home on an appreciating address.",
    highlights: [
      "Gated, RERA-approved township",
      "Corner plot, two-side open",
      "Underground utilities",
      "Clear, marketable title",
    ],
    amenities: ["Gated entry", "Wide roads", "Park & clubhouse", "Street lighting"],
    reraId: "P-IND-23-0559",
  },
  {
    slug: "sector-14-3bhk-rent-gurugram",
    title: "Maple Court · 3 BHK for Rent",
    type: "Apartment",
    listingType: "rent",
    city: "Gurugram",
    locality: "Sector 14",
    address: "Sector 14, Gurugram, Haryana",
    price: 65000,
    priceLabel: "₹65,000",
    rentPeriod: "month",
    beds: 3,
    baths: 3,
    area: 1780,
    furnishing: "Fully furnished",
    possession: "Immediate",
    status: "Ready to move",
    featured: true,
    image: u("photo-1600607687939-ce8a6c25118c"),
    gallery: [
      u("photo-1600607687939-ce8a6c25118c", 1600),
      u("photo-1600585154340-be6161a56a0c", 1600),
      u("photo-1600047509807-ba8f99d2cdde", 1600),
    ],
    description:
      "A fully-furnished 3 BHK ready to move into, with premium appliances, a modular kitchen and a landscaped-facing balcony. Perfect for families or senior executives wanting a turnkey home in Sector 14.",
    highlights: [
      "Fully furnished, move-in ready",
      "Premium appliances included",
      "Gated society with club",
      "Reserved parking",
    ],
    amenities: ["Furnished", "AC in all rooms", "Power backup", "Gym", "Security"],
  },
  {
    slug: "office-space-rent-gurugram",
    title: "Workspace on MG Road · Office for Rent",
    type: "Office",
    listingType: "rent",
    city: "Gurugram",
    locality: "MG Road",
    address: "MG Road, Gurugram, Haryana",
    price: 180000,
    priceLabel: "₹1.80 Lakh",
    rentPeriod: "month",
    area: 2000,
    furnishing: "Fully furnished",
    possession: "Immediate",
    status: "Ready to move",
    image: u("photo-1524758631624-e2822e304c36"),
    gallery: [
      u("photo-1524758631624-e2822e304c36", 1600),
      u("photo-1497366216548-37526070297c", 1600),
    ],
    description:
      "A furnished, plug-and-play office on MG Road with cabins, an open workspace and a meeting room. Excellent metro connectivity and structured parking — ideal for a growing team.",
    highlights: ["Plug-and-play", "Metro connectivity", "Meeting rooms", "Structured parking"],
    amenities: ["Furnished", "Central A/C", "Power backup", "24×7 access", "Cafeteria"],
  },
  {
    slug: "vijay-nagar-2bhk-rent-indore",
    title: "Aster Homes · 2 BHK for Rent",
    type: "Apartment",
    listingType: "rent",
    city: "Indore",
    locality: "Vijay Nagar",
    address: "Vijay Nagar, Indore, Madhya Pradesh",
    price: 28000,
    priceLabel: "₹28,000",
    rentPeriod: "month",
    beds: 2,
    baths: 2,
    area: 1150,
    furnishing: "Semi-furnished",
    possession: "Immediate",
    status: "Ready to move",
    image: u("photo-1522708323590-d24dbb6b0267"),
    gallery: [
      u("photo-1522708323590-d24dbb6b0267", 1600),
      u("photo-1600566753086-00f18fb6b3ea", 1600),
    ],
    description:
      "A comfortable semi-furnished 2 BHK in a family-friendly society in Vijay Nagar, close to schools, hospitals and the C21 Mall. Bright, airy and well-maintained.",
    highlights: ["Family society", "Close to malls & schools", "Semi-furnished", "Covered parking"],
    amenities: ["Modular kitchen", "Lift", "Power backup", "Security", "Park"],
  },
  {
    slug: "builder-floor-sector-15-gurugram",
    title: "Heritage Floors · Independent Builder Floor",
    type: "Builder Floor",
    listingType: "sale",
    city: "Gurugram",
    locality: "Sector 15",
    address: "Sector 15, Gurugram, Haryana",
    price: 18500000,
    priceLabel: "₹1.85 Cr",
    beds: 3,
    baths: 3,
    area: 1980,
    furnishing: "Unfurnished",
    possession: "Ready to move",
    status: "Ready to move",
    image: u("photo-1568605114967-8130f3a36994"),
    gallery: [
      u("photo-1568605114967-8130f3a36994", 1600),
      u("photo-1570129477492-45c003edd2be", 1600),
    ],
    description:
      "A spacious independent builder floor with its own entrance, stilt parking and a private terrace on the top floor. Low-density living with the freedom of an independent home.",
    highlights: ["Independent entrance", "Stilt parking", "Private terrace (top floor)", "Low density"],
    amenities: ["Modular kitchen", "Power backup", "Piped gas", "Terrace"],
  },
  {
    slug: "super-corridor-plot-indore",
    title: "Super Corridor · Investment Plot",
    type: "Plot",
    listingType: "sale",
    city: "Indore",
    locality: "Super Corridor",
    address: "Super Corridor, Indore, Madhya Pradesh",
    price: 6200000,
    priceLabel: "₹62 Lakh",
    area: 1800,
    possession: "Ready to move",
    status: "Ready to move",
    image: u("photo-1416331108676-a22ccb276e35"),
    gallery: [
      u("photo-1416331108676-a22ccb276e35", 1600),
      u("photo-1500382017468-9049fed747ef", 1600),
    ],
    description:
      "A well-located plot on Indore's Super Corridor — the city's marquee growth axis linking the airport, IT parks and new institutional campuses. A clean, appreciating land banking opportunity.",
    highlights: ["Super Corridor growth axis", "Near airport & IT parks", "Clear title", "High appreciation"],
    amenities: ["Approved layout", "Wide roads", "Utilities ready"],
    reraId: "P-IND-24-0803",
  },
];

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export const featuredProperties = properties.filter((p) => p.featured);
