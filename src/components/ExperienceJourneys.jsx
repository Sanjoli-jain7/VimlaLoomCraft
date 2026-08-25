import { experiences } from '../data/experiences';
import { journeysIntro } from '../data/visitorGateway';
import { useReveal } from '../animations/useReveal';
import ExperienceJourney from './ExperienceJourney';
import '../styles/experience-journeys.css';

export default function ExperienceJourneys({ visitorType, onChooseAgain }) {
  const ref = useReveal();
  const set = experiences[visitorType];
  const intro = journeysIntro[visitorType];

  return (
    <section className="experience-journeys section" ref={ref}>
      <div className="container">
        <div className="experience-journeys__head reveal">
          <div>
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2 className="experience-journeys__title">{intro.headline}</h2>
          </div>
          <button className="experience-journeys__reset" onClick={onChooseAgain}>
            ← Choose Again
          </button>
        </div>

        <ExperienceJourney experience={set.artisanIntroduction} />
        <ExperienceJourney experience={set.fullVillageImmersion} />
      </div>
    </section>
  );
}
