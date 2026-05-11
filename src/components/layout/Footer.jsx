import { useState, useEffect } from 'react';
import { RichText } from '../ui/RichText';

export function Footer({ t }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hour12: false };
      const formattedTime = new Intl.DateTimeFormat('pt-BR', options).format(now);
      setTime(`${formattedTime} BRT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

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
          São Paulo, BR — {time}
        </div>
        <div className="footer-copyright" style={{ opacity: 0.7 }}>{t.footerRights}</div>
      </div>
      <div className="footer-logo">danmarquesdev<span>.</span>com</div>
      <RichText as="div" className="footer-right" html={t.footerBuilt} />
    </footer>
  );
}
