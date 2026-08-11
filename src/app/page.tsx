import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { OfficeCards } from "@/components/OfficeCards";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ArrowUpRight, Check, Handshake } from "@/components/Icons";
import { differentiators, insights, offices } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust marquee */}
      <section className="border-y border-ink/8 bg-cream py-5">
        <div className="container-page flex flex-col items-center gap-3 text-center text-sm text-stone md:flex-row md:justify-between md:text-left">
          <p className="font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Trusted across Gurugram &amp; Indore
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {["RERA-aligned diligence", "Transparent brokerage", "In-house legal", "End-to-end delivery"].map(
              (t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald" />
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Four ways Zyntra works for you"
            description="From your first home to your next development, we cover the entire property journey — with the same care whether the deal is ₹50 lakh or ₹50 crore."
          />
          <Link href="/contact" className="btn btn-outline shrink-0">
            Talk to an advisor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ServicesGrid />
      </section>

      {/* Why Zyntra */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="A well-appointed living space"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-56 rounded-2xl border border-ink/8 bg-paper p-5 shadow-lift sm:block">
              <p className="font-display text-3xl font-semibold text-forest">100%</p>
              <p className="mt-1 text-sm text-stone">
                of the deals we take on get independent title &amp; document checks first.
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Why Zyntra"
              title="An advisor first. A broker second."
              description="Most agents are paid to close. We're built to be right — because a client who trusts us is worth more than any single transaction."
            />
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <Reveal key={d.title} delay={i * 80}>
                  <div className="flex gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{d.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-stone">{d.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link href="/about" className="btn btn-outline mt-9">
              More about us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="gradient-forest relative overflow-hidden py-20 text-paper md:py-28">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="How it works"
            title="A calm, disciplined path to done"
            description="Four steps, zero guesswork. This is the same process behind every Zyntra transaction and development."
            light
            align="center"
            className="mb-14"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* Joint venture band */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="grid overflow-hidden rounded-[2rem] border border-ink/8 bg-paper shadow-soft lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Land ready for development"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="p-8 md:p-12 lg:p-14">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-deep">
              <Handshake className="h-7 w-7" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Sitting on land? Let&apos;s build on it — together.
            </h2>
            <p className="mt-4 text-stone">
              Through a Zyntra joint venture, you keep ownership of your land while we bring
              capital, design, approvals, construction and sales. Returns are shared on a clear,
              registered revenue- or area-share basis, with milestone governance and full
              transparency.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "No upfront cost to you",
                "Feasibility & design in-house",
                "Approvals & construction managed",
                "Transparent, registered agreement",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-sm text-ink/80">
                  <Check className="h-4 w-4 text-emerald" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/joint-ventures" className="btn btn-primary">
                Explore joint ventures
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/joint-ventures#enquiry" className="btn btn-outline">
                Submit your land
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Locations */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Where we are"
            title={`Two offices. ${offices.length} cities. One standard.`}
            description="Meet us at our flagship in Gurugram's Sector 14 or our regional office at Vijay Nagar, Indore — or start the conversation online."
            align="center"
            className="mb-14"
          />
          <OfficeCards />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="In their words"
          title="Outcomes our clients felt good about"
          description="Buyers, sellers, landlords and landowners — here's what working with Zyntra actually felt like."
          align="center"
          className="mb-14"
        />
        <Testimonials />
      </section>

      {/* Insights */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Sharper decisions start here"
              description="Field notes on the Gurugram and Indore markets — pricing, timing, and the things nobody tells first-time buyers and landowners."
            />
            <Link href="/insights" className="btn btn-outline shrink-0">
              All insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {insights.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="card card-lift group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-forest">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-stone">
                      {post.date} · {post.readTime}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink group-hover:text-forest">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-stone">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                      Read insight
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
