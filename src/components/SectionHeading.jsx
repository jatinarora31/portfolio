import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
