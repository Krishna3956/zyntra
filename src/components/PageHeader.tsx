import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="gradient-forest relative overflow-hidden pt-[7.5rem] pb-16 text-paper md:pt-36 md:pb-20">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #c6a15b55, transparent 70%)" }}
      />
      <div className="container-page relative">
        {breadcrumb && (
          <Reveal className="mb-6">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-paper/55">
              {breadcrumb.map((b, i) => (
                <span key={b.label} className="flex items-center gap-2">
                  {b.href ? (
                    <Link href={b.href} className="hover:text-gold">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-paper/80">{b.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span className="text-paper/30">/</span>}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="eyebrow text-gold-soft">{eyebrow}</span>}
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.6rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
