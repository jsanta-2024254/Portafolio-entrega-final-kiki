import { ArrowUpRight, CheckCircle2 } from "lucide-react";

function resolveProjectUrl(url) {
  if (!url || url === "Link a GitHub" || url === "GitHub link") {
    return "#proyectos";
  }

  return url;
}

export default function ProjectTextPanel({ project, translation, content }) {
  const projectUrl = resolveProjectUrl(project.githubUrl);

  return (
    <article className="flex min-h-full flex-col justify-between bg-white p-6 md:p-8 lg:p-10">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-kiki-soft px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-kiki-dark">
            {translation.status}
          </span>

          <span className="rounded-full border border-kiki-primary/15 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-kiki-primary">
            {project.code}
          </span>
        </div>

        <h3 className="mt-7 text-4xl font-black tracking-tight text-kiki-text md:text-5xl">
          {translation.title}
        </h3>

        <p className="mt-6 max-w-xl text-base leading-8 text-kiki-muted md:text-lg">
          {translation.description}
        </p>

        <div className="mt-8">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
            {content.technologiesLabel}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-kiki-soft px-3 py-1.5 font-mono text-xs font-bold text-kiki-dark"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
            {content.learningsLabel}
          </p>

          <ul className="mt-4 grid gap-3">
            {translation.learnings.map((learning) => (
              <li
                key={learning}
                className="flex items-start gap-3 rounded-2xl border border-kiki-primary/10 bg-kiki-bg px-4 py-3 text-sm font-semibold leading-6 text-kiki-muted"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-kiki-primary"
                  aria-hidden="true"
                />
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={projectUrl}
        target={projectUrl.startsWith("http") ? "_blank" : undefined}
        rel={projectUrl.startsWith("http") ? "noreferrer" : undefined}
        className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-kiki-primary px-5 py-3 text-sm font-black text-white shadow-xl shadow-purple-300/45 transition hover:-translate-y-0.5 hover:bg-kiki-dark"
      >
        {content.githubLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}