import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the Zyntra website and services.",
};

const sections = [
  {
    h: "Acceptance of terms",
    p: [
      "By accessing and using the Zyntra website, you agree to these Terms of Use. If you do not agree, please do not use the site.",
    ],
  },
  {
    h: "About our services",
    p: [
      "Zyntra provides real estate advisory and brokerage services, including assistance with buying, selling and renting property, and joint-venture development partnerships, in Gurugram, Indore and surrounding areas. Information on this site is provided for general guidance and does not constitute a binding offer.",
    ],
  },
  {
    h: "Property information",
    p: [
      "We take care to present accurate property details, imagery and pricing. However, listings are indicative and subject to availability, change and verification. Images may be representative. Always confirm specifics, pricing, title and approvals with our team before making any decision or payment.",
    ],
  },
  {
    h: "Enquiries and communication",
    p: [
      "By submitting an enquiry, you consent to be contacted by Zyntra regarding your request. You confirm that the information you provide is accurate and that you are authorised to share it.",
    ],
  },
  {
    h: "No professional advice",
    p: [
      "Content on this site — including insights and guides — is for information only and is not legal, financial or tax advice. You should obtain independent professional advice before entering into any transaction.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      "The Zyntra name, logo, content and design are the property of Zyntra and may not be reproduced without permission.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "To the fullest extent permitted by law, Zyntra is not liable for any loss arising from reliance on information on this site. Your use of the site is at your own risk.",
    ],
  },
  {
    h: "Contact",
    p: [`Questions about these terms? Write to us at ${site.email}.`],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
        title="Terms of Use"
        description="The ground rules for using the Zyntra website and engaging our services."
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
