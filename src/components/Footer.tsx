import Link from "next/link";
import { Logo } from "./Logo";
import { offices, services, site } from "@/lib/site";
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

const exploreLinks = [
  { label: "Properties", href: "/properties" },
  { label: "About Zyntra", href: "/about" },
  { label: "Our Locations", href: "/locations" },
  { label: "Insights", href: "/insights" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

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
              Occasional, high-signal notes on Gurugram and Indore real estate — new
              listings, price moves and joint-venture opportunities. No spam, ever.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-paper/70">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: LinkedIn, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Whatsapp, label: "WhatsApp" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.key}>
                  <Link
                    href={s.href}
                    className="link-underline text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((l) => (
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/12 pt-7 text-sm text-paper/55 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name} Real Estate. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-paper">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-paper">
              Terms of Use
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-1 hover:text-paper">
              Careers
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
