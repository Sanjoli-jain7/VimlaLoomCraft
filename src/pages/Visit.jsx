import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import VisitorGateway from '../components/VisitorGateway';
import ExperienceJourneys from '../components/ExperienceJourneys';
import ThreadConnector from '../components/ThreadConnector';
import { useReveal } from '../animations/useReveal';
import { pickupInfo, transportInfo, welcomeInfo } from '../data/visitInfo';
import { routeStops, mapImage, mapImageAlt, nearbyLandmarks } from '../data/locations';
import { contactInfo } from '../data/siteConfig';
import '../styles/visit-page.css';

function VisitHero() {
  const ref = useReveal();
  return (
    <section className="visit-hero" ref={ref}>
      <img
        className="visit-hero__image"
        src="/images/property-blue-white-hills.jpg"
        alt="The Vimla haveli courtyard at golden hour, framed by the Aravalli hills"
      />
      <div className="visit-hero__scrim" aria-hidden="true" />
      <div className="visit-hero__content container reveal">
        <span className="eyebrow">The Experience</span>
        <h1 className="visit-hero__title">Come Experience Vimla</h1>
        <p className="visit-hero__sub">Jaipur, Rajasthan</p>
      </div>
    </section>
  );
}

function InfoBlock({ eyebrow, headline, body, image, imageAlt, reverse, children }) {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <div className={`visit-block ${reverse ? 'visit-block--reverse' : ''}`} ref={ref}>
      {image && (
        <div className="visit-block__image reveal">
          <img src={image} alt={imageAlt} loading="lazy" />
        </div>
      )}
      <div className="visit-block__copy">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h2 className="visit-block__title reveal">{headline}</h2>
        <p className="visit-block__body reveal">{body}</p>
        {children}
      </div>
    </div>
  );
}

export default function Visit() {
  const [visitorType, setVisitorType] = useState(null);
  const gatewayRef = useRef(null);
  const journeysRef = useRef(null);

  // Selecting a doorway: the chosen image settles inward while the
  // gateway fades, then the two journeys for that visitor type appear.
  const handleSelect = (key, doorEl) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setVisitorType(key);
      return;
    }

    const image = doorEl?.querySelector('.arch-doorway__image');
    const tl = gsap.timeline({ onComplete: () => setVisitorType(key) });

    if (image) {
      tl.to(image, { scale: 1.18, duration: 0.7, ease: 'power2.inOut' }, 0);
    }
    tl.to(gatewayRef.current, { opacity: 0, y: -16, duration: 0.6, ease: 'power2.inOut' }, 0.1);
  };

  const handleChooseAgain = () => setVisitorType(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !visitorType || !journeysRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(journeysRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, [visitorType]);

  return (
    <>
      <Nav />
      <main className="visit-page">
        <VisitHero />

        {!visitorType && (
          <div ref={gatewayRef}>
            <VisitorGateway onSelect={handleSelect} />
          </div>
        )}

        {visitorType && (
          <div ref={journeysRef}>
            <ThreadConnector />
            <ExperienceJourneys visitorType={visitorType} onChooseAgain={handleChooseAgain} />
          </div>
        )}

        <section className="visit-section container">
          <InfoBlock
            eyebrow={pickupInfo.eyebrow}
            headline={pickupInfo.headline}
            body={pickupInfo.body}
            image={pickupInfo.image}
            imageAlt={pickupInfo.imageAlt}
          />
        </section>

        <section className="visit-section container">
          <InfoBlock
            eyebrow={transportInfo.eyebrow}
            headline={transportInfo.headline}
            body={transportInfo.body}
            image={transportInfo.images[0].src}
            imageAlt={transportInfo.images[0].alt}
            reverse
          />
        </section>

        <section className="visit-welcome section">
          <div className="container visit-welcome__grid">
            <div className="visit-welcome__image reveal-parent">
              <img src={welcomeInfo.image} alt={welcomeInfo.imageAlt} loading="lazy" />
            </div>
            <div className="visit-welcome__copy">
              <span className="eyebrow">{welcomeInfo.eyebrow}</span>
              <h2 className="visit-welcome__title">{welcomeInfo.headline}</h2>
              <p className="visit-welcome__body">{welcomeInfo.body}</p>
              <ul className="visit-welcome__list">
                {welcomeInfo.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="visit-location section">
          <div className="container">
            <div className="visit-location__head">
              <span className="eyebrow">Getting Here</span>
              <h2 className="visit-location__title">Find your way to Vimla.</h2>
            </div>

            <div className="visit-location__route" role="img" aria-label={`Route: ${routeStops.join(' to ')}`}>
              {routeStops.map((stop, i) => (
                <div className="visit-location__stop" key={stop}>
                  <span className={`visit-location__dot ${stop === 'Vimla Loom Crafts' ? 'visit-location__dot--active' : ''}`} />
                  <span className="visit-location__stop-label">{stop}</span>
                  {i < routeStops.length - 1 && <span className="visit-location__connector" aria-hidden="true" />}
                </div>
              ))}
            </div>

            {mapImage && (
              <div className="visit-location__map">
                <img src={mapImage} alt={mapImageAlt} loading="lazy" />
              </div>
            )}

            <div className="visit-location__grid">
              <div>
                <span className="visit-location__label">Address</span>
                <p className="visit-location__address">{contactInfo.address}</p>
              </div>
              <ul className="visit-location__landmarks">
                {nearbyLandmarks.map((l) => (
                  <li key={l.name}>
                    <span>{l.name}</span>
                    <span className="visit-location__distance">{l.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="visit-booking section">
          <div className="container">
            <div className="visit-booking__head">
              <span className="eyebrow">Ready When You Are</span>
              <h2 className="visit-booking__title">Plan your day at Vimla.</h2>
              <p className="visit-booking__body">
                Tell us a little about your visit and we&rsquo;ll confirm the details &mdash;
                including your fixed pickup point &mdash; by email or phone.
              </p>
              <a href="/book" className="btn btn-primary visit-booking__cta">
                Book Your Experience
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
