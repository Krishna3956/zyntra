import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.85rem] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-[1.05rem] ${
            light ? "text-paper/70" : "text-stone"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
