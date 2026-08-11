import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowRight, Phone } from "./Icons";
import { site } from "@/lib/site";

export function CTASection({
  title = "Let's talk about your next move.",
  description = "Whether you're buying, selling, renting or sitting on land worth developing — a short conversation with Zyntra is the fastest way to clarity.",
  primaryLabel = "Get in touch",
  primaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal className="gradient-forest relative overflow-hidden rounded-[2rem] px-7 py-14 text-paper md:px-16 md:py-20">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #1a6b52, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #c9a24c, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="eyebrow text-gold-soft">Zyntra Real Estate</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[3rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-paper/75">{description}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn btn-gold">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn btn-ghost-light">
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
