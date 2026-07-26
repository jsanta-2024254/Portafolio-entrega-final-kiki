export default function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full border border-kiki-primary/20 bg-kiki-soft px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-kiki-dark">
      {children}
    </span>
  );
}