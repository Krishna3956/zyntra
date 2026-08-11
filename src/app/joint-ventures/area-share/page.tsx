import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Area Share Joint Ventures",
  description:
    "Zyntra's area-share (built-up share) joint venture model: contribute your land and receive a defined share of the constructed area to hold, sell or rent.",
};

export default function AreaSharePage() {
  return (
    <ProsePage
      eyebrow="Joint Ventures"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Joint Ventures", href: "/joint-ventures" },
        { label: "Area Share" },
      ]}
      title="Area / built-up share joint ventures"
      description="Believe in your location's long-term upside? Take a defined share of the constructed area - real, appreciating assets you can hold, sell or rent on your own timeline."
      intro="In an area share, instead of cash you receive an agreed portion of the finished development - specific units or a percentage of the built-up area. It suits landowners who want to build long-term wealth in a location they trust rather than exit at completion."
      sections={[
        {
          heading: "How it works",
          paragraphs: [
            "We agree your share of the constructed area up front. Zyntra funds and delivers the project, and on completion you take ownership of your allotted units. You can keep them, rent them for income, or ask us to sell them for you.",
          ],
        },
        {
          heading: "Why landowners choose it",
          bullets: [
            "You own appreciating, tangible assets",
            "Optional rental income after possession",
            "Zyntra can sell your share for you if you prefer",
            "Zero upfront cost to you",
          ],
        },
        {
          heading: "What we agree up front",
          bullets: [
            "Your share of built-up area (specific units where possible)",
            "Refundable security deposit from Zyntra",
            "Specifications and finish standards",
            "Timeline with delay protections",
          ],
        },
      ]}
      steps={{
        title: "The area-share journey",
        items: [
          { t: "Feasibility", b: "We study the best product mix for your land." },
          { t: "Structure", b: "We agree your area share, specs, security and timeline." },
          { t: "Develop", b: "We fund, approve and build the project end to end." },
          { t: "Possess", b: "You take ownership of your units - hold, rent or sell." },
        ],
      }}
      related={{
        title: "Explore joint ventures",
        links: [
          { label: "Revenue share", href: "/joint-ventures/revenue-share", desc: "Take cash from sales proceeds instead of built area." },
          { label: "Landowner protection", href: "/joint-ventures/landowner-protection", desc: "How every JV is structured to protect you." },
          { label: "Eligibility & documents", href: "/joint-ventures/eligibility", desc: "Is your land a fit? What you'll need." },
        ],
      }}
      cta={{
        title: "Want to own units in your own development?",
        description: "Tell us about your land and we will model an area-share you would be comfortable signing.",
        primaryLabel: "Submit your land",
        primaryHref: "/joint-ventures#enquiry",
      }}
    />
  );
}
