import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

function ProjectsSection({ projects }) {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
          className="group rounded-[30px] border border-card-border bg-surface p-7 shadow-glow transition hover:-translate-y-2 hover:border-accent/30"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{project.subtitle}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{project.title}</h3>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-card transition hover:border-accent/40 hover:bg-accent-soft"
              aria-label={`${project.title} GitHub link`}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-5 text-base leading-8 text-muted">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-card-border bg-card px-4 py-2 text-sm font-medium text-muted transition group-hover:border-accent/20 group-hover:text-text"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 space-y-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-card-border bg-card px-4 py-4 text-sm leading-7 text-muted"
              >
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default ProjectsSection;
