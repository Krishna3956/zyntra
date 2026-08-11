import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { JointVentureForm } from "@/components/forms/JointVentureForm";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, Check, Handshake, Shield, Chart, Building } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Joint Ventures",
  description:
    "Own land in Gurugram or Indore? Partner with Zyntra. You bring the land, we bring capital, design, approvals, construction and sales — with a transparent revenue- or area-share.",
};

const models = [
  {
    icon: Chart,
    title: "Revenue share",
    body: "You receive an agreed percentage of the project's sales revenue. Simple, cash-based, and ideal when you'd rather not hold built inventory.",
    points: ["Agreed % of gross sales", "Paid on milestones", "No construction risk to you"],
  },
  {
    icon: Building,
    title: "Area / built-up share",
    body: "You receive a defined share of the constructed area — units you can hold, sell or rent. Ideal when you believe in the location's long-term upside.",
    points: ["Fixed share of built area", "Own appreciating assets", "Optionally we sell it for you"],
  },
];

const zyntraBrings = [
  "Development capital & financing",
  "Feasibility, design & architecture",
  "All statutory approvals & liaison",
  "Construction & project delivery",
  "Sales, marketing & handover",
  "Legal structuring & governance",
];
const youBring = [
  "Clear-title land in our cities",
  "Willingness to partner transparently",
  "Basic documentation & mutation",
];

const process = [
  { n: "01", t: "Submit your land", b: "Share location, size, zoning and title status through the form." },
  { n: "02", t: "Feasibility study", b: "We assess the highest-and-best use, product mix and indicative numbers." },
  { n: "03", t: "Structure the deal", b: "We agree revenue- or area-share, security and milestones — reviewed by both counsels." },
  { n: "04", t: "Approvals & build", b: "We manage sanctions, finance and construction to a delivered project." },
  { n: "05", t: "Sell & share", b: "We market and sell; you receive your share, cleanly and on schedule." },
];

const safeguards = [
  { title: "Registered agreement", body: "Every JV is governed by a registered development agreement — not a handshake." },
  { title: "Milestone governance", body: "Payments and progress are tied to defined, auditable milestones." },
  { title: "Security & GPA", body: "Appropriate security deposit and limited, revocable authority — never a blanket power." },
  { title: "Independent counsel", body: "We encourage — and accommodate — your own lawyer reviewing every clause." },
];

export default function JointVenturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Joint Ventures"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Joint Ventures" }]}
        title="Your land. Our build. A partnership that's genuinely fair."
        description="Sitting on land that's doing nothing? Zyntra co-develops it with you — bringing capital, design, approvals, construction and sales — while you keep ownership and share the upside."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="#enquiry" className="btn btn-gold">
            Submit your land
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-ghost-light">
            Speak to the JV team
          </Link>
        </div>
      </PageHeader>

      {/* Intro split */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="A completed Zyntra development"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Why partner with Zyntra"
              title="Skin in the game, aligned with yours"
              description="We only make money when the project succeeds — which means our incentive is the same as yours: build well, sell right, and share fairly."
            />
            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-ink/8 bg-paper p-6">
                <h3 className="flex items-center gap-2 font-semibold text-ink">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <Handshake className="h-4 w-4" />
                  </span>
                  Zyntra brings
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {zyntraBrings.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-ink/80">
                      <Check className="h-4 w-4 shrink-0 text-emerald" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-ink/8 bg-paper p-6">
                <h3 className="flex items-center gap-2 font-semibold text-ink">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                    <Building className="h-4 w-4" />
                  </span>
                  You bring
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {youBring.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-ink/80">
                      <Check className="h-4 w-4 shrink-0 text-emerald" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How you're paid"
            title="Two clear ways to share the upside"
            description="Pick the structure that fits your goals — cash today, or assets for tomorrow. We'll help you decide."
            align="center"
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {models.map((m, i) => (
              <Reveal key={m.title} delay={i * 100}>
                <div className="card h-full p-8 md:p-9">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/8 text-forest">
                    <m.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{m.title}</h3>
                  <p className="mt-2 text-stone">{m.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-ink/80">
                        <Check className="h-4 w-4 text-emerald" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="The JV journey"
          title="From idle land to delivered project"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="h-full rounded-2xl border border-ink/8 bg-paper p-6">
                <span className="font-display text-4xl font-semibold text-gold/50">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm text-stone">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Safeguards */}
      <section className="gradient-forest relative overflow-hidden py-20 text-paper md:py-24">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Your protection"
            title="Built to protect the landowner"
            description="A joint venture should never feel like handing over your land and hoping. Here's how we make sure it doesn't."
            light
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {safeguards.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-paper/12 bg-paper/[0.04] p-7">
                  <Shield className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-paper/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dive deeper */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="Dive deeper"
          title="Everything you need to decide with confidence"
          description="Joint ventures are our specialty. Explore the models, the process and the protections in detail."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Revenue share", href: "/joint-ventures/revenue-share", desc: "Take cash from sales proceeds, with no construction risk." },
            { label: "Area / built-up share", href: "/joint-ventures/area-share", desc: "Own a share of the finished units to hold, rent or sell." },
            { label: "The JV process", href: "/joint-ventures/process", desc: "From idle land to delivered project, stage by stage." },
            { label: "Landowner protection", href: "/joint-ventures/landowner-protection", desc: "The safeguards built into every single deal." },
            { label: "Eligibility & documents", href: "/joint-ventures/eligibility", desc: "Is your land a fit, and what you'll need." },
            { label: "Joint venture FAQ", href: "/joint-ventures/faq", desc: "Straight answers to the questions landowners ask." },
          ].map((l, i) => (
            <Reveal key={l.href} delay={i * 60}>
              <Link
                href={l.href}
                className="card card-lift group flex h-full items-start justify-between gap-4 p-6"
              >
                <span>
                  <span className="block font-display text-lg font-semibold text-ink group-hover:text-forest">
                    {l.label}
                  </span>
                  <span className="mt-1 block text-sm text-stone">{l.desc}</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-gold-deep" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="container-page scroll-mt-24 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            <div className="card p-7 md:p-9">
              <span className="eyebrow">Joint venture enquiry</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                Tell us about your land
              </h2>
              <p className="mt-2 text-stone">
                Share the essentials below. Everything is confidential, and there&apos;s no
                obligation — just an honest read on what your land could become.
              </p>
              <div className="mt-8">
                <JointVentureForm />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-6">
              <div className="card p-7">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Ideal land for a JV
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-ink/80">
                  {[
                    "Located in or around Gurugram / Indore",
                    "Clear or clearable title",
                    "Residential, commercial or mixed use",
                    "Reasonable road access & frontage",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gradient-forest rounded-2xl p-7 text-paper">
                <Handshake className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  Prefer a private conversation?
                </h3>
                <p className="mt-2 text-sm text-paper/75">
                  Land deals are personal. Reach our JV team directly and we&apos;ll keep everything
                  in confidence.
                </p>
                <Link href="/contact" className="btn btn-gold mt-5 w-full">
                  Contact the JV team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="That land isn't going to build itself."
        description="Send us the basics today. Within days you could have a feasibility view and a partnership proposal on the table."
        primaryLabel="Submit your land"
        primaryHref="#enquiry"
      />
    </>
  );
}
