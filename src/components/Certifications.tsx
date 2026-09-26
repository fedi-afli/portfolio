import React from "react";
import { BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certificationCategories } from "../data/certifications";

const Certifications: React.FC = () => (
  <section id="certifications" className="section-y">
    <div className="container-x">
      <SectionHeading
        number="03"
        eyebrow="Certifications"
        title="Certified skills"
        subtitle="Industry credentials that back up what I build."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        {certificationCategories.map((category, i) => (
          <Reveal key={category.categoryTitle} delay={i * 120}>
            <div className="card h-full p-6 sm:p-8">
              <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted">
                {category.categoryTitle}
              </h3>

              <ul className="flex flex-wrap gap-x-8 gap-y-8">
                {category.certifications.map((cert) => (
                  <li key={cert.title} className="group flex w-28 flex-col items-center text-center">
                    <div className="relative mb-4 h-24 w-24 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                      <div className="grid h-full w-full place-items-center rounded-full bg-white p-4 shadow-lg ring-1 ring-line">
                        <img
                          src={cert.badge}
                          alt={`${cert.title} badge`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <BadgeCheck
                        className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-surface text-emerald-500"
                        strokeWidth={2.5}
                        aria-label="Verified"
                      />
                    </div>
                    <h4 className="text-sm font-semibold leading-tight text-ink">{cert.title}</h4>
                    <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
                    <span className="mt-2 rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-brand">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
