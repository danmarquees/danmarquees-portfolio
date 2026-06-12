import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function useLoader(prefersReducedMotion) {
  const [loaderProgress, setLoaderProgress] = useState(prefersReducedMotion ? 100 : 0);
  const [loaderHidden, setLoaderHidden] = useState(prefersReducedMotion);
  const loaderRef = useRef(null);
  const loaderNameRef = useRef(null);
  const loaderFinishedRef = useRef(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      loaderFinishedRef.current = true;
      setLoaderProgress(100);
      setLoaderHidden(true);
      return undefined;
    }

    if (loaderFinishedRef.current) return undefined;

    const nameTween = gsap.to(loaderNameRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.1,
    });

    let progress = 0;
    let hideTimeout;
    let exitTween;
    const interval = window.setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        window.clearInterval(interval);
        hideTimeout = window.setTimeout(() => {
          exitTween = gsap.to(loaderRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            onComplete: () => {
              loaderFinishedRef.current = true;
              setLoaderHidden(true);
            },
          });
        }, 300);
      }
      setLoaderProgress(progress);
    }, 60);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(hideTimeout);
      nameTween.kill();
      exitTween?.kill();
    };
  }, [prefersReducedMotion]);

  return { loaderHidden, loaderProgress, loaderRef, loaderNameRef };
}
