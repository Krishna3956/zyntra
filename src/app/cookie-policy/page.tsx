import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Zyntra uses cookies and similar technologies on this website.",
};

export default function CookiePolicyPage() {
  return (
    <ProsePage
      eyebrow="Legal"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      title="Cookie Policy"
      description="This policy explains what cookies are, how this website uses them, and the choices you have."
      updated="August 2026"
      sections={[
        {
          heading: "What cookies are",
          paragraphs: [
            "Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and understand how the site is used.",
          ],
        },
        {
          heading: "How we use cookies",
          bullets: [
            "Essential cookies that make the website work and keep it secure.",
            "Preference cookies that remember choices such as your recent activity on the site.",
            "Analytics cookies that help us understand which pages are useful, in aggregate, so we can improve.",
          ],
        },
        {
          heading: "Third-party cookies",
          paragraphs: [
            "Some cookies may be set by third-party services we use, such as analytics or embedded content. These providers have their own privacy and cookie policies, which we encourage you to review.",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "Most browsers let you view, manage, delete and block cookies through their settings. Blocking essential cookies may affect how parts of the website work. Refer to your browser's help pages for instructions specific to your device.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this Cookie Policy from time to time. The latest version will always be available on this page.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about our use of cookies? Write to us at ${site.email}.`,
          ],
        },
      ]}
      related={{
        title: "Related",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Use", href: "/terms" },
          { label: "Disclaimer", href: "/disclaimer" },
        ],
      }}
      cta={false}
    />
  );
}
