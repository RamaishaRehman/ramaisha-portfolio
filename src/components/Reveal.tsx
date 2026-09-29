"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 40, className, once = true }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent = "lime",
}: {
  eyebrow: string;
  title: string;
  accent?: "lime" | "magenta" | "cyan" | "violet";
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-4" data-accent={accent}>
        <span className="accent-text text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]">
          {eyebrow}
        </span>
        <h2 className="display text-[clamp(2.6rem,7vw,6.5rem)]">{title}</h2>
      </div>
    </Reveal>
  );
}
