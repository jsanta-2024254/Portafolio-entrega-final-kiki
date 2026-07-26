import { motion } from "framer-motion";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";

export default function LiquidGauge({ skill, label, isActive, onSelect }) {
  const prefersReducedMotion = useReducedMotion();
  const percentage = Math.min(Math.max(skill.level, 0), 100);
  const circumference = 2 * Math.PI * 68;
  const strokeOffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onFocus={onSelect}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -6,
              scale: 1.02
            }
      }
      whileTap={
        prefersReducedMotion
          ? {}
          : {
              scale: 0.98
            }
      }
      className={`group relative rounded-4xl border p-5 text-center transition ${
        isActive
          ? "border-kiki-primary/50 bg-white shadow-2xl shadow-purple-200/50"
          : "border-kiki-primary/10 bg-white/70 hover:border-kiki-primary/35 hover:bg-white"
      }`}
      aria-pressed={isActive}
      aria-label={`${label}: ${percentage}%`}
    >
      <div className="relative mx-auto h-40 w-40">
        <svg
          viewBox="0 0 160 160"
          className="absolute inset-0 h-full w-full -rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="80"
            cy="80"
            r="68"
            fill="none"
            stroke="rgba(168,85,247,0.14)"
            strokeWidth="10"
          />
          <motion.circle
            cx="80"
            cy="80"
            r="68"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            className="text-kiki-primary"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference
            }}
            whileInView={{
              strokeDashoffset: strokeOffset
            }}
            viewport={{
              once: true,
              amount: 0.65
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1.1,
              ease: "easeOut"
            }}
          />
        </svg>

        <div className="absolute inset-4 overflow-hidden rounded-full border border-kiki-primary/15 bg-kiki-soft">
          <motion.div
            className="absolute inset-x-0 bottom-0 overflow-hidden bg-linear-to-t from-kiki-dark via-kiki-primary to-kiki-bright"
            initial={{
              height: prefersReducedMotion ? `${percentage}%` : "0%"
            }}
            whileInView={{
              height: `${percentage}%`
            }}
            viewport={{
              once: true,
              amount: 0.65
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1.1,
              ease: "easeOut"
            }}
          >
            <span className="liquid-wave liquid-wave-one" />
            <span className="liquid-wave liquid-wave-two" />
          </motion.div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.7),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.3),transparent)]" />
        </div>

        <div className="absolute inset-0 grid place-items-center">
          <div>
            <p className="font-mono text-3xl font-black text-kiki-text">
              {percentage}%
            </p>
            <p className="mt-1 font-mono text-[0.62rem] font-black uppercase tracking-[0.2em] text-kiki-primary">
              Skill
            </p>
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-xl font-black text-kiki-text">{label}</h3>

      <div
        className={`mx-auto mt-4 h-1.5 w-12 rounded-full transition ${
          isActive ? "bg-kiki-primary" : "bg-kiki-primary/20"
        }`}
      />
    </motion.button>
  );
}