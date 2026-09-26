import React, { useEffect, useRef, useState } from "react";
import { Briefcase, ChevronDown, ExternalLink, Github, PlayCircle, Sparkles, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CATEGORIES, projects } from "../data/projects";
import type { Category, Project } from "../data/projects";

const CATEGORY_GRADIENT: Record<Category, string> = {
  "AI & Big Data": "from-violet-600 via-indigo-600 to-indigo-800",
  "Web & Full-Stack Development": "from-indigo-500 via-blue-500 to-cyan-500",
  "Mobile Development": "from-teal-500 via-emerald-500 to-emerald-700",
  "Systems & Desktop Applications": "from-orange-500 via-rose-500 to-pink-600",
};

const CATEGORY_DOT: Record<Category, string> = {
  "AI & Big Data": "bg-violet-500",
  "Web & Full-Stack Development": "bg-indigo-500",
  "Mobile Development": "bg-emerald-500",
  "Systems & Desktop Applications": "bg-orange-500",
};

const MAX_TAGS = 5;

const StarRating: React.FC<{ rating?: number }> = ({ rating }) => {
  if (!rating || rating <= 0) return null;
  return (
    <div
      className="flex items-center gap-0.5 rounded-full bg-black/25 px-2 py-1 backdrop-blur"
      title={`Scope / complexity: ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < rating ? "fill-amber-300 text-amber-300" : "text-white/40"}`}
        />
      ))}
    </div>
  );
};

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => {
  const links = [
    project.liveUrl && { href: project.liveUrl, label: "Live site", icon: ExternalLink },
    project.demoUrl && { href: project.demoUrl, label: "Demo", icon: PlayCircle },
    project.githubUrl && { href: project.githubUrl, label: "Code", icon: Github },
  ].filter(Boolean) as { href: string; label: string; icon: typeof ExternalLink }[];

  if (links.length === 0) {
    return <p className="text-sm text-muted">{project.note ?? "Private project"}</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label}: ${project.title}`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:bg-brand-soft hover:text-brand"
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenCount = project.tags.length - visibleTags.length;

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-2xl hover:shadow-indigo-500/15">
      {/* Cover */}
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${
          CATEGORY_GRADIENT[project.category]
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white, transparent 45%), radial-gradient(circle at 90% 90%, white, transparent 40%)",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {project.client && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-700 shadow">
                <Briefcase className="h-3 w-3" />
                Client project
              </span>
            )}
          </div>
          <StarRating rating={project.rating} />
        </div>

        {project.image ? (
          <div className="relative grid h-28 w-28 place-items-center rounded-3xl bg-white p-2 shadow-xl transition-transform duration-300 group-hover:scale-105">
            <img
              src={project.image}
              alt={`${project.title} logo`}
              className="h-full w-full rounded-2xl object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative grid h-28 w-28 place-items-center rounded-3xl bg-white/15 p-7 text-white shadow-xl ring-1 ring-white/30 backdrop-blur transition-transform duration-300 group-hover:scale-105">
            {project.icon}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-ink">{project.title}</h3>
        <p className="mt-3 flex-grow leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <li key={tag} className="rounded-md bg-subtle px-2.5 py-1 text-xs font-medium text-muted">
              {tag}
            </li>
          ))}
          {hiddenCount > 0 && (
            <li className="rounded-md bg-subtle px-2.5 py-1 text-xs font-medium text-muted">
              +{hiddenCount} more
            </li>
          )}
        </ul>

        <div className="mt-5 border-t border-line pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
};

/**
 * Compact card for the "Featured" row: logo, title and a two-line teaser.
 * Clicking it expands the card in place to show the full description, tags and links.
 */
const FeaturedCard: React.FC<{ project: Project; open: boolean; onToggle: () => void }> = ({
  project,
  open,
  onToggle,
}) => {
  const regionId = `featured-${project.id}`;
  const detailsRef = useRef<HTMLDivElement>(null);

  // collapsed details stay out of the tab order and the accessibility tree
  useEffect(() => {
    if (detailsRef.current) detailsRef.current.inert = !open;
  }, [open]);

  return (
    <article
      className={`card overflow-hidden transition-all duration-300 motion-reduce:transition-none ${
        open
          ? "border-brand/50 shadow-2xl shadow-indigo-500/15"
          : "hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-indigo-500/10"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={regionId}
        className={`group flex w-full items-stretch text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand ${
          open ? "min-h-[5.5rem]" : "md:min-h-[9.25rem]" // collapsed cards line up in rows
        }`}
      >
        <div
          className={`relative flex w-24 shrink-0 items-center justify-center bg-gradient-to-br sm:w-28 ${
            CATEGORY_GRADIENT[project.category]
          }`}
        >
          {project.image ? (
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white p-1.5 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src={project.image}
                alt={`${project.title} logo`}
                className="h-full w-full rounded-xl object-contain"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 p-3 text-white shadow-lg ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-105">
              {project.icon}
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-display text-base font-semibold leading-snug text-ink sm:text-lg">{project.title}</h4>
            <ChevronDown
              className={`mt-0.5 h-5 w-5 shrink-0 transition-transform duration-300 ${
                open ? "rotate-180 text-brand" : "text-muted group-hover:text-brand"
              }`}
              aria-hidden="true"
            />
          </div>
          {!open && <p className="line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>}
          {project.client && (
            <span className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand">
              <Briefcase className="h-3 w-3" />
              Client project
            </span>
          )}
        </div>
      </button>

      <div
        id={regionId}
        role="region"
        aria-label={`${project.title} details`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div ref={detailsRef} className="overflow-hidden">
          <div className="border-t border-line px-5 pb-5 pt-4 sm:px-6">
            <p className="leading-relaxed text-muted">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-md bg-subtle px-2.5 py-1 text-xs font-medium text-muted">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <ProjectLinks project={project} />
              {project.rating ? (
                <div
                  className="flex items-center gap-0.5"
                  title={`Scope / complexity: ${project.rating} out of 5`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < (project.rating ?? 0) ? "fill-amber-400 text-amber-400" : "text-line"
                      }`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof CATEGORIES)[number]>("All");
  // one featured card open at a time keeps the featured row compact
  const [openFeatured, setOpenFeatured] = useState<string | null>(null);

  const showFeatured = activeFilter === "All";
  const featured = projects.filter((p) => p.featured);

  // In "All" the featured row already shows those projects, so don't repeat them below.
  const listed = projects.filter((p) => {
    if (activeFilter === "All") return !p.featured;
    return p.category === activeFilter;
  });

  const groups = CATEGORIES.filter((c): c is Category => c !== "All")
    .map((category) => ({ category, items: listed.filter((p) => p.category === category) }))
    .filter((group) => group.items.length > 0);

  const countFor = (category: (typeof CATEGORIES)[number]) =>
    category === "All" ? projects.length : projects.filter((p) => p.category === category).length;

  return (
    <section id="projects" className="section-y bg-subtle">
      <div className="container-x">
        <SectionHeading
          number="04"
          eyebrow="Projects"
          title="Things I've built"
          subtitle="From real-time data platforms to client work delivered in production, grouped by engineering domain."
        />

        <Reveal className="-mx-5 mb-12 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          <div className="flex gap-2 sm:flex-wrap" role="tablist" aria-label="Filter projects by category">
            {CATEGORIES.map((category) => {
              const active = activeFilter === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(category)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                      : "border-line bg-surface text-muted hover:border-brand hover:text-brand"
                  }`}
                >
                  {category}
                  <span
                    className={`rounded-full px-1.5 text-xs ${
                      active ? "bg-white/20" : "bg-subtle"
                    }`}
                  >
                    {countFor(category)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={activeFilter} className="animate-fade-up">
          {showFeatured && (
            <div className="mb-16">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
                  <Sparkles className="h-5 w-5 text-brand" />
                  Featured
                </h3>
                <p className="text-sm text-muted">Click a project to see the details</p>
              </div>
              <div className="grid items-start gap-4 md:grid-cols-2">
                {featured.map((project) => (
                  <FeaturedCard
                    key={project.id}
                    project={project}
                    open={openFeatured === project.id}
                    onToggle={() => setOpenFeatured((id) => (id === project.id ? null : project.id))}
                  />
                ))}
              </div>
            </div>
          )}

          {groups.map(({ category, items }) => (
            <div key={category} className="mb-16 last:mb-0">
              <h3 className="mb-6 flex items-center gap-3 border-b border-line pb-3 font-display text-2xl font-bold text-ink">
                <span className={`h-2.5 w-2.5 rounded-full ${CATEGORY_DOT[category]}`} />
                {category}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
