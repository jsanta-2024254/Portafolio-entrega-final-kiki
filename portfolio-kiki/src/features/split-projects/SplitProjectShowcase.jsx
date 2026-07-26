import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import projects from "../../content/projects.json";
import SectionTitle from "../../shared/components/SectionTitle.jsx";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";
import ProjectImageFrame from "./ProjectImageFrame.jsx";
import ProjectTextPanel from "./ProjectTextPanel.jsx";

export default function SplitProjectShowcase({ content, language }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? projects[0],
    [activeProjectId]
  );

  const activeTranslation =
    activeProject.translations[language] ?? activeProject.translations.es;

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
          amount: 0.18
        },
        transition: {
          duration: 0.7,
          ease: "easeOut"
        }
      };

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-white px-5 py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(168,85,247,0.12),transparent_28rem),radial-gradient(circle_at_90%_45%,rgba(192,132,252,0.12),transparent_30rem)]" />

      <motion.div
        {...entranceAnimation}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-kiki-primary/10 bg-kiki-bg shadow-2xl shadow-purple-200/35">
          <div className="grid min-h-136 lg:grid-cols-[0.92fr_1.08fr]">
            <ProjectTextPanel
              project={activeProject}
              translation={activeTranslation}
              content={content}
            />

            <ProjectImageFrame
              project={activeProject}
              translation={activeTranslation}
              language={language}
              content={content}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {projects.map((project, index) => {
            const translation =
              project.translations[language] ?? project.translations.es;
            const isActive = activeProject.id === project.id;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProjectId(project.id)}
                className={`rounded-3xl border p-4 text-left transition ${
                  isActive
                    ? "border-kiki-primary/50 bg-kiki-primary text-white shadow-xl shadow-purple-300/45"
                    : "border-kiki-primary/10 bg-white/80 text-kiki-text hover:border-kiki-primary/35 hover:bg-kiki-soft"
                }`}
                aria-pressed={isActive}
              >
                <p
                  className={`font-mono text-xs font-black uppercase tracking-[0.22em] ${
                    isActive ? "text-white/75" : "text-kiki-primary"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-lg font-black">
                  {translation.title}
                </h3>

                <p
                  className={`mt-2 text-sm font-semibold ${
                    isActive ? "text-white/75" : "text-kiki-muted"
                  }`}
                >
                  {translation.status}
                </p>
              </button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}