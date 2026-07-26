import { useLanguage } from "../features/language/useLanguage.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import ProfileSection from "../sections/ProfileSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";
import CurriculumSection from "../sections/CurriculumSection.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";

export default function PortfolioPage() {
  const { content, language } = useLanguage();

  return (
    <main>
      <HeroSection content={content} />
      <ProfileSection content={content} />
      <SkillsSection content={content} language={language} />
      <CurriculumSection content={content} language={language} />
      <ProjectsSection content={content} language={language} />
      <ContactSection content={content} />
    </main>
  );
}