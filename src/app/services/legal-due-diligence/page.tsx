import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Legal & Due Diligence",
  description:
    "Title verification and property due diligence from Zyntra - so you buy, sell or develop on facts, not assurances. Covering Gurugram, Indore and nearby corridors.",
};

export default function LegalDueDiligencePage() {
  return (
    <ProsePage
      eyebrow="Services"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Legal & Due Diligence" },
      ]}
      title="Verify before you commit"
      description="The most expensive property mistakes are legal ones. Our diligence work checks title, encumbrances and approvals up front, so surprises never arrive after you have paid."
      highlights={{
        title: "What we check",
        items: [
          { title: "Title chain", body: "Ownership traced back through the record to confirm the seller can actually sell." },
          { title: "Encumbrances", body: "Loans, liens, mortgages or charges that could follow the property to you." },
          { title: "Approvals", body: "Sanctioned plans, permissions and regulatory status relevant to the asset." },
          { title: "Mutation & records", body: "Revenue records, mutation entries and land classification." },
          { title: "Litigation check", body: "Any disputes or claims that could cloud the transaction." },
          { title: "Documentation", body: "Whether the paperwork is complete, consistent and registrable." },
        ],
      }}
      sections={[
        {
          heading: "How it fits into a deal",
          paragraphs: [
            "For buyers, we run diligence before you commit serious money. For sellers, we clean up the file in advance so your deal does not stall at the buyer's lawyer. For joint ventures, diligence is the foundation the whole partnership stands on.",
          ],
        },
        {
          heading: "An honest note",
          paragraphs: [
            "Due diligence reduces risk; it does not remove it entirely. We are thorough and we flag what we find plainly, including anything we could not fully verify, so you decide with your eyes open.",
          ],
        },
      ]}
      related={{
        title: "Related services",
        links: [
          { label: "Documentation & registration", href: "/services/documentation", desc: "Paperwork done properly, start to finish." },
          { label: "Property advisory", href: "/services/advisory", desc: "Independent counsel on your decision." },
          { label: "Landowner protection", href: "/joint-ventures/landowner-protection", desc: "How diligence protects JV partners." },
        ],
      }}
      cta={{
        title: "Buying or selling? Get the file checked.",
        description: "Send us the property details and we will scope the diligence you need.",
        primaryLabel: "Request due diligence",
        primaryHref: "/contact",
      }}
    />
  );
}
