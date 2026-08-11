import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Everything Zyntra does: buying, selling, renting and joint-venture development across Gurugram and Indore — advisory-grade, end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title="The whole property journey, under one roof."
        description="Four core services, each delivered with the same advisory discipline — so whether you're buying your first home or developing an acre, you're in one set of trusted hands."
      />

      <section className="container-page py-20 md:py-24">
        <ServicesGrid />
      </section>

      <section className="gradient-forest relative overflow-hidden py-20 text-paper md:py-24">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Our approach"
            title="The same four steps, every time"
            description="Consistency is a feature. Whatever the service, this is how Zyntra works."
            light
            align="center"
            className="mb-14"
          />
          <ProcessSteps />
        </div>
      </section>

      <CTASection />
    </>
  );
}
