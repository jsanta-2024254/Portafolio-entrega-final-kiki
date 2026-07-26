import { Link } from "react-router-dom";
import { useLanguage } from "../features/language/useLanguage.jsx";
import GlassCard from "../shared/components/GlassCard.jsx";

export default function NotFoundPage() {
  const { content } = useLanguage();

  return (
    <main className="mx-auto flex min-h-[calc(100vh-76px)] max-w-4xl items-center px-5 py-16">
      <GlassCard className="w-full p-8 text-center md:p-10">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-kiki-primary">
          404
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight text-kiki-text md:text-5xl">
          {content.notFound.title}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-kiki-muted md:text-lg">
          {content.notFound.description}
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-kiki-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-300/40 transition hover:bg-kiki-dark"
        >
          {content.common.backToPortfolio}
        </Link>
      </GlassCard>
    </main>
  );
}