import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import PullQuote from "@/components/sections/PullQuote";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SectionReveal from "@/components/ui/SectionReveal";
import KineticBand from "@/components/ui/KineticBand";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0A] text-[#F5F4F1] relative selection:bg-[#F14417] selection:text-white">
      <LoadingScreen />
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* 1. Hero → Quote */}
      <KineticBand
        lines={[
          { text: "Design · Code · Ship", direction: 1, variant: "filled" },
          { text: "UI/UX · Frontend", direction: -1, variant: "outline" },
        ]}
      />

      {/* Philosophy Quote */}
      <PullQuote />

      {/* 2. Quote → Work */}
      <KineticBand
        lines={[
          { text: "Selected work", direction: 1, variant: "filled" },
          { text: "Product · Brand · Code", direction: -1, variant: "outline" },
        ]}
      />

      {/* Projects */}
      <SectionReveal>
        <Projects />
      </SectionReveal>

      {/* 3. Work → About */}
      <KineticBand
        lines={[
          { text: "Who's behind it", direction: 1, variant: "accent" },
        ]}
      />

      {/* About */}
      <SectionReveal>
        <About />
      </SectionReveal>

      {/* 4. About → Experience */}
      <KineticBand
        lines={[
          { text: "Experience", direction: -1, variant: "outline" },
          { text: "2023 — 2026", direction: 1, variant: "filled" },
        ]}
      />

      {/* Experience */}
      <SectionReveal>
        <Experience />
      </SectionReveal>

      {/* 5. Experience → Skills */}
      <KineticBand
        lines={[
          { text: "Tools of the trade", direction: 1, variant: "filled" },
        ]}
      />

      {/* Skills */}
      <SectionReveal>
        <Skills />
      </SectionReveal>

      {/* 6. Skills → Contact */}
      <KineticBand
        lines={[
          { text: "Let’s talk", direction: -1, variant: "accent" },
          { text: "Say hello", direction: 1, variant: "outline" },
        ]}
      />

      {/* Final Contact Section */}
      <Contact />
    </main>
  );
}

