"use client";

import Image from "next/image";
import { portfolioImages } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";

export function About() {
  return (
    <section className="reference-section reference-about" id="about" aria-labelledby="about-title">
      <div className="reference-grid" aria-hidden="true" />
      <SectionMeta number="01" label="About me" />
      <div className="reference-about__content">
        <Reveal className="reference-about__label"><span id="about-title">About me</span></Reveal>
        <Reveal className="reference-about__copy" delay={0.06}>
          Abdullah Ibrahim is a backend-focused developer building structured, scalable digital products. Working across Python, Django, APIs, AI integration, automation, databases, and media workflows, his focus stays on how products function, grow, and remain useful beyond launch.
        </Reveal>
        <Reveal className="reference-about__action" delay={0.12}>
          <ArrowUpRight />
          <a className="reference-button" href="#services">More about the work</a>
        </Reveal>
      </div>
      <Reveal className="reference-markers"><span>º</span><span>∞</span><span>º</span></Reveal>
      <Reveal className="reference-about__image" amount={0.25}>
        {portfolioImages.heroDetail ? (
          <Image src={portfolioImages.heroDetail} alt="A detail representing Abdullah Ibrahim's work" fill sizes="(max-width: 760px) 90vw, 32vw" />
        ) : (
          <div role="img" aria-label="About image placeholder"><span>[PROFILE DETAIL IMAGE — INSERT HERE]</span></div>
        )}
      </Reveal>
    </section>
  );
}
