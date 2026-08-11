import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers regarding the information published on the Zyntra website.",
};

export default function DisclaimerPage() {
  return (
    <ProsePage
      eyebrow="Legal"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      title="Disclaimer"
      description="Please read this disclaimer carefully before relying on any information on this website."
      updated="August 2026"
      sections={[
        {
          heading: "General information only",
          paragraphs: [
            "The content on this website is provided for general information purposes. While we try to keep it accurate and current, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability or suitability of the information for any purpose.",
          ],
        },
        {
          heading: "No professional advice",
          paragraphs: [
            "Nothing on this website constitutes legal, financial, tax or investment advice. Property decisions carry risk and depend on your individual circumstances. You should obtain independent professional advice before acting.",
          ],
        },
        {
          heading: "Property information",
          paragraphs: [
            "Property details, prices, availability, images and specifications are indicative and subject to change or withdrawal without notice. Images may be representative. Any listing should be independently verified before you commit funds.",
          ],
        },
        {
          heading: "No guaranteed outcomes",
          paragraphs: [
            "References to potential returns, appreciation, rental income or development outcomes are illustrative, not promises. Actual results depend on market conditions and factors beyond our control.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "This website may link to third-party sites. We are not responsible for their content, accuracy or practices, and a link does not imply endorsement.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the extent permitted by law, Zyntra will not be liable for any loss or damage arising from reliance on information on this website. Your use of the site is at your own discretion and risk.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [`For clarification on anything published here, write to ${site.email}.`],
        },
      ]}
      related={{
        title: "Related",
        links: [
          { label: "Terms of Use", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Regulatory & RERA", href: "/rera" },
        ],
      }}
      cta={false}
    />
  );
}
