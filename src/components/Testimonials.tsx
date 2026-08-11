import { testimonials } from "@/lib/site";
import { Quote } from "./Icons";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 80}>
          <figure className="card flex h-full flex-col p-7 md:p-8">
            <Quote className="h-8 w-8 text-gold" />
            <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-ink md:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest font-display text-lg font-semibold text-paper">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-sm text-stone">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
