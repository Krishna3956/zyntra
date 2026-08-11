import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Property Advisory",
  description:
    "Independent, data-backed property advisory from Zyntra across Gurugram and Indore - honest counsel on what, where and when to buy, sell, rent or develop.",
};

export default function AdvisoryPage() {
  return (
    <ProsePage
      eyebrow="Services"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Property Advisory" },
      ]}
      title="Advice you can actually trust"
      description="We are paid to be right, not just to close. Our advisory practice brings evidence, discipline and honesty to every property decision - including telling you when to wait."
      highlights={{
        title: "What advisory covers",
        items: [
          { title: "Buy-side strategy", body: "What to buy, where and at what price - matched to your goal, whether it is end use, income or appreciation." },
          { title: "Sell-side strategy", body: "When and how to sell, priced on real comparables so the deal holds through diligence." },
          { title: "Portfolio view", body: "A clear-eyed look at what you hold and whether it still fits your objectives." },
          { title: "Market intelligence", body: "Absorption, yields and pricing trends across Gurugram and Indore, in plain language." },
          { title: "Development advice", body: "Whether land is worth developing, and the best-use case for it." },
          { title: "Risk & timing", body: "An honest read on risk and timing - including when the right answer is to do nothing yet." },
        ],
      }}
      sections={[
        {
          heading: "Why independent advice matters",
          paragraphs: [
            "Most agents earn only when a transaction happens, which quietly biases their advice toward action. We built Zyntra to be different: a client who trusts our judgment is worth far more than any single deal, so our incentive is to be right over time.",
          ],
        },
      ]}
      related={{
        title: "Related services",
        links: [
          { label: "Valuation & pricing", href: "/services/valuation", desc: "Know what your property is really worth." },
          { label: "Legal & due diligence", href: "/services/legal-due-diligence", desc: "Verify before you commit." },
          { label: "Joint ventures", href: "/joint-ventures", desc: "Turn idle land into a delivered project." },
        ],
      }}
      cta={{
        title: "Want a straight answer about your property?",
        description: "Start with a no-obligation conversation. We will tell you what we would do in your position.",
        primaryLabel: "Talk to an advisor",
        primaryHref: "/contact",
      }}
    />
  );
}
