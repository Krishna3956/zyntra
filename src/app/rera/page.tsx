import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulatory & RERA",
  description:
    "Zyntra's approach to regulatory compliance and RERA, and what buyers and landowners should verify before transacting.",
};

export default function ReraPage() {
  return (
    <ProsePage
      eyebrow="Legal"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Regulatory & RERA" }]}
      title="Regulatory & RERA"
      description="Our commitment to operating within the applicable real estate regulations, and guidance on what to verify."
      updated="August 2026"
      sections={[
        {
          heading: "Our commitment",
          paragraphs: [
            "Zyntra is committed to conducting its business in line with applicable real estate laws and regulations, including the Real Estate (Regulation and Development) Act, 2016 (RERA), as they apply to our activities and locations.",
          ],
        },
        {
          heading: "What RERA covers",
          paragraphs: [
            "RERA is designed to bring transparency and accountability to real estate, including the registration of certain projects and agents, disclosure obligations, and protections for buyers. Requirements differ by state and by the nature and stage of a project.",
          ],
        },
        {
          heading: "What you should verify",
          bullets: [
            "For a regulated project, its RERA registration status and details as applicable.",
            "The registration status of any agent you transact through, where required.",
            "That disclosures, approvals and documentation are consistent with what you are told.",
            "The specific rules that apply in the relevant state (for example Haryana for Gurugram, Madhya Pradesh for Indore).",
          ],
        },
        {
          heading: "Independent verification",
          paragraphs: [
            "We encourage every buyer and landowner to independently verify regulatory details through the relevant state RERA authority and their own legal advisor. We are glad to share the information we hold to support your checks.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `For any regulatory query or to request specific project or registration information, write to ${site.email}.`,
          ],
        },
      ]}
      related={{
        title: "Related",
        links: [
          { label: "Legal & due diligence", href: "/services/legal-due-diligence" },
          { label: "Disclaimer", href: "/disclaimer" },
          { label: "Grievance redressal", href: "/grievance-redressal" },
        ],
      }}
      cta={false}
    />
  );
}
