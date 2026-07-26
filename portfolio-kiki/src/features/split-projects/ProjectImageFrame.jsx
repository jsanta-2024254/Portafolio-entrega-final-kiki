import { MonitorSmartphone } from "lucide-react";
import VerticalAutoCarousel from "./VerticalAutoCarousel.jsx";

export default function ProjectImageFrame({
  project,
  translation,
  language,
  content
}) {
  return (
    <aside className="relative min-h-120 overflow-hidden bg-linear-to-br from-kiki-soft via-kiki-bg to-white p-6 md:p-8 lg:p-10">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-kiki-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-kiki-bright/20 blur-3xl" />

      <div className="relative z-10 flex h-full min-h-112 flex-col">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
              {content.previewLabel}
            </p>

            <h4 className="mt-3 text-2xl font-black tracking-tight text-kiki-text">
              {translation.previewTitle}
            </h4>
          </div>

          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-kiki-dark shadow-lg shadow-purple-200/30">
            <MonitorSmartphone className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>

        <div className="flex-1">
          <VerticalAutoCarousel
            key={project.id}
            images={project.images}
            language={language}
            content={content}
            projectTitle={translation.title}
          />
        </div>
      </div>
    </aside>
  );
}