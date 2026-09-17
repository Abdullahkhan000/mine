"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation, portfolioLinks } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { premiumEase } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function Navigation() {
  const [active, setActive] = useState("work");
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setCompact(latest > 40));

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-nav ${compact ? "site-nav--compact" : ""}`}>
      <div className="site-nav__inner">
        <a className="brand" href="#top" aria-label="Abdullah Ibrahim — home">
          <span className="brand__mark">AB</span>
          <span className="brand__name">Abdullah<br />Ibrahim</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} className={active === item.href.slice(1) ? "is-active" : ""} href={item.href}>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <SmartLink href={portfolioLinks.email} className="nav-cta" magnetic>
          <span>Let&apos;s talk</span><ArrowUpRight />
        </SmartLink>

        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          <span>{open ? "Close" : "Menu"}</span>
          <span className={`menu-toggle__icon ${open ? "is-open" : ""}`}><i /><i /></span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: premiumEase }}
          >
            <nav aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + index * 0.06, ease: premiumEase }}
                >
                  <span>0{index + 1}</span>{item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mobile-menu__footer">
              <span>Python • Django • AI Builder</span>
              <span>Available for freelance</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
