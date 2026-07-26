export default function GlassCard({ children, className = "" }) {
  return (
    <article
      className={`rounded-4xl border border-white/80 bg-white/70 shadow-2xl shadow-purple-200/30 backdrop-blur-xl ${className}`}
    >
      {children}
    </article>
  );
}