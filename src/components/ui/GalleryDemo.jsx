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
      <img src={imgSrc} alt={altText} loading="lazy" />

      {/* Live Badge at top left of card */}
      <div className="gallery-demo-card-badge">
        <span className="gallery-demo-pulse-dot" />
        <span>{demoTexts.badge}</span>
      </div>

      {/* Studio Tag at top right */}
      <div className="gallery-demo-card-tag">
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
