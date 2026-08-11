import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Mail, MapPin, Phone } from "@/components/Icons";
import { offices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate in Indore",
  description:
    "Zyntra in Indore - buy, sell, rent and joint-venture property, run out of our Vijay Nagar office. Advisory, transactions and land development across central India's cleanest city.",
};

const office = offices.find((o) => o.id === "indore")!;
const areas = [
  "Vijay Nagar",
  "Scheme No. 54 & 78",
  "AB Road corridor",
  "Nipania",
  "Super Corridor",
  "Bicholi Mardana",
  "Rau - Pithampur belt",
  "Old Palasia",
];

export default function IndorePage() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.mapQuery
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Indore, Madhya Pradesh"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: "Indore" },
        ]}
        title="Real estate in Indore"
        description="From our Vijay Nagar office, we help you buy, sell, rent and co-develop property across one of India's fastest-rising cities."
      />

      {/* Office + areas */}
      <section className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="card p-8">
              <span className="eyebrow text-gold-deep">Our regional office</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                {office.city} - {office.area}
              </h2>
              <p className="mt-3 text-stone">{office.blurb}</p>
              <ul className="mt-6 space-y-4 text-ink/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span>{office.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-forest" />
                  <a href={`tel:${office.phoneHref}`} className="link-underline">
                    {office.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-forest" />
                  <a href={`mailto:${office.email}`} className="link-underline">
                    {office.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-stone">{office.hours}</li>
              </ul>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-7"
              >
                Open in Maps
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <span className="eyebrow text-gold-deep">Where we work</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Areas we cover
              </h2>
              <p className="mt-3 text-stone">
                We work across Indore, with particular depth around Vijay Nagar and the
                high-growth corridors reshaping the city.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm text-ink/80"
                  >
                    {a}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/5 p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Own land in or around Indore?
                </h3>
                <p className="mt-2 text-sm text-stone">
                  Joint ventures are our specialty. Keep ownership, we bring capital and
                  delivery, and we share the upside - with zero upfront cost to you.
                </p>
                <Link
                  href="/joint-ventures#enquiry"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest"
                >
                  Explore a joint venture
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Full-spectrum"
            title="What we do in Indore"
            description="One team for every property need in the city."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Buy", b: "Homes, offices and investments, verified and price-benchmarked.", href: "/buy" },
              { t: "Sell", b: "Reach qualified buyers and close at the right number.", href: "/sell" },
              { t: "Rent", b: "Take a place on rent or earn from one you own.", href: "/rent" },
              { t: "Joint ventures", b: "Develop your land with us, transparently.", href: "/joint-ventures" },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <Link href={s.href} className="card card-lift group block h-full p-6">
                  <h3 className="font-display text-lg font-semibold text-ink group-hover:text-forest">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm text-stone">{s.b}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's talk about your property in Indore."
        description="Buying, selling, renting or sitting on land you would like to develop - come find us at Vijay Nagar."
        primaryLabel="Get in touch"
        primaryHref="/contact"
      />
    </>
  );
}
