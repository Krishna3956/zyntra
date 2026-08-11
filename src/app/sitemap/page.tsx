import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "A complete map of the Zyntra website - every section and page in one place.",
};

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "How we work", href: "/how-we-work" },
      { label: "Services", href: "/services" },
      { label: "Locations", href: "/locations" },
      { label: "Insights", href: "/insights" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Buy, sell & rent",
    links: [
      { label: "Buy a property", href: "/buy" },
      { label: "Sell a property", href: "/sell" },
      { label: "Rent (take or give)", href: "/rent" },
    ],
  },
  {
    title: "Joint ventures",
    links: [
      { label: "Joint ventures overview", href: "/joint-ventures" },
      { label: "Revenue share", href: "/joint-ventures/revenue-share" },
      { label: "Area / built-up share", href: "/joint-ventures/area-share" },
      { label: "The JV process", href: "/joint-ventures/process" },
      { label: "Landowner protection", href: "/joint-ventures/landowner-protection" },
      { label: "Eligibility & documents", href: "/joint-ventures/eligibility" },
      { label: "Joint venture FAQ", href: "/joint-ventures/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Property advisory", href: "/services/advisory" },
      { label: "Legal & due diligence", href: "/services/legal-due-diligence" },
      { label: "Home loans", href: "/services/home-loans" },
      { label: "Property management", href: "/services/property-management" },
      { label: "Valuation & pricing", href: "/services/valuation" },
      { label: "NRI services", href: "/services/nri" },
      { label: "Documentation & registration", href: "/services/documentation" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "All locations", href: "/locations" },
      { label: "Gurugram", href: "/locations/gurugram" },
      { label: "Indore", href: "/locations/indore" },
    ],
  },
  {
    title: "Legal & policies",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Regulatory & RERA", href: "/rera" },
      { label: "Refund & cancellation", href: "/refund-policy" },
      { label: "Grievance redressal", href: "/grievance-redressal" },
      { label: "AML & KYC", href: "/aml-kyc" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Code of conduct", href: "/code-of-conduct" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sitemap"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
        title="Everything, in one place"
        description="A complete index of the Zyntra website. If you are looking for something specific, it is probably here."
      />
      <section className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">{g.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="link-underline text-stone hover:text-forest"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
