"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";
import { premiumEase } from "@/components/ui/Motion";

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className={`reference-nav ${open ? "reference-nav--open" : ""}`}>
      <a className="reference-nav__brand" href="#top" aria-label="Abdullah Ibrahim — home">Abdullah</a>
      <button className="reference-nav__toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="site-menu">
        {open ? "Close" : "Menu"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="reference-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: premiumEase }}
          >
            <nav aria-label="Primary navigation">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.05, duration: 0.55, ease: premiumEase }}
                >
                  <span>0{index + 1}</span>{item.label}
                </motion.a>
              ))}
            </nav>
            <div className="reference-menu__foot"><span>Python • Django • AI</span><span>Available for freelance</span></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
