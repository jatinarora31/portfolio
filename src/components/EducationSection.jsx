import { CalendarRange, GraduationCap, Star } from "lucide-react";
import { motion } from "framer-motion";

function EducationSection({ education }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {education.map((item, index) => (
        <motion.article
          key={item.degree}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="group rounded-[28px] border border-card-border bg-surface p-6 shadow-glow transition hover:-translate-y-2 hover:border-accent/30"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{item.degree}</h3>
          <p className="mt-2 text-base font-medium text-muted">{item.school}</p>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted">
            <CalendarRange className="h-4 w-4" />
            <span>{item.duration}</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-accent">
            <Star className="h-4 w-4" />
            <span>{item.score}</span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default EducationSection;
