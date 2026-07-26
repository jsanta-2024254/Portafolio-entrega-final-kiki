import { Code2, Languages, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import RadarLight from "./RadarLight.jsx";
import useMouseRadar from "./useMouseRadar.jsx";

export default function FocusRadarHero({ content }) {
  const { containerRef, position, prefersReducedMotion, radarHandlers } =
    useMouseRadar();

  const spotlightStyle = {
    WebkitMaskImage: `radial-gradient(circle 12rem at ${position.x}% ${position.y}%, black 0%, black 42%, transparent 76%)`,
    maskImage: `radial-gradient(circle 12rem at ${position.x}% ${position.y}%, black 0%, black 42%, transparent 76%)`
  };

  const entranceAnimation = prefersReducedMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 24
        },
        animate: {
          opacity: 1,
          y: 0
        },
        transition: {
          duration: 0.7,
          ease: "easeOut"
        }
      };

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-[#06040B] text-white"
      {...radarHandlers}
    >
      <RadarLight
        position={position}
        prefersReducedMotion={prefersReducedMotion}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-purple-300/70 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <motion.div {...entranceAnimation}>
          <div className="relative">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.32em] text-purple-100/80">
              {content.hero.welcome}
            </p>

            <h1 className="mt-5 text-7xl font-black tracking-[-0.09em] text-white md:text-9xl">
              {content.hero.title}
            </h1>

            <p className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
              {content.hero.subtitle}
            </p>
          </div>

          <div className="relative mt-9 max-w-2xl">
            <p className="text-xl font-semibold leading-10 text-white/20 md:text-2xl">
              {content.hero.phrase}
            </p>

            <p
              className="absolute inset-0 text-xl font-semibold leading-10 text-white md:text-2xl"
              style={spotlightStyle}
              aria-hidden="true"
            >
              {content.hero.phrase}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#perfil"
              className="rounded-full border border-purple-200/25 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              {content.hero.primaryAction}
            </a>

            <a
              href="#proyectos"
              className="rounded-full border border-purple-200/25 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              {content.hero.secondaryAction}
            </a>
          </div>
        </motion.div>

        <motion.div
          {...(prefersReducedMotion
            ? {}
            : {
                initial: {
                  opacity: 0,
                  scale: 0.94
                },
                animate: {
                  opacity: 1,
                  scale: 1
                },
                transition: {
                  duration: 0.8,
                  delay: 0.12,
                  ease: "easeOut"
                }
              })}
          className="relative"
        >
          <div className="rounded-4xl border border-purple-200/20 bg-white/8 p-5 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
            <div className="rounded-3xl border border-white/10 bg-[#0D0715]/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-purple-200">
                  {content.hero.radar.panelLabel}
                </p>

                <span className="rounded-full bg-purple-300/15 px-3 py-1 font-mono text-xs font-bold text-purple-100">
                  {Math.round(position.x)} / {Math.round(position.y)}
                </span>
              </div>

              <div className="mt-8 grid gap-4">
                {content.hero.radar.items.map((item, index) => {
                  const icons = [MousePointer2, Languages, Code2];
                  const Icon = icons[index] ?? Code2;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/6 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-purple-300/15 text-purple-100">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <div>
                          <h2 className="text-lg font-black text-white">
                            {item.title}
                          </h2>

                          <p className="mt-2 text-sm leading-6 text-purple-100/70">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 rounded-2xl border border-purple-200/10 bg-purple-300/10 px-4 py-3 font-mono text-xs leading-6 text-purple-100/80">
                {prefersReducedMotion
                  ? content.hero.radar.reducedMotionLabel
                  : content.hero.radar.instruction}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}