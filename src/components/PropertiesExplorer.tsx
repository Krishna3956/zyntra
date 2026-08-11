"use client";

import { useMemo, useState } from "react";
import { properties, type Property } from "@/lib/properties";
import { PropertyCard } from "./PropertyCard";
import { Search } from "./Icons";

type ListingFilter = "all" | "sale" | "rent";
type CityFilter = "all" | "Gurugram" | "Indore";
type Sort = "featured" | "price-asc" | "price-desc" | "area-desc";

const typeOptions = [
  "All types",
  "Apartment",
  "Builder Floor",
  "Villa",
  "Plot",
  "Commercial",
  "Office",
];

export function PropertiesExplorer({
  initialListing = "all",
  initialCity = "all",
  initialType = "All types",
}: {
  initialListing?: ListingFilter;
  initialCity?: CityFilter;
  initialType?: string;
}) {
  const [query, setQuery] = useState("");
  const [listing, setListing] = useState<ListingFilter>(initialListing);
  const [city, setCity] = useState<CityFilter>(initialCity);
  const [type, setType] = useState(initialType);
  const [sort, setSort] = useState<Sort>("featured");

  const results = useMemo(() => {
    let list: Property[] = properties.filter((p) => {
      if (listing !== "all" && p.listingType !== listing) return false;
      if (city !== "all" && p.city !== city) return false;
      if (type !== "All types" && p.type !== type) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = `${p.title} ${p.locality} ${p.city} ${p.type} ${p.address}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "area-desc":
          return b.area - a.area;
        default:
          return Number(b.featured ?? false) - Number(a.featured ?? false);
      }
    });
    return list;
  }, [query, listing, city, type, sort]);

  const chip = (active: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-all ${
      active ? "bg-forest text-paper shadow-sm" : "bg-cream text-ink/65 hover:text-forest"
    }`;

  return (
    <div>
      {/* Filter bar */}
      <div className="card rounded-2xl p-4 md:p-5">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by locality, city, project or type…"
              className="field pl-12"
              aria-label="Search properties"
            />
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-cream p-1">
                {(
                  [
                    { key: "all", label: "All" },
                    { key: "sale", label: "Buy" },
                    { key: "rent", label: "Rent" },
                  ] as { key: ListingFilter; label: string }[]
                ).map((o) => (
                  <button key={o.key} onClick={() => setListing(o.key)} className={chip(listing === o.key)}>
                    {o.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-cream p-1">
                {(
                  [
                    { key: "all", label: "All cities" },
                    { key: "Gurugram", label: "Gurugram" },
                    { key: "Indore", label: "Indore" },
                  ] as { key: CityFilter; label: string }[]
                ).map((o) => (
                  <button key={o.key} onClick={() => setCity(o.key)} className={chip(city === o.key)}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="field max-w-[10rem] py-2.5 text-sm"
                aria-label="Property type"
              >
                {typeOptions.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="field max-w-[12rem] py-2.5 text-sm"
                aria-label="Sort"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="area-desc">Largest area</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-stone">
        Showing <span className="font-semibold text-ink">{results.length}</span>{" "}
        {results.length === 1 ? "property" : "properties"}
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-ink/15 bg-cream/50 px-6 py-16 text-center">
          <p className="font-display text-xl text-ink">No properties match those filters.</p>
          <p className="mt-2 text-stone">
            Try widening your search — or tell us what you want and we&apos;ll source it for you.
          </p>
        </div>
      )}
    </div>
  );
}
