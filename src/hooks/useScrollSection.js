import { useEffect, useState } from 'react';
import { breadcrumbSections } from '../constants/data';

export function useScrollSection(loaderHidden) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (!loaderHidden) return;

    const handleScroll = () => {
      let current = 'hero';
      breadcrumbSections.forEach(([id]) => {
        const element = document.querySelector(id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = id.slice(1);
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loaderHidden]);

  return activeSection;
}
