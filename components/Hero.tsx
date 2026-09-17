"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioLinks } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { MaskedWords, premiumEase } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="hero" id="top" aria-labelledby="hero-title">
      <motion.div className="hero__grid" style={{ y: gridY }} aria-hidden="true" />
      <motion.div className="hero__orb" style={{ y: orbY }} aria-hidden="true">
        <div className="hero__orb-ring" />
        <span>AI</span>
      </motion.div>
      <motion.div className="hero__edition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
        <span>Independent developer</span><span>Selected portfolio / 2026</span>
      </motion.div>

      <div className="hero__content">
        <motion.div className="hero__eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}>
          <span className="status-dot" />
          <span>Available for freelance projects</span>
        </motion.div>

        <h1 id="hero-title" className="hero__title">
          <span className="hero__line"><MaskedWords text="I BUILD SERIOUS" /></span>
          <span className="hero__line hero__line--indent"><MaskedWords text="DIGITAL PRODUCTS" /></span>
          <span className="hero__line hero__line--accent"><MaskedWords text="THAT WORK." /></span>
        </h1>

        <div className="hero__lower">
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8, ease: premiumEase }}>
            Backend systems, APIs, AI integrations, automation, and media workflows—engineered with purpose.
          </motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92, duration: 0.8, ease: premiumEase }}>
            <SmartLink href="#work" className="button button--dark" magnetic>
              <span>View my work</span><ArrowUpRight />
            </SmartLink>
            <SmartLink href={portfolioLinks.cv} className="button button--line" magnetic>
              <span>View resume</span><ArrowDown />
            </SmartLink>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" className="scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25 }} aria-label="Scroll to about section">
        <span>Scroll to explore</span><ArrowDown />
      </motion.a>
      <div className="hero__role">Python <i aria-hidden="true" /> Django <i aria-hidden="true" /> AI Builder</div>
    </section>
  );
}
