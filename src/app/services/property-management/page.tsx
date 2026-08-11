import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Property Management",
  description:
    "Hands-off rental management from Zyntra - tenant sourcing, screening, agreements, rent collection and coordination for owners in Gurugram and Indore.",
};

export default function PropertyManagementPage() {
  return (
    <ProsePage
      eyebrow="Services"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Property Management" },
      ]}
      title="Own the asset, skip the hassle"
      description="A rented property should generate income, not a to-do list. We handle the tenant lifecycle so your unit stays occupied, compliant and cared for."
      highlights={{
        title: "What we manage",
        items: [
          { title: "Tenant sourcing", body: "We market your unit and bring qualified, serious tenants - not just anyone who calls." },
          { title: "Screening", body: "Background and reference checks so you know who is moving in." },
          { title: "Agreements", body: "Properly drafted rent agreements that protect you and set clear terms." },
          { title: "Rent & deposits", body: "Coordination of rent collection, deposits and renewals so nothing slips." },
          { title: "Coordination", body: "A point of contact for the day-to-day, so tenants do not call you at midnight." },
          { title: "Re-letting", body: "When a tenant leaves, we turn the unit around and find the next one quickly." },
        ],
      }}
      sections={[
        {
          heading: "Who it is for",
          paragraphs: [
            "Owners who live elsewhere, NRIs, busy professionals, and anyone who would rather receive rent than chase it. If you own units from a joint venture area share, we can manage those too.",
          ],
        },
      ]}
      related={{
        title: "Related services",
        links: [
          { label: "Give a property on rent", href: "/rent", desc: "List your unit and find a tenant." },
          { label: "NRI services", href: "/services/nri", desc: "Manage Indian property from abroad." },
          { label: "Area share joint ventures", href: "/joint-ventures/area-share", desc: "Own units to rent for income." },
        ],
      }}
      cta={{
        title: "Turn your property into passive income.",
        description: "Tell us about your unit and we will take the day-to-day off your plate.",
        primaryLabel: "Manage my property",
        primaryHref: "/contact",
      }}
    />
  );
}
