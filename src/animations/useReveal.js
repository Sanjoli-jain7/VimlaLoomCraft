import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Attach to a section wrapper. Any descendant with class "reveal" fades
// and lifts into place, staggered, as the section enters the viewport.
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const targets = el.querySelectorAll('.reveal');
    if (!targets.length) return undefined;

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: options.stagger ?? 0.12,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 78%',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [options.stagger, options.start]);

  return ref;
}
