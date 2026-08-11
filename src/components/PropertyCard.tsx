import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";
import { Bath, Bed, MapPin, Ruler } from "./Icons";

export function PropertyCard({ property }: { property: Property }) {
  const p = property;
  return (
    <Link
      href={`/properties/${p.slug}`}
      className="card card-lift group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-forest backdrop-blur">
            For {p.listingType === "sale" ? "Sale" : "Rent"}
          </span>
          {p.status && (
            <span className="rounded-full bg-forest/90 px-3 py-1 text-xs font-semibold text-paper backdrop-blur">
              {p.status}
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-paper">
          <span className="font-display text-2xl font-semibold drop-shadow">
            {p.priceLabel}
            {p.rentPeriod && <span className="text-sm font-normal">/mo</span>}
          </span>
          <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
            {p.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-forest">
          {p.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-stone">
          <MapPin className="h-4 w-4 text-gold-deep" />
          {p.locality}, {p.city}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/8 pt-4 text-sm text-stone">
          {p.beds != null && (
            <span className="inline-flex items-center gap-1.5">
              <Bed className="h-4 w-4 text-forest" /> {p.beds} Beds
            </span>
          )}
          {p.baths != null && (
            <span className="inline-flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-forest" /> {p.baths} Baths
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-forest" /> {p.area.toLocaleString("en-IN")} sq ft
          </span>
        </div>
      </div>
    </Link>
  );
}
