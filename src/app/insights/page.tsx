import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowUpRight } from "@/components/Icons";
import { insights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights & Market Guides",
  description:
    "Field notes on Gurugram and Indore real estate from Zyntra — pricing, timing, joint ventures, rentals and buyer guides.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        title="Sharper decisions start with better information."
        description="Honest, useful writing on the Gurugram and Indore markets — the kind of guidance we'd give a friend before they signed anything."
      />

      <section className="container-page py-16 md:py-20">
        {/* Featured */}
        <Reveal>
          <Link
            href={`/insights/${featured.slug}`}
            className="card card-lift group grid overflow-hidden lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-forest/8 px-3 py-1 font-semibold text-forest">
                  {featured.category}
                </span>
                <span className="text-stone">
                  {featured.date} · {featured.readTime}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink group-hover:text-forest md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-stone">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                Read the guide
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70}>
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
                  <p className="mt-2 line-clamp-3 text-sm text-stone">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                    Read insight
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Want guidance tailored to your situation?"
        description="Articles help, but nothing beats a direct conversation about your property and your goals."
        primaryLabel="Talk to Zyntra"
        primaryHref="/contact"
      />
    </>
  );
}
