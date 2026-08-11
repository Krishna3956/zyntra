import Link from "next/link";
import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import { Reveal } from "./Reveal";
import { CTASection } from "./CTASection";
import { ArrowUpRight, Check } from "./Icons";

export interface ProseSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Highlight {
  title: string;
  body: string;
}

export interface Step {
  n?: string;
  t: string;
  b: string;
}

export interface RelatedLink {
  label: string;
  href: string;
  desc?: string;
}

export interface ProsePageProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  updated?: string;
  intro?: string;
  highlights?: { title?: string; items: Highlight[] };
  sections?: ProseSection[];
  steps?: { title?: string; items: Step[] };
  related?: { title?: string; links: RelatedLink[] };
  cta?:
    | false
    | {
        title?: string;
        description?: string;
        primaryLabel?: string;
        primaryHref?: string;
      };
  headerChildren?: ReactNode;
}

export function ProsePage({
  eyebrow,
  title,
  description,
  breadcrumb,
  updated,
  intro,
  highlights,
  sections,
  steps,
  related,
  cta,
  headerChildren,
}: ProsePageProps) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumb={breadcrumb}
      >
        {headerChildren}
      </PageHeader>

      {highlights && (
        <section className="container-page py-16 md:py-20">
          {highlights.title && (
            <Reveal className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                {highlights.title}
              </h2>
            </Reveal>
          )}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.items.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="card h-full p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest/8 text-forest">
                    <Check className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {(intro || sections) && (
        <section className="container-page py-14 md:py-16">
          <div className="mx-auto max-w-3xl">
            {updated && <p className="text-sm text-stone">Last updated: {updated}</p>}
            {intro && (
              <Reveal className="mt-2">
                <p className="text-lg leading-relaxed text-stone">{intro}</p>
              </Reveal>
            )}
            {sections?.map((s, i) => (
              <Reveal key={i} delay={i * 30} className="mt-9">
                {s.heading && (
                  <h2 className="font-display text-2xl font-semibold text-ink md:text-[1.7rem]">
                    {s.heading}
                  </h2>
                )}
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-stone">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2.5">
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
          </div>
        </section>
      )}

      {steps && (
        <section className="bg-cream py-16 md:py-20">
          <div className="container-page">
            {steps.title && (
              <Reveal className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  {steps.title}
                </h2>
              </Reveal>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.items.map((s, i) => (
                <Reveal key={s.t} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-ink/8 bg-paper p-7">
                    <span className="font-display text-4xl font-semibold text-gold/50">
                      {s.n ?? String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink">{s.t}</h3>
                    <p className="mt-2 text-sm text-stone">{s.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {related && (
        <section className="container-page py-16 md:py-20">
          <Reveal className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              {related.title ?? "Related"}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.links.map((l, i) => (
              <Reveal key={l.href} delay={i * 60}>
                <Link
                  href={l.href}
                  className="card card-lift group flex items-start justify-between gap-4 p-6"
                >
                  <span>
                    <span className="block font-display text-lg font-semibold text-ink group-hover:text-forest">
                      {l.label}
                    </span>
                    {l.desc && <span className="mt-1 block text-sm text-stone">{l.desc}</span>}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-deep" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {cta !== false && (
        <CTASection
          title={cta?.title}
          description={cta?.description}
          primaryLabel={cta?.primaryLabel}
          primaryHref={cta?.primaryHref}
        />
      )}
    </>
  );
}
