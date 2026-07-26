import { X } from "lucide-react";
import { motion } from "framer-motion";
import useEscapeKey from "../../shared/hooks/useEscapeKey.jsx";

export default function CredentialBackPanel({
  credential,
  translation,
  content,
  onClose
}) {
  useEscapeKey(onClose, Boolean(credential));

  if (!credential) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-80 grid place-items-center bg-kiki-text/45 px-5 py-8 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={translation.title}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label={content.closeLabel}
      />

      <motion.article
        initial={{
          opacity: 0,
          y: 24,
          scale: 0.96
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        exit={{
          opacity: 0,
          y: 16,
          scale: 0.96
        }}
        transition={{
          duration: 0.22,
          ease: "easeOut"
        }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-4xl border border-white/70 bg-white p-6 shadow-2xl shadow-purple-950/30 md:p-8"
      >
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-kiki-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-kiki-bright/20 blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
                {translation.category}
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-tight text-kiki-text md:text-4xl">
                {translation.title}
              </h3>

              <p className="mt-3 font-mono text-sm font-bold text-kiki-dark">
                {translation.institution}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-kiki-primary/15 bg-kiki-soft text-kiki-dark transition hover:bg-kiki-primary hover:text-white"
              aria-label={content.closeLabel}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 rounded-3xl border border-kiki-primary/10 bg-kiki-soft/70 p-5">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
              {content.detailLabel}
            </p>

            <ul className="mt-5 grid gap-3">
              {translation.details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-2xl border border-kiki-primary/10 bg-white/75 px-4 py-3 text-sm font-semibold leading-6 text-kiki-muted"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {translation.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-kiki-soft px-3 py-1.5 font-mono text-xs font-black text-kiki-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}