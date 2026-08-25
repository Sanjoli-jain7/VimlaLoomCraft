import { villageSection } from '../data/sections';
import { useReveal } from '../animations/useReveal';
import '../styles/village.css';

export default function VillagePreview() {
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section className="village section" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">{villageSection.eyebrow}</span>
        <h2 className="village__title reveal">{villageSection.headline}</h2>
        <p className="village__body reveal">{villageSection.body}</p>

        <div className="village__grid">
          {villageSection.images.map((img, i) => (
            <div className={`village__frame reveal village__frame--${i}`} key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
