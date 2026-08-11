import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Joint Venture Eligibility & Documents",
  description:
    "What makes land suitable for a Zyntra joint venture, and the documents that help us move quickly - across Gurugram, Indore and nearby corridors.",
};

export default function EligibilityPage() {
  return (
    <ProsePage
      eyebrow="Joint Ventures"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Joint Ventures", href: "/joint-ventures" },
        { label: "Eligibility & Documents" },
      ]}
      title="Is your land a fit?"
      description="Not every plot suits development, and that is fine - we will tell you honestly. Here is what makes land a strong joint-venture candidate, and what helps us move quickly."
      highlights={{
        title: "Ideal land for a JV",
        items: [
          { title: "Location", body: "In or around Gurugram and Indore, or the growth corridors connected to them." },
          { title: "Title", body: "Clear or clearable title, with a traceable ownership record." },
          { title: "Access", body: "Reasonable road access and frontage to support development." },
          { title: "Use", body: "Residential, commercial or mixed-use potential under local zoning." },
          { title: "Size", body: "Enough area to make a viable project - we will assess this in feasibility." },
          { title: "Willingness", body: "An owner open to a transparent, documented partnership." },
        ],
      }}
      sections={[
        {
          heading: "Documents that help us move fast",
          paragraphs: [
            "You do not need everything ready to start a conversation - just the basics. But having these on hand speeds up feasibility and structuring:",
          ],
          bullets: [
            "Title deed / ownership document",
            "Latest mutation and revenue records",
            "Any approved layout or zoning information",
            "Site location and approximate dimensions",
            "Details of any existing loan or encumbrance",
          ],
        },
        {
          heading: "What if my title is not fully clear?",
          paragraphs: [
            "That is common, and often solvable. Our legal team can advise on mutation, boundary or documentation issues as part of assessing the opportunity. Tell us the situation honestly and we will tell you whether and how it can proceed.",
          ],
        },
        {
          heading: "Confidentiality",
          paragraphs: [
            "Everything you share is treated as strictly confidential and used only to assess the opportunity. Land decisions are personal, and we treat them that way.",
          ],
        },
      ]}
      related={{
        title: "Explore joint ventures",
        links: [
          { label: "The JV process", href: "/joint-ventures/process", desc: "How a joint venture unfolds, stage by stage." },
          { label: "Landowner protection", href: "/joint-ventures/landowner-protection", desc: "The safeguards built into every deal." },
          { label: "Joint venture FAQ", href: "/joint-ventures/faq", desc: "Straight answers to common JV questions." },
        ],
      }}
      cta={{
        title: "Not sure if your land qualifies?",
        description: "Send us the basics. We will give you an honest read - even if the honest read is 'not yet'.",
        primaryLabel: "Submit your land",
        primaryHref: "/joint-ventures#enquiry",
      }}
    />
  );
}
