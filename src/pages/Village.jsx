import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useReveal } from '../animations/useReveal';
import { routeStops, nearbyLandmarks } from '../data/locations';
import {
  villageHero,
  beyondLoom,
  pottery,
  lakBangles,
  moreCrafts,
  heritageFort,
  journeyContinues,
  goldenTriangle,
  villageActivities,
  villageFinalCta,
} from '../data/villageJourney';
import '../styles/village-page.css';

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

const activityIcons = {
  pottery: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <ellipse cx="24" cy="38" rx="14" ry="3.5" />
      <path d="M17 38c-1-6 0-11 2-14-1-2-1-4 1-6h8c2 2 2 4 1 6 2 3 3 8 2 14" />
      <path d="M19 18h10" />
    </svg>
  ),
  bangles: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="19" cy="24" r="11" />
      <circle cx="29" cy="24" r="11" />
    </svg>
  ),
  fort: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M6 44V18h6v-6h4v6h4v-8h8v8h4v-6h4v6h6v26z" />
      <path d="M6 44h36M16 44V30h6v14M26 44V30h6v14" />
    </svg>
  ),
};

function Hero() {
  const ref = useReveal();
  return (
    <section className="vp-hero" ref={ref}>
      <img className="vp-hero__image" src={villageHero.image} alt={villageHero.imageAlt} fetchpriority="high" />
      <div className="vp-hero__scrim" aria-hidden="true" />
      <div className="vp-hero__frame" aria-hidden="true" />
      <div className="container vp-hero__content reveal">
        <span className="eyebrow">{villageHero.eyebrow}</span>
        <h1 className="vp-hero__title">{villageHero.headline}</h1>
        <p className="vp-hero__sub">{villageHero.sub}</p>
        <div className="vp-hero__actions">
          <a href={villageHero.primaryCta.href} className="btn btn-primary">
            {villageHero.primaryCta.label}
          </a>
          <a href={villageHero.secondaryCta.href} className="btn btn-outline">
            {villageHero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function BeyondTheLoom() {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <section className="vp-intro section" id="beyond-the-loom" ref={ref}>
      <div className="container vp-intro__grid">
        <div className="vp-intro__collage">
          {beyondLoom.images.map((img) => (
            <div className="vp-intro__image reveal" key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <div>
          <span className="eyebrow reveal">{beyondLoom.eyebrow}</span>
          <h2 className="vp-intro__title reveal">{beyondLoom.headline}</h2>
          <p className="vp-intro__body reveal">{beyondLoom.body}</p>
        </div>
      </div>
    </section>
  );
}

function CraftFeature({ data, variant }) {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <section className={`vp-craft section vp-jaali ${variant === 'alt' ? 'vp-craft--alt' : ''}`} ref={ref}>
      <div className="container vp-craft__grid">
        <div>
          <span className="eyebrow vp-craft__eyebrow reveal">{data.eyebrow}</span>
          <h2 className="vp-craft__title reveal">{data.headline}</h2>
          <p className="vp-craft__body reveal">{data.body}</p>
          <ul className="vp-craft__steps reveal">
            {data.process.map((step) => (
              <li key={step.title}>
                <span className="vp-craft__step-title">{step.title}</span>
                <p className="vp-craft__step-note">{step.note}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {data.images ? (
            <div className="vp-craft__mosaic reveal" tabIndex={0}>
              {data.images.map((img) => (
                <div className="vp-craft__mosaic-cell" key={img.src}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
              <div className="vp-craft__hover-note">
                <p>{data.hoverNote}</p>
              </div>
            </div>
          ) : (
            <div className="vp-craft__media reveal" tabIndex={0}>
              {data.image ? (
                <img src={data.image} alt={data.imageAlt} loading="lazy" />
              ) : (
                <div className="vp-craft__placeholder">Photograph coming soon</div>
              )}
              <div className="vp-craft__hover-note">
                <p>{data.hoverNote}</p>
              </div>
            </div>
          )}
          <p className="vp-craft__hint">Hover or tap the image</p>
        </div>
      </div>
    </section>
  );
}

function MoreToDiscover() {
  const ref = useReveal({ stagger: 0.05 });
  return (
    <section className="vp-more section" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">More to Discover</span>
        <h2 className="vp-more__title reveal">Other crafts of the village.</h2>

        <div className="vp-more__strip">
          {moreCrafts.map((craft) => (
            <div className="vp-more__card reveal" key={craft.title}>
              <div className="vp-more__image">
                <img src={craft.image} alt={craft.title} loading="lazy" />
              </div>
              <h3 className="vp-more__card-title">{craft.title}</h3>
              <p className="vp-more__card-note">{craft.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  const ref = useReveal();
  return (
    <section className="vp-heritage" ref={ref}>
      <img className="vp-heritage__image" src={heritageFort.image} alt={heritageFort.imageAlt} loading="lazy" />
      <div className="vp-heritage__scrim" aria-hidden="true" />
      <div className="container">
        <div className="vp-heritage__panel reveal">
          <span className="eyebrow">{heritageFort.eyebrow}</span>
          <h2 className="vp-heritage__title">{heritageFort.headline}</h2>
          <p className="vp-heritage__body">{heritageFort.body}</p>
          <p className="vp-heritage__note">Basko Fort photography to be added</p>
        </div>
      </div>
    </section>
  );
}

function JourneyContinues() {
  const ref = useReveal();
  return (
    <section className="vp-journey" ref={ref}>
      <img className="vp-journey__image" src={journeyContinues.image} alt={journeyContinues.imageAlt} loading="lazy" />
      <div className="vp-journey__scrim" aria-hidden="true" />
      <div className="vp-journey__content reveal">
        <span className="eyebrow">{journeyContinues.eyebrow}</span>
        <h2 className="vp-journey__title">{journeyContinues.headline}</h2>
        <p className="vp-journey__body">{journeyContinues.body}</p>
      </div>
    </section>
  );
}

function GoldenTriangle() {
  const ref = useReveal();
  return (
    <section className="vp-gt section" ref={ref}>
      <div className="container">
        <div className="vp-gt__head reveal">
          <span className="eyebrow">{goldenTriangle.eyebrow}</span>
          <h2 className="vp-gt__title">{goldenTriangle.headline}</h2>
          <p className="vp-gt__body">{goldenTriangle.body}</p>
        </div>

        <div className="vp-gt__route reveal" role="img" aria-label={`Route: ${routeStops.join(' to ')}`}>
          {routeStops.map((stop, i) => (
            <div className="vp-gt__stop" key={stop}>
              <span className={`vp-gt__dot ${stop === 'Vimla Loom Crafts' ? 'vp-gt__dot--active' : ''}`} />
              <span className="vp-gt__stop-label">{stop}</span>
              {i < routeStops.length - 1 && <span className="vp-gt__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="vp-gt__map reveal">
          {goldenTriangle.mapImage ? (
            <img src={goldenTriangle.mapImage} alt={goldenTriangle.mapAlt} loading="lazy" />
          ) : (
            <div className="vp-gt__map-placeholder">
              <span>Golden Triangle route map coming soon</span>
            </div>
          )}
        </div>

        <div className="vp-gt__landmarks-head reveal">
          <span className="vp-gt__landmarks-kicker">Worth the detour</span>
          <span className="vp-gt__activities-rule" aria-hidden="true" />
        </div>

        <ul className="vp-gt__activities reveal">
          {nearbyLandmarks.map((place) => (
            <li className="vp-gt__activity" key={place.name}>
              <span className="vp-gt__activity-icon">{landmarkIcons[place.icon]}</span>
              <span className="vp-gt__activity-body">
                <span className="vp-gt__activity-name">{place.name}</span>
                <span className="vp-gt__activity-note">{place.note}</span>
              </span>
              <span className="vp-gt__activity-meta">{place.distance}</span>
            </li>
          ))}
        </ul>

        <div className="vp-gt__activities-head reveal">
          <span className="vp-gt__activities-kicker">On-site activities</span>
          <span className="vp-gt__activities-rule" aria-hidden="true" />
        </div>

        <ul className="vp-gt__activities reveal">
          {villageActivities.map((activity) => (
            <li className="vp-gt__activity" key={activity.name}>
              <span className="vp-gt__activity-icon">{activityIcons[activity.icon]}</span>
              <span className="vp-gt__activity-body">
                <span className="vp-gt__activity-name">{activity.name}</span>
                <span className="vp-gt__activity-note">{activity.note}</span>
              </span>
              <span className="vp-gt__activity-meta">{activity.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  const ref = useReveal();
  return (
    <section className="vp-final" ref={ref}>
      <img className="vp-final__image" src={villageFinalCta.image} alt={villageFinalCta.imageAlt} loading="lazy" />
      <div className="vp-final__scrim" aria-hidden="true" />
      <div className="vp-final__content reveal">
        <h2 className="vp-final__title">{villageFinalCta.headline}</h2>
        <p className="vp-final__body">{villageFinalCta.body}</p>
        <a href={villageFinalCta.cta.href} className="btn btn-primary vp-final__cta">
          {villageFinalCta.cta.label}
        </a>
      </div>
    </section>
  );
}

export default function Village() {
  return (
    <>
      <Nav />
      <main className="vp-page">
        <Hero />
        <BeyondTheLoom />
        <CraftFeature data={pottery} variant="dark" />
        <CraftFeature data={lakBangles} variant="alt" />
        <MoreToDiscover />
        <Heritage />
        <JourneyContinues />
        <GoldenTriangle />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
