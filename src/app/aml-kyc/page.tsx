import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AML & KYC Policy",
  description:
    "Zyntra's commitment to anti-money-laundering practices and know-your-customer verification in property transactions.",
};

export default function AmlKycPage() {
  return (
    <ProsePage
      eyebrow="Legal"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "AML & KYC" }]}
      title="Anti-Money-Laundering & KYC"
      description="How we help keep property transactions legitimate, and why we may ask you to verify who you are."
      updated="August 2026"
      sections={[
        {
          heading: "Our position",
          paragraphs: [
            "Real estate can be misused to move illegitimate funds. Zyntra does not knowingly facilitate any transaction involving the proceeds of crime, and we are committed to lawful, transparent dealing.",
          ],
        },
        {
          heading: "Know Your Customer (KYC)",
          paragraphs: [
            "Depending on the transaction, we may ask you to provide identification and supporting documents to verify your identity and, where relevant, the source of funds. This protects all parties and keeps the transaction clean.",
          ],
          bullets: [
            "Government-issued identity and address proof",
            "Ownership or authority documents where applicable",
            "Reasonable information about the source of funds for larger transactions",
          ],
        },
        {
          heading: "Red flags we watch for",
          bullets: [
            "Reluctance to provide basic identification",
            "Unusual payment structures or requests for opacity",
            "Transactions inconsistent with a party's stated profile",
          ],
        },
        {
          heading: "Handling of your information",
          paragraphs: [
            "KYC information is collected for compliance and verification purposes, handled confidentially, and used in line with our Privacy Policy and applicable law.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [`For questions about our AML and KYC practices, write to ${site.email}.`],
        },
      ]}
      related={{
        title: "Related",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Legal & due diligence", href: "/services/legal-due-diligence" },
          { label: "Terms of Use", href: "/terms" },
        ],
      }}
      cta={false}
    />
  );
}
