"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";

export function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section className="reference-section reference-services" id="services" aria-labelledby="services-title">
      <div className="reference-grid" aria-hidden="true" />
      <SectionMeta number="04" label="Services" />
      <h2 className="sr-only" id="services-title">Services and development capabilities</h2>
      <div className="reference-services__composition">
        <div className="reference-services__list">
          {services.map((item, index) => (
            <button
              key={item.title}
              className={index === active ? "is-active" : ""}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <span>¬</span>{item.title}
            </button>
          ))}
        </div>

        <motion.div className="reference-services__visual" key={service.title} initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
          <div className={`service-diagram service-diagram--${active + 1}`} aria-hidden="true">
            <span className="service-diagram__core">{service.code}</span>
            <span /><span /><span /><span />
          </div>
          <p>[{service.title.toUpperCase()} SYSTEM VISUAL]</p>
        </motion.div>

        <Reveal className="reference-services__detail">
          <p>{service.detail}</p>
          <div><span>Phase 1 : Definition</span><span>Phase 2 : Execution</span></div>
          <small>© {new Date().getFullYear()}</small>
        </Reveal>
      </div>
    </section>
  );
}
