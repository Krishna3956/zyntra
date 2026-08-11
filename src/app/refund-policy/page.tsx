import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "How refunds and cancellations are handled for service fees and token amounts collected by Zyntra.",
};

export default function RefundPolicyPage() {
  return (
    <ProsePage
      eyebrow="Legal"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Refund & Cancellation" }]}
      title="Refund & Cancellation Policy"
      description="This policy explains how refunds and cancellations are handled for amounts paid to Zyntra."
      updated="August 2026"
      sections={[
        {
          heading: "Scope",
          paragraphs: [
            "This policy applies to service fees or advisory charges that Zyntra may collect directly for its own services. It does not govern payments made to third parties such as property sellers, developers, banks or government authorities, which are subject to their own terms.",
          ],
        },
        {
          heading: "Service fees",
          paragraphs: [
            "Where a service fee is agreed in advance, the terms of refund or cancellation for that engagement will be set out in writing before you pay. Fees for work already performed are generally non-refundable, as they reflect time and effort already spent on your behalf.",
          ],
        },
        {
          heading: "Token and booking amounts",
          paragraphs: [
            "Token or booking amounts paid towards a property are governed by the specific agreement for that transaction and the counterparty receiving them. Zyntra will explain the applicable terms before any such amount is paid.",
          ],
        },
        {
          heading: "How to request a refund",
          paragraphs: [
            `To request a refund or cancellation of a Zyntra service fee, write to ${site.email} with your details and the reason. We will review and respond within a reasonable time.`,
          ],
        },
        {
          heading: "Processing",
          paragraphs: [
            "Approved refunds are processed to the original payment method or as otherwise agreed, within a reasonable period. Any applicable deductions for work already done will be explained clearly.",
          ],
        },
      ]}
      related={{
        title: "Related",
        links: [
          { label: "Terms of Use", href: "/terms" },
          { label: "Grievance redressal", href: "/grievance-redressal" },
          { label: "Contact us", href: "/contact" },
        ],
      }}
      cta={false}
    />
  );
}
