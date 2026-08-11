import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { RentForm } from "@/components/forms/RentForm";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, Check, Building, KeyIcon, Shield } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Rent - Lease or Let",
  description:
    "Take a place on rent or give your property on rent with Zyntra. Verified tenants and landlords, background checks, agreements and optional management in Gurugram and Indore.",
};

const forTenants = [
  "Verified, ready-to-move listings",
  "Options matched to budget & area",
  "Transparent deposits & terms",
  "Agreement & registration handled",
];
const forLandlords = [
  "Screened, background-checked tenants",
  "Market-right rent, minimal voids",
  "Rent agreement & registration",
  "Optional end-to-end management",
];

export default function RentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rent - Lease or Let"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Rent" }]}
        title="Renting, made refreshingly simple."
        description="Whether you need a place to live or income from a property you own, Zyntra matches the right tenant with the right home - and handles the checks, agreements and handover."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="#rent-enquiry" className="btn btn-gold">
            Start your rental
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-ghost-light">
            Book a consultation
          </Link>
        </div>
      </PageHeader>

      {/* Two audiences */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8 md:p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                <KeyIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                Looking for a place on rent
              </h3>
              <p className="mt-2 text-stone">
                Skip the endless scrolling and dead-end calls. Tell us what you need and we&apos;ll
                bring you verified, move-in-ready homes that actually fit.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {forTenants.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-ink/80">
                    <Check className="h-4 w-4 shrink-0 text-emerald" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-8 md:p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                <Building className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                Want to give your property on rent
              </h3>
              <p className="mt-2 text-stone">
                Turn an empty flat into reliable income. We find screened tenants, agree the right
                rent and paper it properly - so you sleep easy.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {forLandlords.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-ink/80">
                    <Check className="h-4 w-4 shrink-0 text-emerald" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section id="rent-enquiry" className="bg-cream scroll-mt-24 py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <Reveal>
              <div className="card p-7 md:p-9">
                <span className="eyebrow">Rental enquiry</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                  Let&apos;s get you matched
                </h2>
                <p className="mt-2 text-stone">
                  Choose whether you want to take or give on rent, then tell us the details.
                </p>
                <div className="mt-8">
                  <RentForm />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col gap-6">
                <div className="gradient-forest rounded-2xl p-7 text-paper">
                  <Shield className="h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    Peace of mind, both ways
                  </h3>
                  <p className="mt-2 text-sm text-paper/75">
                    Tenants get honest listings and fair terms. Landlords get verified occupants and
                    watertight paperwork. Everyone wins.
                  </p>
                </div>
                <div className="card p-7">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Optional: full management
                  </h3>
                  <p className="mt-2 text-sm text-stone">
                    Travelling or overseas? We can handle rent collection, maintenance coordination
                    and renewals so your property runs itself.
                  </p>
                  <Link href="/contact" className="btn btn-outline mt-5 w-full">
                    Ask about management
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="A better rental experience, either side of the deal."
        description="Take on rent or give on rent - start with a two-minute form and let Zyntra do the legwork."
        primaryLabel="Start now"
        primaryHref="#rent-enquiry"
      />
    </>
  );
}
