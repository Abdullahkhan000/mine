import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionProvider } from "@/components/ui/Motion";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { TechEcosystem } from "@/components/TechEcosystem";
import { SystemsStatement } from "@/components/SystemsStatement";

export default function Home() {
  return (
    <MotionProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <SystemsStatement />
        <Projects />
        <Services />
        <Process />
        <Resume />
        <TechEcosystem />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
