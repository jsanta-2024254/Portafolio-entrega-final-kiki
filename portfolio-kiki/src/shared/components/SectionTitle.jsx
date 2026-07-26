import Tag from "./Tag.jsx";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <Tag>{eyebrow}</Tag>

      <h2 className="mt-5 text-4xl font-black tracking-tight text-kiki-text md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-8 text-kiki-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}