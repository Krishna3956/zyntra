"use client";

import { useWeb3Submit, Honeypot } from "./formkit";
import { ArrowRight, Check } from "../Icons";

export function NewsletterForm() {
  const { state, submit } = useWeb3Submit("New newsletter subscriber — Zyntra");

  if (state === "success") {
    return (
      <div className="flex items-center gap-3 rounded-full border border-gold/40 bg-paper/[0.06] px-5 py-4 text-sm text-paper">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink">
          <Check className="h-4 w-4" />
        </span>
        You&apos;re on the list. Welcome to Zyntra.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.currentTarget);
      }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <Honeypot />
      <input type="hidden" name="list" value="Newsletter" />
      <input
        type="email"
        name="email"
        required
        placeholder="you@email.com"
        autoComplete="email"
        aria-label="Email address"
        className="w-full rounded-full border border-paper/20 bg-paper/[0.06] px-5 py-3.5 text-sm text-paper placeholder:text-paper/45 focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/15"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="btn btn-gold shrink-0 disabled:opacity-70"
      >
        {state === "loading" ? "…" : "Subscribe"}
        {state !== "loading" && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
