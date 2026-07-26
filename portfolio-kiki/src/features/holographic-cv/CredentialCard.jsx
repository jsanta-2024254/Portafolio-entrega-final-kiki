import { Award, BriefcaseBusiness, GraduationCap, Network, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import useCardReflection from "./useCardReflection.jsx";

const iconMap = {
  education: GraduationCap,
  experience: BriefcaseBusiness,
  network: Network,
  support: Award,
  ai: Sparkles
};

export default function CredentialCard({ credential, translation, isActive, onSelect }) {
  const { style, handlers } = useCardReflection();
  const Icon = iconMap[credential.type] ?? Award;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{
        y: -8
      }}
      whileTap={{
        scale: 0.98
      }}
      className="group perspective-distant"
      aria-pressed={isActive}
    >
      <article
        {...handlers}
        style={style}
        className={`relative min-h-72 overflow-hidden rounded-4xl border p-6 text-left transition duration-300 transform-3d ${
          isActive
            ? "border-kiki-primary/60 bg-white shadow-2xl shadow-purple-300/50"
            : "border-kiki-primary/15 bg-white/75 shadow-xl shadow-purple-200/25 hover:border-kiki-primary/40"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at var(--reflection-x) var(--reflection-y), rgba(255,255,255,0.88), rgba(192,132,252,0.24) 18%, transparent 44%)"
          }}
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(168,85,247,0.12)_24%,rgba(255,255,255,0.65)_45%,rgba(192,132,252,0.12)_68%,transparent_100%)] opacity-60 mix-blend-screen" />

        <div className="relative z-10 flex h-full min-h-60 flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-kiki-primary text-white shadow-lg shadow-purple-300/50">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>

              <span className="rounded-full bg-kiki-soft px-3 py-1.5 font-mono text-xs font-black uppercase tracking-[0.18em] text-kiki-dark">
                {translation.category}
              </span>
            </div>

            <h3 className="mt-7 text-2xl font-black leading-tight tracking-tight text-kiki-text">
              {translation.title}
            </h3>

            <p className="mt-3 font-mono text-sm font-bold text-kiki-dark">
              {translation.institution}
            </p>
          </div>

          <div className="mt-8">
            <div className="h-px bg-linear-to-r from-kiki-primary/60 via-kiki-primary/20 to-transparent" />

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-kiki-primary">
                {translation.code}
              </p>

              <span className="h-3 w-3 rounded-full bg-kiki-primary shadow-[0_0_18px_rgba(168,85,247,0.8)]" />
            </div>
          </div>
        </div>
      </article>
    </motion.button>
  );
}