import ParticlesBackground from "@/components/ui/ParticlesBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/components/ui/ScrollToTop"

export default function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <ParticlesBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
          <ScrollToTop />
      </main>

      <Footer />
    </div>
  );
}
