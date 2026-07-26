import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import credentials from "../../content/credentials.json";
import SectionTitle from "../../shared/components/SectionTitle.jsx";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";
import CredentialBackPanel from "./CredentialBackPanel.jsx";
import CredentialCard from "./CredentialCard.jsx";

export default function HolographicCredentialBoard({ content, language }) {
  const prefersReducedMotion = useReducedMotion();
  const [selectedCredentialId, setSelectedCredentialId] = useState(null);

  const selectedCredential = useMemo(
    () =>
      credentials.find((credential) => credential.id === selectedCredentialId) ??
      null,
    [selectedCredentialId]
  );

  const selectedTranslation = selectedCredential
    ? selectedCredential.translations[language] ??
      selectedCredential.translations.es
    : null;

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
          amount: 0.18
        },
        transition: {
          duration: 0.7,
          ease: "easeOut"
        }
      };

  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-kiki-bg px-5 py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(168,85,247,0.09),transparent_38%),radial-gradient(circle_at_78%_20%,rgba(192,132,252,0.18),transparent_28rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.06)_1px,transparent_1px)] bg-size-[48px_48px]" />

      <motion.div
        {...entranceAnimation}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {credentials.map((credential) => {
            const translation =
              credential.translations[language] ??
              credential.translations.es;

            return (
              <CredentialCard
                key={credential.id}
                credential={credential}
                translation={translation}
                isActive={selectedCredentialId === credential.id}
                onSelect={() => setSelectedCredentialId(credential.id)}
              />
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedCredential && selectedTranslation ? (
          <CredentialBackPanel
            credential={selectedCredential}
            translation={selectedTranslation}
            content={content}
            onClose={() => setSelectedCredentialId(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}