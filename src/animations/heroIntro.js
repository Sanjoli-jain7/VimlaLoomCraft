import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// A single quiet entrance timeline: the architectural frame settles,
// the image reveals from behind a shutter, then the type rises in.
export function useHeroIntro() {
  const scope = useRef(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      if (prefersReducedMotion) {
        gsap.set(
          ['.hero-frame', '.hero-shutter', '.hero-eyebrow', '.hero-headline .word', '.hero-sub', '.hero-actions', '.hero-scroll-cue'],
          { clearProps: 'all' }
        );
        return;
      }

      tl.set('.hero-frame', { opacity: 1 })
        .to('.hero-shutter', {
          scaleX: 0,
          transformOrigin: 'right center',
          duration: 1.4,
          ease: 'power4.inOut',
        })
        .from(
          '.hero-headline .word',
          { yPercent: 120, opacity: 0, duration: 1, stagger: 0.08 },
          '-=0.9'
        )
        .from('.hero-eyebrow', { opacity: 0, y: 10, duration: 0.7 }, '-=0.8')
        .from('.hero-sub', { opacity: 0, y: 14, duration: 0.8 }, '-=0.6')
        .from('.hero-actions', { opacity: 0, y: 14, duration: 0.8 }, '-=0.55')
        .from('.hero-scroll-cue', { opacity: 0, duration: 1 }, '-=0.3');
    }, el);

    return () => ctx.revert();
  }, []);

  return scope;
}
