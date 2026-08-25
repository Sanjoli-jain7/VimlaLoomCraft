import { useRef } from 'react';
import { journeySteps } from '../data/journey';
import { useReveal } from '../animations/useReveal';
import ThreadLine from './ThreadLine';
import '../styles/journey.css';

export default function JourneyPreview() {
  const ref = useReveal({ stagger: 0.06 });
  const trackRef = useRef(null);

  return (
    <section className="journey section" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">The Visit</span>
        <h2 className="journey__title reveal">One day, eight moments.</h2>
        <div className="journey__ornament reveal" aria-hidden="true">
          <svg viewBox="0 0 120 20" className="journey__ornament-svg">
            <line x1="0" y1="10" x2="46" y2="10" />
            <path d="M60 2 L67 10 L60 18 L53 10 Z" />
            <line x1="74" y1="10" x2="120" y2="10" />
          </svg>
        </div>
      </div>

      <div className="journey__track" ref={trackRef}>
        <ThreadLine trackRef={trackRef} />

        {journeySteps.map((step, i) => {
          const slug = step.step.toLowerCase();
          return (
            <div
              className={`journey__row reveal ${i % 2 === 1 ? 'journey__row--reverse' : ''}`}
              key={step.step}
            >
              <div className="journey__marker" aria-hidden="true" />
              <div className={`journey__image journey__image--${slug}`}>
                <img src={step.image} alt="" loading="lazy" className={`journey__img journey__img--${slug}`} />
              </div>
              <div className="journey__copy">
                <span className="journey__step">{step.step}</span>
                <p className="journey__line">{step.line}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
