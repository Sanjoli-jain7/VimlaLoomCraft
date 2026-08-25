import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useReveal } from '../animations/useReveal';
import {
  heritageIntro,
  founderStory,
  historyMilestones,
  philosophy,
  archivalPhotos,
  growthSection,
} from '../data/companyHistory';
import '../styles/heritage-page.css';

function HeritageHero() {
  const ref = useReveal();
  return (
    <section className="heritage-hero" ref={ref}>
      <div className="container heritage-hero__content reveal">
        <span className="eyebrow">{heritageIntro.eyebrow}</span>
        <h1 className="heritage-hero__title">{heritageIntro.headline}</h1>
        <p className="heritage-hero__body">{heritageIntro.body}</p>
      </div>
    </section>
  );
}

function FounderBlock() {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <section className="heritage-founder section" ref={ref}>
      <div className="container heritage-founder__grid">
        <div className="heritage-founder__portraits reveal">
          {founderStory.founders.map((f) => (
            <figure className="heritage-founder__portrait" key={f.image}>
              <img src={f.image} alt={f.alt} loading="lazy" />
              <figcaption>{f.name}</figcaption>
            </figure>
          ))}
        </div>
        <div>
          <span className="eyebrow reveal">{founderStory.eyebrow}</span>
          <h2 className="heritage-founder__title reveal">{founderStory.headline}</h2>
          <p className="heritage-founder__body reveal">{founderStory.body}</p>
        </div>
      </div>
    </section>
  );
}

function MilestonesBlock() {
  const ref = useReveal({ stagger: 0.06 });
  return (
    <section className="heritage-milestones section" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">From There to Here</span>
        <h2 className="heritage-milestones__title reveal">The growth of Vimla International.</h2>

        <ul className="heritage-milestones__list">
          {historyMilestones.map((m) => (
            <li className="heritage-milestone reveal" key={m.year + m.title}>
              <span className="heritage-milestone__year">{m.year}</span>
              <div>
                <span className="heritage-milestone__title">{m.title}</span>
                <p className="heritage-milestone__note">{m.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PhilosophyBlock() {
  const ref = useReveal({ stagger: 0.06 });
  return (
    <section className="heritage-philosophy section" ref={ref}>
      <div className="container">
        <div className="heritage-philosophy__head">
          <span className="eyebrow reveal">{philosophy.eyebrow}</span>
          <h2 className="heritage-philosophy__title reveal">{philosophy.headline}</h2>
          <p className="heritage-philosophy__body reveal">{philosophy.body}</p>
        </div>

        <ul className="heritage-philosophy__grid">
          {philosophy.pillars.map((p, i) => (
            <li className="heritage-philosophy__card reveal" key={p.title}>
              <span className="heritage-philosophy__index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="heritage-philosophy__card-title">{p.title}</h3>
              <p className="heritage-philosophy__card-note">{p.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArchivalBlock() {
  const ref = useReveal({ stagger: 0.05 });
  return (
    <section className="heritage-archive section" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">{archivalPhotos.eyebrow}</span>
        <h2 className="heritage-archive__title reveal">{archivalPhotos.headline}</h2>

        <div className="heritage-archive__strip">
          {archivalPhotos.images.map((img) => (
            <div className="heritage-archive__frame reveal" key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthBlock() {
  const ref = useReveal();
  return (
    <section className="heritage-growth" ref={ref}>
      <img className="heritage-growth__image" src={growthSection.image} alt={growthSection.imageAlt} loading="lazy" />
      <div className="heritage-growth__scrim" aria-hidden="true" />
      <div className="container heritage-growth__content reveal">
        <span className="eyebrow">{growthSection.eyebrow}</span>
        <h2 className="heritage-growth__title">{growthSection.headline}</h2>
        <p className="heritage-growth__body">{growthSection.body}</p>
        <a href="/book" className="btn btn-primary heritage-cta">
          Book Your Experience
        </a>
      </div>
    </section>
  );
}

export default function Experience() {
  return (
    <>
      <Nav />
      <main className="heritage-page">
        <HeritageHero />
        <FounderBlock />
        <MilestonesBlock />
        <PhilosophyBlock />
        <ArchivalBlock />
        <GrowthBlock />
      </main>
      <Footer />
    </>
  );
}
