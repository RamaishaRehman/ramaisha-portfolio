"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { about, stats } from "@/content/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduce) {
      el.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="About" title={about.heading} accent="cyan" />
          <div className="mt-10 flex max-w-2xl flex-col gap-6 text-lg leading-relaxed text-paper/80 sm:text-xl">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <dl className="divide-y divide-line rounded-3xl border border-line bg-ink-2/60 backdrop-blur">
              {about.facts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-6 px-6 py-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{f.label}</dt>
                  <dd className="display text-right text-2xl sm:text-3xl">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.08 * i} className="bg-ink">
            <div
              data-accent={(["lime", "cyan", "magenta", "violet"] as const)[i % 4]}
              className="group flex h-full flex-col gap-4 p-7 transition-colors duration-300 hover:bg-ink-2 sm:p-9"
            >
              <span className="display accent-text text-[clamp(3rem,7vw,5.5rem)] leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
