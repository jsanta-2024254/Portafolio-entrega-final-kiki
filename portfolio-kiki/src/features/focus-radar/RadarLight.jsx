import { motion } from "framer-motion";

export default function RadarLight({ position, prefersReducedMotion }) {
  const radarStyle = {
    "--radar-x": `${position.x}%`,
    "--radar-y": `${position.y}%`,
    opacity: position.active ? 1 : 0.72
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={radarStyle}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--radar-x)_var(--radar-y),rgba(168,85,247,0.32),rgba(23,17,31,0.06)_18rem,rgba(4,3,8,0.78)_38rem)] transition-opacity duration-500" />

      <div className="radar-grid absolute inset-0 opacity-35" />

      <div className="absolute left-(--radar-x) top-(--radar-y) h-96 w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/25 shadow-[0_0_80px_rgba(168,85,247,0.28)]" />

      <div className="absolute left-(--radar-x) top-(--radar-y) h-64 w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/20" />

      <div className="absolute left-(--radar-x) top-(--radar-y) h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 blur-[1px]" />

      {!prefersReducedMotion ? (
        <motion.div
          className="absolute left-(--radar-x) top-(--radar-y) h-px w-52 origin-left bg-linear-to-r from-purple-200/70 to-transparent"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ) : null}
    </div>
  );
}