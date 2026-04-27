import Header from "@/app/components/Header";
import LoadingCover from "@/app/components/LoadingCover";
import BlossomPetalAnimation from "@/app/components/BlossomPetalAnimation";
import VisualSection from "@/app/components/sections/VisualSection";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillSection from "@/app/components/sections/SkillSection";
import PersonalitySection from "@/app/components/sections/PersonalitySection";
import PortfolioSection from "@/app/components/sections/PortfolioSection";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Home() {

  return (
    <div className="wrap">
      
      {/* Loading */}
      <LoadingCover />

      {/* Particles */}
      <BlossomPetalAnimation />

      {/* Header */}
      <Header />

      {/* Sections */}
      <VisualSection />
      <AboutSection />
      <SkillSection />
      <PersonalitySection />
      <PortfolioSection />
      <ContactSection />

    </div>
  );
}
