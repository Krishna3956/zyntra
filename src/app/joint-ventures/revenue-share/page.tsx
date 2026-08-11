import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Revenue Share Joint Ventures",
  description:
    "Understand Zyntra's revenue-share joint venture model: you contribute land, we develop and sell, and you receive an agreed percentage of sales proceeds - free of construction risk.",
};

export default function RevenueSharePage() {
  return (
    <ProsePage
      eyebrow="Joint Ventures"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Joint Ventures", href: "/joint-ventures" },
        { label: "Revenue Share" },
      ]}
      title="Revenue-share joint ventures"
      description="The simplest way to unlock value from your land: contribute the plot, and receive an agreed share of the project's sales proceeds - in cash, on milestones, with no construction risk to you."
      intro="A revenue share is ideal for landowners who want liquidity rather than built inventory. You retain ownership until agreed handover points, Zyntra funds and delivers the project, and the sales revenue is split by a pre-agreed percentage set out in a registered agreement."
      sections={[
        {
          heading: "How it works",
          paragraphs: [
            "Once we agree the development plan and your revenue-share percentage, Zyntra takes on the entire lifecycle - design, approvals, financing, construction and sales. As units are sold, proceeds are shared with you according to the agreement.",
          ],
        },
        {
          heading: "Why landowners choose it",
          bullets: [
            "You receive cash, not unsold inventory",
            "No construction, market or funding risk on your side",
            "Payments are tied to clear, auditable milestones",
            "Zero upfront cost to you",
          ],
        },
        {
          heading: "What we agree up front",
          bullets: [
            "Your revenue-share percentage",
            "Milestone-linked payment schedule",
            "Refundable security deposit from Zyntra",
            "Project timeline with delay protections",
          ],
        },
      ]}
      steps={{
        title: "The revenue-share journey",
        items: [
          { t: "Feasibility", b: "We study the best use of your land and model the numbers." },
          { t: "Structure", b: "We agree your revenue percentage, security and milestones." },
          { t: "Develop", b: "We fund, approve and build the project end to end." },
          { t: "Share", b: "As units sell, you receive your share on schedule." },
        ],
      }}
      related={{
        title: "Explore joint ventures",
        links: [
          { label: "Area / built-up share", href: "/joint-ventures/area-share", desc: "Take a share of the constructed area instead of cash." },
          { label: "Landowner protection", href: "/joint-ventures/landowner-protection", desc: "How every JV is structured to protect you." },
          { label: "The JV process", href: "/joint-ventures/process", desc: "From idle land to delivered project, step by step." },
        ],
      }}
      cta={{
        title: "Curious what your land could earn?",
        description: "Send us the basics and we will come back with an honest feasibility view and an indicative revenue-share structure.",
        primaryLabel: "Submit your land",
        primaryHref: "/joint-ventures#enquiry",
      }}
    />
  );
}
