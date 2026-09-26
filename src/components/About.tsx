import React from "react";
import { BookOpen, Bot, Calendar, Database, MapPin, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FACTS = [
  { icon: MapPin, label: "Location", value: "Ariana, Tunisia" },
  { icon: Calendar, label: "Age", value: "23 years old" },
  { icon: BookOpen, label: "Studying", value: "Engineering — AI & Data Science (final year)" },
];

const HIGHLIGHTS = [
  {
    icon: Database,
    title: "Data engineering",
    text: "Real-time pipelines with Debezium, Kafka, Spark and ClickHouse, from raw events to live dashboards.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    text: "LLM-powered assistants and computer-vision agents that automate real administrative workflows.",
  },
  {
    icon: Rocket,
    title: "Shipping to production",
    text: "Delivered a complete web platform for a real client, plus CI/CD and containerized deployments.",
  },
];

const About: React.FC = () => (
  <section id="about" className="section-y">
    <div className="container-x">
      <SectionHeading
        number="01"
        eyebrow="About"
        title="Turning data into working systems"
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted">
          <p>
            I'm <span className="font-semibold text-ink">Fedi Afli</span>, 23, in the final year of
            my computer science engineering degree, specializing in{" "}
            <span className="font-semibold text-ink">AI and Data Science</span>. I came to
            engineering through a solid preparatory cycle at the Faculty of Sciences of Bizerte.
          </p>
          <p>
            I'm fascinated by the intersection of problem-solving and creativity that programming
            offers. From streaming architectures and anomaly detection to polished user interfaces,
            I enjoy owning a system end to end and am eager to contribute to innovative projects.
          </p>

          <ul className="grid gap-3 pt-2 sm:grid-cols-1">
            {FACTS.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-base">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                    {label}
                  </span>
                  <span className="font-medium text-ink">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-4">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="card group flex gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-indigo-500/10">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
