import { ArrowIcon } from '../ui/ArrowIcon';
import { RichText } from '../ui/RichText';
import { certificationItems } from '../../constants/data';

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
              </div>

              <div className="certification-main">
                <h3 className="certification-name">{certification.title}</h3>
                <p className="certification-summary">
                  {t.certificationDescriptions[certification.id]}
                </p>
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
