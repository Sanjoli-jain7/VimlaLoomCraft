import { siteConfig } from '../data/siteConfig';
import { useHeroIntro } from '../animations/heroIntro';
import '../styles/hero.css';

export default function Hero() {
  const scope = useHeroIntro();
  const { hero } = siteConfig;
  const words = hero.headline.split(' ');

  return (
    <section className="hero" ref={scope}>
      <div className="hero-frame">
        <img
          className="hero__image"
          src={hero.image}
          alt={hero.imageAlt}
          fetchpriority="high"
        />
        <div className="hero-shutter" aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <svg className="hero-flourish hero-flourish--tl" viewBox="0 0 90 90" aria-hidden="true">
          <path d="M4 4 h34 M4 4 v34" fill="none" />
          <path d="M4 24 q0 -20 20 -20" fill="none" />
          <circle cx="4" cy="4" r="3" />
        </svg>
        <svg className="hero-flourish hero-flourish--tr" viewBox="0 0 90 90" aria-hidden="true">
          <path d="M86 4 h-34 M86 4 v34" fill="none" />
          <path d="M86 24 q0 -20 -20 -20" fill="none" />
          <circle cx="86" cy="4" r="3" />
        </svg>
      </div>

      <div className="hero__content container">
        <span className="hero-eyebrow eyebrow">{hero.eyebrow}</span>
        <h1 className="hero-headline">
          {words.map((word, i) => (
            <span className="word-wrap" key={i}>
              <span className="word">{word}</span>
            </span>
          ))}
        </h1>
        <p className="hero-sub">{hero.subheading}</p>
        <div className="hero-actions">
          <a href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-outline hero__secondary">
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span className="hero-scroll-cue__line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
