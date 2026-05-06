import { useRef } from 'react';
import { navItems } from '../../constants/data';
import { useCursor } from '../../hooks/useCursor';
import { ThemeIcon } from '../ui/ThemeIcon';
import { supportedLanguages } from '../../translations';

export function Navbar({ t, language, setLanguage, theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen, activeSection, scrollToSection }) {
  const cursorRef = useRef(null);
  useCursor(cursorRef);

  return (
    <>
      {/* Custom cursor */}
      <div id="cursor" ref={cursorRef}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="30" height="30" rx="4" fill="var(--charcoal)" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="6" y="22" fontFamily="monospace" fontSize="14" fill="var(--accent)" fontWeight="bold">&lt;/&gt;</text>
        </svg>
      </div>

      <nav id="navbar">
        <a href="#hero" className="nav-logo" onClick={e => scrollToSection(e, '#hero')}>
          danmarquesdev<span>.</span>com
        </a>

        <ul className="nav-links">
          {navItems.map(([href, index]) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={isActive ? 'active' : ''}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={e => scrollToSection(e, href)}
                >
                  {t.nav[index]}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <div className="language-switcher" role="group" aria-label={t.languageAria}>
            {supportedLanguages.map(lang => (
              <button
                key={lang}
                className={`lang-option ${language === lang ? 'active' : ''}`}
                type="button"
                aria-pressed={language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang === 'pt-BR' ? 'PT' : lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === 'dark' ? t.themeDark : t.themeLight}
            aria-pressed={theme === 'dark'}
            onClick={toggleTheme}
          >
            <ThemeIcon />
          </button>

          <a href="mailto:d.silvamarques@proton.me" className="nav-cta">
            {t.hire}
          </a>

          <button
            className="hamburger"
            type="button"
            id="hamburger"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobileMenu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(open => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}
