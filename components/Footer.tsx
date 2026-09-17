import { navigation, portfolioLinks } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SmartLink } from "@/components/ui/SmartLink";

export function Footer() {
  return (
    <footer className="reference-footer">
      <div className="reference-grid" aria-hidden="true" />
      <div className="reference-footer__lead">
        <h2>Start a conversation</h2>
        <p>For web applications, APIs, AI integrations, automation, databases, and digital media workflows.</p>
        <SmartLink href={portfolioLinks.email} className="footer-email">{portfolioLinks.email} <ArrowUpRight /></SmartLink>
      </div>
      <nav className="reference-footer__navigation" aria-label="Footer navigation">
        <span>Navigation</span>
        {navigation.slice(1).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <nav className="reference-footer__social" aria-label="Social profiles">
        <span>Social</span>
        <SmartLink href={portfolioLinks.github}>GitHub</SmartLink>
        <SmartLink href={portfolioLinks.linkedin}>LinkedIn</SmartLink>
        <SmartLink href={portfolioLinks.x}>X</SmartLink>
        <SmartLink href={portfolioLinks.cv}>CV</SmartLink>
      </nav>
      <a className="reference-footer__top" href="#top">Back to top</a>
      <div className="reference-footer__base"><span>Abdullah Ibrahim</span><span>Python • Django • AI Builder</span><span>© {new Date().getFullYear()}</span></div>
    </footer>
  );
}
