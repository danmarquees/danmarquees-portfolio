import { useMemo } from 'react';

// Hooks
import { useTheme }         from './hooks/useTheme';
import { useLanguage }      from './hooks/useLanguage';
import { useLoader }        from './hooks/useLoader';
import { useScrollSection } from './hooks/useScrollSection';
import { useGitHubStats }   from './hooks/useGitHubStats';
import { useGsapAnimations } from './hooks/useGsapAnimations';

// Layout
import { Navbar }     from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Breadcrumb } from './components/layout/Breadcrumb';
import { Footer }     from './components/layout/Footer';

// UI
import { Loader } from './components/ui/Loader';

// Sections
import { Hero }       from './components/sections/Hero';
import { About }      from './components/sections/About';
import { Projects }   from './components/sections/Projects';
import { Gallery }    from './components/sections/Gallery';
import { Experience } from './components/sections/Experience';
import { GitHub }     from './components/sections/GitHub';
import { Contact }    from './components/sections/Contact';

// Data & translations
import { breadcrumbSections } from './constants/data';
import { translations }       from './translations';

function scrollToSection(event, href) {
  event.preventDefault();
  const target = href === '#' ? document.body : document.querySelector(href);
  if (!target) return;
  window.scrollTo({ top: href === '#' ? 0 : target.offsetTop - 72, behavior: 'smooth' });
}

export default function App() {
  const [theme, toggleTheme]   = useTheme();
  const [language, setLanguage] = useLanguage();
  const { loaderHidden, loaderProgress, loaderRef, loaderNameRef } = useLoader();
  const activeSection           = useScrollSection(loaderHidden);
  const githubStats             = useGitHubStats();

  useGsapAnimations(loaderHidden);

  const t = translations[language];

  // Deterministic contribution grid — computed once per mount
  const contributionRows = useMemo(() => {
    const levels = ['', 'l1', 'l2', 'l3', 'l4'];
    return Array.from({ length: 7 }, (_, row) =>
      Array.from({ length: 30 }, (_, col) => levels[(row * 11 + col * 7 + col) % levels.length])
    );
  }, []);

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
        scrollToSection={scrollToSection}
      />

      <MobileMenu
        t={t}
        language={language}
        setLanguage={setLanguage}
        scrollToSection={scrollToSection}
      />

      <Breadcrumb
        sections={breadcrumbSections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <Hero       t={t} scrollToSection={scrollToSection} />
      <About      t={t} />
      <Projects   t={t} scrollToSection={scrollToSection} />
      <Gallery    t={t} />
      <Experience t={t} />
      <GitHub     t={t} githubStats={githubStats} contributionRows={contributionRows} />
      <Contact    t={t} />

      <Footer t={t} />
    </>
  );
}
