"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import { projects, type Project } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { premiumEase, Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartLink } from "@/components/ui/SmartLink";

function ProjectVisual({ project, index, compact = false }: { project: Project; index: number; compact?: boolean }) {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 24 });

  function followPointer(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <motion.div
      className={`project-visual ${compact ? "project-visual--compact" : ""}`}
      onMouseMove={followPointer}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, ease: premiumEase }}
    >
      {project.image ? (
        <Image src={project.image} alt={`${project.title} project interface`} fill sizes={compact ? "(max-width: 768px) 100vw, 50vw" : "100vw"} />
      ) : (
        <div className="project-placeholder" role="img" aria-label={project.imagePlaceholder}>
          <div className="project-placeholder__chrome">
            <span /><span /><span />
            <p>PROJECT PREVIEW / {String(index + 1).padStart(2, "0")}</p>
          </div>
          <div className="project-placeholder__center">
            <span>[{project.imagePlaceholder}]</span>
            <strong>{index === 0 ? "2560 × 1600 RECOMMENDED" : "1800 × 1200 RECOMMENDED"}</strong>
          </div>
          <div className="project-placeholder__grid" aria-hidden="true" />
        </div>
      )}
      <motion.div className="project-visual__light" style={{ left: smoothX, top: smoothY }} aria-hidden="true" />
      <span className="project-visual__index">{String(index + 1).padStart(2, "0")}</span>
    </motion.div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      <SmartLink href={project.liveUrl} className="project-link">
        <span>Live project</span><ArrowUpRight />
      </SmartLink>
      <SmartLink href={project.githubUrl} className="project-link project-link--quiet">
        <span>GitHub</span><ArrowUpRight />
      </SmartLink>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="featured-project">
      <ProjectVisual project={project} index={0} />
      <div className="featured-project__info">
        <Reveal className="featured-project__meta">
          <span>Project 01</span><span>{project.category}</span><span>{project.year}</span>
        </Reveal>
        <Reveal><h3>{project.title}</h3></Reveal>
        <div className="featured-project__details">
          <Reveal><p>{project.description}</p></Reveal>
          <Reveal className="project-stack" delay={0.08}>
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </Reveal>
          <Reveal delay={0.12}><ProjectLinks project={project} /></Reveal>
        </div>
      </div>
      <div className="featured-project__secondary">
        {project.secondaryImage ? (
          <div className="secondary-project-image">
            <Image src={project.secondaryImage} alt={`${project.title} interface detail`} fill sizes="(max-width: 760px) 88vw, 50vw" />
          </div>
        ) : (
          <div className="secondary-placeholder" role="img" aria-label={project.secondaryImagePlaceholder}>
            <span>[{project.secondaryImagePlaceholder}]</span><small>OPTIONAL DETAIL / 4:3</small>
          </div>
        )}
        <Reveal>
          <p><span>Project focus</span>One platform, multiple discovery and intelligence flows, built around a structured Django and API foundation.</p>
        </Reveal>
      </div>
    </article>
  );
}

function FutureProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="future-project"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: (index - 1) * 0.08, ease: premiumEase }}
    >
      <ProjectVisual project={project} index={index} compact />
      <div className="future-project__content">
        <span className="future-project__number">0{index + 1} / {project.year}</span>
        <span className="future-project__category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section className="projects" id="work" aria-labelledby="work-heading">
      <div className="section-shell projects__heading">
        <SectionHeading index="03" eyebrow="Selected work / case studies" title="BUILT TO BE USED. DESIGNED TO LAST." />
        <Reveal><p className="projects__intro" id="work-heading">Selected digital systems where product thinking, backend engineering, and interface quality meet.</p></Reveal>
      </div>
      <FeaturedProject project={projects[0]} />
      <div className="section-shell future-projects">
        <div className="future-projects__label"><span>Next in the archive</span><span>Structured for expansion</span></div>
        {projects.slice(1).map((project, index) => <FutureProject project={project} index={index + 1} key={project.title} />)}
      </div>
    </section>
  );
}
