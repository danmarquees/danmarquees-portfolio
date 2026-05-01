import { GithubIcon } from '../ui/GithubIcon';
import { RichText } from '../ui/RichText';

export function GitHub({ t, githubStats, contributionRows }) {
  return (
    <section id="github-section">
      <div className="github-inner">
        <div className="reveal">
          <div className="section-label" style={{ color: 'rgba(245,240,232,0.4)' }}>
            {t.githubLabel}
          </div>
          <RichText as="h2" className="github-title" html={t.githubTitle} />
          <p className="github-desc">{t.githubDesc}</p>
          <a
            href="https://github.com/danmarquees"
            target="_blank"
            className="github-btn"
            rel="noreferrer"
          >
            <GithubIcon /> {t.githubCta}
          </a>
        </div>

        <div className="reveal">
          <div id="github-stats">
            {[githubStats.repos, githubStats.followers, 'BR', githubStats.since].map((value, index) => (
              <div className="gh-stat" key={t.githubStats[index]}>
                <div className="gh-num">{value}</div>
                <div className="gh-label">{t.githubStats[index]}</div>
              </div>
            ))}
          </div>

          <div className="contribution-grid" id="contribGrid">
            <div className="contrib-title">{t.contribTitle}</div>
            {contributionRows.map((row, rowIndex) => (
              <div className="contrib-row" key={rowIndex}>
                {row.map((level, cellIndex) => (
                  <div className={`contrib-cell ${level}`} key={cellIndex} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
