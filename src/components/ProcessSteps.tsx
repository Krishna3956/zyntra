import { processSteps } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((s, i) => (
        <Reveal key={s.step} delay={i * 90}>
          <div className="group relative h-full rounded-2xl border border-ink/8 bg-paper p-7 transition-colors hover:border-forest/30">
            <span className="font-display text-5xl font-semibold text-gold/45 transition-colors group-hover:text-gold">
              {s.step}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{s.body}</p>
            {i < processSteps.length - 1 && (
              <span className="absolute right-6 top-8 hidden text-gold/40 lg:block">→</span>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
