import { Code2, Database, LayoutTemplate, MessageCircle, ShieldCheck } from "lucide-react";

const iconMap = {
  database: Database,
  "ui-design": LayoutTemplate,
  "problem-solving": Code2,
  communication: MessageCircle,
  responsibility: ShieldCheck
};

export default function SkillDetailCard({ skill, translation, content }) {
  const Icon = iconMap[skill.id] ?? Code2;

  return (
    <aside className="rounded-4xl border border-kiki-primary/10 bg-white/75 p-6 shadow-2xl shadow-purple-200/30 backdrop-blur-xl md:p-8">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-kiki-primary text-white shadow-lg shadow-purple-300/50">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <div>
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
            {content.detailLabel}
          </p>

          <h3 className="mt-3 text-3xl font-black tracking-tight text-kiki-text">
            {translation.name}
          </h3>
        </div>
      </div>

      <p className="mt-6 text-base leading-8 text-kiki-muted">
        {translation.description}
      </p>

      <div className="mt-7 rounded-3xl border border-kiki-primary/10 bg-kiki-soft/70 p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
              {content.levelLabel}
            </p>

            <p className="mt-2 text-4xl font-black text-kiki-text">
              {skill.level}%
            </p>
          </div>

          <div className="h-16 w-28 overflow-hidden rounded-2xl border border-kiki-primary/10 bg-white">
            <div
              className="h-full rounded-2xl bg-linear-to-r from-kiki-primary to-kiki-bright"
              style={{
                width: `${skill.level}%`
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-7">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
          {content.technologiesLabel}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {content.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-kiki-primary/15 bg-kiki-soft px-3 py-1.5 font-mono text-xs font-bold text-kiki-dark"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}