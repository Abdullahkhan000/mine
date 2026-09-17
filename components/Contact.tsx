"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioLinks } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { MaskedWords, Reveal } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.76, 1]);

  return (
    <section ref={ref} className="contact" id="contact" aria-labelledby="contact-heading">
      <motion.div className="contact__disc" style={{ rotate, scale }} aria-hidden="true"><span>START A PROJECT • START A PROJECT • </span></motion.div>
      <div className="section-shell contact__inner">
        <Reveal className="contact__meta"><span>07 / Contact</span><span>Available for selected freelance projects</span></Reveal>
        <h2 className="contact__title" id="contact-heading">
          <span><MaskedWords text="LET’S BUILD" /></span>
          <span><MaskedWords text="SOMETHING" /></span>
          <span className="contact__title-accent"><MaskedWords text="USEFUL." /></span>
        </h2>
        <div className="contact__bottom">
          <Reveal><p>For web applications, APIs, AI integrations, automation, and digital media workflows.</p></Reveal>
          <Reveal delay={0.08}>
            <SmartLink href={portfolioLinks.email} className="contact__cta" magnetic>
              <span>Start a conversation</span><ArrowUpRight />
            </SmartLink>
          </Reveal>
        </div>
        <Reveal className="contact__links" delay={0.12}>
          <SmartLink href={portfolioLinks.email} className="contact__link"><span>Email</span><strong>{portfolioLinks.email}</strong><ArrowUpRight /></SmartLink>
          <SmartLink href={portfolioLinks.github} className="contact__link"><span>GitHub</span><strong>View profile</strong><ArrowUpRight /></SmartLink>
          <SmartLink href={portfolioLinks.linkedin} className="contact__link"><span>LinkedIn</span><strong>Connect</strong><ArrowUpRight /></SmartLink>
        </Reveal>
      </div>
    </section>
  );
}
