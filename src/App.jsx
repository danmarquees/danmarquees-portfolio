import React, { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { supportedLanguages, translations } from './translations';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  ['#about', 0],
  ['#projects', 1],
  ['#gallery', 2],
  ['#experience', 3],
  ['#contact', 4]
];

const marqueeItems = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'GSAP', 'Tailwind CSS',
  'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Figma', 'Python'
];

const skillGroups = [
  ['React', 'Next.js', 'TypeScript', 'GSAP', 'Tailwind', 'Three.js'],
  ['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL', 'REST APIs'],
  ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Vercel'],
  ['Figma', 'Git', 'Postman', 'VS Code', 'Linux']
];

const projects = [
  ['NexCommerce', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', ['Next.js', 'Stripe', 'MongoDB']],
  ['Lumina Dashboard', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80', ['React', 'D3.js', 'WebSocket']],
  ['PixelForge Studio', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', ['Canvas API', 'WebGL', 'GSAP']],
  ['Cogni AI Chat', 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80', ['Python', 'FastAPI', 'OpenAI']],
  ['ThreadNest', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', ['Node.js', 'Socket.io', 'Redis']],
  ['VaultChain', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80', ['Solidity', 'IPFS', 'Web3.js']]
];

const galleryItems = [
  ['g1', 'ui', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80', 'Abstract gradient UI'],
  ['g2', 'web', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', 'Code editor dark theme'],
  ['g3', 'brand', 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80', 'Branding mockup'],
  ['g4', 'motion', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80', 'Motion graphics neon'],
  ['g5', 'ui', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', 'UI design system'],
  ['g6', 'web', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80', 'Dashboard analytics'],
  ['g7', 'brand', 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80', 'Typography poster'],
  ['g8', 'motion', 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80', '3D render abstract'],
  ['g9', 'ui', 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80', 'Mobile app mockup']
];

const filterKeys = ['all', 'ui', 'web', 'motion', 'brand'];

function getInitialLanguage() {
  let storedLanguage = null;
  try {
    storedLanguage = localStorage.getItem('portfolio-language');
  } catch (error) {
    storedLanguage = null;
  }

  if (supportedLanguages.includes(storedLanguage)) return storedLanguage;
  if (navigator.language.startsWith('pt')) return 'pt-BR';
  if (navigator.language.startsWith('es')) return 'es';
  return 'en';
}

function getInitialTheme() {
  try {
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (storedTheme) return storedTheme;
  } catch (error) {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function RichText({ html, as: Tag = 'span', className }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function ArrowIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ThemeIcon() {
  return (
    <span className="theme-toggle-track" aria-hidden="true">
      <span className="theme-toggle-icon theme-toggle-sun">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 2.5V5M12 19v2.5M21.5 12H19M5 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <span className="theme-toggle-icon theme-toggle-moon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M20 14.2A7.7 7.7 0 0 1 9.8 4a8 8 0 1 0 10.2 10.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="theme-toggle-thumb" />
    </span>
  );
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoverProject, setHoverProject] = useState({ src: '', visible: false, x: 0, y: 0 });
  const [githubStats, setGithubStats] = useState({ repos: '—', stars: '—', followers: '—' });
  const [formStatus, setFormStatus] = useState('idle');
  const cursorRef = useRef(null);
  const loaderRef = useRef(null);
  const loaderNameRef = useRef(null);
  const t = translations[language];

  const contributionRows = useMemo(() => {
    const levels = ['', 'l1', 'l2', 'l3', 'l4'];
    return Array.from({ length: 7 }, (_, row) =>
      Array.from({ length: 30 }, (_, col) => levels[(row * 11 + col * 7 + col) % levels.length])
    );
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (error) {
      return;
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('portfolio-language', language);
    } catch (error) {
      return;
    }
  }, [language]);

  useEffect(() => {
    gsap.to(loaderNameRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 });
    let progress = 0;
    const interval = window.setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        window.clearInterval(interval);
        window.setTimeout(() => {
          gsap.to(loaderRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            onComplete: () => setLoaderHidden(true)
          });
        }, 300);
      }
      setLoaderProgress(progress);
    }, 60);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loaderHidden) return;

    const ctx = gsap.context(() => {
      gsap.from('.title-line', {
        yPercent: 110,
        stagger: 0.12,
        duration: 1,
        ease: 'power4.out'
      });

      document.querySelectorAll('.reveal').forEach(el => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        });
      });

      document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count, 10);
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: target,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate() {
                el.textContent = `${Math.floor(this.targets()[0].val)}+`;
              }
            });
          }
        });
      });

      gsap.from('.gallery-item', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#galleryGrid',
          start: 'top 80%'
        }
      });

      ScrollTrigger.create({
        start: 100,
        onUpdate: self => {
          const nav = document.getElementById('navbar');
          nav.style.boxShadow = self.progress > 0 ? '0 4px 40px var(--nav-shadow)' : 'none';
        }
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loaderHidden]);

  useEffect(() => {
    const moveCursor = event => {
      if (window.innerWidth <= 768 || !cursorRef.current) return;
      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
    };
    const setHover = event => {
      if (event.target.closest('a, button, .project-item, .gallery-item, .skill-tag, .filter-btn')) {
        cursorRef.current?.classList.add('hover');
      }
    };
    const unsetHover = event => {
      if (event.target.closest('a, button, .project-item, .gallery-item, .skill-tag, .filter-btn')) {
        cursorRef.current?.classList.remove('hover');
      }
    };
    const setClick = () => cursorRef.current?.classList.add('click');
    const unsetClick = () => cursorRef.current?.classList.remove('click');

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', setHover);
    document.addEventListener('mouseout', unsetHover);
    document.addEventListener('mousedown', setClick);
    document.addEventListener('mouseup', unsetClick);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', setHover);
      document.removeEventListener('mouseout', unsetHover);
      document.removeEventListener('mousedown', setClick);
      document.removeEventListener('mouseup', unsetClick);
    };
  }, []);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const res = await fetch('https://api.github.com/users/danmarquees');
        if (!res.ok) return;
        const data = await res.json();
        setGithubStats(stats => ({
          ...stats,
          repos: data.public_repos || stats.repos,
          followers: data.followers || stats.followers
        }));
      } catch (error) {
        setGithubStats({ repos: '30+', stars: '120+', followers: '80+' });
      }
    }

    fetchGitHub();
  }, []);

  useEffect(() => {
    document.querySelectorAll('.gallery-item').forEach(item => {
      const show = activeFilter === 'all' || item.dataset.cat === activeFilter;
      gsap.to(item, { opacity: show ? 1 : 0.2, scale: show ? 1 : 0.97, duration: 0.3 });
    });
  }, [activeFilter]);

  function scrollToSection(event, href) {
    event.preventDefault();
    const target = href === '#' ? document.body : document.querySelector(href);
    if (!target) return;
    window.scrollTo({ top: href === '#' ? 0 : target.offsetTop - 72, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setFormStatus('sending');
    window.setTimeout(() => {
      setFormStatus('sent');
      event.currentTarget.reset();
      window.setTimeout(() => setFormStatus('idle'), 3000);
    }, 1200);
  }

  return (
    <>
      <div id="loader" ref={loaderRef} style={{ display: loaderHidden ? 'none' : 'flex' }}>
        <div className="loader-name" ref={loaderNameRef}>Dan Marques<span style={{ color: 'var(--accent)' }}>.</span></div>
        <div className="loader-bar-wrap">
          <div className="loader-bar" style={{ width: `${loaderProgress}%` }} />
        </div>
        <div className="loader-counter">{String(Math.floor(loaderProgress)).padStart(3, '0')}</div>
      </div>

      <div id="cursor" ref={cursorRef}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="30" height="30" rx="4" fill="var(--charcoal)" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="6" y="22" fontFamily="monospace" fontSize="14" fill="var(--accent)" fontWeight="bold">&lt;/&gt;</text>
        </svg>
      </div>

      <div id="proj-hover-img" className={hoverProject.visible ? 'visible' : ''} style={{ left: hoverProject.x, top: hoverProject.y }}>
        <img src={hoverProject.src} alt="" id="proj-hover-src" />
      </div>

      <nav id="navbar">
        <a href="#" className="nav-logo" onClick={event => scrollToSection(event, '#')}>danmarques<span>.</span>dev</a>
        <ul className="nav-links">
          {navItems.map(([href, index]) => (
            <li key={href}><a href={href} onClick={event => scrollToSection(event, href)}>{t.nav[index]}</a></li>
          ))}
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
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <ThemeIcon />
          </button>
          <a href="mailto:d.silvamarques@proton.me" className="nav-cta">{t.hire}</a>
          <button className="hamburger" type="button" id="hamburger" aria-label="Open menu" onClick={() => setMobileMenuOpen(open => !open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        {navItems.map(([href, index]) => (
          <a key={href} href={href} onClick={event => scrollToSection(event, href)}>{t.nav[index]}</a>
        ))}
        <a href="mailto:d.silvamarques@proton.me">{t.hireArrow}</a>
      </div>

      <section id="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-number" aria-hidden="true">01</div>
        <div className="hero-index reveal">
          <span>{t.heroRole}</span>
          <span>{t.heroCraft}</span>
        </div>
        <h1 className="hero-title">
          <div className="overflow-hidden"><span className="title-line block">Dan</span></div>
          <div className="overflow-hidden"><span className="title-line block"><em className="serif-word">Marques</em></span></div>
          <div className="overflow-hidden"><span className="title-line block outline-text">D.Marques</span></div>
        </h1>
        <div className="hero-bottom reveal">
          <div>
            <div className="hero-desc"><RichText html={t.heroDesc} /></div>
            <div className="hero-availability" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              <div className="hero-dot"></div>
              <span>{t.available}</span>
            </div>
          </div>
          <div className="hero-scroll">
            <div className="hero-scroll-line"></div>
            <span>{t.scroll}</span>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track" id="marqueeTrack">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              <span className="marquee-item">{item}</span><span className="marquee-item marquee-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="about">
        <div>
          <div className="section-label reveal">{t.aboutLabel}</div>
          <h2 className="about-title reveal"><RichText html={t.aboutTitle} /></h2>
          <p className="about-text reveal">{t.aboutText}</p>
          <div className="about-stats reveal">
            {[3, 40, 15, 8].map((count, index) => (
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
                {skills.map(skill => <div className="skill-tag" key={skill}><span>{skill}</span></div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="projects-header">
          <div className="reveal">
            <div className="section-label">{t.selectedWork}</div>
            <RichText as="div" className="projects-title" html={t.projectsTitle} />
          </div>
          <div className="projects-count reveal">{t.projectsCount}</div>
        </div>
        <div id="project-list">
          {projects.map(([name, image, tech], index) => (
            <div
              className="project-item reveal"
              data-img={image}
              key={name}
              role="link"
              tabIndex="0"
              aria-label={`${name}: ${t.projectDescriptions[index]}. Technologies: ${tech.join(', ')}`}
              onMouseEnter={() => setHoverProject(project => ({ ...project, src: image, visible: true }))}
              onMouseLeave={() => setHoverProject(project => ({ ...project, visible: false }))}
              onMouseMove={event => setHoverProject(project => ({ ...project, x: event.clientX + 24, y: event.clientY - 90 }))}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setHoverProject(project => ({ ...project, src: image, visible: !project.visible }));
                }
              }}
            >
              <div className="project-num">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <div className="project-name">{name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{t.projectDescriptions[index]}</div>
              </div>
              <div className="project-tech">
                {tech.map(item => <span className="tech-badge" key={item}>{item}</span>)}
              </div>
              <a href="#" className="project-link" onClick={event => scrollToSection(event, '#')}>{t.view} <ArrowIcon /></a>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery">
        <div className="gallery-header">
          <div>
            <div className="section-label reveal">{t.galleryLabel}</div>
            <RichText as="h2" className="gallery-title reveal" html={t.galleryTitle} />
          </div>
          <p className="gallery-desc reveal">{t.galleryDesc}</p>
        </div>
        <div className="gallery-filters reveal">
          {filterKeys.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              data-filter={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {t.filters[filter]}
            </button>
          ))}
        </div>
        <div className="gallery-grid" id="galleryGrid">
          {galleryItems.map(([span, category, src, alt], index) => (
            <div 
              className={`gallery-item ${span}`} 
              data-cat={category} 
              key={src}
              tabIndex="0"
              role="img"
              aria-label={`${t.galleryItems[index]} - ${t.filters[category]}`}
            >
              <img src={src} alt={t.galleryItems[index]} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-item-title">{t.galleryItems[index]}</div>
                <div className="gallery-item-cat">{t.filters[category]}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
              {t.awards.map(([name, org], index) => (
                <li className="award-item" key={name}>
                  <div>
                    <div className="award-name">{name}</div>
                    <div className="award-org">{org}</div>
                  </div>
                  <div className="award-year">{index === 0 ? '2024' : index === 3 ? '2022' : '2023'}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="github-section">
        <div className="github-inner">
          <div className="reveal">
            <div className="section-label" style={{ color: 'rgba(245,240,232,0.4)' }}>{t.githubLabel}</div>
            <RichText as="h2" className="github-title" html={t.githubTitle} />
            <p className="github-desc">{t.githubDesc}</p>
            <a href="https://github.com" target="_blank" className="github-btn" rel="noreferrer">
              <GithubIcon /> {t.githubCta}
            </a>
          </div>
          <div className="reveal">
            <div id="github-stats">
              {[githubStats.repos, githubStats.stars, githubStats.followers, '1.2K'].map((value, index) => (
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
                  {row.map((level, cellIndex) => <div className={`contrib-cell ${level}`} key={cellIndex}></div>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-inner">
          <div>
            <div className="section-label reveal">{t.contactLabel}</div>
            <RichText as="div" className="contact-big reveal" html={t.contactTitle} />
            <p className="contact-sub reveal">{t.contactDesc}</p>
            <div className="contact-links reveal">
              {[
                ['mailto:d.silvamarques@proton.me', 'Email', 'danmarques@proton.me'],
                ['https://github.com', 'GitHub', 'github.com/danmarquees'],
                ['https://linkedin.com', 'LinkedIn', 'linkedin.com/in/danmarquees'],
                ['https://twitter.com', 'Twitter / X', '@childrebeldan']
              ].map(([href, name, handle]) => (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-link" key={name}>
                  <div>
                    <div className="contact-link-name">{name}</div>
                    <div className="contact-link-handle">{handle}</div>
                  </div>
                  <ArrowIcon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-wrap reveal">
            <div className="section-label">{t.formLabel}</div>
            <form onSubmit={handleFormSubmit} style={{ marginTop: '2rem' }}>
              <div className="form-row">
                <label className="form-label" htmlFor="fname">{t.form.name}</label>
                <input type="text" id="fname" className="form-input" placeholder={t.form.namePlaceholder} required />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="femail">{t.form.email}</label>
                <input type="email" id="femail" className="form-input" placeholder="seuemail@example.com" required />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="fsubject">{t.form.subject}</label>
                <input type="text" id="fsubject" className="form-input" placeholder={t.form.subjectPlaceholder} />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="fmsg">{t.form.message}</label>
                <textarea id="fmsg" className="form-textarea" rows="4" placeholder={t.form.messagePlaceholder} required></textarea>
              </div>
              <button type="submit" className="form-submit">
                <span>{formStatus === 'sending' ? t.form.sending : formStatus === 'sent' ? t.form.sent : t.form.send}</span>
              </button>
              <div id="form-success" style={{ display: formStatus === 'sent' ? 'block' : 'none', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'green', marginTop: '1rem', letterSpacing: '0.05em' }}>
                {t.form.success}
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-left">{t.footerRights}</div>
        <div className="footer-logo">danmarques<span>.</span>dev</div>
        <RichText as="div" className="footer-right" html={t.footerBuilt} />
      </footer>
    </>
  );
}

export default App;
