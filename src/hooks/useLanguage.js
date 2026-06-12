import { useEffect, useState } from 'react';
import { supportedLanguages } from '../translations';

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem('portfolio-language');
    if (supportedLanguages.includes(stored)) return stored;
  } catch {
    // localStorage unavailable
  }

  if (navigator.language.startsWith('pt')) return 'pt-BR';
  if (navigator.language.startsWith('es')) return 'es';
  if (navigator.language.startsWith('ja')) return 'ja';
  return 'en';
}

export function useLanguage() {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      // localStorage unavailable — silently ignore
    }
  }, [language]);

  return [language, setLanguage];
}
