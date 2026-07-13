import { GitHubCalendar } from 'react-github-calendar';
import { GithubIcon } from '../ui/GithubIcon';
import { RichText } from '../ui/RichText';

export function GitHub({ t, githubStats, githubLoading }) {
  // We can pass a custom color theme to GitHubCalendar to match the portfolio
  const theme = {
    light: ['rgba(255, 255, 255, 0.05)', 'rgba(0, 71, 255, 0.2)', 'rgba(0, 71, 255, 0.4)', 'rgba(0, 71, 255, 0.65)', 'rgba(0, 71, 255, 0.9)'],
    dark: ['rgba(255, 255, 255, 0.05)', 'rgba(0, 71, 255, 0.2)', 'rgba(0, 71, 255, 0.4)', 'rgba(0, 71, 255, 0.65)', 'rgba(0, 71, 255, 0.9)']
  };

  return (
    <section id="github-section">
      <div className="github-inner">
        <div className="reveal">
          <div className="section-label github-section-label">
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

        <div className="github-data-column reveal">
          <div id="github-stats">
            {[githubStats.repos, githubStats.followers, githubStats.avgCommits, githubStats.since].map((value, index) => (
              <div className="gh-stat" key={t.githubStats[index]}>
                <div className={`gh-num ${githubLoading ? 'skeleton' : ''}`}>
                  {githubLoading ? '' : value}
                </div>
                <div className="gh-label">{t.githubStats[index]}</div>
              </div>
            ))}
          </div>

          <div className="contribution-grid" id="contribGrid">
            <div className="contrib-title">{t.contribTitle}</div>
            <GitHubCalendar 
              username="danmarquees"
              theme={theme}
              colorScheme="dark"
              blockSize={11}
              blockMargin={3}
              fontSize={12}
              hideTotalCount={true}
              hideColorLegend={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
