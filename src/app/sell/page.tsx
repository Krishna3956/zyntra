import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { SellerForm } from "@/components/forms/SellerForm";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, Check, Chart, Sparkle, Shield, Tag } from "@/components/Icons";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sell Property",
  description:
    "Sell your property with Zyntra. Data-backed valuation, cinematic marketing, a vetted buyer network and disciplined negotiation across Gurugram and Indore.",
};

const benefits = [
  {
    icon: Chart,
    title: "Valuation that holds",
    body: "A comparables-driven price that attracts real buyers and survives their diligence — no vanity number that stalls the sale.",
  },
  {
    icon: Sparkle,
    title: "Marketing that sells",
    body: "Professional photography, a compelling listing and targeted digital reach put your property in front of the right people.",
  },
  {
    icon: Shield,
    title: "Only qualified buyers",
    body: "We screen for intent and funding, so your time is spent on buyers who can actually close — not tyre-kickers.",
  },
  {
    icon: Tag,
    title: "Closed, cleanly",
    body: "Negotiation, agreement, sale deed, registration and handover — the paperwork trail is managed end to end.",
  },
];

const steps = [
  { n: "01", t: "Submit your property", b: "Share the details and photos via the form below." },
  { n: "02", t: "Get a valuation", b: "We benchmark against live comparables and agree a listing strategy with you." },
  { n: "03", t: "Go to market", b: "We shoot, list and market — then bring you screened, serious buyers." },
  { n: "04", t: "Negotiate & close", b: "We negotiate in your interest and manage the paperwork through registration." },
];

export default function SellPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sell Property"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Sell" }]}
        title="Sell for the right number — without the noise."
        description="List with Zyntra and reach genuinely qualified buyers. Honest valuation, sharp marketing and disciplined negotiation, from listing to registry."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="#seller-enquiry" className="btn btn-gold">
            List your property
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-ghost-light">
            Request a valuation
          </Link>
        </div>
      </PageHeader>

      {/* Stats strip */}
      <section className="border-b border-ink/8 bg-cream py-10">
        <div className="container-page grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-semibold text-forest md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-stone md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="Why sell with Zyntra"
          title="Marketing muscle. Advisor discipline."
          description="Everything that turns a listing into a clean, timely, well-priced close."
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
            eyebrow="How selling works"
            title="A straight line to a signed deed"
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
      <section id="seller-enquiry" className="container-page scroll-mt-24 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            <div className="card p-7 md:p-9">
              <span className="eyebrow">List with Zyntra</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                Tell us about your property
              </h2>
              <p className="mt-2 text-stone">
                Submit the details below. We&apos;ll value it and come back with a plan to sell —
                usually within one business day.
              </p>
              <div className="mt-8">
                <SellerForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-6">
              <div className="gradient-forest rounded-2xl p-7 text-paper">
                <Chart className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  Free, no-obligation valuation
                </h3>
                <p className="mt-2 text-sm text-paper/75">
                  Curious what your property is really worth today? We&apos;ll benchmark it against
                  live comparables — no strings attached.
                </p>
                <Link href="/contact" className="btn btn-gold mt-5 w-full">
                  Request valuation
                </Link>
              </div>
              <div className="card p-7">
                <h3 className="font-display text-lg font-semibold text-ink">Come prepared with</h3>
                <ul className="mt-4 space-y-3 text-sm text-ink/80">
                  {[
                    "Recent photos (a shareable link works)",
                    "Approximate built-up area",
                    "Ownership & loan status",
                    "Your ideal timeline",
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
        title="Thinking of selling this year?"
        description="Even if you're months away, an early valuation helps you time it right. Start with a quick, honest conversation."
        primaryLabel="List your property"
        primaryHref="#seller-enquiry"
      />
    </>
  );
}
