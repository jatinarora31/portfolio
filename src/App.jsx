import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  House,
  Layers3,
  Mail,
  Menu,
  MoonStar,
  SunMedium,
  UserRound,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData, sections } from "./data/portfolioData";
import SectionHeading from "./components/SectionHeading";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const iconMap = {
  home: House,
  about: UserRound,
  education: GraduationCap,
  skills: Code2,
  projects: BriefcaseBusiness,
  certifications: Layers3,
  contact: Mail,
};

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative overflow-hidden text-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%)]" />
      <header className="sticky top-0 z-50 border-b border-card-border bg-surface-strong/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight">
            Jatin<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {sections.map((section) => {
              const Icon = iconMap[section.id];
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-text"
                >
                  <Icon className="h-4 w-4 transition group-hover:scale-110" />
                  <span>{section.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-card-border bg-card px-4 py-2 text-sm font-semibold shadow-glow transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft sm:inline-flex"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-text transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-text transition hover:bg-accent-soft md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-card-border bg-surface-strong md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 sm:px-8">
                {sections.map((section) => {
                  const Icon = iconMap[section.id];
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-text"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{section.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <HeroSection data={portfolioData} />

        <section id="about" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Profile"
            title="Building thoughtful products with a mobile-first mindset."
            description="A compact snapshot of experience, strengths, and the kind of engineering work Jatin enjoys most."
          />
          <AboutSection summary={portfolioData.summary} />
        </section>

        <section id="education" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Education"
            title="Academic grounding with recent specialization in mobile computing."
            description="Coursework and credentials that shaped the current blend of app development, backend systems, and practical delivery."
          />
          <EducationSection education={portfolioData.education} />
        </section>

        <section id="skills" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Skills"
            title="Hands-on across app development, APIs, and developer tooling."
            description="Grouped by day-to-day use so the stack reads like working experience rather than a keyword wall."
          />
          <SkillsSection skillGroups={portfolioData.skills} />
        </section>

        <section id="projects" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Projects"
            title="Selected builds spanning commerce workflows and Java desktop systems."
            description="Each project card highlights the outcome, responsibilities, and stack choices behind the work."
          />
          <ProjectsSection projects={portfolioData.projects} />
        </section>

        <section id="certifications" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Certifications"
            title="Focused learning in DSA, mobile programming, Java, and Spring."
            description="Coursework and recognitions that reinforce the practical engineering background behind the portfolio."
          />
          <CertificationsSection certifications={portfolioData.certifications} />
        </section>

        <section id="contact" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about products, teams, and opportunities worth building."
            description="Reach out directly, copy the details in one tap, or jump to GitHub and LinkedIn."
          />
          <ContactSection contact={portfolioData.contact} />
        </section>
      </main>

      <Footer name={portfolioData.name} title={portfolioData.title} />

      <a
        href="#home"
        className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-surface-strong text-text shadow-glow transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft"
        aria-label="Back to top"
      >
        <House className="h-5 w-5" />
      </a>
    </div>
  );
}

export default App;
