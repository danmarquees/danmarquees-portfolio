import { useState, useRef, useEffect } from 'react';

export function GalleryDemo({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewportMode, setViewportMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const triggerCardRef = useRef(null);

  const demoTexts = t.galleryDemo || {
    badge: 'Live Static Demo',
    title: 'KURA — Arquitetura, Objetos & Espaço Silencioso',
    desc: 'Um estudo editorial de estética wabi-sabi e minimalismo suíço rodando 100% estático com HTML5, Tailwind CSS, simulador solar de 24h, alternância de temas e catálogo interativo.',
    tags: ['HTML5 Estático', 'Tailwind CSS', 'Simulador Solar 24h', 'Dark / Light Mode'],
    urlBar: 'danmarques.dev/demos/kura',
    openTab: 'Abrir em nova aba',
    reload: 'Recarregar demo',
    close: 'Fechar',
    copied: 'Copiado!',
    copyUrl: 'Copiar link',
    desktop: 'Desktop (100%)',
    tablet: 'Tablet (768px)',
    mobile: 'Mobile (390px)',
    hint: 'Interaja diretamente: teste o simulador de luz natural (06h, 12h, 18h, 23h), alterne o tema no topo e abra os modais dos projetos.',
    cardAction: 'Abrir Demo Interativa',
  };

  const handleOpen = () => {
    setIsLoading(true);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    triggerCardRef.current?.focus();
  };

  const handleReload = () => {
    setIsLoading(true);
    setReloadKey(k => k + 1);
  };

  const handleCopyUrl = async () => {
    try {
      const url = `${window.location.origin}/demos/kura/index.html`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Close popup with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* ── CLEAN RESPONSIVE GRID CARD ── */}
      <div
        ref={triggerCardRef}
        className="gallery-item gallery-demo-card g-demo"
        data-cat="web ui"
        role="button"
        tabIndex={0}
        aria-label={`${demoTexts.title} — ${demoTexts.cardAction || 'Abrir Demo'}`}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
          alt="KURA Studio — Arquitetura e Espaço Silencioso"
          loading="lazy"
        />

        {/* Live Badge at top left of card */}
        <div className="gallery-demo-card-badge">
          <span className="gallery-demo-pulse-dot" />
          <span>{demoTexts.badge}</span>
        </div>

        {/* Studio Tag at top right */}
        <div className="gallery-demo-card-tag">
          <span>KURA 04</span>
        </div>

        {/* Overlay on hover */}
        <div className="gallery-overlay">
          <div className="gallery-item-title">{demoTexts.title}</div>
          <div className="gallery-item-cat">Web Dev • UI Design • Simulador Solar 24h</div>

          <div className="gallery-demo-card-action">
            <span className="gallery-demo-action-text">{demoTexts.cardAction || 'Testar Demo Interativa'}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Expand Hint Icon */}
        <div className="gallery-expand-hint gallery-demo-hint" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ── INTERACTIVE POPUP MODAL ── */}
      {isOpen && (
        <div
          className="gallery-popup-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={demoTexts.title}
        >
          <div className="gallery-popup-window">
            {/* Top Browser Bar Chrome */}
            <div className="gallery-popup-bar">
              {/* Window Dots & Info */}
              <div className="gallery-popup-meta">
                <div className="gallery-browser-dots" aria-hidden="true">
                  <span className="gallery-dot dot-close" onClick={handleClose} role="button" title={demoTexts.close || 'Fechar'} />
                  <span className="gallery-dot dot-min" />
                  <span className="gallery-dot dot-max" />
                </div>
                <div className="gallery-popup-title-wrap">
                  <span className="gallery-demo-pulse-dot" />
                  <span className="gallery-popup-title">{demoTexts.title}</span>
                  <span className="gallery-popup-badge">Static HTML Demo</span>
                </div>
              </div>

              {/* Viewport Device Switcher */}
              <div className="gallery-browser-viewports" role="radiogroup" aria-label="Device viewport">
                <button
                  type="button"
                  className={`gallery-viewport-btn ${viewportMode === 'desktop' ? 'active' : ''}`}
                  onClick={() => setViewportMode('desktop')}
                  title={demoTexts.desktop}
                  aria-checked={viewportMode === 'desktop'}
                  role="radio"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span className="gallery-btn-label">Desktop</span>
                </button>

                <button
                  type="button"
                  className={`gallery-viewport-btn ${viewportMode === 'tablet' ? 'active' : ''}`}
                  onClick={() => setViewportMode('tablet')}
                  title={demoTexts.tablet}
                  aria-checked={viewportMode === 'tablet'}
                  role="radio"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <span className="gallery-btn-label">Tablet</span>
                </button>

                <button
                  type="button"
                  className={`gallery-viewport-btn ${viewportMode === 'mobile' ? 'active' : ''}`}
                  onClick={() => setViewportMode('mobile')}
                  title={demoTexts.mobile}
                  aria-checked={viewportMode === 'mobile'}
                  role="radio"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <span className="gallery-btn-label">Mobile</span>
                </button>
              </div>

              {/* Address Bar */}
              <div className="gallery-browser-address-bar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="gallery-lock-icon" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="gallery-address-text">{demoTexts.urlBar}</span>
                <button
                  type="button"
                  className="gallery-copy-btn"
                  onClick={handleCopyUrl}
                  title={demoTexts.copyUrl}
                  aria-label={demoTexts.copyUrl}
                >
                  {copied ? (
                    <span className="gallery-copied-badge">{demoTexts.copied}</span>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Actions: Reload, Open New Tab, Close */}
              <div className="gallery-popup-actions">
                <button
                  type="button"
                  className="gallery-action-btn"
                  onClick={handleReload}
                  title={demoTexts.reload}
                  aria-label={demoTexts.reload}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 4v6h-6" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                </button>

                <a
                  href="/demos/kura/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-action-btn"
                  title={demoTexts.openTab}
                  aria-label={demoTexts.openTab}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                <button
                  type="button"
                  className="gallery-popup-close-btn"
                  onClick={handleClose}
                  title={demoTexts.close || 'Fechar'}
                  aria-label={demoTexts.close || 'Fechar'}
                >
                  <span className="gallery-close-text">{demoTexts.close || 'Fechar'}</span>
                  <kbd className="gallery-kbd">ESC</kbd>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Viewport Stage */}
            <div className="gallery-popup-stage">
              <div className={`gallery-popup-viewport-inner viewport-${viewportMode}`}>
                {isLoading && (
                  <div className="gallery-demo-loader">
                    <div className="gallery-demo-spinner" />
                    <span className="gallery-demo-loading-text">Carregando ambiente KURA...</span>
                  </div>
                )}
                <iframe
                  key={reloadKey}
                  src="/demos/kura/index.html"
                  title="KURA — Arquitetura, Objetos & Espaço Silencioso"
                  className="gallery-popup-iframe"
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="gallery-popup-footer">
              <div className="gallery-popup-hint">
                <span className="gallery-hint-icon">✦</span>
                <span>{demoTexts.hint}</span>
              </div>
              <a
                href="/demos/kura/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-footer-link"
              >
                <span>{demoTexts.openTab}</span>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
