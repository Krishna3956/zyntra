"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Close, Handshake } from "./Icons";

const STORAGE_KEY = "zyntra_jv_modal_seen";

export function JVModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const reveal = () => {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    const timer = window.setTimeout(reveal, 9000);

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) reveal();
    };
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Joint venture opportunity"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        style={{ animation: "fade-up 0.3s ease" }}
      />
      <div
        className="gradient-forest relative w-full max-w-lg overflow-hidden rounded-3xl border border-gold/25 p-8 text-paper shadow-lift md:p-10"
        style={{ animation: "fade-up 0.45s cubic-bezier(0.22,1,0.36,1)" }}
      >
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #c9a24c, transparent 70%)" }}
        />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper"
        >
          <Close className="h-5 w-5" />
        </button>

        <div className="relative">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
            <Handshake className="h-7 w-7" />
          </span>
          <span className="eyebrow mt-5 text-gold-soft">Our specialty</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">
            Own land? Let&apos;s build on it, together.
          </h2>
          <p className="mt-3 text-paper/75">
            Joint ventures are what we do best. You keep ownership of your land; Zyntra
            brings the capital, design, approvals, construction and sales. You share the
            upside with zero upfront cost.
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              "No upfront cost to you",
              "Revenue or area share",
              "Registered, transparent deal",
              "Approvals & build managed",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-paper/85">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/joint-ventures#enquiry"
              onClick={() => setOpen(false)}
              className="btn btn-gold flex-1"
            >
              Submit your land
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/joint-ventures"
              onClick={() => setOpen(false)}
              className="btn btn-ghost-light flex-1"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
