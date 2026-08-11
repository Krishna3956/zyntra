import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { OfficeCards } from "@/components/OfficeCards";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowRight } from "@/components/Icons";
import { offices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Locations - Gurugram & Indore",
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

      {/* City guides */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="City guides"
            title="Explore where we work"
            description="Dive into what Zyntra does in each city - our office, the areas we cover and how we can help."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {offices.map((o, i) => (
              <Reveal key={o.id} delay={i * 80}>
                <Link
                  href={`/locations/${o.id}`}
                  className="card card-lift group block h-full p-8"
                >
                  <span className="eyebrow text-gold-deep">
                    {o.city} / {o.area}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink group-hover:text-forest">
                    Real estate in {o.city}
                  </h3>
                  <p className="mt-3 text-stone">{o.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                    Explore {o.city}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Near Sector 14 or Vijay Nagar? Drop by."
        description="Walk in for a coffee and a candid conversation, or start online - either way, we're glad to help."
        primaryLabel="Plan a visit"
        primaryHref="/contact"
      />
    </>
  );
}
