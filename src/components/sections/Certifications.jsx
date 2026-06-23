import { ArrowIcon } from '../ui/ArrowIcon';
import { RichText } from '../ui/RichText';
import { certificationItems } from '../../constants/data';

const iconPaths = {
  database: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
      <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.65-2.82 8.85-7 10-4.18-1.15-7-5.35-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-5" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="7" r="3" />
      <circle cx="18" cy="7" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M8.5 9.2l2.1 5.1" />
      <path d="M15.5 9.2l-2.1 5.1" />
      <path d="M9 7h6" />
    </>
  ),
  workflow: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="15" width="6" height="6" rx="1.5" />
      <path d="M10 7h4" />
      <path d="M7 10v2.5c0 1.38 1.12 2.5 2.5 2.5H12" />
      <path d="M17 10v2.5c0 1.38-1.12 2.5-2.5 2.5H12" />
    </>
  ),
  'document-ai': (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M9.5 15.5l1.1-3 1.1 3" />
      <path d="M10 14.5h1.2" />
      <path d="M14 12.5v3" />
      <path d="M17 12l.45.95.95.45-.95.45-.45.95-.45-.95-.95-.45.95-.45z" />
    </>
  ),
  'app-code': (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 9h16" />
      <path d="M9 13l-2 2 2 2" />
      <path d="M15 13l2 2-2 2" />
      <path d="M13 12l-2 6" />
    </>
  ),
  cloud: (
    <>
      <path d="M7.5 18h9.2a4.3 4.3 0 0 0 .8-8.52A6 6 0 0 0 6.2 11.1 3.5 3.5 0 0 0 7.5 18z" />
      <path d="M9 14h6" />
    </>
  ),
  balance: (
    <>
      <path d="M12 4v16" />
      <path d="M5 7h14" />
      <path d="M7 7l-3 6h6z" />
      <path d="M17 7l-3 6h6z" />
      <path d="M8 21h8" />
    </>
  ),
  prompt: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M7 10l3 3-3 3" />
      <path d="M12 16h5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4z" />
      <path d="M18 13l.8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8z" />
      <path d="M6 14l.55 1.45L8 16l-1.45.55L6 18l-.55-1.45L4 16l1.45-.55z" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M8 10a4 4 0 1 1 8 0c0 1.55-.78 2.66-1.65 3.65-.7.79-1.35 1.5-1.35 2.35h-2c0-.85-.65-1.56-1.35-2.35C8.78 12.66 8 11.55 8 10z" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v2" />
    </>
  ),
  code: (
    <>
      <path d="M9 7l-5 5 5 5" />
      <path d="M15 7l5 5-5 5" />
      <path d="M13 5l-2 14" />
    </>
  ),
  spreadsheet: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h16" />
      <path d="M4 14h16" />
      <path d="M10 4v16" />
      <path d="M15 4v16" />
    </>
  ),
  terminal: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M7 10l3 3-3 3" />
      <path d="M12 16h5" />
    </>
  ),
};

function CertificationIcon({ name }) {
  return (
    <svg
      className="certification-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name] || iconPaths.sparkles}
    </svg>
  );
}

function formatIssuedDate(value, language) {
  const [year, month] = value.split('-').map(Number);
  const date = new Date(year, month - 1, 1);

  return new Intl.DateTimeFormat(language, {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function Certifications({ t, language }) {
  const sortedCertifications = certificationItems
    .filter(certification => certification.featured)
    .sort((a, b) => b.issued.localeCompare(a.issued));
  const certificationsCount = t.certificationsCount.replace('{count}', String(sortedCertifications.length).padStart(2, '0'));

  return (
    <section id="certifications">
      <div className="certifications-header">
        <div className="reveal">
          <div className="section-label">{t.certificationsLabel}</div>
          <RichText as="h2" className="certifications-title" html={t.certificationsTitle} />
        </div>
        <div className="certifications-header-meta reveal">
          <p className="certifications-desc">{t.certificationsDesc}</p>
          <div className="certifications-count">{certificationsCount}</div>
        </div>
      </div>

      <div className="certifications-list">
        {sortedCertifications.map((certification, index) => {
          const issuedDate = formatIssuedDate(certification.issued, language);

          return (
            <article className="certification-item reveal" key={`${certification.issuer}-${certification.title}`}>
              <div className="certification-index">
                <div className="certification-num">{String(index + 1).padStart(2, '0')}</div>
                <div className="certification-brand" data-issuer={certification.issuerKey} aria-hidden="true">
                  <CertificationIcon name={certification.icon} />
                </div>
              </div>

              <div className="certification-main">
                <h3 className="certification-name">{certification.title}</h3>
                <div className="certification-meta">
                  <div className="certification-issuer">{certification.issuer}</div>
                  <div className="certification-issued">{t.credentialIssued} {issuedDate}</div>
                  {certification.credentialCode ? (
                    <div className="certification-code-inline">
                      {t.credentialCode}: <strong>{certification.credentialCode}</strong>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="certification-tags" aria-label={certification.title}>
                {certification.tags.map(tag => (
                  <span className="certification-tag" key={tag}>{tag}</span>
                ))}
              </div>

              {certification.credentialUrl ? (
                <a
                  className="certification-link"
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t.credentialView}: ${certification.title}`}
                >
                  <span>{t.credentialView}</span>
                  <ArrowIcon size={16} />
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
