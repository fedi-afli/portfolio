import React from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ number, eyebrow, title, subtitle }) => (
  <Reveal className="mb-14 max-w-2xl">
    <p className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
      <span>{number}</span>
      <span className="h-px w-10 bg-brand/50" aria-hidden="true" />
      <span>{eyebrow}</span>
    </p>
    <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
