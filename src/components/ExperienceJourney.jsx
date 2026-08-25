import { useReveal } from '../animations/useReveal';
import '../styles/experience-journey.css';

function formatPrice(experience) {
  if (experience.priceConfirmed && experience.price) return experience.price;
  return 'Price on request';
}

// Large-format inclusions grid — every "moment" gets real, generous
// space instead of a small scrolling strip, since this section is the
// centerpiece of the page.
function MomentGrid({ inclusions }) {
  return (
    <div className="experience-journey__grid">
      {inclusions.map((step, i) => (
        <figure
          className={`experience-journey__moment ${i === 0 ? 'experience-journey__moment--wide' : ''}`}
          key={step.label}
        >
          <div className="experience-journey__moment-image">
            <img src={step.image} alt={step.label} loading="lazy" />
            <span className="experience-journey__moment-scrim" aria-hidden="true" />
          </div>
          <figcaption>
            <span className="experience-journey__moment-label">{step.label}</span>
            {step.note && <span className="experience-journey__moment-note">{step.note}</span>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function ExperienceJourney({ experience }) {
  const ref = useReveal({ stagger: 0.06 });

  return (
    <article className="experience-journey" ref={ref}>
      <div className="experience-journey__hero reveal">
        <img
          className="experience-journey__hero-image"
          src={experience.heroImage}
          alt={experience.heroImageAlt}
        />
        <div className="experience-journey__scrim" aria-hidden="true" />
        <span className="experience-journey__order">{experience.order}</span>
        {experience.mostPopular && (
          <span className="experience-journey__badge">Most Popular</span>
        )}
      </div>

      <div className="experience-journey__body">
        <span className="experience-journey__duration eyebrow reveal">{experience.duration}</span>
        <h3 className="experience-journey__title reveal">{experience.title}</h3>
        <p className="experience-journey__price reveal">{formatPrice(experience)}</p>
        <p className="experience-journey__description reveal">{experience.description}</p>

        {experience.guide && (
          <div className="experience-journey__guide reveal">
            <span className="eyebrow">Your Guide</span>
            <p>{experience.guide}</p>
          </div>
        )}

        <div className="reveal">
          <MomentGrid inclusions={experience.inclusions} />
        </div>

        <a href="/book" className="btn btn-outline experience-journey__cta reveal">
          Enter This Journey
        </a>
      </div>
    </article>
  );
}
