import { useState, useEffect } from 'react';

export function CookieConsent({ t }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show with a slight delay for better UX
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  // Fallback texts just in case translation hasn't loaded properly
  const title = t.cookie?.title || 'Privacy & Cookies';
  const message = t.cookie?.message || 'We use cookies to improve your experience, remember your preferences, and analyze site traffic.';
  const acceptBtn = t.cookie?.accept || 'Accept';
  const declineBtn = t.cookie?.decline || 'Decline';

  return (
    <div 
      className="cookie-consent"
      style={{
        position: 'fixed',
        bottom: visible ? '2rem' : '-100%',
        left: '2rem',
        zIndex: 9999,
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--line)',
        padding: '1.5rem',
        maxWidth: '360px',
        boxShadow: '0 10px 30px var(--nav-shadow)',
        transition: 'bottom 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s ease',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem'
      }}
    >
      <div>
        <h4 style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '11px', 
          letterSpacing: '0.1em', 
          textTransform: 'uppercase', 
          color: 'var(--charcoal)', 
          marginBottom: '0.75rem' 
        }}>
          {title}
        </h4>
        <p style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '11px', 
          lineHeight: '1.6', 
          color: 'var(--muted)' 
        }}>
          {message}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button 
          onClick={accept}
          style={{
            flex: 1,
            background: 'var(--charcoal)',
            color: 'var(--paper)',
            border: '1px solid var(--charcoal)',
            padding: '10px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            cursor: 'none',
            transition: 'background 0.25s ease, border-color 0.25s ease'
          }}
          onMouseEnter={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.borderColor = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.target.style.background = 'var(--charcoal)'; e.target.style.borderColor = 'var(--charcoal)'; }}
        >
          {acceptBtn}
        </button>
        <button 
          onClick={decline}
          style={{
            flex: 1,
            background: 'transparent',
            color: 'var(--charcoal)',
            border: '1px solid var(--line)',
            padding: '10px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            cursor: 'none',
            transition: 'border-color 0.25s ease, color 0.25s ease'
          }}
          onMouseEnter={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
          onMouseLeave={(e) => { e.target.style.borderColor = 'var(--line)'; e.target.style.color = 'var(--charcoal)' }}
        >
          {declineBtn}
        </button>
      </div>
    </div>
  );
}
