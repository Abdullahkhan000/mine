import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionProvider } from "@/components/ui/Motion";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { TechEcosystem } from "@/components/TechEcosystem";

export default function Home() {
  return (
    <MotionProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechEcosystem />
        <Projects />
        <Services />
        <Approach />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
