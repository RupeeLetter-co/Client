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
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <FeaturesSection />
        <AppShowcaseSection />
        <ProblemSection />
        <HowItWorksSection />
        <ModernInvestorsSection />
        <AboutSection />
        <TeamSection />
      </main>
      <ContactSection />
      <CTASection />
      <Footer />
    </>
  );
}
