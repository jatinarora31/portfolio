import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

function ContactCard({ icon: Icon, label, value, href, onCopy, copied }) {
  return (
    <div className="rounded-[26px] border border-card-border bg-surface p-6 shadow-glow">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{label}</p>
          <a href={href} className="mt-2 block text-lg font-semibold text-text transition hover:text-accent">
            {value}
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={onCopy}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
      >
        {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied" : `Copy ${label}`}
      </button>
    </div>
  );
}

function ContactSection({ contact }) {
  const [copiedField, setCopiedField] = useState("");

  const handleCopy = async (field, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(""), 1800);
    } catch {
      setCopiedField("");
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="rounded-[30px] border border-card-border bg-surface p-7 shadow-glow"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Direct Reach</p>
        <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight">Let’s build something useful.</h3>
        <p className="mt-4 max-w-xl text-base leading-8 text-muted">
          Whether it is an app, a backend-heavy feature, or a developer role with room to grow, Jatin is available for meaningful work and conversations.
        </p>

        <div className="mt-8 grid gap-4">
          <ContactCard
            icon={Mail}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
            onCopy={() => handleCopy("email", contact.email)}
            copied={copiedField === "email"}
          />
          <ContactCard
            icon={Phone}
            label="Phone"
            value={contact.phone}
            href={`tel:${contact.phone}`}
            onCopy={() => handleCopy("phone", contact.phone)}
            copied={copiedField === "phone"}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="rounded-[30px] border border-card-border bg-surface p-7 shadow-glow"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Profiles</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">Find work samples and connect fast.</h3>
          </div>
          <Send className="h-10 w-10 text-accent" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-[26px] border border-card-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft"
          >
            <Github className="h-6 w-6" />
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-muted">GitHub</p>
            <p className="mt-2 text-lg font-semibold">jatinarora31</p>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-[26px] border border-card-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft"
          >
            <Linkedin className="h-6 w-6" />
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-muted">LinkedIn</p>
            <p className="mt-2 text-lg font-semibold">jatinarora31</p>
          </a>
        </div>

        <div className="mt-8 rounded-[26px] border border-card-border bg-card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Quick intro</p>
          <p className="mt-3 text-base leading-8 text-muted">
            Mobile-first developer with solid backend instincts, hands-on product work, and a strong interest in scalable application development.
          </p>
          <a
            href="#home"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg-alt transition hover:-translate-y-0.5 hover:bg-accent-strong"
          >
            Back to top
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
