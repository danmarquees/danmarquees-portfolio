import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { galleryItems, filterKeys } from '../../constants/data';
import { RichText } from '../ui/RichText';

export function Gallery({ t }) {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.querySelectorAll('.gallery-item').forEach(item => {
      const show = activeFilter === 'all' || item.dataset.cat === activeFilter;
      gsap.to(item, { opacity: show ? 1 : 0.2, scale: show ? 1 : 0.97, duration: 0.3 });
    });
  }, [activeFilter]);

  return (
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
        {galleryItems.map(([span, category, src, alt], index) => (
          <div
            className={`gallery-item ${span}`}
            data-cat={category}
            key={src}
            role="img"
            aria-label={`${t.galleryItems[index]} - ${t.filters[category]}`}
          >
            <img src={src} alt={t.galleryItems[index]} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-item-title">{t.galleryItems[index]}</div>
              <div className="gallery-item-cat">{t.filters[category]}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
