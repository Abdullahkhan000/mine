"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { premiumEase } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";
import { SmartLink } from "@/components/ui/SmartLink";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className={`reference-project ${project.featured ? "reference-project--featured" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.08, ease: premiumEase }}
    >
      <div className="reference-project__visual">
        {project.image ? (
          <Image src={project.image} alt={`${project.title} project interface`} fill sizes="(max-width: 760px) 100vw, 50vw" />
        ) : (
          <div className={`reference-project__placeholder reference-project__placeholder--${index + 1}`} role="img" aria-label={project.imagePlaceholder}>
            <span>[{project.imagePlaceholder}]</span>
            <small>{project.featured ? "PRIMARY CASE STUDY / 16:10" : "PROJECT ASSET / 3:2"}</small>
          </div>
        )}
        <div className="reference-project__actions">
          <SmartLink href={project.liveUrl}>Live <ArrowUpRight /></SmartLink>
          <SmartLink href={project.githubUrl}>GitHub <ArrowUpRight /></SmartLink>
        </div>
      </div>
      <div className="reference-project__body">
        <div className="reference-project__heading">
          <span>{project.featured ? "Featured / 01" : `Project / 0${index + 1}`}</span>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <p className="reference-project__description">{project.description}</p>
        <div className="reference-project__stack">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section className="reference-section reference-work" id="work" aria-labelledby="work-title">
      <div className="reference-grid" aria-hidden="true" />
      <SectionMeta number="03" label="Selected work" />
      <h2 className="sr-only" id="work-title">Selected work</h2>
      <div className="reference-work__grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
      </div>
    </section>
  );
}
