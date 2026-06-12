import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDialogFocus } from '../../hooks/useDialogFocus';

export function Lightbox({ items, selectedIndex, onClose, onPrev, onNext, returnFocusElement, t }) {
  const [, category, src, alt] = items[selectedIndex];
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useDialogFocus(dialogRef, closeRef, returnFocusElement);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Keyboard navigation: arrows + Escape
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape')     { e.stopPropagation(); onClose(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault();  onPrev();  }
      if (e.key === 'ArrowRight') { e.preventDefault();  onNext();  }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const isFirst = selectedIndex === 0;
  const isLast  = selectedIndex === items.length - 1;

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.lightbox.close}
      tabIndex={-1}
    >
      {/* Close */}
      <button
        ref={closeRef}
        className="lightbox-close"
        onClick={onClose}
        aria-label={t.lightbox.close}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className="lightbox-nav lightbox-prev"
        onClick={e => { e.stopPropagation(); onPrev(); }}
        aria-label={t.lightbox.prev}
        disabled={isFirst}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image */}
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} className="lightbox-img" />
        <div className="lightbox-footer">
          <span className="lightbox-caption">{alt}</span>
          <span className="lightbox-counter">{selectedIndex + 1} / {items.length}</span>
        </div>
      </div>

      {/* Next */}
      <button
        className="lightbox-nav lightbox-next"
        onClick={e => { e.stopPropagation(); onNext(); }}
        aria-label={t.lightbox.next}
        disabled={isLast}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>,
    document.body
  );
}
