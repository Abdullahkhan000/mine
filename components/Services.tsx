"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { premiumEase, Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section className="services section-shell" aria-labelledby="services-heading">
      <SectionHeading index="04" eyebrow="Services / what I build" title="CAPABILITY WITHOUT THE THEATRE." />
      <div className="services__layout">
        <Reveal className="services__aside">
          <p id="services-heading">Focused technical delivery for products that need more than a polished front end.</p>
          <span>Engagements can cover a focused system, a product layer, or an end-to-end build.</span>
        </Reveal>
        <div className="services__list">
          {services.map((service, index) => (
            <motion.article
              className="service-row"
              key={service.title}
              tabIndex={0}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, delay: index * 0.045, ease: premiumEase }}
            >
              <span className="service-row__code">{service.code}</span>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
              <ArrowUpRight />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
