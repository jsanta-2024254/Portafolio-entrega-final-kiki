import { Link, Outlet } from "react-router-dom";
import LanguageToggle from "../features/language/LanguageToggle.jsx";
import { useLanguage } from "../features/language/useLanguage.jsx";

export default function AppShell() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen text-kiki-text">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
          aria-label={content.navigation.ariaLabel}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full bg-kiki-soft px-4 py-2 font-mono text-sm font-semibold text-kiki-dark"
            aria-label={content.navigation.logoAriaLabel}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-kiki-primary shadow-[0_0_20px_rgba(168,85,247,0.75)]" />
            Kiki.dev
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 lg:flex">
              {content.navigation.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-kiki-muted transition hover:bg-kiki-soft hover:text-kiki-dark"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <LanguageToggle />
          </div>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}