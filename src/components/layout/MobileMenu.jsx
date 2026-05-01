import { useEffect } from 'react';
import { navItems } from '../../constants/data';
import { supportedLanguages } from '../../translations';

export function MobileMenu({ t, language, setLanguage, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  // Close on Escape key or when viewport becomes desktop-sized
  useEffect(() => {
    const closeOnEscape = e => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    const closeOnDesktop = () => { if (window.innerWidth > 768) setMobileMenuOpen(false); };

    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [setMobileMenuOpen]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [mobileMenuOpen]);

  // Move focus to first menu link when opened (keyboard accessibility)
  useEffect(() => {
    if (mobileMenuOpen) {
      const firstLink = document.querySelector('#mobileMenu a');
      firstLink?.focus();
    }
  }, [mobileMenuOpen]);

  return (
    <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
      <div className="mobile-menu-controls">
        <div
          className="language-switcher mobile-language-switcher"
          role="group"
          aria-label={t.languageAria}
        >
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
      </div>

      {navItems.map(([href, index]) => (
        <a key={href} href={href} onClick={e => { setMobileMenuOpen(false); scrollToSection(e, href); }}>
          {t.nav[index]}
        </a>
      ))}

      <a href="mailto:d.silvamarques@proton.me" onClick={() => setMobileMenuOpen(false)}>{t.hireArrow}</a>
    </div>
  );
}
