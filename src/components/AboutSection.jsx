import { motion } from "framer-motion";

const points = [
  "Cross-platform development experience with Flutter and React Native.",
  "Backend exposure across Spring Boot, Node.js, REST APIs, and authentication flows.",
  "Comfortable balancing product polish, maintainable code, and delivery speed.",
];

function AboutSection({ summary }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="rounded-[28px] border border-card-border bg-surface p-7 shadow-glow sm:p-8"
      >
        <p className="text-lg leading-8 text-muted">{summary}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="rounded-[28px] border border-card-border bg-surface p-7 shadow-glow sm:p-8"
      >
        <h3 className="font-display text-2xl font-semibold tracking-tight">Strengths</h3>
        <div className="mt-5 space-y-4">
          {points.map((point) => (
            <div key={point} className="rounded-2xl border border-card-border bg-card px-4 py-4 text-sm leading-7 text-muted">
              {point}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSection;
