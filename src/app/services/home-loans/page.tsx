import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Home Loan Facilitation",
  description:
    "Zyntra helps buyers arrange home loans - comparing lenders, preparing documentation and coordinating with banks so financing keeps pace with your purchase.",
};

export default function HomeLoansPage() {
  return (
    <ProsePage
      eyebrow="Services"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Home Loans" },
      ]}
      title="Financing, made straightforward"
      description="A great property is only useful if you can fund it on good terms. We help buyers compare lenders, prepare a clean file and keep the loan moving in step with the deal."
      highlights={{
        title: "How we help",
        items: [
          { title: "Lender comparison", body: "We help you weigh options across banks and institutions so you are not guessing on rate or terms." },
          { title: "Eligibility clarity", body: "An early read on how much you can comfortably borrow, before you fall for something you cannot fund." },
          { title: "Document preparation", body: "A clean, complete file the first time, so approvals do not stall on missing paperwork." },
          { title: "Coordination", body: "We keep the lender, the seller and the timeline aligned so financing does not become the bottleneck." },
        ],
      }}
      sections={[
        {
          heading: "How it connects to your purchase",
          paragraphs: [
            "Because we are already handling your property search or transaction, loan facilitation slots in naturally - the valuation, paperwork and timeline all speak to each other instead of living in separate silos.",
          ],
        },
        {
          heading: "Important",
          paragraphs: [
            "Zyntra facilitates and coordinates financing; the loan itself, its approval and its terms are decided by your chosen lender. We do not lend, and final sanction always rests with the bank. Rates and eligibility are set by the lender and can change.",
          ],
        },
      ]}
      related={{
        title: "Related services",
        links: [
          { label: "Buy a property", href: "/buy", desc: "Find the right home or investment first." },
          { label: "Valuation & pricing", href: "/services/valuation", desc: "Make sure the price stacks up." },
          { label: "Documentation & registration", href: "/services/documentation", desc: "Get the paperwork right." },
        ],
      }}
      cta={{
        title: "Need financing to line up with your purchase?",
        description: "Tell us what you are buying and we will help you get the funding in order.",
        primaryLabel: "Get loan help",
        primaryHref: "/contact",
      }}
    />
  );
}
