import Image from "next/image";
import { offices } from "@/lib/site";
import { Clock, Mail, MapPin, Phone } from "./Icons";
import { Reveal } from "./Reveal";

const officeImages: Record<string, string> = {
  gurugram:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  indore:
    "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
};

export function OfficeCards() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {offices.map((o, i) => (
        <Reveal key={o.id} delay={i * 100}>
          <div className="card card-lift group flex h-full flex-col overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={officeImages[o.id]}
                alt={`${o.city} skyline`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-4 left-5 text-paper">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  {o.region}
                </p>
                <p className="font-display text-2xl font-semibold">{o.label}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="text-stone">{o.blurb}</p>
              <ul className="mt-6 space-y-3.5 text-sm">
                <li className="flex gap-3 text-ink/80">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span>{o.address}</span>
                </li>
                <li className="flex gap-3 text-ink/80">
                  <Phone className="h-5 w-5 shrink-0 text-forest" />
                  <a href={`tel:${o.phoneHref}`} className="hover:text-forest">
                    {o.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3 text-ink/80">
                  <Mail className="h-5 w-5 shrink-0 text-forest" />
                  <a href={`mailto:${o.email}`} className="hover:text-forest">
                    {o.email}
                  </a>
                </li>
                <li className="flex gap-3 text-ink/80">
                  <Clock className="h-5 w-5 shrink-0 text-forest" />
                  <span>{o.hours}</span>
                </li>
              </ul>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  o.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-6 w-max"
              >
                <MapPin className="h-4 w-4" />
                View on map
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
