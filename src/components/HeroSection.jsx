import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function HeroSection({ data }) {
  return (
    <section id="home" className="scroll-mt-28">
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-card-border bg-surface px-4 py-2 text-sm font-medium text-muted shadow-glow">
            Open to full-time software development opportunities
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
            {data.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-accent sm:text-2xl">{data.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{data.summary}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg-alt transition hover:-translate-y-1 hover:bg-accent-strong"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume-placeholder.txt"
              download
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold text-text transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-transparent px-6 py-3 text-sm font-semibold text-text transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-card text-text transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-card text-text transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-accent/18 blur-2xl" />
          <div className="absolute -bottom-8 right-4 h-28 w-28 rounded-full bg-amber-400/14 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-card-border bg-surface p-6 shadow-glow">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-card-border bg-card p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-muted">Focus</p>
                <p className="mt-3 font-display text-2xl font-semibold text-text">Mobile + Backend</p>
              </div>
              <div className="rounded-3xl border border-card-border bg-card p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-muted">Stack</p>
                <p className="mt-3 font-display text-2xl font-semibold text-text">Flutter, Kotlin, React</p>
              </div>
              <div className="rounded-3xl border border-card-border bg-card p-5 sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.2em] text-muted">Current Direction</p>
                <p className="mt-3 text-base leading-7 text-muted">
                  Shipping polished interfaces backed by secure APIs, scalable database design, and practical product thinking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
