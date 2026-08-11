import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

const specialistServices = [
  { label: "Property advisory", href: "/services/advisory", desc: "Independent, evidence-based counsel on any property decision." },
  { label: "Legal & due diligence", href: "/services/legal-due-diligence", desc: "Title, encumbrance and approval checks before you commit." },
  { label: "Home loans", href: "/services/home-loans", desc: "Compare lenders and keep financing on schedule." },
  { label: "Property management", href: "/services/property-management", desc: "Hands-off tenant sourcing, agreements and coordination." },
  { label: "Valuation & pricing", href: "/services/valuation", desc: "Know what a property is really worth, on real evidence." },
  { label: "NRI services", href: "/services/nri", desc: "Buy, sell, rent and develop Indian property from abroad." },
  { label: "Documentation & registration", href: "/services/documentation", desc: "Agreements, registration and records, done properly." },
];

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Everything Zyntra does: buying, selling, renting and joint-venture development across Gurugram and Indore - advisory-grade, end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title="The whole property journey, under one roof."
        description="Four core services, each delivered with the same advisory discipline - so whether you're buying your first home or developing an acre, you're in one set of trusted hands."
      />

      <section className="container-page py-20 md:py-24">
        <ServicesGrid />
      </section>

      <section className="border-t border-ink/8 bg-cream py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Specialist support"
            title="The expertise behind every deal"
            description="Beyond the core four, an in-house bench that makes each transaction safer and smoother."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialistServices.map((s, i) => (
              <Reveal key={s.href} delay={i * 60}>
                <Link
                  href={s.href}
                  className="card card-lift group flex h-full items-start justify-between gap-4 p-6"
                >
                  <span>
                    <span className="block font-display text-lg font-semibold text-ink group-hover:text-forest">
                      {s.label}
                    </span>
                    <span className="mt-1 block text-sm text-stone">{s.desc}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-gold-deep" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
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
