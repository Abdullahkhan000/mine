"use client";

import Image from "next/image";
import { portfolioImages, portfolioLinks } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function Contact() {
  return (
    <section className="reference-contact" id="contact" aria-labelledby="contact-title">
      <div className="reference-contact__media">
        {portfolioImages.contactVisual ? (
          <Image src={portfolioImages.contactVisual} alt="A visual representing the start of a new digital product" fill sizes="100vw" />
        ) : (
          <div className="reference-contact__placeholder" role="img" aria-label="Final contact visual placeholder"><span>[CONTACT / LAUNCH VISUAL — INSERT HERE]</span></div>
        )}
        <div className="reference-contact__gradient" aria-hidden="true" />
        <Reveal><h2 id="contact-title">/ Let&apos;s<br />launch<br />something<br />useful</h2></Reveal>
        <SmartLink className="reference-button reference-contact__button" href={portfolioLinks.email} magnetic>Get started <ArrowUpRight /></SmartLink>
      </div>
    </section>
  );
}
