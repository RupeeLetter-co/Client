import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AppShowcaseSection } from "@/components/sections/AppShowcaseSection";
import { ModernInvestorsSection } from "@/components/sections/ModernInvestorsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <FeaturesSection />
        <ProblemSection />
        <HowItWorksSection />
        <AppShowcaseSection />
        <ModernInvestorsSection />
        <AboutSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
