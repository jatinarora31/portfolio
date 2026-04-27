import { motion } from "framer-motion";
import { Braces, Database, Layers2, Wrench } from "lucide-react";

const groupIcons = {
  Languages: Braces,
  Frameworks: Layers2,
  "Database & ORM": Database,
  Tools: Wrench,
};

function SkillsSection({ skillGroups }) {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {skillGroups.map((group, groupIndex) => {
        const Icon = groupIcons[group.title];

        return (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
            className="rounded-[28px] border border-card-border bg-surface p-6 shadow-glow"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
            </div>

            <div className="space-y-4">
              {group.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.05 }}
                >
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-text">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-card">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7, delay: 0.12 + index * 0.05 }}
                      className="h-3 rounded-full bg-[linear-gradient(90deg,var(--accent),#f59e0b)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export default SkillsSection;
