import { storySection } from '../data/sections';
import { useReveal } from '../animations/useReveal';
import '../styles/story.css';

export default function StorySection() {
  const ref = useReveal();

  return (
    <section className="story section" ref={ref}>
      <div className="grain" aria-hidden="true" />
      <div className="container story__grid">
        <div className="story__image reveal">
          <img src={storySection.image} alt={storySection.imageAlt} loading="lazy" />
        </div>
        <div className="story__text">
          <span className="eyebrow reveal">{storySection.eyebrow}</span>
          <h2 className="story__headline">
            <span className="reveal">{storySection.headlineTop}</span>
            <span className="reveal story__headline--accent">
              {storySection.headlineBottom}
            </span>
          </h2>
          {storySection.body.map((line, i) => (
            <p className="story__para reveal" key={i}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
