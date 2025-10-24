/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, default to dark mode
    const saved = localStorage.getItem('theme');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const getThemeClass = (darkClass, lightClass) => isDark ? darkClass : lightClass;

  const themeClasses = {
    // Background colors
    bgPrimary: getThemeClass('bg-slate-900', 'bg-gray-50'),
    bgSecondary: getThemeClass('bg-slate-800', 'bg-gray-100'),
    bgTertiary: getThemeClass('bg-slate-900', 'bg-white'),
    bgCard: getThemeClass('bg-slate-800', 'bg-white'),
    bgFooter: getThemeClass('bg-slate-950', 'bg-gray-800'),

    // Text colors
    textPrimary: getThemeClass('text-white', 'text-gray-900'),
    textSecondary: getThemeClass('text-gray-300', 'text-gray-800'),
    textTertiary: getThemeClass('text-gray-400', 'text-gray-600'),
    textAccent: getThemeClass('text-indigo-400', 'text-indigo-500'),

    // Border colors
    borderPrimary: getThemeClass('border-slate-700', 'border-gray-200'),
    borderSecondary: getThemeClass('border-slate-600', 'border-gray-300'),

    // Hover states
    hoverBg: getThemeClass('hover:bg-indigo-700', 'hover:bg-indigo-100'),
    hoverText: getThemeClass('hover:text-white', 'hover:text-gray-900'),
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, themeClasses, getThemeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};