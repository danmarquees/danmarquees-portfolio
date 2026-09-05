import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { galleryItems, filterKeys } from '../../constants/data';
import { RichText } from '../ui/RichText';
import { Lightbox } from '../ui/Lightbox';
import { GalleryDemo } from '../ui/GalleryDemo';

export function Gallery({ t, prefersReducedMotion }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lightboxTriggerRef = useRef(null);

  const isDemoActive = activeFilter === 'all' || activeFilter === 'web' || activeFilter === 'ui';

  useEffect(() => {
    document.querySelectorAll('.gallery-item').forEach(item => {
      const cats = item.dataset.cat ? item.dataset.cat.split(' ') : [];
      const show = activeFilter === 'all' || cats.includes(activeFilter);
      gsap.killTweensOf(item);
      if (prefersReducedMotion) {
        gsap.set(item, { opacity: show ? 1 : 0.2, scale: 1 });
      } else {
        gsap.to(item, { opacity: show ? 1 : 0.2, scale: show ? 1 : 0.97, duration: 0.3 });
      }
    });
  }, [activeFilter, prefersReducedMotion]);

  const openLightbox  = (index, trigger) => {
    lightboxTriggerRef.current = trigger;
    setLightboxIndex(index);
  };
  const closeLightbox = ()    => setLightboxIndex(null);
  const prevImage     = ()    => setLightboxIndex(i => Math.max(0, i - 1));
  const nextImage     = ()    => setLightboxIndex(i => Math.min(galleryItems.length - 1, i + 1));

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          items={galleryItems}
          selectedIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          returnFocusElement={lightboxTriggerRef.current}
          t={t}
        />
      )}

      <section id="gallery">
        <div className="gallery-header">
          <div>
            <div className="section-label reveal">{t.galleryLabel}</div>
            <RichText as="h2" className="gallery-title reveal" html={t.galleryTitle} />
          </div>
          <p className="gallery-desc reveal">{t.galleryDesc}</p>
        </div>

        <div className="gallery-filters reveal">
          {filterKeys.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              data-filter={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {t.filters[filter]}
            </button>
          ))}
        </div>

        <div className="gallery-grid" id="galleryGrid">
          {/* Live Static Demo directly inside the image grid */}
          <GalleryDemo
            t={t}
            isFilterActive={isDemoActive}
            prefersReducedMotion={prefersReducedMotion}
          />

          {galleryItems.map(([span, category, src, alt], index) => (
            <div
              className={`gallery-item ${span}`}
              data-cat={category}
              key={src}
              role="button"
              tabIndex={0}
              aria-label={`${t.galleryItems[index]} — ${t.lightbox.close}`}
              onClick={e => openLightbox(index, e.currentTarget)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index, e.currentTarget);
                }
              }}
            >
              <img src={src} alt={t.galleryItems[index]} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-item-title">{t.galleryItems[index]}</div>
                <div className="gallery-item-cat">{t.filters[category]}</div>
              </div>
              {/* Expand hint icon */}
              <div className="gallery-expand-hint" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 2h4v4M6 14H2v-4M14 2l-5 5M2 14l5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
