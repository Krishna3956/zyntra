import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/lib/site";
import { insightContent } from "@/lib/insightContent";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowUpRight, Check, MapPin } from "@/components/Icons";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return { title: "Insight not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image], type: "article" },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  const sections = insightContent[slug] ?? [{ paragraphs: [post.excerpt] }];
  const more = insights.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="gradient-forest relative overflow-hidden pt-[7.5rem] pb-14 text-paper md:pt-36 md:pb-16">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container-page relative max-w-3xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-paper/55">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span className="text-paper/30">/</span>
            <Link href="/insights" className="hover:text-gold">
              Insights
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-gold/20 px-3 py-1 font-semibold text-gold-soft">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-paper/70">
              <MapPin className="h-3.5 w-3.5" />
              {post.city}
            </span>
            <span className="text-paper/60">
              {post.date} · {post.readTime}
            </span>
          </div>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[3rem]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-paper/75">{post.excerpt}</p>
        </div>
      </section>

      {/* Cover */}
      <section className="container-page -mt-8 md:-mt-10">
        <Reveal className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lift md:aspect-[21/9]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      {/* Body */}
      <article className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          {sections.map((s, i) => (
            <Reveal key={i} delay={i * 40} className="mb-8">
              {s.heading && (
                <h2 className="font-display text-2xl font-semibold text-ink md:text-[1.7rem]">
                  {s.heading}
                </h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mt-4 text-[1.05rem] leading-relaxed text-stone">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-ink/80">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <div className="mt-12 rounded-2xl border border-ink/8 bg-cream p-7 md:p-8">
            <p className="font-display text-xl font-semibold text-ink">
              Have a question this raised?
            </p>
            <p className="mt-2 text-stone">
              Our advisors are happy to apply any of this to your specific property and goals — no
              obligation.
            </p>
            <Link href="/contact" className="btn btn-primary mt-5">
              Talk to Zyntra
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* More */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-page">
          <h2 className="mb-10 font-display text-2xl font-semibold text-ink md:text-3xl">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <Link
                key={m.slug}
                href={`/insights/${m.slug}`}
                className="card card-lift group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-stone">{m.readTime}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink group-hover:text-forest">
                    {m.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
