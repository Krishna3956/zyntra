import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { OfficeCards } from "@/components/OfficeCards";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, Whatsapp } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zyntra. Reach our Gurugram (Sector 14) and Indore (Vijay Nagar) offices, or send us a message about buying, selling, renting or a joint venture.",
};

export default function ContactPage() {
  const wa = site.whatsapp.replace(/[^0-9]/g, "");
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Let's start a conversation."
        description="Buying, selling, renting or sitting on land worth developing — tell us what's on your mind and the right person at Zyntra will get back to you."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            <div className="card p-7 md:p-9">
              <span className="eyebrow">Send a message</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                How can we help?
              </h2>
              <p className="mt-2 text-stone">
                Fill this in and we&apos;ll route it to the right desk. Expect a reply within one
                business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${site.phoneHref}`}
                className="card card-lift flex items-center gap-4 p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                  <Phone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-stone">Call us</span>
                  <span className="block font-semibold text-ink">{site.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="card card-lift flex items-center gap-4 p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                  <Mail className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-stone">Email us</span>
                  <span className="block font-semibold text-ink">{site.email}</span>
                </span>
              </a>
              <a
                href={`https://wa.me/${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-lift flex items-center gap-4 p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                  <Whatsapp className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-stone">
                    WhatsApp
                  </span>
                  <span className="block font-semibold text-ink">Chat with us instantly</span>
                </span>
              </a>
              <div className="gradient-forest rounded-2xl p-7 text-paper">
                <h3 className="font-display text-lg font-semibold">Office hours</h3>
                <p className="mt-2 text-sm text-paper/75">
                  Monday to Saturday
                  <br />
                  10:00 AM – 7:30 PM
                </p>
                <p className="mt-3 text-sm text-paper/75">
                  Sundays by appointment — just ask.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Visit us"
            title="Come by either office"
            align="center"
            className="mb-12"
          />
          <OfficeCards />
        </div>
      </section>
    </>
  );
}
