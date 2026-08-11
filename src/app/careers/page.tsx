import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a more honest kind of real estate business with Zyntra. We are always keen to meet good people for our Gurugram and Indore teams.",
};

export default function CareersPage() {
  return (
    <ProsePage
      eyebrow="Careers"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      title="Build a better kind of real estate business"
      description="Zyntra is a young company with a simple, hard goal: make property transactions honest, transparent and genuinely helpful. If that sounds like your kind of work, we would love to meet you."
      intro="We do not always have formal openings posted, but we are always interested in talented, straight-dealing people. If you think you can add to what we are building, reach out - we read every message."
      highlights={{
        title: "The kind of people we look for",
        items: [
          { title: "Honest by default", body: "You would rather lose a deal than mislead a client. Integrity is not negotiable here." },
          { title: "Genuinely helpful", body: "You get satisfaction from solving a client's problem, not just closing a file." },
          { title: "Detail-minded", body: "In real estate, the details are the whole game - paperwork, numbers, follow-through." },
          { title: "Local knowledge", body: "You know Gurugram or Indore, or you are hungry to learn a market inside out." },
          { title: "Ownership mindset", body: "You take responsibility end to end and do not need chasing." },
          { title: "Long-term thinkers", body: "You want to build relationships and a reputation, not just hit a monthly target." },
        ],
      }}
      sections={[
        {
          heading: "Areas we hire across",
          bullets: [
            "Property advisory and sales",
            "Joint venture and land acquisition",
            "Legal, documentation and due diligence",
            "Property management and client servicing",
            "Marketing, content and operations",
          ],
        },
        {
          heading: "How to apply",
          paragraphs: [
            `Send your resume and a short note about why you want to work with us to ${site.email}. Tell us what you are great at and what kind of role you are looking for. If there is a fit, we will be in touch.`,
          ],
        },
      ]}
      related={{
        title: "Get to know us first",
        links: [
          { label: "How we work", href: "/how-we-work" },
          { label: "Our code of conduct", href: "/code-of-conduct" },
          { label: "About Zyntra", href: "/about" },
        ],
      }}
      cta={{
        title: "Think you would be a fit?",
        description: "We would rather hear from a great person with no open role than miss them. Reach out.",
        primaryLabel: "Get in touch",
        primaryHref: "/contact",
      }}
    />
  );
}
