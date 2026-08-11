import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { BuyerForm } from "@/components/forms/BuyerForm";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, Check, KeyIcon, Search, Shield, Chart, Handshake } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Buy Property",
  description:
    "Buy your next home or investment with Zyntra. Curated, verified listings in Gurugram and Indore, off-market access, legal due diligence and home-loan support.",
};

const benefits = [
  {
    icon: Search,
    title: "Curated, not endless",
    body: "We shortlist only what genuinely fits your brief and budget - including off-market and pre-launch inventory you won't find on portals.",
  },
  {
    icon: Shield,
    title: "Diligence before deposit",
    body: "Ownership chain, encumbrances, approvals and RERA status are verified independently before you commit a rupee.",
  },
  {
    icon: Chart,
    title: "Priced on data",
    body: "Comparable-led benchmarking tells you what's fair - so you negotiate from facts, not a broker's guess.",
  },
  {
    icon: Handshake,
    title: "Handheld to registry",
    body: "Loan facilitation, agreement, sale deed, registration and handover - managed end to end by one team.",
  },
];

const steps = [
  { n: "01", t: "Share your brief", b: "Tell us your city, budget, purpose and must-haves via the form below." },
  { n: "02", t: "Get a curated shortlist", b: "We revert with matched options - on-market and off - usually within a day." },
  { n: "03", t: "Tour & diligence", b: "Visit shortlisted homes; we run title and price checks in parallel." },
  { n: "04", t: "Negotiate & close", b: "We negotiate hard, paper it cleanly, and stay through registration and handover." },
];

export default function BuyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Buy Property"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Buy" }]}
        title="Find a home - or an investment - worth owning."
        description="Zyntra turns a stressful search into a shortlist. Verified listings across Gurugram and Indore, honest pricing, and support that doesn't stop at the sale deed."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="#buyer-enquiry" className="btn btn-gold">
            Tell us what you want
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-ghost-light">
            Book a consultation
          </Link>
        </div>
      </PageHeader>

      {/* Benefits */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="Why buy with Zyntra"
          title="The buyer's advantage"
          description="Four things that make a Zyntra purchase calmer, safer and - more often than not - better priced."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="card h-full p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How buying works"
            title="From brief to keys, in four steps"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="h-full rounded-2xl border border-ink/8 bg-paper p-7">
                  <span className="font-display text-4xl font-semibold text-gold/50">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-stone">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + aside */}
      <section id="buyer-enquiry" className="container-page scroll-mt-24 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            <div className="card p-7 md:p-9">
              <span className="eyebrow">Buyer enquiry</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                Tell us what you&apos;re looking for
              </h2>
              <p className="mt-2 text-stone">
                The more you share, the sharper our shortlist. It takes two minutes.
              </p>
              <div className="mt-8">
                <BuyerForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-6">
              <div className="gradient-forest rounded-2xl p-7 text-paper">
                <KeyIcon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  Prefer to talk it through?
                </h3>
                <p className="mt-2 text-sm text-paper/75">
                  Sometimes a five-minute call beats a form. Our advisors are happy to help you
                  think, with zero pressure.
                </p>
                <Link href="/contact" className="btn btn-gold mt-5 w-full">
                  Book a consultation
                </Link>
              </div>
              <div className="card p-7">
                <h3 className="font-display text-lg font-semibold text-ink">
                  What you can expect
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-ink/80">
                  {[
                    "A response within one business day",
                    "Options matched to your real brief",
                    "Honest guidance - including 'not yet'",
                    "No obligation, no spam",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Not sure where to begin?"
        description="Tell us roughly what you're after and your budget - we'll take it from there and come back with a real, curated shortlist."
        primaryLabel="Start your search"
        primaryHref="#buyer-enquiry"
      />
    </>
  );
}
