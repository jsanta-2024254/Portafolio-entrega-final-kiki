import LiquidSkillsPanel from "../features/liquid-skills/LiquidSkillsPanel.jsx";

export default function SkillsSection({ content, language }) {
  return <LiquidSkillsPanel content={content.skills} language={language} />;
}