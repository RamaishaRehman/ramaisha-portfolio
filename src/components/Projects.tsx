"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { projects, type Project } from "@/content/site";

function Card({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), { stiffness: 220, damping: 22 });
  const glowX = useTransform(px, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(py, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  const Wrapper = project.href ? "a" : "div";

  return (
    <Reveal delay={0.08 * index} className="[perspective:1200px]">
      <motion.article
        ref={ref}
        data-accent={project.accent}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-ink-2 transition-[border-color,box-shadow] duration-300 hover:accent-glow"
      >
        <motion.div
          aria-hidden
          style={{ left: glowX, top: glowY }}
          className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        >
          <div className="accent-bg h-full w-full rounded-full" />
        </motion.div>

        {project.video && (
          <div className="relative border-b border-line bg-ink-3">
            <video
              src={project.video}
              poster={project.poster}
              controls
              muted
              playsInline
              preload="metadata"
              aria-label={`${project.title} demo`}
              className="aspect-video w-full object-cover"
            />
            <span className="accent-bg pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink">
              Demo
            </span>
          </div>
        )}

        <Wrapper
          {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})}
          className={`relative flex h-full flex-col gap-8 p-7 sm:p-9 ${project.href ? "cursor-pointer" : ""}`}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="accent-text text-xs font-semibold uppercase tracking-[0.3em]">{project.year}</span>
            {project.href && (
              <span className="accent-text flex h-11 w-11 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            )}
          </div>

          <h3 className="display text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.95] transition-colors duration-300 group-hover:accent-text">
            {project.title}
          </h3>

          <p className="text-base leading-relaxed text-paper/75 sm:text-lg">{project.description}</p>

          <ul className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-ink px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted transition-colors duration-300 group-hover:accent-border group-hover:text-paper"
              >
                {t}
              </li>
            ))}
          </ul>
        </Wrapper>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Selected work" title="Things I've built." accent="magenta" />
        <Reveal delay={0.2}>
          <p className="max-w-sm text-base text-muted sm:text-lg">
            Systems I have built and run in production for real teams. Hover a card to explore.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
