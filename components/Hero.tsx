"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioImages } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { MaskedWords, premiumEase } from "@/components/ui/Motion";

export function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 80]);

  return (
    <section className="reference-hero" id="top" aria-labelledby="hero-title">
      <motion.div className="reference-hero__media" style={{ y: backgroundY }}>
        {portfolioImages.profile ? (
          <Image src={portfolioImages.profile} alt="Portrait of Abdullah Ibrahim" fill priority sizes="100vw" />
        ) : (
          <div className="reference-hero__placeholder" role="img" aria-label="Profile image placeholder">
            <span>[PROFILE / HERO IMAGE — INSERT HERE]</span>
          </div>
        )}
      </motion.div>
      <div className="reference-grid" aria-hidden="true" />

      <h1 id="hero-title"><MaskedWords text="ABDULLAH IBRAHIM" /></h1>

      <motion.div className="reference-hero__roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.55 }}>
        <span>Backend developer</span><span>API development</span><span>AI integration</span>
      </motion.div>

      <motion.div className="reference-hero__statement" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78, duration: 0.65, ease: premiumEase }}>
        <p>Engineering digital products built for scale and real-world use.</p>
      </motion.div>

      <motion.div className="reference-hero__detail" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92, duration: 0.6, ease: premiumEase }}>
        <ArrowUpRight />
        <div className="reference-hero__detail-image">
          {portfolioImages.heroDetail ? <Image src={portfolioImages.heroDetail} alt="Selected detail from Abdullah Ibrahim's work" fill sizes="160px" /> : <span>[DETAIL IMAGE]</span>}
        </div>
      </motion.div>

      <motion.div className="reference-hero__year" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85, duration: 0.7, ease: premiumEase }}>20<br />26</motion.div>
      <motion.div className="reference-hero__position" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>Python • Django • AI Builder</motion.div>
    </section>
  );
}
