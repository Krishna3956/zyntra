import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PropertiesExplorer } from "@/components/PropertiesExplorer";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Properties for Sale & Rent",
  description:
    "Browse verified properties for sale and rent across Gurugram (Sector 14) and Indore (Vijay Nagar) — apartments, villas, plots, commercial and office spaces.",
};

type ListingFilter = "all" | "sale" | "rent";
type CityFilter = "all" | "Gurugram" | "Indore";

const typeMap = ["Apartment", "Builder Floor", "Villa", "Plot", "Commercial", "Office"];

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ listing?: string; city?: string; type?: string }>;
}) {
  const sp = await searchParams;

  const listing: ListingFilter =
    sp.listing === "sale" || sp.listing === "rent" ? sp.listing : "all";
  const city: CityFilter =
    sp.city === "Gurugram" || sp.city === "Indore" ? sp.city : "all";
  const type = sp.type && typeMap.includes(sp.type) ? sp.type : "All types";

  return (
    <>
      <PageHeader
        eyebrow="Properties"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Properties" }]}
        title="Every listing, verified before you see it."
        description="A living catalogue of homes, plots, commercial and office space across our two cities. Filter, search and shortlist — then let us handle the rest."
      />
      <section className="container-page py-14 md:py-20">
        <PropertiesExplorer initialListing={listing} initialCity={city} initialType={type} />
      </section>
      <CTASection
        title="Can't find quite the right fit?"
        description="Our best inventory is often off-market. Tell us your brief and we'll source options that never make it to a public listing."
        primaryLabel="Share your requirement"
        primaryHref="/buy#buyer-enquiry"
      />
    </>
  );
}
