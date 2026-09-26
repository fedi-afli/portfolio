import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import DownloadButton from "./DownloadButton";
import ProfileImage from "/profile.jpg";
import Resume from "/Fedi-Afli-Resume.pdf";
import { projects } from "../data/projects";
import { careerEntries } from "../data/career";
import { certificationCount } from "../data/certifications";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const ROLES = ["AI & Data Engineer", "Data Pipeline Builder", "Full-Stack Developer"];

const STATS = [
  { value: `${projects.length}`, label: "Projects" },
  { value: `${careerEntries.filter((e) => e.type === "internship").length}`, label: "Internships" },
  { value: `${certificationCount}`, label: "Certifications" },
];

const SOCIALS = [
  { href: "https://github.com/fedi-afli", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/fedi-afli-2741972ab/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:f3diafli@gmail.com", label: "Email", icon: Mail },
];

// Types out each role, pauses, deletes it, then moves to the next.
function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // The first role is already fully shown, so start by deleting it.
    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? 35 : 80;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      {/* Background: soft blobs + fading grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-96 w-96 animate-blob rounded-full bg-indigo-500/25 blur-3xl" />
        <div
          className="absolute -right-16 top-40 h-96 w-96 animate-blob rounded-full bg-cyan-400/25 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-violet-500/20 blur-3xl"
          style={{ animationDelay: "-12s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-x relative grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-sm font-medium text-muted backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Fedi Afli</span>
          </h1>

          <p className="mt-5 flex min-h-[2.25rem] items-center font-display text-2xl font-medium text-ink/90 sm:text-3xl">
            <span aria-hidden="true">{role}</span>
            <span className="sr-only">{ROLES.join(", ")}</span>
            <span className="ml-1 inline-block h-7 w-0.5 animate-blink bg-brand" aria-hidden="true" />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Final-year AI &amp; Data Science engineering student. I build real-time data pipelines,
            intelligent systems and full-stack products, from architecture to production.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => scrollToSection("projects")} className="btn-primary">
              View my work
              <ArrowRight className="h-5 w-5" />
            </button>
            <DownloadButton file={Resume} label="Download résumé" variant="ghost" />
          </div>

          <div className="mt-8 flex items-center gap-3">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <dl className="mt-12 flex max-w-md gap-10 border-t border-line pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl font-bold text-ink">{stat.value}</dd>
                <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="animate-fade-up justify-self-center [animation-delay:200ms] lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 opacity-60 blur-2xl" />
            <div className="relative h-[420px] w-[320px] overflow-hidden rounded-[2rem] border border-white/20 bg-surface p-2 shadow-2xl sm:h-[480px] sm:w-[360px]">
              <img
                src={ProfileImage}
                alt="Portrait of Fedi Afli"
                className="h-full w-full rounded-[1.5rem] object-cover object-top"
                fetchPriority="high"
              />
            </div>

            <div className="absolute -left-6 bottom-12 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Focus</p>
              <p className="font-display text-sm font-semibold text-ink">Data Engineering &amp; AI</p>
            </div>
            <div className="absolute -right-4 top-10 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Based in</p>
              <p className="font-display text-sm font-semibold text-ink">Ariana, Tunisia</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-brand lg:block"
      >
        <ChevronDown className="h-7 w-7" />
      </button>
    </section>
  );
};

export default Hero;
