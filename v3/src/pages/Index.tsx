import { useActiveSection } from '@/hooks/useActiveSection';
import { DesktopCompass, MobileCompass } from '@/components/compass';

import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <div className="relative">
      {/* Desktop Compass */}
      <DesktopCompass
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Mobile Compass */}
      <MobileCompass
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main className="pt-36 md:pt-0 md:pl-[280px]">
        <HeroSection onScrollToProjects={() => scrollToSection('projects')} />

        <AboutSection />

        {/* INLINE — NOT compass controlled */}
        <EducationSection />
        <TestimonialsSection />

        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
