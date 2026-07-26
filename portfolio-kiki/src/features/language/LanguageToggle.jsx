import { useLanguage } from "./useLanguage.jsx";

export default function LanguageToggle() {
  const { language, languages, setLanguage, content } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full border border-kiki-primary/20 bg-white/80 p-1 shadow-lg shadow-purple-200/20 backdrop-blur-xl"
      role="group"
      aria-label={content.languageToggle.ariaLabel}
    >
      {languages.map((item) => {
        const isActive = item.code === language;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`rounded-full px-3 py-1.5 font-mono text-xs font-black transition ${
              isActive
                ? "bg-kiki-primary text-white shadow-md shadow-purple-300/40"
                : "text-kiki-muted hover:bg-kiki-soft hover:text-kiki-dark"
            }`}
            aria-pressed={isActive}
          >
            {item.shortLabel}
          </button>
        );
      })}
    </div>
  );
}