import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'scale-up';

interface UseScrollAnimationOptions {
  type?: AnimationType;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  childSelector?: string;
}

export function useScrollAnimation<T extends HTMLElement>(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);

  const {
    type = 'fade-up',
    duration = 0.8,
    delay = 0,
    stagger = 0,
    start = 'top 85%',
    childSelector,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = childSelector ? el.querySelectorAll(childSelector) : el;

    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    };

    switch (type) {
      case 'fade-up':
        fromVars = { opacity: 0, y: 40 };
        toVars = { ...toVars, opacity: 1, y: 0 };
        break;
      case 'fade-in':
        fromVars = { opacity: 0 };
        toVars = { ...toVars, opacity: 1, ease: 'power2.out' };
        break;
      case 'slide-left':
        fromVars = { opacity: 0, x: 60 };
        toVars = { ...toVars, opacity: 1, x: 0 };
        break;
      case 'scale-up':
        fromVars = { opacity: 0, scale: 0.9 };
        toVars = { ...toVars, opacity: 1, scale: 1, ease: 'power2.out' };
        break;
    }

    if (stagger > 0) {
      toVars.stagger = stagger;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, toVars);
    }, el);

    return () => ctx.revert();
  }, [type, duration, delay, stagger, start, childSelector]);

  return ref;
}
