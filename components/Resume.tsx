"use client";

import { portfolioLinks, resume, technologies } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartLink } from "@/components/ui/SmartLink";

export function Resume() {
  return (
    <section className="resume section-shell" id="resume" aria-labelledby="resume-heading">
      <SectionHeading index="06" eyebrow="Résumé / selected credentials" title="THE PRACTICAL OVERVIEW." />
      <div className="resume__document">
        <Reveal className="resume__masthead">
          <div><span>Curriculum vitae</span><h2 id="resume-heading">Abdullah Ibrahim</h2></div>
          <div><span>Primary position</span><p>Python • Django • AI Builder</p></div>
          <SmartLink href={portfolioLinks.cv} className="resume__download" download magnetic>
            <span>Download CV</span><ArrowDown />
          </SmartLink>
        </Reveal>

        <div className="resume__grid">
          <Reveal className="resume-block resume-block--profile">
            <span className="resume-block__label">01 / Profile</span>
            <p>{resume.profile}</p>
          </Reveal>
          <Reveal className="resume-block" delay={0.05}>
            <span className="resume-block__label">02 / Technical skills</span>
            <div className="resume__skills">{technologies.map((technology) => <span key={technology.name}>{technology.name}</span>)}</div>
          </Reveal>
          <Reveal className="resume-block" delay={0.08}>
            <span className="resume-block__label">03 / Selected project</span>
            <h3>CyberCarnage</h3>
            <p>{resume.selectedProject}</p>
            <SmartLink href="#work" className="text-link"><span>View case study</span><ArrowUpRight /></SmartLink>
          </Reveal>
          <Reveal className="resume-block resume-block--education" delay={0.12}>
            <span className="resume-block__label">04 / Education</span>
            <p>{resume.education}</p>
            <small>No unprovided credentials or experience have been added.</small>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
