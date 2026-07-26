import { useEffect, useMemo, useState } from "react";
import { Image, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import useReducedMotion from "../../shared/hooks/useReducedMotion.jsx";

const INTERVAL_TIME = 3200;

export default function VerticalAutoCarousel({
  images,
  language,
  content,
  projectTitle
}) {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeImage = images[activeIndex] ?? images[0];

  const activeImageText = useMemo(() => {
    if (!activeImage) {
      return null;
    }

    return activeImage.translations[language] ?? activeImage.translations.es;
  }, [activeImage, language]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || images.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, INTERVAL_TIME);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [images.length, isPaused, prefersReducedMotion]);

  if (!activeImage || !activeImageText) {
    return null;
  }

  return (
    <div
      className="grid h-full gap-5 lg:grid-cols-[1fr_8rem]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-96 overflow-hidden rounded-4xl border border-white/80 bg-white/80 shadow-2xl shadow-purple-200/35 backdrop-blur-xl">
        <img
          src={activeImage.src}
          alt={activeImageText.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500"
          onLoad={(event) => {
            event.currentTarget.classList.remove("opacity-0");
          }}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px)] bg-size-[30px_30px]" />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent" />

        <motion.div
          key={`${projectTitle}-${activeImage.src}`}
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 18
                }
          }
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut"
          }}
          className="absolute inset-x-0 bottom-0 z-10 p-6"
        >
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-kiki-primary">
            {content.slideLabel} {String(activeIndex + 1).padStart(2, "0")}
          </p>

          <h5 className="mt-3 text-3xl font-black tracking-tight text-kiki-text">
            {activeImageText.title}
          </h5>

          <p className="mt-2 text-sm font-semibold text-kiki-muted">
            {projectTitle}
          </p>
        </motion.div>

        <button
          type="button"
          onClick={() => setIsPaused((currentValue) => !currentValue)}
          className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-kiki-primary/15 bg-white/80 text-kiki-dark shadow-lg shadow-purple-200/30 backdrop-blur-xl transition hover:bg-kiki-primary hover:text-white"
          aria-label={isPaused ? content.playLabel : content.pauseLabel}
        >
          {isPaused ? (
            <Play className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Pause className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {images.map((image, index) => {
          const imageText = image.translations[language] ?? image.translations.es;
          const isActive = activeIndex === index;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-24 min-w-28 overflow-hidden rounded-[1.25rem] border transition lg:h-full lg:min-h-28 lg:min-w-0 ${
                isActive
                  ? "border-kiki-primary bg-white shadow-xl shadow-purple-300/35"
                  : "border-white/80 bg-white/70 hover:border-kiki-primary/35"
              }`}
              aria-label={`${content.openPreviewLabel} ${imageText.title}`}
              aria-pressed={isActive}
            >
              <img
                src={image.src}
                alt={imageText.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0"
                onLoad={(event) => {
                  event.currentTarget.classList.remove("opacity-0");
                }}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-kiki-soft/75" />

              <div className="relative z-10 flex h-full flex-col justify-between p-3 text-left">
                <span
                  className={`grid h-8 w-8 place-items-center rounded-xl ${
                    isActive
                      ? "bg-kiki-primary text-white"
                      : "bg-white text-kiki-dark"
                  }`}
                >
                  <Image className="h-4 w-4" aria-hidden="true" />
                </span>

                <span className="font-mono text-[0.65rem] font-black uppercase tracking-[0.16em] text-kiki-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}