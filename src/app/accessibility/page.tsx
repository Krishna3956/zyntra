import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Zyntra's commitment to keeping this website usable for everyone, and how to reach us if you encounter a barrier.",
};

export default function AccessibilityPage() {
  return (
    <ProsePage
      eyebrow="Legal"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
      title="Accessibility Statement"
      description="We want this website to work well for everyone, regardless of ability or the technology they use."
      updated="August 2026"
      sections={[
        {
          heading: "Our approach",
          paragraphs: [
            "We aim to follow widely recognised accessibility practices so that people using screen readers, keyboard navigation and other assistive technologies can use this site effectively.",
          ],
          bullets: [
            "Meaningful text alternatives for important images",
            "Sensible heading structure and readable contrast",
            "Keyboard-navigable menus, forms and interactive elements",
            "Responsive layouts that adapt to different screens and zoom levels",
          ],
        },
        {
          heading: "Ongoing work",
          paragraphs: [
            "Accessibility is a continuous effort, not a one-time fix. We keep testing and improving, and we know there may be areas we can do better.",
          ],
        },
        {
          heading: "Tell us about a barrier",
          paragraphs: [
            `If you encounter something on this site that is hard to access or use, please let us know at ${site.email} or call ${site.phoneDisplay}. Describe the page and the issue, and we will do our best to help and to fix it.`,
          ],
        },
      ]}
      related={{
        title: "Related",
        links: [
          { label: "Contact us", href: "/contact" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Sitemap", href: "/sitemap" },
        ],
      }}
      cta={false}
    />
  );
}
