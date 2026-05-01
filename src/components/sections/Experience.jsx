import { RichText } from '../ui/RichText';

export function Experience({ t }) {
  return (
    <section id="experience">
      <div className="section-label reveal">{t.experienceLabel}</div>
      <div className="exp-grid">
        <div className="exp-timeline reveal">
          {t.experience.map(([role, company, desc], index) => (
            <div className="exp-item" key={role}>
              <div className="exp-year">{t.years[index]}</div>
              <div className="exp-role">{role}</div>
              <div className="exp-company">{company}</div>
              <div className="exp-desc">{desc}</div>
            </div>
          ))}
        </div>

        <div className="exp-right reveal">
          <RichText as="div" className="exp-big-text" html={t.expBig} />
          <div className="section-label">{t.recognitions}</div>
          <ul className="awards-list">
            {t.awards.map(([name, org, year]) => (
              <li className="award-item" key={name}>
                <div>
                  <div className="award-name">{name}</div>
                  <div className="award-org">{org}</div>
                </div>
                <div className="award-year">{year}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
