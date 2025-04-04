import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  ContactSection
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#0f0f0f]">
      <div className="w-full max-w-4xl">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}
