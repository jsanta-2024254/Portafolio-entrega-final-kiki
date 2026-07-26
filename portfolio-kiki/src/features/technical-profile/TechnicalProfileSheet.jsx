import { useState } from "react";
import { Cpu, GraduationCap, MapPin, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import InfoCallout from "./InfoCallout.jsx";
import ProfilePhotoFrame from "./ProfilePhotoFrame.jsx";
import SectionTitle from "../../shared/components/SectionTitle.jsx";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";

const iconMap = {
  name: UserRound,
  age: Cpu,
  grade: GraduationCap,
  location: MapPin
};

export default function TechnicalProfileSheet({ content }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(content.facts[0]?.id ?? "name");

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
          amount: 0.24
        },
        transition: {
          duration: 0.7,
          ease: "easeOut"
        }
      };

  return (
    <section
      id="perfil"
      className="relative overflow-hidden bg-kiki-bg px-5 py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.07)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.07)_1px,transparent_1px)] bg-size-[44px_44px]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-kiki-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-kiki-bright/10 blur-3xl" />

      <motion.div
        {...entranceAnimation}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative">
            <ProfilePhotoFrame content={content} />

            <div className="mt-8 rounded-4xl border border-kiki-primary/10 bg-white/75 p-6 shadow-xl shadow-purple-200/25 backdrop-blur-xl">
              <p className="font-mono text-xs font-black uppercase tracking-[0.26em] text-kiki-primary">
                {content.summaryLabel}
              </p>

              <p className="mt-4 text-base leading-8 text-kiki-muted">
                {content.professionalText}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {content.capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="rounded-full border border-kiki-primary/15 bg-kiki-soft px-3 py-1.5 font-mono text-xs font-bold text-kiki-dark"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-4xl border border-kiki-primary/15 bg-white/65 p-5 shadow-2xl shadow-purple-200/30 backdrop-blur-xl md:p-7">
            <div className="absolute left-7 top-7 h-3 w-3 rounded-full bg-kiki-primary shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
            <div className="absolute right-7 top-7 h-3 w-3 rounded-full border border-kiki-primary/50" />
            <div className="absolute bottom-7 left-7 h-3 w-3 rounded-full border border-kiki-primary/50" />
            <div className="absolute bottom-7 right-7 h-3 w-3 rounded-full bg-kiki-bright/70" />

            <div className="rounded-3xl border border-dashed border-kiki-primary/20 p-5 md:p-6">
              <div className="flex flex-col gap-3 border-b border-kiki-primary/10 pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-kiki-primary">
                    {content.sheetCode}
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-tight text-kiki-text">
                    {content.sheetTitle}
                  </h3>
                </div>

                <span className="w-fit rounded-full bg-kiki-soft px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-kiki-dark">
                  {content.statusLabel}
                </span>
              </div>

              <div className="relative mt-7 grid gap-4 md:grid-cols-2">
                {content.facts.map((item) => {
                  const Icon = iconMap[item.id] ?? Cpu;
                  const isActive = activeId === item.id;

                  return (
                    <div key={item.id} className="relative">
                      <div
                        className={`mb-3 inline-grid h-11 w-11 place-items-center rounded-2xl transition ${
                          isActive
                            ? "bg-kiki-primary text-white shadow-lg shadow-purple-300/50"
                            : "bg-kiki-soft text-kiki-dark"
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <InfoCallout
                        item={item}
                        isActive={isActive}
                        onSelect={() => setActiveId(item.id)}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 rounded-3xl border border-kiki-primary/10 bg-white/70 p-5">
                <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
                  {content.goalLabel}
                </p>

                <p className="mt-3 text-sm leading-7 text-kiki-muted">
                  {content.goalText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}