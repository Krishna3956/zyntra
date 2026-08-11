import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Documentation & Registration",
  description:
    "Zyntra helps buyers and sellers manage property paperwork - agreements, registration coordination and record updates - so transactions close cleanly and correctly.",
};

export default function DocumentationPage() {
  return (
    <ProsePage
      eyebrow="Services"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Documentation & Registration" },
      ]}
      title="Paperwork done properly"
      description="A deal is only as sound as its documents. We help you get agreements, registration and records right - the unglamorous part that decides whether your ownership is truly secure."
      highlights={{
        title: "What we help with",
        items: [
          { title: "Agreements", body: "Sale, rent and development agreements drafted to reflect what was actually agreed." },
          { title: "Registration coordination", body: "We help coordinate the registration process so it goes smoothly." },
          { title: "Record updates", body: "Guidance on mutation and updating records to reflect the new ownership." },
          { title: "Document checklist", body: "A clear list of what you need, so nothing is missing on the day." },
          { title: "Verification support", body: "Working alongside our diligence team to keep the file clean." },
          { title: "Handover", body: "Making sure you leave with a complete, organised set of documents." },
        ],
      }}
      sections={[
        {
          heading: "Why it matters",
          paragraphs: [
            "Most disputes years later trace back to sloppy paperwork today - a missing signature, an unregistered agreement, a record never updated. Getting this right is quiet, careful work, and it is exactly the kind of work we take seriously.",
          ],
        },
        {
          heading: "Scope",
          paragraphs: [
            "We help coordinate and prepare documentation as part of your transaction. For formal legal opinions or representation, we work with qualified legal professionals, and you are always free to involve your own counsel.",
          ],
        },
      ]}
      related={{
        title: "Related services",
        links: [
          { label: "Legal & due diligence", href: "/services/legal-due-diligence", desc: "Verify the file before you sign." },
          { label: "Buy a property", href: "/buy", desc: "Close your purchase cleanly." },
          { label: "Sell your property", href: "/sell", desc: "Keep your sale on track." },
        ],
      }}
      cta={{
        title: "Want your paperwork handled right?",
        description: "Tell us about your transaction and we will make sure the documents hold up.",
        primaryLabel: "Get documentation help",
        primaryHref: "/contact",
      }}
    />
  );
}
