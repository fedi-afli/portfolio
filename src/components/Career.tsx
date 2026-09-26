import React from "react";
import { ArrowUpRight, Briefcase, GraduationCap, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { careerEntries } from "../data/career";
import type { CareerEntry, CareerType } from "../data/career";

interface TypeStyle {
  label: string;
  icon: LucideIcon;
  dot: string;
  card: string;
  badge: string;
  link: string;
}

const TYPE_STYLES: Record<CareerType, TypeStyle> = {
  professional: {
    label: "Professional experience",
    icon: Star,
    dot: "bg-emerald-500 ring-emerald-500/25",
    card: "border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-surface to-surface shadow-lg shadow-emerald-500/10",
    badge: "bg-emerald-500 text-white",
    link: "text-emerald-600 dark:text-emerald-400",
  },
  internship: {
    label: "Internship",
    icon: Briefcase,
    dot: "bg-amber-500 ring-amber-500/25",
    card: "border-line bg-surface",
    badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
    link: "text-amber-600 dark:text-amber-400",
  },
  education: {
    label: "Education",
    icon: GraduationCap,
    dot: "bg-indigo-500 ring-indigo-500/25",
    card: "border-line bg-surface",
    badge: "bg-brand-soft text-brand",
    link: "text-brand",
  },
};

const TimelineItem: React.FC<{
  entry: CareerEntry;
  scrollToSection: (id: string) => void;
}> = ({ entry, scrollToSection }) => {
  const style = TYPE_STYLES[entry.type];
  const Icon = style.icon;

  return (
    <li className="relative pl-14 md:pl-[13rem]">
      {/* Date gutter (desktop) */}
      {entry.period && (
        <p
          className={`absolute left-0 top-7 hidden w-[9.5rem] text-right font-display text-sm font-semibold md:block ${
            entry.current ? "text-brand" : "text-muted"
          }`}
        >
          {entry.period}
        </p>
      )}

      {/* Timeline node */}
      <span
        className={`absolute left-5 top-8 h-4 w-4 -translate-x-1/2 rounded-full ring-4 md:left-[11rem] ${style.dot} ${
          entry.current ? "animate-pulse" : ""
        }`}
        aria-hidden="true"
      />

      <Reveal>
        <div
          className={`max-w-3xl rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${style.card}`}
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${style.badge}`}
            >
              <Icon className="h-3 w-3" />
              {style.label}
            </span>
            {entry.period && (
              <span className="rounded-full border border-line bg-subtle px-3 py-1 text-xs font-medium text-muted md:hidden">
                {entry.period}
              </span>
            )}
          </div>

          <h3 className="font-display text-xl font-semibold leading-snug text-ink">{entry.title}</h3>

          {entry.org && (
            <p className="mt-1 text-sm font-medium">
              {entry.orgUrl ? (
                <a
                  href={entry.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 hover:underline ${style.link}`}
                >
                  {entry.org}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="text-muted">{entry.org}</span>
              )}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-muted">{entry.description}</p>

          {entry.action && (
            <button
              onClick={() => scrollToSection(entry.action!.sectionId)}
              className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:underline ${style.link}`}
            >
              {entry.action.label}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </Reveal>
    </li>
  );
};

const Career: React.FC<{ scrollToSection: (id: string) => void }> = ({ scrollToSection }) => (
  <section id="career" className="section-y">
    <div className="container-x">
      <SectionHeading
        number="05"
        eyebrow="Career"
        title="Experience & education"
        subtitle="Internships, client work and the academic path that got me here."
      />

      <div className="relative">
        <div
          className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-line to-transparent md:left-[11rem]"
          aria-hidden="true"
        />
        <ol className="space-y-8">
          {careerEntries.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} scrollToSection={scrollToSection} />
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Career;
