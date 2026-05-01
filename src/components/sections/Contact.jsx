import { useState } from 'react';
import { ArrowIcon } from '../ui/ArrowIcon';
import { RichText } from '../ui/RichText';

export function Contact({ t }) {
  const [formStatus, setFormStatus] = useState('idle');

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name    = formData.get('name');
    const email   = formData.get('email');
    const subject = formData.get('subject') || t.form.defaultSubject;
    const message = formData.get('message');

    const body = [
      `${t.form.name}: ${name}`,
      `${t.form.email}: ${email}`,
      '',
      message,
    ].join('\n');

    setFormStatus('sent');
    window.location.href = `mailto:d.silvamarques@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => {
      setFormStatus('idle');
      event.target.reset();
    }, 4000);
  }

  const contactLinks = [
    ['mailto:d.silvamarques@proton.me', 'Email',    'danmarques@proton.me'],
    ['https://github.com/danmarquees',  'GitHub',   'github.com/danmarquees'],
    ['https://www.linkedin.com/in/danilo-marques', 'LinkedIn', 'linkedin.com/in/danilo-marques'],
  ];

  return (
    <section id="contact">
      <div className="contact-inner">
        <div>
          <div className="section-label reveal">{t.contactLabel}</div>
          <RichText as="div" className="contact-big reveal" html={t.contactTitle} />
          <p className="contact-sub reveal">{t.contactDesc}</p>

          <div className="contact-links reveal">
            {contactLinks.map(([href, name, handle]) => (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="contact-link"
                key={name}
              >
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
              <input
                type="text"
                id="fname"
                name="name"
                className="form-input"
                placeholder={t.form.namePlaceholder}
                required
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="femail">{t.form.email}</label>
              <input
                type="email"
                id="femail"
                name="email"
                className="form-input"
                placeholder="seuemail@example.com"
                required
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="fsubject">{t.form.subject}</label>
              <input
                type="text"
                id="fsubject"
                name="subject"
                className="form-input"
                placeholder={t.form.subjectPlaceholder}
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="fmsg">{t.form.message}</label>
              <textarea
                id="fmsg"
                name="message"
                className="form-textarea"
                rows="4"
                placeholder={t.form.messagePlaceholder}
                required
              />
            </div>

            <button type="submit" className="form-submit" disabled={formStatus === 'sent'}>
              <span>
                {formStatus === 'sent' ? t.form.sent : t.form.send}
              </span>
            </button>

            {formStatus === 'sent' && (
              <div
                id="form-success"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--accent)',
                  marginTop: '1rem',
                  letterSpacing: '0.05em',
                }}
              >
                {t.form.success}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
