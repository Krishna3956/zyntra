import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about buying, selling, renting and joint ventures with Zyntra across Gurugram and Indore.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="FAQs"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        title="Questions, answered plainly."
        description="The things people most often ask us about how Zyntra works. Can't find your answer? Our team is a message away."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Still wondering something?
              </h2>
              <p className="mt-3 text-stone">
                No question is too small. Reach out and a real person from Zyntra will get back to
                you — usually within a business day.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="btn btn-primary w-max">
                  Ask us anything
                </Link>
                <Link href="/about" className="btn btn-outline w-max">
                  Learn about Zyntra
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
