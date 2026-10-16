import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import Projects from "@/components/sections/Projects";
import PullQuote from "@/components/sections/PullQuote";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0A] text-[#F5F4F1] relative selection:bg-[#F14417] selection:text-white">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Projects />
      <PullQuote />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
