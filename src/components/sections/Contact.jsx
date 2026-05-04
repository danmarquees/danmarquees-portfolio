import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowIcon } from '../ui/ArrowIcon';
import { RichText } from '../ui/RichText';

// EmailJS credentials — configure via .env.local (never commit secrets)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact({ t }) {
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);

  async function handleFormSubmit(event) {
    event.preventDefault();

    // Fallback to mailto: if EmailJS is not configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject') || t.form.defaultSubject;
      const message = formData.get('message');
      const body = [`${t.form.name}: ${name}`, `${t.form.email}: ${email}`, '', message].join('\n');
      window.location.href = `mailto:d.silvamarques@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setFormStatus('sent');
      setTimeout(() => { setFormStatus('idle'); event.target.reset(); }, 4000);
      return;
    }

    setFormStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY });
      setFormStatus('sent');
      setTimeout(() => { setFormStatus('idle'); formRef.current?.reset(); }, 5000);
    } catch (err) {
      console.error('[EmailJS]', err);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  }

  const contactLinks = [
    ['mailto:d.silvamarques@proton.me', 'Email', 'd.silvamarques@proton.me'],
    ['https://github.com/danmarquees', 'GitHub', 'github.com/danmarquees'],
    ['https://www.linkedin.com/in/danilomarquesdev', 'LinkedIn', 'linkedin.com/in/danilomarquesdev'],
  ];

  const isBusy = formStatus === 'sending' || formStatus === 'sent';

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
                rel="noopener noreferrer"
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
          <form ref={formRef} onSubmit={handleFormSubmit} style={{ marginTop: '2rem' }}>
            <div className="form-row">
              <label className="form-label" htmlFor="fname">{t.form.name}</label>
              <input type="text" id="fname" name="from_name" className="form-input" placeholder={t.form.namePlaceholder} required />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="femail">{t.form.email}</label>
              <input type="email" id="femail" name="from_email" className="form-input" placeholder="seuemail@example.com" required />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="fsubject">{t.form.subject}</label>
              <input type="text" id="fsubject" name="subject" className="form-input" placeholder={t.form.subjectPlaceholder} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="fmsg">{t.form.message}</label>
              <textarea id="fmsg" name="message" className="form-textarea" rows="4" placeholder={t.form.messagePlaceholder} required />
            </div>

            <button type="submit" className={`form-submit ${formStatus}`} disabled={isBusy}>
              <span>
                {formStatus === 'sending' && t.form.sending}
                {formStatus === 'sent' && t.form.sent}
                {(formStatus === 'idle' || formStatus === 'error') && t.form.send}
              </span>
            </button>

            {formStatus === 'sent' && (
              <div className="form-success-msg">{t.form.success}</div>
            )}
            {formStatus === 'error' && (
              <div className="form-error-msg">{t.form.error}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
