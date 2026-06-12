import { useState, useEffect } from 'react';
import { RichText } from '../ui/RichText';

export function Footer({ t, language }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hour12: false };
      const formattedTime = new Intl.DateTimeFormat(language, options).format(now);
      setTime(`${formattedTime} BRT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [language]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-left">
        <div className="footer-time" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--charcoal)', fontWeight: '500' }}>
          <span className="time-dot" style={{ 
            display: 'inline-block', 
            width: '6px', 
            height: '6px', 
            backgroundColor: '#00D15E', 
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(0, 209, 94, 0.6)'
          }}></span>
          {t.footerLocation} — {time}
        </div>
        <div className="footer-copyright" style={{ opacity: 0.7 }}>{t.footerRights}</div>
      </div>

      <div className="footer-center">
        <div className="footer-logo">danmarquesdev<span>.</span>com</div>
        <div className="footer-socials">
          <a href="https://github.com/danmarquees" target="_blank" rel="noreferrer" className="footer-link">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/danilomarquesdev" target="_blank" rel="noreferrer" className="footer-link">LinkedIn ↗</a>
          <a href="mailto:d.silvamarques@proton.me" className="footer-link">{t.emailLink} ↗</a>
        </div>
      </div>

      <div className="footer-right">
        <button onClick={scrollToTop} className="back-to-top">
          {t.backToTop || 'Back to top'} <span className="arrow-up">→</span>
        </button>
        <RichText as="div" html={t.footerBuilt} />
      </div>
    </footer>
  );
}
