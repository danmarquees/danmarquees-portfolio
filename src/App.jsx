import { useState } from 'react';

// Hooks
import { useTheme }         from './hooks/useTheme';
import { useLanguage }      from './hooks/useLanguage';
import { useLoader }        from './hooks/useLoader';
import { useScrollSection } from './hooks/useScrollSection';
import { useGitHubStats }   from './hooks/useGitHubStats';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import { useSeo }            from './hooks/useSeo';
import { useReducedMotion }  from './hooks/useReducedMotion';

// Layout
import { Navbar }     from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer }     from './components/layout/Footer';

// UI
import { Loader } from './components/ui/Loader';
import { CookieConsent } from './components/ui/CookieConsent';

// Sections
import { Hero }       from './components/sections/Hero';
import { About }      from './components/sections/About';
import { Education }  from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Projects }   from './components/sections/Projects';
import { Gallery }    from './components/sections/Gallery';
import { Experience } from './components/sections/Experience';
import { GitHub }     from './components/sections/GitHub';
import { Contact }    from './components/sections/Contact';

// Data & translations
import { translations } from './translations';

// Navbar height only (breadcrumb removed)
const HEADER_HEIGHT = 72;

function scrollToSection(event, href, prefersReducedMotion = false) {
  event.preventDefault();
  const target = href === '#' ? document.body : document.querySelector(href);
  if (!target) return;
  window.scrollTo({
    top: href === '#' ? 0 : target.offsetTop - HEADER_HEIGHT,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
}

export default function App() {
  const [theme, toggleTheme]   = useTheme();
  const [language, setLanguage] = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const { loaderHidden, loaderProgress, loaderRef, loaderNameRef } = useLoader(prefersReducedMotion);
  const activeSection           = useScrollSection(loaderHidden);
  const { data: githubStats, isLoading: githubLoading } = useGitHubStats();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useGsapAnimations(loaderHidden, prefersReducedMotion);

  const t = translations[language];
  const handleSectionScroll = (event, href) => scrollToSection(event, href, prefersReducedMotion);
  useSeo(language);

  return (
    <>
      <Loader
        loaderHidden={loaderHidden}
        loaderProgress={loaderProgress}
        loaderRef={loaderRef}
        loaderNameRef={loaderNameRef}
      />

      <Navbar
        t={t}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={handleSectionScroll}
      />

      <MobileMenu
        t={t}
        language={language}
        setLanguage={setLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={handleSectionScroll}
      />

      <Hero       t={t} scrollToSection={handleSectionScroll} />
      <About      t={t} />
      <Education  t={t} />
      <Certifications t={t} language={language} />
      <Projects   t={t} prefersReducedMotion={prefersReducedMotion} />
      <Gallery    t={t} prefersReducedMotion={prefersReducedMotion} />
      <Experience t={t} />
      <GitHub     t={t} githubStats={githubStats} githubLoading={githubLoading} />
      <Contact    t={t} />

      <Footer t={t} language={language} prefersReducedMotion={prefersReducedMotion} />
      <CookieConsent t={t} />
    </>
  );
}
