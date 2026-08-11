import Link from "next/link";
import { services } from "@/lib/site";
import { ArrowUpRight, Check, iconForType } from "./Icons";
import { Reveal } from "./Reveal";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {services.map((s, i) => {
        const Icon = iconForType[s.icon];
        return (
          <Reveal key={s.key} delay={i * 90}>
            <Link
              href={s.href}
              className="card card-lift group flex h-full flex-col p-7 md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/8 text-forest transition-colors group-hover:bg-forest group-hover:text-paper">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/40 transition-all group-hover:border-gold group-hover:text-gold">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink group-hover:text-forest">
                {s.title}
              </h3>
              <p className="mt-2 text-stone">{s.description}</p>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-ink/75">
                    <Check className="h-4 w-4 shrink-0 text-emerald" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
