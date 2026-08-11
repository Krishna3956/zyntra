import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Landowner Protection in Joint Ventures",
  description:
    "How Zyntra structures every joint venture to protect the landowner: registered agreements, security deposits, milestone governance, limited authority and independent legal review.",
};

export default function LandownerProtectionPage() {
  return (
    <ProsePage
      eyebrow="Joint Ventures"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Joint Ventures", href: "/joint-ventures" },
        { label: "Landowner Protection" },
      ]}
      title="Built to protect the landowner"
      description="A joint venture should never mean handing over your land and hoping. Here is exactly how we make sure it does not - the safeguards that sit inside every Zyntra JV."
      highlights={{
        title: "Your safeguards, by default",
        items: [
          { title: "Registered agreement", body: "Every JV is governed by a registered development agreement, not a handshake. Terms are written, witnessed and binding." },
          { title: "Refundable security deposit", body: "Zyntra places a refundable security deposit with you, so the developer has real skin in the game from day one." },
          { title: "Milestone governance", body: "Payments, progress and possession are tied to defined, auditable milestones - not vague promises." },
          { title: "Limited, revocable authority", body: "We work on a limited, purpose-specific and revocable authority. Never a blanket, irrevocable power of attorney." },
          { title: "Delay protection", body: "The agreement sets an indicative timeline with agreed consequences for delay, keeping the project honest." },
          { title: "Independent legal review", body: "We encourage - and accommodate - your own lawyer reviewing every clause before you sign." },
        ],
      }}
      sections={[
        {
          heading: "Why we structure it this way",
          paragraphs: [
            "Our business depends on landowners trusting us enough to refer the next one. That only happens if the first deal was demonstrably fair. Protecting you is not a courtesy - it is how we grow.",
            "We would rather lose a deal to a landowner's caution than win one they later regret. So we build every agreement to be defensible from your side of the table.",
          ],
        },
        {
          heading: "Questions to ask any developer",
          bullets: [
            "Is the development agreement registered?",
            "Is there a refundable security deposit?",
            "Are payments and possession milestone-linked?",
            "What authority am I actually granting, and can I revoke it?",
            "What happens if the project is delayed?",
            "Can my own lawyer review everything first?",
          ],
        },
      ]}
      related={{
        title: "Explore joint ventures",
        links: [
          { label: "The JV process", href: "/joint-ventures/process", desc: "How a joint venture unfolds, stage by stage." },
          { label: "Eligibility & documents", href: "/joint-ventures/eligibility", desc: "Is your land a fit? What you'll need." },
          { label: "Joint venture FAQ", href: "/joint-ventures/faq", desc: "Straight answers to common JV questions." },
        ],
      }}
      cta={{
        title: "Partner with people who protect you first.",
        description: "Share your land details in confidence. We will show you a structure you would be comfortable putting in front of your own lawyer.",
        primaryLabel: "Submit your land",
        primaryHref: "/joint-ventures#enquiry",
      }}
    />
  );
}
