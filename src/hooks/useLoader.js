import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function useLoader() {
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const loaderRef = useRef(null);
  const loaderNameRef = useRef(null);

  useEffect(() => {
    gsap.to(loaderNameRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.1,
    });

    let progress = 0;
    const interval = window.setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        window.clearInterval(interval);
        window.setTimeout(() => {
          gsap.to(loaderRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            onComplete: () => setLoaderHidden(true),
          });
        }, 300);
      }
      setLoaderProgress(progress);
    }, 60);

    return () => window.clearInterval(interval);
  }, []);

  return { loaderHidden, loaderProgress, loaderRef, loaderNameRef };
}
