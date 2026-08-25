import { visitorGatewayIntro, visitorTypes } from '../data/visitorGateway';
import { useReveal } from '../animations/useReveal';
import ArchDoorway from './ArchDoorway';
import '../styles/visitor-gateway.css';

export default function VisitorGateway({ onSelect }) {
  const ref = useReveal({ stagger: 0.1 });

  return (
    <section className="visitor-gateway section" ref={ref}>
      <div className="grain" aria-hidden="true" />
      <div className="container">
        <span className="eyebrow reveal" style={{ textAlign: 'center', display: 'block' }}>
          {visitorGatewayIntro.eyebrow}
        </span>
        <h2 className="visitor-gateway__headline reveal">{visitorGatewayIntro.headline}</h2>

        <div className="visitor-gateway__doors">
          <div className="reveal">
            <ArchDoorway visitor={visitorTypes.indian} onSelect={onSelect} />
          </div>
          <div className="visitor-gateway__divider" aria-hidden="true" />
          <div className="reveal">
            <ArchDoorway visitor={visitorTypes.international} onSelect={onSelect} />
          </div>
        </div>
      </div>
    </section>
  );
}
