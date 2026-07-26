import SplitProjectShowcase from "../features/split-projects/SplitProjectShowcase.jsx";

export default function ProjectsSection({ content, language }) {
  return (
    <SplitProjectShowcase
      content={content.projects}
      language={language}
    />
  );
}