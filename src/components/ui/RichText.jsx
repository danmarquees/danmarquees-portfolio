/**
 * Renders an HTML string as the given element tag.
 * Only use with trusted, static content (e.g. translation strings).
 * For user-generated content, sanitize with DOMPurify first.
 */
export function RichText({ html, as: Tag = 'span', className }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
