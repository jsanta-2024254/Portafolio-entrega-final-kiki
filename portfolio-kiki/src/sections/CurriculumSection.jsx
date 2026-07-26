import HolographicCredentialBoard from "../features/holographic-cv/HolographicCredentialBoard.jsx";

export default function CurriculumSection({ content, language }) {
  return (
    <HolographicCredentialBoard
      content={content.curriculum}
      language={language}
    />
  );
}