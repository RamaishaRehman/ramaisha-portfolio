"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

const letter = {
  hidden: { y: "110%", rotate: 6, opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { delay: 0.35 + i * 0.045, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function SplitWord({ word, offset = 0, className }: { word: string; offset?: number; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden ${className ?? ""}`} aria-label={word}>
      {word.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          custom={offset + i}
          variants={letter}
          initial="hidden"
          animate="show"
          className="inline-block will-change-transform"
          aria-hidden
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yBlob = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 220]);
  const yText = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -80]);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Ambient colour blobs */}
      <motion.div style={{ y: yBlob }} aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-[8%] h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] rounded-full bg-blush/70 blur-[110px] animate-float" />
        <div className="absolute right-[-8%] top-[20%] h-[40vw] w-[40vw] max-h-[520px] max-w-[520px] rounded-full bg-blush-2/50 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-10%] left-[30%] h-[36vw] w-[36vw] max-h-[460px] max-w-[460px] rounded-full bg-blush/60 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-ink)_85%)]" />
      </motion.div>

      <motion.div style={{ y: yText }} className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-ink-2/60 px-4 py-2 backdrop-blur"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-lime animate-pulse-ring" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            {site.availability}
          </span>
        </motion.div>

        <h1 className="display text-[clamp(2.4rem,10vw,10rem)] leading-[0.88]">
          <SplitWord word="Hi, I'm" className="text-outline" />
          <br />
          {/* The gradient word is revealed as one block: background-clip:text
              does not paint through individually transformed letters. */}
          <span className="inline-flex overflow-hidden pb-[0.08em]">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 0.75, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-gradient inline-block pr-[0.06em] will-change-transform"
            >
              {site.firstName}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-paper sm:text-2xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-base font-bold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-lime hover:text-ink hover:shadow-[0_0_60px_-10px_var(--color-lime)]"
          >
            See my work
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-4 text-base font-bold uppercase tracking-wider text-paper transition-all duration-300 hover:border-magenta hover:text-magenta"
          >
            Let&apos;s talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-20 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted"
        >
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-lime" />
          </motion.span>
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
