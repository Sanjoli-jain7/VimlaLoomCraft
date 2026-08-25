import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import EditorialImage from './EditorialImage';
import ScallopTop from './ScallopTop';
import '../styles/arch-doorway.css';

export default function ArchDoorway({ visitor, onSelect }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;

    const image = el.querySelector('.arch-doorway__image');
    const frame = el.querySelector('.arch-doorway__frame');
    const label = el.querySelector('.arch-doorway__label');
    const enter = el.querySelector('.arch-doorway__enter');

    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out', duration: 0.7 } });
    tl.to(image, { scale: 1.06 }, 0)
      .to(frame, { boxShadow: '0 0 0 1px var(--color-brass), 0 30px 60px rgba(23,30,51,0.35)' }, 0)
      .to(label, { y: -4 }, 0)
      .to(enter, { opacity: 1, y: 0 }, 0);

    const play = () => tl.play();
    const reverse = () => tl.reverse();

    el.addEventListener('mouseenter', play);
    el.addEventListener('mouseleave', reverse);
    el.addEventListener('focusin', play);
    el.addEventListener('focusout', reverse);

    return () => {
      el.removeEventListener('mouseenter', play);
      el.removeEventListener('mouseleave', reverse);
      el.removeEventListener('focusin', play);
      el.removeEventListener('focusout', reverse);
      tl.kill();
    };
  }, []);

  return (
    <button
      className="arch-doorway"
      ref={rootRef}
      onClick={() => onSelect(visitor.key, rootRef.current)}
      aria-label={`Enter as a ${visitor.label}`}
    >
      <ScallopTop className="arch-doorway__scallop" />
      <span className="arch-doorway__frame">
        <EditorialImage
          className="arch-doorway__image"
          src={visitor.image}
          alt={visitor.imageAlt}
        />
        <span className="arch-doorway__scrim" aria-hidden="true" />
      </span>

      <span className="arch-doorway__label">{visitor.label}</span>
      <span className="arch-doorway__line">{visitor.line}</span>
      <span className="arch-doorway__enter">Enter →</span>
    </button>
  );
}
