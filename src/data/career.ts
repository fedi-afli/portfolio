export type CareerType = "professional" | "internship" | "education";

export interface CareerLink {
  label: string;
  href: string;
}

export interface CareerEntry {
  id: string;
  type: CareerType;
  title: string;
  org?: string; // company / school
  orgUrl?: string;
  period?: string;
  current?: boolean;
  description: string;
  // Optional in-page link rendered after the description
  action?: { label: string; sectionId: string };
}

// Newest first.
export const careerEntries: CareerEntry[] = [
  {
    id: "third-year",
    type: "education",
    title: "Engineering in Computer Science — Final Year",
    org: "AI & Data Science Engineering",
    period: "2026 – Present",
    current: true,
    description:
      "Final year of my engineering degree, specializing in AI and Data Science. Focused on data engineering, machine learning and large-scale data systems, building on real-time streaming and agentic AI projects.",
  },
  {
    id: "tunisie-telecom",
    type: "internship",
    title: "Data & Dashboarding Intern",
    org: "Tunisie Telecom",
    orgUrl: "https://www.tunisietelecom.tn",
    period: "2026",
    description:
      "Developed a dashboarding tool to monitor and analyze power consumption across their infrastructure. The solution provided clear data visualization and reporting capabilities to help track energy usage and support more informed operational decisions.",
  },
  {
    id: "felblad",
    type: "professional",
    title: "Full-Stack Web Developer",
    org: "Felblad",
    orgUrl: "https://felblad.com",
    period: "2026",
    description:
      "Provided full-stack web development services to Felblad, where I independently designed, developed, and delivered the Charik.tn platform. My first professional experience, successfully delivering a complete web platform from concept to production for a real client.",
    action: { label: "See the project", sectionId: "projects" },
  },
  {
    id: "beehive",
    type: "internship",
    title: "DevOps Intern",
    org: "Beehive Entreprises",
    orgUrl: "https://www.beehiveentreprises.com",
    period: "2025 – 2026",
    description:
      "Built and deployed a professional DevOps pipeline. Gained hands-on experience with CI/CD workflows, containerization, infrastructure automation, and modern deployment practices in a real production environment.",
  },
  {
    id: "second-year",
    type: "education",
    title: "Engineering in Computer Science — Second Year",
    period: "2025 – 2026",
    description:
      "Deepened expertise in software architecture, distributed systems, DevOps practices, and advanced algorithms. Applied knowledge through hands-on projects and professional internship experience.",
  },
  {
    id: "cst",
    type: "internship",
    title: "Full-Stack Intern",
    org: "Canadian System Technologies",
    period: "Summer 2025",
    description:
      "Two-month internship where I independently developed a fully functional e-commerce website named Chronovia Store, applying my technical skills in a real-world setting and gaining valuable insight into professional software development.",
    action: { label: "See the demo", sectionId: "projects" },
  },
  {
    id: "first-year",
    type: "education",
    title: "Engineering in Computer Science — First Year",
    period: "2024 – 2025",
    description:
      "Built upon the strong foundation of the preparatory cycle, focusing on advanced programming concepts, software engineering principles, and specialized computer science domains.",
  },
  {
    id: "prep",
    type: "education",
    title: "Integrated Preparatory Cycle",
    org: "Faculté des Sciences de Bizerte",
    period: "2022 – 2024",
    description:
      "Two years of integrated preparatory cycle providing a solid foundation in mathematics, physics, and fundamental sciences, preparing me for engineering studies in computer science.",
  },
  {
    id: "bac",
    type: "education",
    title: "Baccalaureate in Computer Science",
    org: "Lycée Khayer Eddine Ariana",
    period: "2021 – 2022",
    description:
      "Obtained the Tunisian Baccalaureate in Computer Science (Sciences Informatiques), with a focus on programming, algorithms, mathematics, and general sciences. This diploma marked the beginning of my academic journey toward engineering and technology.",
  },
];
