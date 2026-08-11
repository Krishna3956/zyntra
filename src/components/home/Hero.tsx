import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "../Icons";
import { stats } from "@/lib/site";

const quickPaths = [
  { label: "Buy", desc: "Homes & investments", href: "/buy" },
  { label: "Sell", desc: "Reach real buyers", href: "/sell" },
  { label: "Rent", desc: "Lease or let", href: "/rent" },
  { label: "Joint ventures", desc: "Develop your land", href: "/joint-ventures" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 md:pt-32">
      <Image
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=85"
        alt="Bright, modern premium residence with pool in daylight"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="gradient-hero-overlay absolute inset-0" />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="reveal eyebrow text-gold-soft" style={{ animationDelay: "0ms" }}>
            <Sparkle className="h-4 w-4" />
            Gurugram &amp; Indore
          </span>
          <h1
            className="reveal mt-5 font-display text-4xl font-semibold leading-[1.03] tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-[4.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            Real estate,
            <br />
            <span className="text-gold-soft">reimagined for you.</span>
          </h1>
          <p
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-paper/80"
            style={{ animationDelay: "160ms" }}
          >
            Buy, sell, rent or co-develop premium property - advised end to end by a
            team that treats your outcome as its own. One standard, across two cities.
          </p>

          <div
            className="reveal mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/contact" className="btn btn-gold">
              Talk to an advisor
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/joint-ventures" className="btn btn-ghost-light">
              Have land? Partner with us
            </Link>
          </div>
        </div>

        {/* Quick paths */}
        <div
          className="reveal mt-12 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {quickPaths.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="group rounded-2xl border border-paper/15 bg-paper/95 p-5 backdrop-blur-xl transition-colors hover:bg-paper"
            >
              <span className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink group-hover:text-forest">
                  {q.label}
                </span>
                <ArrowRight className="h-4 w-4 text-gold-deep transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="mt-1 block text-sm text-stone">{q.desc}</span>
            </Link>
          ))}
        </div>

        {/* Inline stats */}
        <div
          className="reveal mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
          style={{ animationDelay: "400ms" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl font-semibold text-paper md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-paper/60 md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
