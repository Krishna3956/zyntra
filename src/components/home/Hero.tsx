"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Search, Sparkle } from "../Icons";
import { stats } from "@/lib/site";

export function Hero() {
  const router = useRouter();
  const [listing, setListing] = useState<"sale" | "rent">("sale");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  function goSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("listing", listing);
    if (city) params.set("city", city);
    if (type) params.set("type", type);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 md:pt-32">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
        alt="Premium residence"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="gradient-hero-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-ink/25" />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="reveal eyebrow text-gold-soft" style={{ animationDelay: "0ms" }}>
            <Sparkle className="h-4 w-4" />
            Gurugram · Indore
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
            Buy, sell, rent or co-develop premium property — advised end to end by a
            team that treats your outcome as its own. One standard, across two cities.
          </p>

          <div
            className="reveal mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/properties" className="btn btn-gold">
              Explore properties
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/joint-ventures" className="btn btn-ghost-light">
              Have land? Partner with us
            </Link>
          </div>
        </div>

        {/* Search widget */}
        <form
          onSubmit={goSearch}
          className="reveal mt-12 max-w-4xl rounded-3xl border border-paper/15 bg-paper/95 p-3 shadow-lift backdrop-blur-xl md:p-4"
          style={{ animationDelay: "320ms" }}
        >
          <div className="mb-3 flex gap-1.5 rounded-full bg-cream p-1 sm:w-max">
            {(
              [
                { key: "sale", label: "Buy" },
                { key: "rent", label: "Rent" },
              ] as const
            ).map((o) => (
              <button
                key={o.key}
                type="button"
                onClick={() => setListing(o.key)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  listing === o.key ? "bg-forest text-paper shadow-sm" : "text-ink/60"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto] md:grid-cols-[1.2fr_1.2fr_auto]">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="field"
              aria-label="City"
            >
              <option value="">Any city</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Indore">Indore</option>
            </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="field"
              aria-label="Property type"
            >
              <option value="">Any type</option>
              <option>Apartment</option>
              <option>Builder Floor</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
              <option>Office</option>
            </select>
            <button type="submit" className="btn btn-primary">
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </form>

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
