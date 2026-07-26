import { motion } from "framer-motion";

export default function InfoCallout({ item, isActive, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onFocus={onSelect}
      whileHover={{
        y: -4,
        scale: 1.015
      }}
      whileTap={{
        scale: 0.985
      }}
      className={`group relative w-full rounded-3xl border p-5 text-left transition ${
        isActive
          ? "border-kiki-primary/50 bg-white shadow-xl shadow-purple-200/40"
          : "border-kiki-primary/10 bg-white/70 hover:border-kiki-primary/35 hover:bg-white"
      }`}
      aria-pressed={isActive}
    >
      <span className="absolute -left-1 top-7 hidden h-2 w-2 rounded-full bg-kiki-primary shadow-[0_0_18px_rgba(168,85,247,0.75)] md:block" />

      <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-kiki-primary">
        {item.label}
      </p>

      <p className="mt-3 text-xl font-black leading-tight text-kiki-text">
        {item.value}
      </p>
    </motion.button>
  );
}