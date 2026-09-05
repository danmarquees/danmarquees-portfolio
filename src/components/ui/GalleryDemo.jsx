export function GalleryDemo({ t, variant = 'kura' }) {
  const isDada = variant === 'dada';

  const demoTexts = isDada
    ? (t.galleryDemoDada || {
        badge: 'Live Static Demo',
        title: 'ATELIER DADA — Manifesto & Estúdio de Colagem',
        category: 'Web Dev • UI Design • Ateliê Interativo',
        cardAction: 'Abrir Demo em Nova Aba',
      })
    : (t.galleryDemo || {
        badge: 'Live Static Demo',
        title: 'KURA — Arquitetura, Objetos & Espaço Silencioso',
        category: 'Web Dev • UI Design • Simulador Solar 24h',
        cardAction: 'Abrir Demo em Nova Aba',
      });

  const href = isDada ? '/demos/dada/index.html' : '/demos/kura/index.html';
  const imgSrc = isDada
    ? 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=85'
    : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85';
  const altText = isDada
    ? 'ATELIER DADA — Manifesto & Estúdio de Colagem Visual'
    : 'KURA Studio — Arquitetura e Espaço Silencioso';
  const tagText = isDada ? 'DADA 74' : 'KURA 04';
  const dataCat = isDada ? 'web brand ui' : 'web ui';
  const spanClass = isDada ? 'g-demo g-demo-dada demo-card-dada' : 'g-demo g-demo-kura';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`gallery-item gallery-demo-card ${spanClass}`}
      data-cat={dataCat}
      aria-label={`${demoTexts.title} — ${demoTexts.cardAction || 'Abrir Demo em Nova Aba'}`}
    >
      {isDada ? (
        /* ── DADA COLLAGE ART CARD COMPOSITION ── */
        <div className="dada-collage-stage">
          {/* Halftone texture overlay */}
          <div className="dada-halftone-layer" aria-hidden="true" />

          {/* Technical drafting marks on kraft paper */}
          <div className="dada-paper-marks" aria-hidden="true">
            <span>[ MATRIZ ANALÓGICA // 1916-2026 ]</span>
            <span>FIG. 04</span>
          </div>

          {/* Floating Washi Tapes */}
          <div className="dada-washi-tape tape-tl" aria-hidden="true" />
          <div className="dada-washi-tape tape-tr washi-tape-red" aria-hidden="true" />
          <div className="dada-washi-tape tape-br washi-tape-blue" aria-hidden="true" />

          {/* Central Polaroid / Art Piece */}
          <div className="dada-polaroid-frame">
            <div className="dada-polaroid-inner">
              <img src={imgSrc} alt={altText} loading="lazy" />

              {/* Pop Neon Censorship Bar */}
              <div className="dada-censor-bar">
                <span>VERDADE PURA</span>
              </div>

              {/* Vintage Cutout Year Tag */}
              <div className="dada-vintage-tag">
                [ 1916 × 2026 ]
              </div>
            </div>

            <div className="dada-polaroid-caption">
              <span className="dada-caption-title">DAVID REBUILT #04</span>
              <span className="dada-caption-type">✂ ORIGINAL</span>
            </div>
          </div>

          {/* Floating Cutout: Botanical Specimen (1892) */}
          <div className="dada-floating-sticker dada-sticker-flower" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="dada-flower-svg">
              <path d="M50 85 Q45 50 50 15" stroke="#2d6a4f" strokeWidth="4" fill="none"/>
              <circle cx="50" cy="20" r="14" fill="#e63946" stroke="#141210" strokeWidth="2"/>
              <ellipse cx="38" cy="22" rx="10" ry="6" fill="#f4a261" stroke="#141210" strokeWidth="1.5"/>
              <ellipse cx="62" cy="22" rx="10" ry="6" fill="#f4a261" stroke="#141210" strokeWidth="1.5"/>
              <ellipse cx="50" cy="10" rx="6" ry="10" fill="#f4a261" stroke="#141210" strokeWidth="1.5"/>
              <path d="M48 60 Q30 55 35 45 Q45 50 49 55" fill="#52b788" stroke="#141210" strokeWidth="1.5"/>
              <path d="M52 45 Q70 40 65 30 Q55 35 51 40" fill="#52b788" stroke="#141210" strokeWidth="1.5"/>
            </svg>
            <span className="dada-flower-label">FLORA 1892</span>
          </div>

          {/* Floating Stamp Seal */}
          <div className="dada-stamp-seal" aria-hidden="true">
            <span>COLLECTION</span>
            <strong>N° 74</strong>
            <span>ARCHIVE</span>
          </div>

          {/* Metal Paperclip */}
          <div className="dada-paperclip" aria-hidden="true" />
        </div>
      ) : (
        /* ── CLEAN ARCHITECTURAL DEMO CARD (KURA) ── */
        <img src={imgSrc} alt={altText} loading="lazy" />
      )}

      {/* Live Badge at top left of card */}
      <div className={`gallery-demo-card-badge ${isDada ? 'dada-badge' : ''}`}>
        <span className="gallery-demo-pulse-dot" />
        <span>{demoTexts.badge}</span>
      </div>

      {/* Studio Tag at top right */}
      <div className={`gallery-demo-card-tag ${isDada ? 'dada-tag' : ''}`}>
        <span>{tagText}</span>
      </div>

      {/* Overlay on hover */}
      <div className="gallery-overlay">
        <div className="gallery-item-title">{demoTexts.title}</div>
        <div className="gallery-item-cat">{demoTexts.category}</div>

        <div className="gallery-demo-card-action">
          <span className="gallery-demo-action-text">{demoTexts.cardAction || 'Abrir Demo em Nova Aba'}</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M1 13L13 1M13 1H4M13 1V10" />
          </svg>
        </div>
      </div>

      {/* External Link Hint Icon */}
      <div className="gallery-expand-hint gallery-demo-hint" aria-hidden="true">
        <svg
          width="15"
          height="15"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 13L13 1M13 1H4M13 1V10" />
        </svg>
      </div>
    </a>
  );
}
