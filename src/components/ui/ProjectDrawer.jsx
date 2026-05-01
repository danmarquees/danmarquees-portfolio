import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowIcon } from './ArrowIcon';

export function ProjectDrawer({ project, index, t, onClose }) {
  const [name, image, tech, githubUrl] = project;
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Delay focus so the open animation has started
    const timer = setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
      clearTimeout(timer);
    };
  }, [onClose]);

  function handleDiscuss() {
    onClose();
    // Wait for drawer close animation before scrolling
    setTimeout(() => {
      const contact = document.querySelector('#contact');
      if (contact) window.scrollTo({ top: contact.offsetTop - 72, behavior: 'smooth' });
    }, 350);
  }

  return createPortal(
    <>
      {/* Backdrop */}
      <div className="drawer-overlay" onClick={onClose} aria-hidden="true" />

      {/* Drawer panel */}
      <div
        className="project-drawer open"
        role="dialog"
        aria-modal="true"
        aria-label={name}
      >
        <button
          ref={closeRef}
          className="drawer-close"
          onClick={onClose}
          aria-label={t.project.close}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="drawer-num">{String(index + 1).padStart(2, '0')}</div>
        <h3 className="drawer-name">{name}</h3>

        <div className="drawer-img-wrap">
          <img src={image} alt={name} className="drawer-img" />
        </div>

        <p className="drawer-desc">{t.projectDescriptions[index]}</p>

        <div className="drawer-tech">
          {tech.map(item => (
            <span className="tech-badge" key={item}>{item}</span>
          ))}
        </div>

        <div className="drawer-actions">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="drawer-btn drawer-btn-secondary"
            >
              {t.project.github} <ArrowIcon size={13} />
            </a>
          )}
          <button
            type="button"
            className="drawer-btn drawer-btn-primary"
            onClick={handleDiscuss}
          >
            {t.project.discuss} <ArrowIcon size={13} />
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}
