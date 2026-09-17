"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { portfolioImages } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const disciplines = ["Backend systems", "REST APIs", "AI-powered applications", "Automation tools", "Database products", "Digital media workflows"];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [55, -45]);

  return (
    <section ref={ref} className="about section-shell" id="about" aria-labelledby="about-heading">
      <SectionHeading index="01" eyebrow="Profile / intent" title="ENGINEERING WITH A POINT OF VIEW." />
      <div className="about__composition">
        <motion.div className="about__portrait-wrap" style={{ y: imageY }}>
          <div className="about__portrait" role={portfolioImages.profile ? undefined : "img"} aria-label={portfolioImages.profile ? undefined : "Profile image placeholder for Abdullah Ibrahim"}>
            {portfolioImages.profile ? (
              <Image src={portfolioImages.profile} alt="Portrait of Abdullah Ibrahim" fill sizes="(max-width: 760px) 75vw, 30vw" />
            ) : (
              <>
                <div className="placeholder-cross" aria-hidden="true" />
                <span>PROFILE IMAGE</span>
                <strong>INSERT HERE</strong>
                <small>04:05 / PORTRAIT</small>
              </>
            )}
          </div>
          <span className="about__portrait-caption">Abdullah Ibrahim<br />Backend developer &amp; AI builder</span>
        </motion.div>

        <div className="about__statement">
          <Reveal>
            <p className="display-copy" id="about-heading">
              I TURN COMPLEX REQUIREMENTS INTO <em>USEFUL, DEPENDABLE</em> DIGITAL PRODUCTS.
            </p>
          </Reveal>
          <Reveal className="about__body" delay={0.08}>
            <span className="about__index">( A )</span>
            <p>
              I focus on the machinery behind strong product experiences: considered architecture, clear data, dependable APIs, practical intelligence, and workflows that hold up beyond the demo.
            </p>
          </Reveal>
          <Reveal className="about__disciplines" delay={0.14}>
            {disciplines.map((item, index) => (
              <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
