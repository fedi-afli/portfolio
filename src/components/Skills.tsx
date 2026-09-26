import React from "react";
import { Brain, Cloud, Code, Globe, Smartphone, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// A skill is either something I use day to day ("core") or something I've
// worked with on projects but am still building depth in ("learning").
type Skill = string | { name: string; learning: true };

const learning = (name: string): Skill => ({ name, learning: true });

interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "AI & Data Engineering",
    icon: Brain,
    skills: [
      "Python",
      "SQL / NoSQL / PostgreSQL",
      "Apache Spark",
      "Apache Kafka",
      "ClickHouse",
      "Pandas",
      "LangChain",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["Angular", "Spring Boot", "Express.js", "Tailwind / Bootstrap", learning("React"),learning(".NET")],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
    "Kubernetes",
      "CI/CD (Jenkins/GitLab CI)",
    ],
  },
  {
    title: "Core Programming",
    icon: Code,
    skills: ["JavaScript/TypeScript", "Java", "Problem Solving", "C/C++","Python"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Android Studio"],
  },
  {
    title: "Tools & Foundations",
    icon: Wrench,
    skills: ["Git/GitHub", "Linux", "IDEs (VS Code, IntelliJ)", "Mathematics"],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="section-y bg-subtle">
    <div className="container-x">
      <SectionHeading
        number="02"
        eyebrow="Skills"
        title="Skills & technologies"
        subtitle="The tools I reach for to build data platforms, intelligent systems and full-stack applications."
      />

      <Reveal className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" /> Used regularly
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border-2 border-muted/60" /> Building depth
        </span>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }, i) => (
          <Reveal key={title} delay={(i % 3) * 100}>
            <div className="card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                  const name = typeof skill === "string" ? skill : skill.name;
                  const isLearning = typeof skill !== "string";
                  return (
                    <li
                      key={name}
                      className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium ${
                        isLearning
                          ? "border border-dashed border-muted/50 text-muted"
                          : "bg-brand-soft text-ink"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isLearning ? "border border-muted/70" : "bg-brand"
                        }`}
                        aria-hidden="true"
                      />
                      {name}
                      {isLearning && <span className="sr-only"> (building depth)</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
