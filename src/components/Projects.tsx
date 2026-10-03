"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { projects, type Project, type ProjectImage } from "@/content/site";

/** Horizontally scrollable, snap-aligned image gallery with dots and arrows. */
function Gallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };
  const go = (dir: -1 | 1) => {
    const el = track.current;
    if (!el) return;
    const next = Math.min(images.length - 1, Math.max(0, active + dir));
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="group/gallery relative border-b border-line bg-ink-3">
      <div
        ref={track}
        onScroll={onScroll}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {images.map((img, i) => (
          <div key={img.src} className="aspect-[3/2] w-full shrink-0 snap-center" aria-hidden={i !== active}>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={() => go(-1)}
        disabled={active === 0}
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/80 text-paper opacity-0 backdrop-blur transition-opacity duration-300 hover:bg-ink focus-visible:opacity-100 disabled:pointer-events-none disabled:opacity-0 group-hover/gallery:opacity-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next screenshot"
        onClick={() => go(1)}
        disabled={active === images.length - 1}
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/80 text-paper opacity-0 backdrop-blur transition-opacity duration-300 hover:bg-ink focus-visible:opacity-100 disabled:pointer-events-none disabled:opacity-0 group-hover/gallery:opacity-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-ink/80 px-2.5 py-1.5 backdrop-blur">
        {images.map((img, i) => (
          <span
            key={img.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "accent-bg w-4" : "w-1.5 bg-paper/40"
            }`}
          />
        ))}
      </div>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-paper backdrop-blur">
        {active + 1} / {images.length}
      </span>
    </div>
  );
}

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

        {!project.video && project.images && project.images.length > 1 && (
          <Gallery images={project.images} title={project.title} />
        )}

        {!project.video && !project.images && project.image && (
          <div className="relative border-b border-line bg-ink-3">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
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
