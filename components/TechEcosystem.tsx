"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/portfolio";
import { Plus } from "@/components/ui/Icons";
import { premiumEase, Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechEcosystem() {
  return (
    <section className="tech section-shell section-shell--dark" id="skills" aria-labelledby="skills-heading">
      <SectionHeading index="02" eyebrow="Technology / ecosystem" title="TOOLS ARE ONLY USEFUL WHEN THEY SHIP." inverted />
      <div className="tech__intro">
        <Reveal><p id="skills-heading">A connected toolkit for taking products from structured backend to finished interface—and through the media and intelligence layers in between.</p></Reveal>
        <Reveal delay={0.08}><span className="tech__note">Hover or focus to inspect the working role of each technology.</span></Reveal>
      </div>
      <div className="tech__grid">
        {technologies.map((technology, index) => (
          <motion.article
            className="tech-card"
            key={technology.name}
            tabIndex={0}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: (index % 4) * 0.045, duration: 0.65, ease: premiumEase }}
          >
            <span className="tech-card__number">{String(index + 1).padStart(2, "0")}</span>
            <span className="tech-card__group">{technology.group}</span>
            <h3>{technology.name}</h3>
            <p>{technology.detail}</p>
            <Plus className="tech-card__icon" />
          </motion.article>
        ))}
      </div>
      <div className="tech__marquee" aria-hidden="true">
        <div>
          <span>ARCHITECTURE</span><i />
          <span>INTELLIGENCE</span><i />
          <span>AUTOMATION</span><i />
          <span>MEDIA</span><i />
          <span>ARCHITECTURE</span><i />
          <span>INTELLIGENCE</span><i />
        </div>
      </div>
    </section>
  );
}
