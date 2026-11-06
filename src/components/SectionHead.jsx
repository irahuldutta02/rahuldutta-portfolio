import { Reveal } from "./Reveal";

export function SectionHead({ eyebrow, title, id }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
    </Reveal>
  );
}
