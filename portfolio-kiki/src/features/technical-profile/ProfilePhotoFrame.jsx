import { ScanFace } from "lucide-react";

export default function ProfilePhotoFrame({ content }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 rounded-4xl border border-dashed border-kiki-primary/25" />

      <div className="relative overflow-hidden rounded-4xl border border-kiki-primary/20 bg-white p-4 shadow-2xl shadow-purple-200/40">
        <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-linear-to-br from-kiki-soft via-white to-kiki-bg">
          <img
            src={content.photo.src}
            alt={content.photo.alt}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 grid place-items-center bg-linear-to-br from-kiki-soft via-white to-kiki-bg">
            <div className="text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-kiki-primary/10 text-kiki-dark">
                <ScanFace className="h-10 w-10" aria-hidden="true" />
              </div>

              <p className="mt-5 font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
                {content.photo.placeholderLabel}
              </p>

              <p className="mx-auto mt-3 max-w-44 text-sm leading-6 text-kiki-muted">
                {content.photo.placeholderDescription}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.12)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.12)_1px,transparent_1px)] bg-size-[28px_28px] opacity-40" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {content.photo.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl bg-kiki-soft px-3 py-2 text-center"
            >
              <p className="font-mono text-[0.65rem] font-black uppercase tracking-[0.18em] text-kiki-primary">
                {metric.label}
              </p>

              <p className="mt-1 text-sm font-black text-kiki-dark">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}