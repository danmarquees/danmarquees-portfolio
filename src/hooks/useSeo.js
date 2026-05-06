import { useEffect } from 'react';
import { defaultSeo, jsonLd, seoByLanguage, siteImage, siteUrl } from '../constants/seo';

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function setLink(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

export function useSeo(language) {
  useEffect(() => {
    const seo = seoByLanguage[language] || defaultSeo;

    document.title = seo.title;
    setMeta('meta[name="title"]', 'content', seo.title);
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[name="keywords"]', 'content', seo.keywords);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:locale"]', 'content', seo.locale);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', siteUrl);
    setMeta('meta[name="twitter:url"]', 'content', siteUrl);
    setMeta('meta[property="og:image"]', 'content', siteImage);
    setMeta('meta[name="twitter:image"]', 'content', siteImage);
    setLink('link[rel="canonical"]', 'href', siteUrl);

    const structuredData = document.getElementById('structured-data');
    if (structuredData) {
      structuredData.textContent = JSON.stringify(jsonLd);
    }
  }, [language]);
}
