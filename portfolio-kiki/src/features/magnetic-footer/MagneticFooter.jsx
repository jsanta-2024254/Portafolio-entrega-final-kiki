import socialLinks from "../../content/socialLinks.json";
import SectionTitle from "../../shared/components/SectionTitle.jsx";
import MagneticIcon from "./MagneticIcon.jsx";

export default function MagneticFooter({ content }) {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-kiki-bg px-5 py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.06)_1px,transparent_1px)] bg-size-[46px_46px]" />
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-kiki-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-kiki-bright/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {content.items.map((item) => (
            <MagneticIcon
              key={item.key}
              item={item}
              href={socialLinks[item.key]}
              openLabel={content.openLabel}
            />
          ))}
        </div>

        <div className="mt-12 rounded-4xl border border-kiki-primary/10 bg-white/70 p-6 shadow-xl shadow-purple-200/25 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
                Kiki.dev
              </p>

              <p className="mt-2 text-sm font-semibold text-kiki-muted">
                Joshua Alejandro Santa Cruz Chicas
              </p>
            </div>

            <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-kiki-dark">
              React / Vite / Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}