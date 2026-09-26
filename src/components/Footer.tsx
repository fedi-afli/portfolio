import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { NAV_ITEMS } from "../data/nav";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => (
  <footer className="border-t border-line bg-surface">
    <div className="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
      <div className="text-center md:text-left">
        <p className="font-display text-lg font-bold text-ink">Fedi Afli</p>
        <p className="mt-1 text-sm text-muted">
          © {new Date().getFullYear()} Fedi Afli. Built with React &amp; Tailwind CSS.
        </p>
      </div>

      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-sm text-muted transition-colors hover:text-brand"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/fedi-afli"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-brand hover:text-brand"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/fedi-afli-2741972ab/?locale=fr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-brand hover:text-brand"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:f3diafli@gmail.com"
          aria-label="Email"
          className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-brand hover:text-brand"
        >
          <Mail className="h-5 w-5" />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="ml-2 grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white transition-all hover:-translate-y-0.5 hover:bg-indigo-500"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
