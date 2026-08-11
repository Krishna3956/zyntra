import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "NRI Services",
  description:
    "Zyntra helps NRIs buy, sell, rent, manage and develop Indian property remotely - with verified information, clear communication and trustworthy on-ground execution.",
};

export default function NRIPage() {
  return (
    <ProsePage
      eyebrow="Services"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "NRI Services" },
      ]}
      title="Your property, handled from afar"
      description="Managing property in India from another timezone is hard - distance breeds uncertainty and, too often, misuse. We are the on-ground team NRIs can actually trust."
      highlights={{
        title: "How we help NRIs",
        items: [
          { title: "Remote buying", body: "Verified listings, honest video walkthroughs and diligence, so you commit on facts from anywhere." },
          { title: "Remote selling", body: "We prepare, market and negotiate your sale, keeping you informed at every step." },
          { title: "Rental management", body: "Sourcing, screening, agreements and coordination so your unit earns without you chasing it." },
          { title: "Joint ventures", body: "Turn inherited or idle land into a developed asset - fully managed on your behalf." },
          { title: "Clear communication", body: "Updates that fit your timezone, with a single point of contact who actually responds." },
          { title: "Documentation help", body: "Guidance on the paperwork involved in NRI transactions." },
        ],
      }}
      sections={[
        {
          heading: "Built for distance",
          paragraphs: [
            "Everything we do is designed to work when you are not in the room - verified information, written records, and execution you can rely on. The goal is simple: you should feel as informed from abroad as you would standing on the site.",
          ],
        },
        {
          heading: "Please note",
          paragraphs: [
            "NRI property transactions can involve specific regulatory, tax and remittance considerations. We help coordinate and point you in the right direction, and we recommend confirming specifics with your own financial or tax advisor.",
          ],
        },
      ]}
      related={{
        title: "Related services",
        links: [
          { label: "Property management", href: "/services/property-management", desc: "Hands-off rentals while you are away." },
          { label: "Joint ventures", href: "/joint-ventures", desc: "Develop land you cannot manage yourself." },
          { label: "Legal & due diligence", href: "/services/legal-due-diligence", desc: "Verify remotely, commit with confidence." },
        ],
      }}
      cta={{
        title: "Managing Indian property from abroad?",
        description: "Tell us what you need. We will be your reliable eyes and hands on the ground.",
        primaryLabel: "Talk to us",
        primaryHref: "/contact",
      }}
    />
  );
}
