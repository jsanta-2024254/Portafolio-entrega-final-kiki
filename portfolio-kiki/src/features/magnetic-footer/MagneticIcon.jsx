import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import useMagneticHover from "./useMagneticHover.jsx";

function GitHubIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9v2.77c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

const iconMap = {
  github: GitHubIcon,
  whatsapp: MessageCircle,
  email: Mail
};

function isRealUrl(value) {
  return (
    value?.startsWith("http://") ||
    value?.startsWith("https://") ||
    value?.startsWith("mailto:") ||
    value?.startsWith("tel:")
  );
}

export default function MagneticIcon({ item, href, openLabel }) {
  const Icon = iconMap[item.key] ?? ArrowUpRight;
  const { transform, magneticHandlers, prefersReducedMotion } =
    useMagneticHover();

  const resolvedHref = isRealUrl(href) ? href : "#contacto";
  const shouldOpenNewTab =
    resolvedHref.startsWith("http://") || resolvedHref.startsWith("https://");

  return (
    <motion.a
      href={resolvedHref}
      target={shouldOpenNewTab ? "_blank" : undefined}
      rel={shouldOpenNewTab ? "noreferrer" : undefined}
      {...magneticHandlers}
      animate={
        prefersReducedMotion
          ? {}
          : {
              x: transform.x,
              y: transform.y,
              scale: transform.scale
            }
      }
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18
      }}
      className="group relative overflow-hidden rounded-4xl border border-kiki-primary/10 bg-white/80 p-5 shadow-xl shadow-purple-200/25 backdrop-blur-xl transition hover:border-kiki-primary/40"
      aria-label={`${openLabel} ${item.label}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.18),transparent_55%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10 flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-kiki-soft text-kiki-dark transition group-hover:bg-kiki-primary group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0">
          <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-kiki-primary">
            {item.label}
          </p>

          <p className="mt-2 truncate text-sm font-semibold text-kiki-muted">
            {href}
          </p>
        </div>

        <ArrowUpRight
          className="ml-auto h-5 w-5 shrink-0 text-kiki-primary transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </motion.a>
  );
}