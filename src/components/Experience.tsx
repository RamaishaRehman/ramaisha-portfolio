"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/content/site";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="journey" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
      <SectionHeading eyebrow="Journey" title="Where I've been." accent="lime" />

      <ol ref={ref} className="relative mt-16 flex flex-col gap-12 pl-8 sm:pl-14">
        <div aria-hidden className="absolute left-[7px] top-0 h-full w-px bg-line sm:left-[15px]" />
        <motion.div
          aria-hidden
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-[7px] top-0 h-full w-px bg-[linear-gradient(to_bottom,var(--color-lime),var(--color-cyan),var(--color-magenta))] sm:left-[15px]"
        />

        {experience.map((e, i) => (
          <li key={`${e.period}-${e.role}`} data-accent={e.accent} className="relative">
            <span className="accent-bg absolute -left-8 top-2 h-[15px] w-[15px] rounded-full shadow-[0_0_20px_var(--accent)] sm:-left-14 sm:h-[31px] sm:w-[31px] sm:border-[10px] sm:border-ink" />
            <Reveal delay={0.05 * i}>
              <div className="grid gap-3 sm:grid-cols-12 sm:gap-8">
                <span className="accent-text text-sm font-semibold uppercase tracking-[0.25em] sm:col-span-3 sm:pt-2">
                  {e.period}
                </span>
                <div className="sm:col-span-9">
                  <h3 className="display text-3xl sm:text-5xl">{e.role}</h3>
                  <p className="mt-2 text-base font-semibold text-paper/80 sm:text-lg">{e.org}</p>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{e.summary}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
