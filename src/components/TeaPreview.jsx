import { teaSection } from '../data/sections';
import { useReveal } from '../animations/useReveal';
import '../styles/tea.css';

export default function TeaPreview() {
  const ref = useReveal();

  return (
    <section className="tea" ref={ref}>
      <img className="tea__image" src={teaSection.image} alt={teaSection.imageAlt} loading="lazy" />
      <div className="tea__scrim" aria-hidden="true" />
      <div className="tea__content container reveal">
        <span className="eyebrow">{teaSection.eyebrow}</span>
        <h2 className="tea__title">{teaSection.headline}</h2>
        <p className="tea__body">{teaSection.body}</p>
      </div>
    </section>
  );
}
