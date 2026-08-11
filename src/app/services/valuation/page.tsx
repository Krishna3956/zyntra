import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Valuation & Pricing",
  description:
    "Evidence-based property valuation and pricing from Zyntra - grounded in real comparables across Gurugram and Indore, so you neither overpay nor underprice.",
};

export default function ValuationPage() {
  return (
    <ProsePage
      eyebrow="Services"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Valuation & Pricing" },
      ]}
      title="Know what it is really worth"
      description="Pricing on hope is how sellers sit unsold and buyers overpay. We value on real, recent evidence - so your number holds up to scrutiny on both sides of the table."
      highlights={{
        title: "How we value",
        items: [
          { title: "Real comparables", body: "Actual recent transactions and live listings for genuinely similar properties." },
          { title: "Condition & specs", body: "Adjustments for floor, facing, condition, amenities and layout - the things that move price." },
          { title: "Micro-market read", body: "Local demand, supply and absorption in your specific pocket, not a city-wide average." },
          { title: "Purpose fit", body: "Whether the number is for a sale, a purchase, a rental or a development decision." },
        ],
      }}
      sections={[
        {
          heading: "For sellers",
          paragraphs: [
            "We help you set an asking price that attracts real buyers and survives their due diligence - priced to sell in a sensible window, not to sit.",
          ],
        },
        {
          heading: "For buyers",
          paragraphs: [
            "Before you commit, we tell you whether the asking price is fair - and where there is room to negotiate on evidence rather than instinct.",
          ],
        },
        {
          heading: "A note on estimates",
          paragraphs: [
            "A valuation is an informed opinion based on the evidence available, not a guaranteed sale price. The market ultimately decides. We give you the most honest, defensible number we can and show you the reasoning behind it.",
          ],
        },
      ]}
      related={{
        title: "Related services",
        links: [
          { label: "Sell your property", href: "/sell", desc: "List with a price that actually moves." },
          { label: "Property advisory", href: "/services/advisory", desc: "Independent counsel on your decision." },
          { label: "Buy a property", href: "/buy", desc: "Pay a fair, evidence-based price." },
        ],
      }}
      cta={{
        title: "Want an honest valuation?",
        description: "Share the property details and we will come back with a number and the evidence behind it.",
        primaryLabel: "Request a valuation",
        primaryHref: "/contact",
      }}
    />
  );
}
