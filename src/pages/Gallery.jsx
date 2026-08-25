import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useReveal } from '../animations/useReveal';
import { galleryIntro, galleryPhotos, galleryVideos } from '../data/gallery';
import '../styles/gallery-page.css';

function GalleryHero() {
  const ref = useReveal();
  return (
    <section className="gallery-hero" ref={ref}>
      <div className="container reveal">
        <span className="eyebrow">{galleryIntro.eyebrow}</span>
        <h1 className="gallery-hero__title">{galleryIntro.headline}</h1>
        <p className="gallery-hero__body">{galleryIntro.body}</p>
      </div>
    </section>
  );
}

function PhotoGrid() {
  const ref = useReveal({ stagger: 0.04 });
  return (
    <section className="gallery-photos" ref={ref}>
      <div className="container">
        <div className="gallery-grid">
          {galleryPhotos.map((photo, i) => (
            <div
              className="gallery-item reveal"
              key={photo.src}
              style={{ '--gallery-i': i }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="gallery-item__scrim" aria-hidden="true" />
              <span className="gallery-item__caption">{photo.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoGrid() {
  const ref = useReveal({ stagger: 0.06 });
  return (
    <section className="gallery-videos section" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal">In Motion</span>
        <h2 className="gallery-videos__title reveal">Videos from the workshop.</h2>

        {galleryVideos.length > 0 ? (
          <div className="gallery-videos__grid">
            {galleryVideos.map((v) => (
              <div className="gallery-video reveal" key={v.src}>
                <video src={v.src} poster={v.poster} controls preload="none" />
                {v.caption && <p className="gallery-video__caption">{v.caption}</p>}
              </div>
            ))}
          </div>
        ) : (
          <p className="gallery-videos__empty reveal">Videos coming soon.</p>
        )}
      </div>
    </section>
  );
}

export default function Gallery() {
  return (
    <>
      <Nav />
      <main className="gallery-page">
        <GalleryHero />
        <PhotoGrid />
        <VideoGrid />
      </main>
      <Footer />
    </>
  );
}
