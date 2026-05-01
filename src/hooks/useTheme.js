import { useEffect, useState } from 'react';

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored) return stored;
  } catch {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // localStorage unavailable — silently ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return [theme, toggleTheme];
}
