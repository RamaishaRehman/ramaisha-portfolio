"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { skillGroups } from "@/content/site";

export function Skills() {
  return (
    <section id="stack" className="relative overflow-hidden border-y border-line bg-ink-2 py-28 sm:py-40">
      <div aria-hidden className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blush/70 blur-[140px]" />
      <div aria-hidden className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blush-2/40 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Stack" title="Tools I reach for." accent="violet" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={0.1 * gi}>
              <div data-accent={g.accent} className="flex h-full flex-col gap-6 rounded-3xl border border-line bg-ink/70 p-7 backdrop-blur sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="accent-bg h-3 w-3 rounded-full shadow-[0_0_24px_var(--accent)]" />
                  <h3 className="display text-3xl sm:text-4xl">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {g.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -3 }}
                      className="cursor-default rounded-full border border-line bg-ink-3 px-4 py-2 text-sm font-semibold text-paper/90 transition-colors duration-200 hover:accent-border hover:accent-text sm:text-base"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
