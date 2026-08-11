"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";
import { ArrowUpRight, Close, Menu, Phone } from "./Icons";

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

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-[0.92rem] font-medium transition-colors ${
                  active ? "text-forest" : "text-ink/75 hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/75 transition-colors hover:text-forest"
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
        className={`lg:hidden overflow-hidden border-t border-ink/10 bg-paper transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-cream hover:text-forest"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 text-gold-deep" />
            </Link>
          ))}
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
