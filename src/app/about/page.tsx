import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Check, Shield, Handshake, Sparkle, Chart } from "@/components/Icons";
import { differentiators, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Zyntra is a full-spectrum real estate house operating in Gurugram and Indore — buying, selling, renting and co-developing property with advisory-grade discipline.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity over volume",
    body: "We'd rather do fewer deals well than many deals loudly. Every recommendation is one we'd make to our own family.",
  },
  {
    icon: Sparkle,
    title: "Craft in the detail",
    body: "From how a listing is photographed to how a clause is worded, the small things are where trust is earned.",
  },
  {
    icon: Chart,
    title: "Decisions on data",
    body: "Comparables, absorption, yields — we bring evidence to a market that too often runs on rumour.",
  },
  {
    icon: Handshake,
    title: "Aligned incentives",
    body: "Through joint ventures and honest brokerage, we win when you win. That's the only model we believe in.",
  },
];

const timeline = [
  { year: "The idea", t: "One frustrating deal too many", b: "Zyntra began with a simple conviction: real estate should be advised, not just brokered — and it should feel calm, not chaotic." },
  { year: "Gurugram", t: "Rooted in Sector 14", b: "We opened our flagship in old Gurugram's most established sector, at the crossroads of the city's residential and commercial life." },
  { year: "Indore", t: "Into central India", b: "Vijay Nagar gave us our second home — a base in one of India's fastest-improving cities and its most dynamic corridor." },
  { year: "Today", t: "A full-spectrum house", b: "Buy, sell, rent and co-develop, all under one roof, with in-house legal, marketing, finance and development." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Zyntra"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="We treat your property decisions like our own."
        description="Zyntra is a full-spectrum real estate house — advisory, transactions and development — built to bring clarity, craft and genuine alignment to a market that badly needs all three."
      />

      {/* Story */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="A Zyntra residence"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Real estate, without the runaround"
              description="Anyone who's bought, sold or rented in India knows the drill — endless calls, murky pricing, paperwork that appears out of nowhere. We started Zyntra to replace that with something calmer and straighter."
            />
            <p className="mt-6 leading-relaxed text-stone">
              We&apos;re not a listings portal and we&apos;re not a one-man brokerage. We&apos;re a
              team that sources, verifies, markets, negotiates, papers and delivers — and that co-invests
              alongside landowners when the opportunity is right. Two cities, one exacting standard,
              and a simple promise: we&apos;ll tell you the truth, even when it costs us the deal.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ink/8 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold text-forest md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-stone">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four values, non-negotiable"
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="The journey"
          title="How Zyntra came to be"
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.t} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-ink/8 bg-paper p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  {t.year}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{t.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{t.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Zyntra recap */}
      <section className="gradient-forest relative overflow-hidden py-20 text-paper md:py-24">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="The difference"
            title="Why people choose Zyntra"
            light
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border border-paper/12 bg-paper/[0.04] p-7">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                    <p className="mt-1.5 text-sm text-paper/70">{d.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
