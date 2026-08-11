import Link from "next/link";
import { Logo } from "./Logo";
import { offices, services, site, socials } from "@/lib/site";
import { NewsletterForm } from "./forms/NewsletterForm";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  MapPin,
  Phone,
  Whatsapp,
} from "./Icons";

const jvLinks = [
  { label: "JV overview", href: "/joint-ventures" },
  { label: "Revenue share", href: "/joint-ventures/revenue-share" },
  { label: "Area / built-up share", href: "/joint-ventures/area-share" },
  { label: "The JV process", href: "/joint-ventures/process" },
  { label: "Landowner protection", href: "/joint-ventures/landowner-protection" },
  { label: "Eligibility & documents", href: "/joint-ventures/eligibility" },
  { label: "Joint venture FAQ", href: "/joint-ventures/faq" },
];

const expertiseLinks = [
  { label: "Property advisory", href: "/services/advisory" },
  { label: "Legal & due diligence", href: "/services/legal-due-diligence" },
  { label: "Home loans", href: "/services/home-loans" },
  { label: "Property management", href: "/services/property-management" },
  { label: "Valuation & pricing", href: "/services/valuation" },
  { label: "NRI services", href: "/services/nri" },
  { label: "Documentation", href: "/services/documentation" },
];

const companyLinks = [
  { label: "About Zyntra", href: "/about" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Locations", href: "/locations" },
  { label: "Gurugram", href: "/locations/gurugram" },
  { label: "Indore", href: "/locations/indore" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
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
  { label: "Sitemap", href: "/sitemap" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="link-underline text-sm text-paper/75 transition-colors hover:text-paper"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="gradient-forest relative overflow-hidden text-paper">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="container-page relative py-16 md:py-20">
        {/* CTA band */}
        <div className="mb-14 grid gap-8 rounded-3xl border border-paper/12 bg-paper/[0.04] p-8 md:mb-16 md:grid-cols-[1.2fr_1fr] md:items-center md:p-10">
          <div>
            <h3 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
              Stay ahead of the market.
            </h3>
            <p className="mt-2 max-w-md text-paper/70">
              Occasional, high-signal notes on Gurugram and Indore real estate - new
              listings, price moves and joint-venture opportunities. No spam, ever.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* Brand */}
        <div className="grid gap-12 border-b border-paper/12 pb-12 md:grid-cols-[1.6fr_1fr] md:items-center">
          <div className="max-w-md">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-paper/70">{site.description}</p>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            {socials.map(({ href, label, icon }) => {
              const Icon =
                icon === "instagram"
                  ? Instagram
                  : icon === "linkedin"
                    ? LinkedIn
                    : icon === "facebook"
                      ? Facebook
                      : Whatsapp;
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <Column
            title="Transact"
            links={services.map((s) => ({ label: s.title, href: s.href }))}
          />
          <Column title="Joint Ventures" links={jvLinks} />
          <Column title="Expertise" links={expertiseLinks} />
          <Column title="Company" links={companyLinks} />
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Visit us
            </h4>
            <ul className="mt-5 space-y-5">
              {offices.map((o) => (
                <li key={o.id} className="text-sm text-paper/75">
                  <p className="font-semibold text-paper">{o.city}</p>
                  <p className="mt-1 flex gap-2 leading-relaxed">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{o.address}</span>
                  </p>
                  <a
                    href={`tel:${o.phoneHref}`}
                    className="mt-1.5 inline-flex items-center gap-2 hover:text-paper"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold" />
                    {o.phoneDisplay}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-paper/75 hover:text-paper"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-14 border-t border-paper/12 pt-8">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-paper/55 transition-colors hover:text-paper"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-paper/55 md:flex-row md:items-center">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-1 hover:text-paper"
            >
              We&apos;re hiring good people
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
