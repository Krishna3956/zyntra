import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "The Joint Venture Process",
  description:
    "How a Zyntra joint venture works, step by step - from submitting your land to feasibility, structuring, approvals, construction, sales and your share.",
};

export default function JVProcessPage() {
  return (
    <ProsePage
      eyebrow="Joint Ventures"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Joint Ventures", href: "/joint-ventures" },
        { label: "The Process" },
      ]}
      title="From idle land to delivered project"
      description="A joint venture should feel structured and calm, not uncertain. Here is exactly how Zyntra takes your land from a first conversation to a finished, sold-through development."
      intro="Every joint venture follows the same disciplined path. You are kept informed at each stage, decisions rest on documented facts, and nothing moves forward without a registered agreement in place."
      steps={{
        title: "The five stages",
        items: [
          { n: "01", t: "Submit your land", b: "Share the location, size, zoning and title status through our JV form." },
          { n: "02", t: "Feasibility", b: "We assess the highest and best use, product mix and indicative economics." },
          { n: "03", t: "Structure", b: "We agree revenue or area share, security deposit and milestones, reviewed by both counsels." },
          { n: "04", t: "Approvals & build", b: "We manage sanctions, financing and construction to a delivered project." },
        ],
      }}
      sections={[
        {
          heading: "Stage 5 - Sell and share",
          paragraphs: [
            "Once the project is ready, we market and sell it through our buyer network and channels. You receive your share - cash on milestones in a revenue share, or possession of your units in an area share - cleanly and on schedule.",
          ],
        },
        {
          heading: "What you can expect throughout",
          bullets: [
            "A registered development agreement before any work begins",
            "Regular, transparent progress updates",
            "Payments and milestones you can audit",
            "Your own lawyer welcome to review every step",
          ],
        },
        {
          heading: "How long does it take?",
          paragraphs: [
            "Timelines depend on the size of the project and the approvals required, and we agree an indicative schedule up front with protections for delay. From the first conversation, feasibility and structuring typically move quickly - it is the sanctioning and construction phases that set the overall duration.",
          ],
        },
      ]}
      related={{
        title: "Explore joint ventures",
        links: [
          { label: "Landowner protection", href: "/joint-ventures/landowner-protection", desc: "The safeguards built into every deal." },
          { label: "Eligibility & documents", href: "/joint-ventures/eligibility", desc: "Is your land a fit? What you'll need." },
          { label: "Joint venture FAQ", href: "/joint-ventures/faq", desc: "Straight answers to common JV questions." },
        ],
      }}
      cta={{
        title: "Ready to start the process?",
        description: "It begins with a two-minute form. We take it from there with an honest feasibility view.",
        primaryLabel: "Submit your land",
        primaryHref: "/joint-ventures#enquiry",
      }}
    />
  );
}
