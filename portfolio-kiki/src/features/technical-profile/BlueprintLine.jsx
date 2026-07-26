export default function BlueprintLine({ variant = "horizontal", active = false }) {
  const isVertical = variant === "vertical";

  return (
    <span
      className={`pointer-events-none absolute hidden bg-linear-to-r from-transparent via-kiki-primary/40 to-transparent md:block ${
        isVertical
          ? "h-24 w-px bg-linear-to-b"
          : "h-px w-28"
      } ${
        active
          ? "opacity-100 shadow-[0_0_18px_rgba(168,85,247,0.6)]"
          : "opacity-35"
      }`}
      aria-hidden="true"
    />
  );
}