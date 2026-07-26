import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import skills from "../../content/skills.json";
import SectionTitle from "../../shared/components/SectionTitle.jsx";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";
import LiquidGauge from "./LiquidGauge.jsx";
import SkillDetailCard from "./SkillDetailCard.jsx";

export default function LiquidSkillsPanel({ content, language }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeSkillId, setActiveSkillId] = useState(skills[0]?.id);

  const activeSkill = useMemo(
    () => skills.find((skill) => skill.id === activeSkillId) ?? skills[0],
    [activeSkillId]
  );

  const activeTranslation =
    activeSkill.translations[language] ?? activeSkill.translations.es;

  const entranceAnimation = prefersReducedMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 28
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        transition: {
          duration: 0.7,
          ease: "easeOut"
        }
      };

  return (
    <section
      id="habilidades"
      className="relative overflow-hidden bg-white px-5 py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.12),transparent_28rem),radial-gradient(circle_at_80%_10%,rgba(192,132,252,0.12),transparent_24rem)]" />

      <motion.div
        {...entranceAnimation}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => {
              const translation =
                skill.translations[language] ?? skill.translations.es;

              return (
                <LiquidGauge
                  key={skill.id}
                  skill={skill}
                  label={translation.name}
                  isActive={activeSkill.id === skill.id}
                  onSelect={() => setActiveSkillId(skill.id)}
                />
              );
            })}
          </div>

          <SkillDetailCard
            skill={activeSkill}
            translation={activeTranslation}
            content={content}
          />
        </div>
      </motion.div>
    </section>
  );
}