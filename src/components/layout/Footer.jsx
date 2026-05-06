import { RichText } from '../ui/RichText';

export function Footer({ t }) {
  return (
    <footer>
      <div className="footer-left">{t.footerRights}</div>
      <div className="footer-logo">danmarquesdev<span>.</span>com</div>
      <RichText as="div" className="footer-right" html={t.footerBuilt} />
    </footer>
  );
}
