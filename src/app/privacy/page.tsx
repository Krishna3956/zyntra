import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Zyntra collects, uses and protects your personal information.",
};

const sections = [
  {
    h: "Information we collect",
    p: [
      "When you submit an enquiry through our website — as a buyer, seller, tenant, landlord or landowner — we collect the details you provide, such as your name, phone number, email address, and information about the property or requirement you're enquiring about.",
      "We also collect limited technical information automatically, such as your device type and general usage of the site, to help us improve it.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use your information solely to respond to your enquiry, provide the services you've requested, and keep you informed about relevant properties or opportunities where you've asked us to. We do not sell your personal information to third parties.",
    ],
  },
  {
    h: "How your enquiries are handled",
    p: [
      "Enquiry forms on this site are processed through a secure third-party form service that delivers your submission to our team by email. Your data is transmitted over encrypted connections. We retain enquiry details only as long as necessary to serve you and to meet our legal and business obligations.",
    ],
  },
  {
    h: "Sharing of information",
    p: [
      "We may share your information with trusted partners strictly as needed to deliver a service you've requested — for example, a lender for loan facilitation or legal counsel for due diligence — and always on a need-to-know basis.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You can ask us to access, correct or delete the personal information we hold about you, or to stop contacting you, at any time. Simply email us and we'll act on your request promptly.",
    ],
  },
  {
    h: "Contact us",
    p: [
      `For any privacy-related questions, write to us at ${site.email}. We're committed to handling your information with care and transparency.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        title="Privacy Policy"
        description="Your trust matters to us. Here's how we handle the information you share with Zyntra."
      />
      <section className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-stone">Last updated: August 2026</p>
          {sections.map((s) => (
            <div key={s.h} className="mt-9">
              <h2 className="font-display text-2xl font-semibold text-ink">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="mt-3 leading-relaxed text-stone">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
