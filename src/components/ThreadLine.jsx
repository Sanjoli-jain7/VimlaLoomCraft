import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// The single thread that runs through the visitor journey — literally,
// a weft thread being drawn as you scroll, tying each step together the
// way a single thread runs through an entire rug.
export default function ThreadLine({ trackRef }) {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const track = trackRef.current;
    if (!path || !track) return undefined;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(path, { strokeDashoffset: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      });
    });

    return () => ctx.revert();
  }, [trackRef]);

  return (
    <svg
      className="thread-line"
      viewBox="0 0 4 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M2,0 C2,120 2,180 2,260 C2,340 2,420 2,500 C2,580 2,660 2,740 C2,820 2,900 2,1000"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="2"
      />
    </svg>
  );
}
