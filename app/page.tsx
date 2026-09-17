import { About } from "@/components/About";
import { AmbientScene } from "@/components/AmbientScene";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroLoader } from "@/components/IntroLoader";
import { MotionProvider } from "@/components/ui/Motion";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <MotionProvider>
      <IntroLoader />
      <AmbientScene />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
