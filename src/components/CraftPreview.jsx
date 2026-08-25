import { craftSteps } from '../data/craftSteps';
import { useReveal } from '../animations/useReveal';
import '../styles/craft.css';

export default function CraftPreview() {
  const ref = useReveal({ stagger: 0.05 });

  return (
    <section className="craft section" ref={ref}>
      <div className="container craft__head">
        <span className="eyebrow reveal">From Thread to Rug</span>
        <h2 className="craft__title reveal">Seven stages. One rug.</h2>
        <a href="/craft" className="craft__link reveal">
          Walk the full process&nbsp;→
        </a>
      </div>

      <div className="craft__strip">
        {craftSteps.map((step) => (
          <div className="craft__card reveal" key={step.order}>
            <div className="craft__image">
              <img src={step.image} alt={step.name} loading="lazy" />
            </div>
            <span className="craft__order">{step.order}</span>
            <h3 className="craft__name">{step.name}</h3>
            <p className="craft__note">{step.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
