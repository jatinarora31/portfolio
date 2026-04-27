import { ArrowUpRight, Award } from "lucide-react";
import { motion } from "framer-motion";

function CertificationsSection({ certifications }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {certifications.map((item, index) => (
        <motion.a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.07 }}
          className="group rounded-[28px] border border-card-border bg-surface p-6 shadow-glow transition hover:-translate-y-2 hover:border-accent/30"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.issuer}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{item.note}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text">
            <span>Open certificate</span>
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default CertificationsSection;
