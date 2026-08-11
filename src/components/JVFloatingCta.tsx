"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Close, Handshake } from "./Icons";

const STORAGE_KEY = "zyntra_jv_pill_dismissed";

export function JVFloatingCta() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    setDismissed(Boolean(sessionStorage.getItem(STORAGE_KEY)));
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on the joint-ventures pages (already there)
  const onJvPage = pathname?.startsWith("/joint-ventures");
  if (dismissed || onJvPage) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 max-w-[17rem] transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="relative rounded-2xl border border-gold/30 bg-ink/95 p-4 pr-5 text-paper shadow-lift backdrop-blur">
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => {
            sessionStorage.setItem(STORAGE_KEY, "1");
            setDismissed(true);
          }}
          className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-paper/50 transition-colors hover:text-paper"
        >
          <Close className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
            <Handshake className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight">Have land in Gurugram or Indore?</p>
            <p className="mt-0.5 text-xs text-paper/65">
              Partner with us on a joint venture.
            </p>
            <Link
              href="/joint-ventures#enquiry"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
            >
              Submit your land
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
