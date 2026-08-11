"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { ArrowUpRight, Close, Menu, Phone } from "./Icons";

type Child = { label: string; href: string; desc?: string };
type NavItem = { label: string; href: string; children?: Child[] };

const menu: NavItem[] = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Rent", href: "/rent" },
  {
    label: "Joint Ventures",
    href: "/joint-ventures",
    children: [
      { label: "JV overview", href: "/joint-ventures", desc: "How partnering on land works" },
      { label: "Revenue share", href: "/joint-ventures/revenue-share", desc: "Cash from sales proceeds" },
      { label: "Area / built-up share", href: "/joint-ventures/area-share", desc: "Own a share of the units" },
      { label: "The JV process", href: "/joint-ventures/process", desc: "Idle land to delivered project" },
      { label: "Landowner protection", href: "/joint-ventures/landowner-protection", desc: "Safeguards in every deal" },
      { label: "Eligibility & documents", href: "/joint-ventures/eligibility", desc: "Is your land a fit?" },
      { label: "Joint venture FAQ", href: "/joint-ventures/faq", desc: "Common questions, answered" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All services", href: "/services", desc: "The full picture" },
      { label: "Property advisory", href: "/services/advisory", desc: "Honest, evidence-based counsel" },
      { label: "Legal & due diligence", href: "/services/legal-due-diligence", desc: "Verify before you commit" },
      { label: "Home loans", href: "/services/home-loans", desc: "Financing, made simple" },
      { label: "Property management", href: "/services/property-management", desc: "Hands-off rentals" },
      { label: "Valuation & pricing", href: "/services/valuation", desc: "Know what it is worth" },
      { label: "NRI services", href: "/services/nri", desc: "Your property, handled from afar" },
      { label: "Documentation", href: "/services/documentation", desc: "Paperwork done right" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Zyntra", href: "/about" },
      { label: "How we work", href: "/how-we-work" },
      { label: "Locations", href: "/locations" },
      { label: "Gurugram", href: "/locations/gurugram" },
      { label: "Indore", href: "/locations/indore" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(10,21,18,0.06)]"
          : "border-b border-transparent bg-paper/40 backdrop-blur-md"
      }`}
    >
      <nav className="container-page flex h-[4.6rem] items-center justify-between gap-4">
        <Logo />

        <div className="hidden items-center gap-6 lg:flex">
          {menu.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + "/");
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-[0.9rem] font-medium transition-colors ${
                    active ? "text-forest" : "text-ink/75 hover:text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
            const twoCols = item.children.length > 5;
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-[0.9rem] font-medium transition-colors ${
                    active ? "text-forest" : "text-ink/75 group-hover:text-forest"
                  }`}
                >
                  {item.label}
                  <Chevron className="mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                {/* bridge + panel */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div
                    className={`rounded-2xl border border-ink/10 bg-paper p-2 shadow-lift ${
                      twoCols ? "grid w-[34rem] grid-cols-2 gap-1" : "w-[19rem]"
                    }`}
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-cream"
                      >
                        <span className="block text-sm font-semibold text-ink">{c.label}</span>
                        {c.desc && (
                          <span className="mt-0.5 block text-xs text-stone">{c.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden items-center gap-2 text-sm font-medium text-ink/75 transition-colors hover:text-forest xl:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link href="/contact" className="btn btn-primary text-sm">
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-y-auto border-t border-ink/10 bg-paper transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[82vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-5">
          {menu.map((item) =>
            item.children ? (
              <details key={item.href} className="group border-b border-ink/8 last:border-0">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink/85 marker:hidden">
                  {item.label}
                  <Chevron className="transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="flex flex-col pb-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="rounded-lg px-6 py-2.5 text-sm text-ink/70 transition-colors hover:bg-cream hover:text-forest"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-cream hover:text-forest"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 text-gold-deep" />
              </Link>
            )
          )}
          <div className="mt-4 flex flex-col gap-3">
            <a href={`tel:${site.phoneHref}`} className="btn btn-outline w-full">
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-primary w-full">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
