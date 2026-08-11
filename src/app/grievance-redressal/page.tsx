import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grievance Redressal",
  description:
    "How to raise a concern or complaint with Zyntra, and how we commit to acknowledge and resolve it.",
};

export default function GrievanceRedressalPage() {
  return (
    <ProsePage
      eyebrow="Support"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Grievance Redressal" }]}
      title="Raise a concern with us"
      description="If something has not met your expectations, we want to know. A clear, fair process for hearing and resolving concerns is part of how we earn trust."
      updated="August 2026"
      sections={[
        {
          heading: "How to reach us",
          paragraphs: [
            `Email your concern to ${site.email}, or call us at ${site.phoneDisplay}. Please include your name, contact details, the property or service involved, and a description of the issue.`,
          ],
        },
        {
          heading: "Our commitment",
          bullets: [
            "We aim to acknowledge every grievance promptly, typically within a few business days.",
            "We will review it fairly and keep you informed of progress.",
            "We will work towards a reasonable resolution and explain our reasoning clearly.",
          ],
        },
        {
          heading: "Escalation",
          paragraphs: [
            "If you feel your concern has not been addressed satisfactorily, ask for it to be escalated to a senior member of the team, and we will take a fresh look.",
          ],
        },
        {
          heading: "Fairness both ways",
          paragraphs: [
            "We take every concern seriously and treat you with respect throughout. We ask for the same in return, so our team can help you effectively.",
          ],
        },
      ]}
      related={{
        title: "Related",
        links: [
          { label: "Contact us", href: "/contact" },
          { label: "Code of conduct", href: "/code-of-conduct" },
          { label: "Refund & cancellation", href: "/refund-policy" },
        ],
      }}
      cta={false}
    />
  );
}
