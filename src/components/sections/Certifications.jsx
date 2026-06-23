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
  const sortedCertifications = [...certificationItems].sort((a, b) => b.issued.localeCompare(a.issued));
  const issuerCount = new Set(certificationItems.map(certification => certification.issuer)).size;
  const latestDate = formatIssuedDate(sortedCertifications[0].issued, language);
  const stats = [certificationItems.length, issuerCount, latestDate];

  return (
    <section id="certifications">
      <div className="certifications-header reveal">
        <div>
          <div className="section-label">{t.certificationsLabel}</div>
          <RichText as="h2" className="certifications-title" html={t.certificationsTitle} />
        </div>
        <p className="certifications-desc">{t.certificationsDesc}</p>
      </div>

      <div className="certifications-stats reveal" aria-label={t.certificationsLabel}>
        {stats.map((value, index) => (
          <div className="certification-stat" key={t.certificationsStats[index]}>
            <div className="certification-stat-value">{value}</div>
            <div className="certification-stat-label">{t.certificationsStats[index]}</div>
          </div>
        ))}
      </div>

      <div className="certifications-grid">
        {sortedCertifications.map(certification => {
          const issuedDate = formatIssuedDate(certification.issued, language);

          return (
            <article className="certification-card reveal" key={`${certification.issuer}-${certification.title}`}>
              <div className="certification-card-top">
                <div className="certification-brand" data-issuer={certification.issuerKey} aria-hidden="true">
                  {certification.initials}
                </div>
                <div className="certification-meta">
                  <div className="certification-issuer">{certification.issuer}</div>
                  <div className="certification-issued">{t.credentialIssued} {issuedDate}</div>
                </div>
              </div>

              <h3 className="certification-name">{certification.title}</h3>

              <div className="certification-tags" aria-label={certification.title}>
                {certification.tags.map(tag => (
                  <span className="certification-tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="certification-footer">
                {certification.credentialCode ? (
                  <div className="certification-code">
                    <span>{t.credentialCode}</span>
                    <strong>{certification.credentialCode}</strong>
                  </div>
                ) : (
                  <span aria-hidden="true" />
                )}

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
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
