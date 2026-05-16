import { ArrowIcon } from '../ui/ArrowIcon';
import { RichText } from '../ui/RichText';

export function Education({ t }) {
  return (
    <section id="education">
      <div className="education-intro reveal">
        <div className="section-label">{t.educationLabel}</div>
        <RichText as="h2" className="education-title" html={t.educationTitle} />
        <p className="education-desc">{t.educationDesc}</p>

        <a
          href="/assets/resume-dan-marques.pdf"
          className="education-resume-link"
          download="Dan_Marques_Resume.pdf"
          onClick={() => {
            if (typeof window !== 'undefined') {
              if (window.gtag) {
                window.gtag('event', 'download_resume', { event_category: 'engagement' });
              } else if (window.va) {
                window.va('event', { name: 'download_resume' });
              }
            }
          }}
        >
          <span>{t.educationResume}</span>
          <ArrowIcon size={18} />
        </a>
      </div>

      <div className="education-body reveal">
        <article className="education-main">
          <div className="education-period">{t.education.period}</div>
          <div className="education-degree">{t.education.degree}</div>
          <div className="education-school">{t.education.school}</div>
          <p>{t.education.summary}</p>
        </article>

        <div className="academic-activities">
          {t.academicActivities.map(([title, desc, tag]) => (
            <article className="academic-card" key={title}>
              <div className="academic-card-top">
                <h3>{title}</h3>
                <span>{tag}</span>
              </div>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
