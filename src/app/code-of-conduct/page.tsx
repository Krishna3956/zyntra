import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "The principles that govern how Zyntra treats clients, landowners, tenants and partners - honesty, transparency and fair dealing.",
};

export default function CodeOfConductPage() {
  return (
    <ProsePage
      eyebrow="About us"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Code of Conduct" }]}
      title="How we promise to behave"
      description="A short, plain statement of the standards we hold ourselves to - because trust in real estate is earned through conduct, not slogans."
      intro="These are not aspirations we hope to reach. They are commitments you can hold us to, and call us out on."
      sections={[
        {
          heading: "Honesty over the sale",
          paragraphs: [
            "We tell you what we actually think, including when the right move is to wait, walk away, or not develop. A relationship we keep is worth more than a deal we force.",
          ],
        },
        {
          heading: "Transparency in everything",
          paragraphs: [
            "Terms, prices, risks and our own role are stated plainly. We put agreements in writing and we do not bury the parts that matter.",
          ],
        },
        {
          heading: "Fair dealing on both sides",
          paragraphs: [
            "We structure transactions and joint ventures to be fair to all parties, not weighted quietly in our favour. We welcome your own advisor reviewing anything we put in front of you.",
          ],
        },
        {
          heading: "Confidentiality",
          paragraphs: [
            "Your information and your decisions are private. We use what you share only to help you, and we protect it accordingly.",
          ],
        },
        {
          heading: "Respect for everyone",
          paragraphs: [
            "We treat clients, landowners, tenants, partners and each other with respect and without discrimination. Everyone gets the same straight dealing.",
          ],
        },
        {
          heading: "Accountability",
          paragraphs: [
            "When we get something wrong, we own it and put it right. If we ever fall short of this code, we want to hear about it through our grievance process.",
          ],
        },
      ]}
      related={{
        title: "Related",
        links: [
          { label: "How we work", href: "/how-we-work" },
          { label: "Grievance redressal", href: "/grievance-redressal" },
          { label: "About Zyntra", href: "/about" },
        ],
      }}
      cta={false}
    />
  );
}
