import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProperty, properties } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyEnquiryForm } from "@/components/forms/PropertyEnquiryForm";
import {
  ArrowRight,
  Bath,
  Bed,
  Building,
  Check,
  MapPin,
  Phone,
  Ruler,
  Shield,
} from "@/components/Icons";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return { title: "Property not found" };
  return {
    title: `${p.title} — ${p.priceLabel}`,
    description: p.description.slice(0, 155),
    openGraph: { images: [p.image] },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const related = properties
    .filter((x) => x.slug !== p.slug && x.city === p.city)
    .slice(0, 3);

  const facts = [
    p.beds != null && { icon: Bed, label: "Bedrooms", value: String(p.beds) },
    p.baths != null && { icon: Bath, label: "Bathrooms", value: String(p.baths) },
    { icon: Ruler, label: "Area", value: `${p.area.toLocaleString("en-IN")} sq ft` },
    { icon: Building, label: "Type", value: p.type },
    p.furnishing && { icon: Check, label: "Furnishing", value: p.furnishing },
    p.possession && { icon: Shield, label: "Possession", value: p.possession },
  ].filter(Boolean) as { icon: typeof Bed; label: string; value: string }[];

  return (
    <>
      {/* Gallery */}
      <section className="pt-[5.6rem]">
        <div className="container-page py-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-stone">
            <Link href="/" className="hover:text-forest">
              Home
            </Link>
            <span className="text-ink/30">/</span>
            <Link href="/properties" className="hover:text-forest">
              Properties
            </Link>
            <span className="text-ink/30">/</span>
            <span className="text-ink/80">{p.title}</span>
          </nav>
        </div>
        <div className="container-page">
          <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl md:aspect-[16/10]">
              <Image
                src={p.gallery[0] ?? p.image}
                alt={p.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-forest">
                  For {p.listingType === "sale" ? "Sale" : "Rent"}
                </span>
                {p.status && (
                  <span className="rounded-full bg-forest/90 px-3 py-1 text-xs font-semibold text-paper">
                    {p.status}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              {p.gallery.slice(1, 3).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/11] overflow-hidden rounded-2xl md:aspect-[16/9]"
                >
                  <Image
                    src={img}
                    alt={`${p.title} — view ${i + 2}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-page py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-deep">
                  {p.type}
                </span>
                <h1 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                  {p.title}
                </h1>
                <p className="mt-2 flex items-center gap-1.5 text-stone">
                  <MapPin className="h-4 w-4 text-gold-deep" />
                  {p.address}
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-semibold text-forest md:text-4xl">
                  {p.priceLabel}
                  {p.rentPeriod && <span className="text-base font-normal">/mo</span>}
                </p>
                {p.reraId && (
                  <p className="mt-1 text-xs text-stone">RERA: {p.reraId}</p>
                )}
              </div>
            </div>

            {/* Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-ink/8 bg-cream p-6 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-paper text-forest">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-stone">{f.label}</p>
                    <p className="font-semibold text-ink">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-ink">About this property</h2>
              <p className="mt-4 leading-relaxed text-stone">{p.description}</p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-ink">Highlights</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-ink/80">
                    <Check className="h-5 w-5 shrink-0 text-emerald" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-ink">Amenities</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {p.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm text-ink/75"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Remaining gallery */}
            {p.gallery.length > 3 && (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-ink">Gallery</h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {p.gallery.slice(3).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl"
                    >
                      <Image
                        src={img}
                        alt={`${p.title} — gallery ${i + 4}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky enquiry */}
          <div>
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="card p-7">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Enquire about this property
                </h3>
                <p className="mt-1.5 text-sm text-stone">
                  Get full details, a site visit or a video walkthrough.
                </p>
                <div className="mt-6">
                  <PropertyEnquiryForm propertyTitle={p.title} propertySlug={p.slug} />
                </div>
              </div>
              <div className="gradient-forest rounded-2xl p-7 text-paper">
                <h3 className="font-display text-lg font-semibold">Call the Zyntra desk</h3>
                <p className="mt-2 text-sm text-paper/75">
                  Speak to an advisor about {p.title} right now.
                </p>
                <a href={`tel:${site.phoneHref}`} className="btn btn-gold mt-5 w-full">
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream py-16 md:py-20">
          <div className="container-page">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                More in {p.city}
              </h2>
              <Link
                href="/properties"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <PropertyCard key={rp.slug} property={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
