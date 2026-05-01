import { skillGroups } from '../../constants/data';
import { RichText } from '../ui/RichText';

export function About({ t }) {
  return (
    <section id="about">
      <div>
        <div className="section-label reveal">{t.aboutLabel}</div>
        <h2 className="about-title reveal"><RichText html={t.aboutTitle} /></h2>
        <p className="about-text reveal">{t.aboutText}</p>
        <div className="about-stats reveal">
          {[3, 21, 96, 24].map((count, index) => (
            <div className="stat-box" key={t.stats[index]}>
              <div className="stat-num" data-count={count}>0</div>
              <div className="stat-label">{t.stats[index]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-right reveal">
        {skillGroups.map((skills, index) => (
          <div className="skills-group" key={t.skills[index]}>
            <div className="skills-group-title">{t.skills[index]}</div>
            <div className="skills-tags">
              {skills.map(skill => (
                <div className="skill-tag" key={skill}><span>{skill}</span></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
