import { useEffect, useRef, useState } from 'react';

export interface UseInViewOptions {
  trigger?: 'scroll' | 'mount';
  threshold?: number;
  exitThreshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView<T extends HTMLElement>({
  trigger = 'scroll',
  threshold = 0.15,
  exitThreshold,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const resolvedExitThreshold = exitThreshold ?? threshold * 0.4;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || trigger === 'mount') {
      setIsInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        if (ratio >= threshold) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once && ratio <= resolvedExitThreshold) {
          setIsInView(false);
        }
      },
      { threshold: [0, resolvedExitThreshold, threshold, 1], rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger, threshold, resolvedExitThreshold, rootMargin, once]);

  return { ref, isInView };
}
