/* eslint-disable react-refresh/only-export-components -- data module, not a component file */
import React from "react";
import { Code, Smartphone, Globe, Database, ShieldAlert, BarChart3, Bot, FolderCog, Captions, GraduationCap } from "lucide-react";
import social_sphere_logo from "/social_sphere_logo.png";
import chronova_logo from "/chronova_logo.png";
import library_managment_logo from "/library_managment_logo.png";
import social_media_logo from "/social_media_logo.png";
import barber_shoplogo from "/barber_shop_logo.png";
import chariklogo from "/chariklogo.png";
import khatwa_logo from "/khatwa_logo.png";

export const CATEGORIES = [
  "All",
  "AI & Big Data",
  "Web & Full-Stack Development",
  "Mobile Development",
  "Systems & Desktop Applications",
] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], "All">;

export type Project = {
  id: string;
  category: Category;
  title: string;
  description: string;
  tags: string[];
  image?: string; // logo / screenshot
  icon?: React.ReactNode; // used when there is no image
  githubUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  rating?: number; // 1-5, reflects scope/complexity of the project
  client?: boolean; // real client / production work
  featured?: boolean; // shown in the top "Featured" row
  note?: string; // shown when there are no public links
};

const icon = "w-full h-full";

export const projects: Project[] = [
  // ---------------- AI & Big Data ----------------
  {
    id: "streaming-data-warehouse",
    category: "AI & Big Data",
    title: "Real-Time Streaming Data Warehouse for E-Commerce",
    description:
      "A real-time CDC and streaming analytics platform that captures PostgreSQL changes using Debezium, streams events through Kafka, processes them with Spark Structured Streaming, and populates a ClickHouse Data Warehouse for live analytics and real-time dashboards.",
    tags: ["PostgreSQL", "Debezium CDC", "Apache Kafka", "Apache Spark", "ClickHouse", "Streamlit", "Docker Compose"],
    icon: <Database className={icon} />,
    githubUrl: "https://github.com/fedi-afli/ecommerce-cdc-engine",
    rating: 5,
    featured: true,
  },
  {
    id: "threat-detection",
    category: "AI & Big Data",
    title: "Live Threat Detection System",
    description:
      "A real-time, event-driven security intelligence platform for SecOps teams. Powered by Apache Spark and anomaly detection agents, it monitors live server log streams, detects suspicious behavioral patterns, and visualizes infrastructure threats through a live web dashboard.",
    tags: ["FastAPI", "PySpark", "Apache Kafka", "Docker Compose"],
    icon: <ShieldAlert className={icon} />,
    githubUrl: "https://github.com/fedi-afli/ThreatDetectionPlatform",
    rating: 5,
    featured: true,
  },
  {
    id: "campushub",
    category: "AI & Big Data",
    title: "CampusHub — Agentic University Web App",
    description:
      "A full-featured agentic web application for university students, powered by both Ollama and NVIDIA agents. Lets students track absences, justify them via a computer-vision AI agent, and automate administrative tasks through an advanced AI assistant.",
    tags: ["Express.js", "Python / LangChain", "NoSQL"],
    icon: <Bot className={icon} />,
    githubUrl: "https://github.com/fedi-afli/UniversityPortal",
    rating: 5,
    featured: true,
  },
  {
    id: "bayan-dashboarding",
    category: "AI & Big Data",
    title: "Bayan Dashboarding — SaaS Sales Analytics Platform",
    description:
      "A SaaS platform that lets users upload raw sales data and instantly get back auto-generated charts and statistics. The system automatically detects column types and structure, then builds relevant visualizations and key metrics without any manual configuration.",
    tags: ["SaaS", "Data Analysis", "Auto Column Detection", "Dashboarding"],
    icon: <BarChart3 className={icon} />,
    githubUrl: "https://github.com/fedi-afli/bayan-dashboarding",
    rating: 5,
  },
  {
    id: "derja-subs",
    category: "AI & Big Data",
    title: "Derja Subs — Tunisian Dialect Subtitle Generator",
    description:
      "A subtitle studio built for a video editing client to speed up marketing content production. Upload a video and Tunisian Derja speech is transcribed word-by-word; the client can then fine-tune every detected word, its exact on/off timing, and the font, color, and background of the currently spoken word before exporting the final captioned video.",
    tags: ["Python", "FastAPI", "React", "Remotion", "Gemini / Whisper ASR", "ffmpeg"],
    icon: <Captions className={icon} />,
    rating: 5,
    client: true,
    note: "Private client project",
  },
  {
    id: "tunisie-telecom-energy-dashboard",
    category: "AI & Big Data",
    title: "Tunisie Telecom — Energy Consumption Dashboard",
    description:
      "A data analytics and dashboarding solution developed during my internship at Tunisie Telecom to monitor, analyze, and visualize power consumption. The tool transforms energy consumption data into interactive visualizations and indicators.",
    tags: ["Python", "Pandas", "Data Analysis", "Dashboarding"],
    icon: <BarChart3 className={icon} />,
    rating: 5,
    note: "Internship project",
  },

  // ---------------- Web & Full-Stack Development ----------------
  {
    id: "philosophia",
    category: "Web & Full-Stack Development",
    title: "Philosophia — Tutoring Management Platform",
    description:
      "A full management platform I built for my mother's tutoring business: student records and payments, a teaching-plan and scheduling engine that matches students to sessions around teacher and student availability, and attendance tracking with absence alerts. The project that means the most to me, built to make her day-to-day work lighter.",
    tags: ["Spring Boot", "Angular", "MySQL", "JWT Auth", "Tailwind"],
    icon: <GraduationCap className={icon} />,
    rating: 5,
    featured: true,
    note: "Private project, built for my mother",
  },
  {
    id: "charik",
    category: "Web & Full-Stack Development",
    title: "Charik.tn",
    description:
      "A web platform I designed and built for Felblad, from architecture to production deployment. My first project delivered for a real client, taken from concept to a live, real-world product.",
    tags: ["Spring Boot", "Angular", "MySQL", "Tailwind"],
    image: chariklogo,
    liveUrl: "https://www.charik.tn",
    rating: 4,
    client: true,
    featured: true,
  },
  {
    id: "khatwa",
    category: "Web & Full-Stack Development",
    title: "Khatwa — Platform Against Youth Unemployment in Tunisia",
    description:
      "Khatwa (خطوة, \"a step\") connects idea owners, talents, companies and investors. Idea owners publish projects with open roles, talents join them through a digital agreement, and each contribution the owner validates becomes a verified experience that companies can hire from and investors can back. Bilingual French / Arabic with a right-to-left layout. Built with a team of five; AI features (idea structuring, CV parsing, skill matching) are in progress with LangChain.",
    tags: ["Angular", "Spring Boot", "PostgreSQL + pgvector", "Python / LangChain", "JWT Auth", "Tailwind", "FR / AR (RTL)"],
    image: khatwa_logo,
    rating: 5,
    note: "In progress, team project",
  },
  {
    id: "drive-workflow-manager",
    category: "Web & Full-Stack Development",
    title: "Google Drive Workflow Manager",
    description:
      "A web app built for a video editing startup that runs its whole operation out of Google Drive. It ingests the studio's Drive account via the Google Drive API and presents files, folders, and tasks in a purpose-built interface: admins assign tasks to employees, and every file/folder action is restricted by permissions tied to each user's role.",
    tags: ["Spring Boot", "Angular", "Google Drive API", "Google Cloud", "Role-Based Access Control"],
    icon: <FolderCog className={icon} />,
    rating: 4,
    client: true,
    note: "Private client project",
  },
  {
    id: "barbershop",
    category: "Web & Full-Stack Development",
    title: "Barber Shop Booking",
    description:
      "A full-featured e-commerce web application built with Spring Boot and Angular, featuring a barber appointment booking system and admin dashboard.",
    tags: ["Spring Boot", "Angular", "MySQL", "Tailwind"],
    image: barber_shoplogo,
    githubUrl: "https://github.com/fedi-afli/barber_shop_booking_system.git",
    rating: 4,
  },
  {
    id: "chronova",
    category: "Web & Full-Stack Development",
    title: "Chronovia Store eCommerce",
    description:
      "A full-featured e-commerce web application built during my internship at CST Enterprise. Includes product browsing, authentication, cart, orders, and an admin dashboard.",
    tags: ["React", "Spring Boot", "TypeScript", "PostgreSQL", "Tailwind"],
    image: chronova_logo,
    demoUrl: "https://www.youtube.com/watch?v=QnccwiNDIJw&feature=youtu.be",
    rating: 4,
  },
  {
    id: "socialsphere",
    category: "Web & Full-Stack Development",
    title: "SocialSphere",
    description:
      "A LinkedIn-inspired platform that connects professionals, enabling networking, content sharing, and career growth in a modern social environment.",
    tags: ["Express.js", "Tailwind"],
    image: social_sphere_logo,
    demoUrl: "https://www.youtube.com/watch?v=qts42JCuHFg",
    rating: 3,
  },
  {
    id: "portfolio",
    category: "Web & Full-Stack Development",
    title: "React Portfolio",
    description:
      "This very portfolio website, built with React, TypeScript and Tailwind CSS to showcase my academic and professional work.",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: <Globe className={icon} />,
    liveUrl: "https://fedi-afli.github.io/portfolio/",
    rating: 3,
  },

  // ---------------- Mobile Development ----------------
  {
    id: "university-mobile",
    category: "Mobile Development",
    title: "University Mobile App",
    description:
      "A simple yet effective Flutter-based school attendance management system with role-based access for admins, teachers, and students.",
    tags: ["Flutter", "PHP", "SQL"],
    icon: <Smartphone className={icon} />,
    githubUrl: "https://github.com/fedi-afli/university_mobile_app",
    rating: 3,
  },

  // ---------------- Systems & Desktop Applications ----------------
  {
    id: "social-media-java",
    category: "Systems & Desktop Applications",
    title: "Social Media Web App",
    description:
      "A full-stack social media application built with Java (Maven) and SceneBuilder, featuring authentication, user profiles, and real-time posting.",
    tags: ["Java", "SceneBuilder"],
    image: social_media_logo,
    githubUrl: "https://github.com/fedi-afli/SocialMedia_LinkedIn.git",
    rating: 3,
  },
  {
    id: "library-manager",
    category: "Systems & Desktop Applications",
    title: "Library Management App",
    description:
      "A Python application with a graphical user interface to manage a library: books, borrowers, and due dates.",
    tags: ["Python", "Tkinter"],
    image: library_managment_logo,
    note: "Academic project",
  },
  {
    id: "cpu-scheduler",
    category: "Systems & Desktop Applications",
    title: "CPU Scheduling Simulator",
    description:
      "A C application to simulate and visualize CPU process scheduling algorithms like FCFS, SJF, and Round Robin.",
    tags: ["C", "Algorithms"],
    icon: <Code className={icon} />,
    note: "Academic project",
  },
];
