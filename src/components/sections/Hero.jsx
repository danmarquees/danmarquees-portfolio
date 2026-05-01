import { marqueeItems } from '../../constants/data';
import { RichText } from '../ui/RichText';

export function Hero({ t, scrollToSection }) {
  return (
    <>
      <section id="hero">
        <div className="hero-bg-grid" />
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
          <div className="hero-availability">
              <div className="hero-dot" />
              <span>{t.available}</span>
            </div>
          </div>
          <div className="hero-scroll">
            <div className="hero-scroll-line" />
            <span>{t.scroll}</span>
          </div>
        </div>
      </section>

      {/* Marquee strip between hero and about */}
      <div className="marquee-wrap">
        <div className="marquee-track" id="marqueeTrack">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-item marquee-sep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
