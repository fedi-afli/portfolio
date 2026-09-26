import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import DownloadButton from "./DownloadButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Resume from "/Fedi-Afli-Resume.pdf";

const EMAIL = "f3diafli@gmail.com";
const PHONE_DISPLAY = "+216 29 337 633";

const CONTACT_ROWS: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: "tel:+21629337633" },
  { icon: MapPin, label: "Location", value: "Ariana, Tunisia" },
];

const SOCIALS = [
  { href: "https://www.linkedin.com/in/fedi-afli-2741972ab/?locale=fr", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/fedi-afli", label: "GitHub", icon: Github },
];

const Contact: React.FC = () => (
  <section id="contact" className="section-y bg-subtle">
    <div className="container-x">
      <SectionHeading
        number="06"
        eyebrow="Contact"
        title="Let's work together"
        subtitle="Open to discussing new opportunities, interesting projects, or just a conversation about technology."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Call to action */}
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-indigo-600/25 sm:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                Ready to collaborate?
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-indigo-100">
                Whether you're looking for an AI &amp; data engineer for an internship or a junior
                role, want to collaborate on a project, or just want to connect with someone who
                loves technology, I'd love to hear from you.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
                >
                  <Mail className="h-5 w-5" />
                  Say hello
                </a>
                <DownloadButton file={Resume} label="Download résumé" variant="ghost" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Details */}
        <Reveal delay={120}>
          <div className="card h-full p-6 sm:p-8">
            <ul className="space-y-3">
              {CONTACT_ROWS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                        {label}
                      </span>
                      <span className="block truncate font-medium text-ink">{value}</span>
                    </span>
                  </>
                );
                const rowClass = "flex items-center gap-4 rounded-xl p-3";
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className={`${rowClass} transition-colors hover:bg-subtle`}>
                        {content}
                      </a>
                    ) : (
                      <div className={rowClass}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex gap-3 border-t border-line pt-6">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 !px-4 !py-2.5"
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Contact;
