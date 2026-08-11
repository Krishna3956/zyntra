import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Joint Venture FAQ",
  description:
    "Answers to the questions landowners ask most about Zyntra joint ventures - structures, protection, costs, timelines and title.",
};

const jvFaqs = [
  {
    q: "What exactly is a joint venture with Zyntra?",
    a: "You contribute your land; Zyntra contributes the capital, design, approvals, construction and sales. We develop the property together and share the returns - either as a percentage of sales revenue, or as a share of the built-up area - governed by a registered development agreement.",
  },
  {
    q: "Do I have to pay anything upfront?",
    a: "No. There is zero upfront cost to you. Zyntra funds the development. In fact, we typically place a refundable security deposit with you, so the commitment runs both ways from day one.",
  },
  {
    q: "How are returns shared?",
    a: "Two ways. In a revenue share you receive an agreed percentage of the project's sales proceeds, paid on milestones. In an area share you receive a defined portion of the constructed area - units you can hold, rent or sell. We help you choose based on whether you want cash today or assets for tomorrow.",
  },
  {
    q: "How do I know I am protected?",
    a: "Every JV runs on a registered development agreement, a refundable security deposit, milestone-linked payments, and only limited, revocable authority - never a blanket power of attorney. We also encourage your own lawyer to review every clause before you sign.",
  },
  {
    q: "Do I keep ownership of my land?",
    a: "You retain ownership through the development, with title transferring only at the agreed points set out in the registered agreement. Nothing about your ownership changes on a handshake.",
  },
  {
    q: "What kind of land is suitable?",
    a: "Land in or around Gurugram and Indore with clear or clearable title, reasonable access, and residential, commercial or mixed-use potential. If you are unsure, send us the basics and we will assess it honestly.",
  },
  {
    q: "What if my title has issues?",
    a: "Often solvable. Our legal team can advise on mutation, boundary or documentation matters as part of assessing the opportunity. Be honest about the situation and we will tell you whether and how it can proceed.",
  },
  {
    q: "How long does a joint venture take?",
    a: "It depends on project size and the approvals required. We agree an indicative timeline up front, with protections for delay. Feasibility and structuring move quickly; sanctioning and construction set the overall duration.",
  },
  {
    q: "Is everything I share kept confidential?",
    a: "Yes. Land decisions are personal. Everything you share is treated as strictly confidential and used only to assess the opportunity.",
  },
];

export default function JVFaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: jvFaqs.map((f) => ({
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
        eyebrow="Joint Ventures"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Joint Ventures", href: "/joint-ventures" },
          { label: "FAQ" },
        ]}
        title="Joint venture questions, answered"
        description="The things landowners most want to know before partnering with us. Still wondering something? We are a message away."
      />
      <section className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Have a specific question?
              </h2>
              <p className="mt-3 text-stone">
                Land is personal. Reach our JV team directly and we will keep everything in
                confidence.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/joint-ventures#enquiry" className="btn btn-primary w-max">
                  Submit your land
                </Link>
                <Link href="/joint-ventures" className="btn btn-outline w-max">
                  Back to joint ventures
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={jvFaqs} />
          </Reveal>
        </div>
      </section>
      <CTASection
        title="That land isn't going to build itself."
        description="Send us the basics today. Within days you could have a feasibility view and a partnership proposal on the table."
        primaryLabel="Submit your land"
        primaryHref="/joint-ventures#enquiry"
      />
    </>
  );
}
