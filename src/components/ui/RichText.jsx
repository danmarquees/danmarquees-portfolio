import DOMPurify from 'dompurify';

/**
 * Renders a trusted HTML string as the given element tag.
 * All content is sanitized with DOMPurify before rendering (XSS protection).
 */
export function RichText({ html, as: Tag = 'span', className }) {
  const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: clean }} />;
}
