import { routeStops, nearbyLandmarks, mapImage, mapImageAlt } from '../data/locations';
import { useReveal } from '../animations/useReveal';
import '../styles/location.css';

const landmarkIcons = {
  hawamahal: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 44V20l4-6h24l4 6v24" />
      <path d="M8 20h32M14 14h20l-2-4H16z" />
      <circle cx="14" cy="27" r="2.4" />
      <circle cx="22" cy="27" r="2.4" />
      <circle cx="30" cy="27" r="2.4" />
      <circle cx="38" cy="27" r="2.4" />
      <circle cx="18" cy="35" r="2.4" />
      <circle cx="26" cy="35" r="2.4" />
      <circle cx="34" cy="35" r="2.4" />
    </svg>
  ),
  baori: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" />
      <rect x="12" y="12" width="24" height="24" />
      <rect x="18" y="18" width="12" height="12" />
      <path d="M24 18v12M18 24h12" opacity="0.6" />
    </svg>
  ),
  fort: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M6 44V18h6v-6h4v6h4v-8h8v8h4v-6h4v6h6v26z" />
      <path d="M6 44h36M16 44V30h6v14M26 44V30h6v14" />
    </svg>
  ),
  road: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M14 44 22 6h4l8 38" />
      <path d="M24 12v4M24 22v4M24 32v4" strokeDasharray="3 4" />
    </svg>
  ),
};

export default function LocationPreview() {
  const ref = useReveal({ stagger: 0.07 });

  return (
    <section className="location section" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">On the Golden Triangle</span>
        <h2 className="location__title reveal">Easy to reach. Easy to stay.</h2>

        <div className="location__route reveal" role="img" aria-label={`Route: ${routeStops.join(' to ')}`}>
          {routeStops.map((stop, i) => (
            <div className="location__stop" key={stop}>
              <span
                className={`location__dot ${stop === 'Vimla Loom Crafts' ? 'location__dot--active' : ''}`}
              />
              <span className="location__stop-label">{stop}</span>
              {i < routeStops.length - 1 && <span className="location__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="location__map reveal">
          {mapImage ? (
            <img src={mapImage} alt={mapImageAlt} loading="lazy" />
          ) : (
            <div className="location__map-placeholder">
              <span>Route map coming soon</span>
            </div>
          )}
        </div>

        <div className="location__landmarks-head reveal">
          <span className="location__landmarks-kicker">Worth the detour</span>
          <span className="location__landmarks-rule" aria-hidden="true" />
        </div>

        <ul className="location__landmarks">
          {nearbyLandmarks.map((place) => (
            <li className="location__landmark reveal" key={place.name}>
              <span className="location__landmark-icon">{landmarkIcons[place.icon]}</span>
              <span className="location__landmark-body">
                <span className="location__landmark-name">{place.name}</span>
                <span className="location__landmark-note">{place.note}</span>
              </span>
              <span className="location__distance">{place.distance}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
