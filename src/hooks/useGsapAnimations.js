import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations(loaderHidden, prefersReducedMotion) {
  useEffect(() => {
    if (!loaderHidden) return;

    if (prefersReducedMotion) {
      gsap.set('.reveal', { opacity: 1, y: 0 });
      gsap.set('.gallery-item', { opacity: 1, y: 0 });
      document.querySelectorAll('[data-count]').forEach(element => {
        element.textContent = `${element.dataset.count}+`;
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      // ── Hero title lines ──────────────────────────────────────
      gsap.from('.title-line', {
        yPercent: 110,
        stagger: 0.12,
        duration: 1,
        ease: 'power4.out',
      });

      // ── Scroll-reveal elements ────────────────────────────────
      document.querySelectorAll('.reveal').forEach(el => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });

      // ── Counting numbers ──────────────────────────────────────
      document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count, 10);
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: target,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate() {
                el.textContent = `${Math.floor(this.targets()[0].val)}+`;
              },
            });
          },
        });
      });

      // ── Gallery entrance ──────────────────────────────────────
      gsap.from('.gallery-item', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#galleryGrid',
          start: 'top 80%',
        },
      });

      // ── Navbar shadow on scroll ───────────────────────────────
      ScrollTrigger.create({
        start: 100,
        onUpdate: self => {
          const nav = document.getElementById('navbar');
          if (nav) {
            nav.style.boxShadow = self.progress > 0
              ? '0 4px 40px var(--nav-shadow)'
              : 'none';
          }
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loaderHidden, prefersReducedMotion]);
}
