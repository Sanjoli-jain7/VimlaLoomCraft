import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useReveal } from '../animations/useReveal';
import {
  heroContent,
  threadStages,
  rawMaterials,
  palette,
  artisanGallery,
  handToHome,
  customCraft,
  finalCta,
} from '../data/craftExhibition';
import '../styles/craft-exhibition.css';

/* ============ 1. HERO ============ */
function Hero() {
  return (
    <section className="exh-hero">
      <img className="exh-hero__image" src={heroContent.image} alt={heroContent.imageAlt} fetchpriority="high" />
      <div className="exh-hero__scrim" aria-hidden="true" />
      <div className="exh-hero__top">
        <span className="exh-hero__eyebrow">{heroContent.eyebrow}</span>
        <h1 className="exh-hero__title">{heroContent.title}</h1>
        <p className="exh-hero__line">{heroContent.line}</p>
      </div>
      <div className="exh-hero__cue">
        <span>{heroContent.cue}</span>
        <span className="exh-hero__cue-line" aria-hidden="true" />
      </div>
    </section>
  );
}

/* ============ 2. THE THREAD ============ */
function TheThread() {
  const ref = useReveal({ stagger: 0.05 });

  return (
    <section className="exh-thread" ref={ref}>
      <div className="container exh-thread__head reveal">
        <span className="exh-eyebrow">The Thread</span>
        <h2 className="exh-thread__title">Six stages. One continuous thread.</h2>
      </div>
      <div className="container">
        <div className="exh-thread-strip">
          <span className="exh-thread-strip__line" aria-hidden="true" />
          {threadStages.map((stage) => (
            <div className="exh-thread-tile reveal" key={stage.order}>
              <span className="exh-thread-tile__dot" aria-hidden="true" />
              <div className="exh-thread-tile__image">
                <img src={stage.image} alt={stage.imageAlt} loading="lazy" />
              </div>
              <span className="exh-thread-tile__order">{stage.order}</span>
              <h3 className="exh-thread-tile__name">{stage.name}</h3>
              <p className="exh-thread-tile__note">{stage.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 3. RAW MATERIALS ============ */
const swatchPositions = [
  { top: '2%', left: '4%', rotate: '-4deg' },
  { top: '10%', left: '26%', rotate: '3deg' },
  { top: '0%', left: '50%', rotate: '-2deg' },
  { top: '14%', left: '72%', rotate: '4deg' },
  { top: '32%', left: '16%', rotate: '5deg' },
];

function RawMaterials() {
  const ref = useReveal({ stagger: 0.07 });
  return (
    <section className="exh-materials" ref={ref}>
      <div className="container">
        <div className="exh-materials__head">
          <span className="exh-eyebrow reveal">Before the Loom</span>
          <h2 className="exh-materials__title reveal">The raw materials.</h2>
        </div>
        <div className="exh-materials__table">
          {rawMaterials.map((m, i) => {
            const pos = swatchPositions[i] || swatchPositions[0];
            return (
              <div
                className="exh-swatch reveal"
                key={m.name}
                tabIndex={0}
                style={{ top: pos.top, left: pos.left, transform: `rotate(${pos.rotate})`, zIndex: i + 1 }}
              >
                <div className="exh-swatch__media">
                  {m.image ? (
                    <img src={m.image} alt={m.name} loading="lazy" />
                  ) : (
                    <div className="exh-swatch__placeholder">Photograph coming soon</div>
                  )}
                  <div className="exh-swatch__label">
                    <span className="exh-swatch__name">{m.name}</span>
                    <span className="exh-swatch__line">{m.line}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ 4. THE PALETTE ============ */
function ThePalette() {
  const ref = useReveal();
  return (
    <section className="exh-palette" ref={ref}>
      <div className="container">
        <div className="exh-palette__head reveal">
          <span className="exh-eyebrow exh-eyebrow--light">The Palette of Rajasthan</span>
          <h2 className="exh-palette__title">A colour journey.</h2>
        </div>
        <div className="exh-palette__strip reveal">
          {palette.map((c) => (
            <div className="exh-swatch-bar" key={c.name} tabIndex={0} style={{ background: c.hex }}>
              <span className="exh-swatch-bar__name">{c.name}</span>
              <div className="exh-swatch-bar__reveal">
                <span className="exh-swatch-bar__reveal-name">{c.name}</span>
                <span className="exh-swatch-bar__origin">{c.origin}</span>
                <p className="exh-swatch-bar__note">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 6. MEET THE HANDS ============ */
function MeetTheHands() {
  const ref = useReveal({ stagger: 0.06 });
  return (
    <section className="exh-hands" ref={ref}>
      <div className="container">
        <div className="exh-hands__head">
          <span className="exh-eyebrow reveal">Meet the Hands</span>
          <h2 className="exh-hands__title reveal">Craft is learned by watching.</h2>
        </div>
        <div className="exh-hands__strip">
          {artisanGallery.map((a) => (
            <div className="exh-hand-card reveal" key={a.image}>
              <div className="exh-hand-card__image">
                <img src={a.image} alt={a.alt} loading="lazy" />
              </div>
              <p className="exh-hand-card__caption">{a.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 8. FROM HAND TO HOME ============ */
function HandToHome() {
  const ref = useReveal({ stagger: 0.07 });
  return (
    <section className="exh-h2h" ref={ref}>
      <div className="container">
        <h2 className="exh-h2h__title reveal">
          <span>Thread</span>
          <span className="exh-h2h__arrow">&#8594;</span>
          <span>Weave</span>
          <span className="exh-h2h__arrow">&#8594;</span>
          <span>Object</span>
          <span className="exh-h2h__arrow">&#8594;</span>
          <span>Home</span>
        </h2>
        <div className="exh-h2h__grid">
          {handToHome.map((item) => (
            <div className="exh-h2h__item reveal" key={item.label}>
              <div className="exh-h2h__image">
                <img src={item.image} alt={item.label} loading="lazy" />
              </div>
              <p className="exh-h2h__label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 9. CUSTOM CRAFT ============ */
function CustomCraft() {
  const ref = useReveal();
  return (
    <section className="exh-custom" ref={ref}>
      <div className="container exh-custom__inner reveal">
        <span className="exh-eyebrow exh-eyebrow--light">{customCraft.eyebrow}</span>
        <h2 className="exh-custom__title">{customCraft.title}</h2>
        <p className="exh-custom__body">{customCraft.body}</p>
        <div className="exh-custom__aspects">
          {customCraft.aspects.map((a) => (
            <span className="exh-custom__aspect" key={a}>
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 10. FINAL CTA ============ */
function FinalCta() {
  const ref = useReveal();
  return (
    <section className="exh-final" ref={ref}>
      <img className="exh-final__image" src={finalCta.image} alt="" loading="lazy" />
      <div className="exh-final__scrim" aria-hidden="true" />
      <div className="exh-final__content reveal">
        <h2 className="exh-final__title">{finalCta.title}</h2>
        <p className="exh-final__body">{finalCta.body}</p>
        <div className="exh-final__actions">
          <a href={finalCta.primaryCta.href} className="btn btn-primary">
            {finalCta.primaryCta.label}
          </a>
          <a href={finalCta.secondaryCta.href} className="btn btn-outline">
            {finalCta.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Craft() {
  return (
    <>
      <Nav />
      <main className="exh-page">
        <Hero />
        <TheThread />
        <RawMaterials />
        <ThePalette />
        <MeetTheHands />
        <HandToHome />
        <CustomCraft />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
