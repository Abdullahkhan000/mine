import { portfolioLinks } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SmartLink } from "@/components/ui/SmartLink";

export function Footer() {
  return (
    <footer className="footer section-shell">
      <div className="footer__top">
        <a className="footer__brand" href="#top"><span>AB</span><strong>Abdullah Ibrahim</strong></a>
        <p>Python • Django • AI Builder</p>
        <a className="footer__top-link" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <div className="footer__ticker" aria-hidden="true"><span>BUILD CLEARLY / SHIP CAREFULLY / STAY CURIOUS /</span></div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Abdullah Ibrahim</span>
        <nav aria-label="Social links">
          <SmartLink href={portfolioLinks.github}>GitHub <ArrowUpRight /></SmartLink>
          <SmartLink href={portfolioLinks.linkedin}>LinkedIn <ArrowUpRight /></SmartLink>
          <SmartLink href={portfolioLinks.email}>Email <ArrowUpRight /></SmartLink>
        </nav>
        <span>Independent developer portfolio</span>
      </div>
    </footer>
  );
}
