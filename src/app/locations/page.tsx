import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { OfficeCards } from "@/components/OfficeCards";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowRight } from "@/components/Icons";
import { properties } from "@/lib/properties";
import { offices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Locations — Gurugram & Indore",
  description:
    "Visit Zyntra at our Gurugram head office in Sector 14 or our Indore regional office at Vijay Nagar. Two cities, one standard of service.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Locations"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Locations" }]}
        title="Two cities. One standard of care."
        description="From Gurugram's Millennium City to Indore's rising corridors, Zyntra brings the same disciplined, transparent process to every doorstep we serve."
      />

      <section className="container-page py-16 md:py-20">
        <OfficeCards />
      </section>

      {/* City-wise inventory */}
      {offices.map((o, idx) => {
        const cityProps = properties
          .filter((p) => p.city === o.city)
          .slice(0, 3);
        return (
          <section
            key={o.id}
            className={idx % 2 === 0 ? "bg-cream py-16 md:py-20" : "py-16 md:py-20"}
          >
            <div className="container-page">
              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <SectionHeading
                  eyebrow={`${o.city} · ${o.area}`}
                  title={`Property in ${o.city}`}
                  description={o.blurb}
                />
                <Link
                  href={`/properties?city=${o.city}`}
                  className="btn btn-outline shrink-0"
                >
                  All {o.city} listings
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cityProps.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 70}>
                    <PropertyCard property={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Near Sector 14 or Vijay Nagar? Drop by."
        description="Walk in for a coffee and a candid conversation, or start online — either way, we're glad to help."
        primaryLabel="Plan a visit"
        primaryHref="/contact"
      />
    </>
  );
}
