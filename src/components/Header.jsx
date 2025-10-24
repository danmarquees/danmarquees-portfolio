import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Award,
  Code,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDark, toggleTheme, themeClasses } = useTheme();
  const { t, i18n } = useTranslation();

  // Adiciona sombra ao header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("header.home"), href: "#home", icon: Home },
    { name: t("header.about"), href: "#about", icon: User },
    { name: t("header.services"), href: "#services", icon: Briefcase },
    { name: t("header.skills"), href: "#skills", icon: Award },
    { name: t("header.projects"), href: "#projects", icon: Code },
    { name: t("header.contact"), href: "#contact", icon: Mail },
  ];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={`
          ${isMobile ? `flex items-center px-4 py-3 text-lg ${isDark ? "text-gray-200" : "text-gray-700"} ${themeClasses.hoverBg} rounded-lg transition-colors` : `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"} ${themeClasses.hoverText} transition-colors`}
        `}
      >
        {isMobile && <link.icon className="w-5 h-5 mr-3" />}
        {link.name}
      </a>
    ));

  return (
    <header
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? `${isDark ? "bg-slate-900/90" : "bg-white/90"} shadow-lg backdrop-blur-lg` : "bg-transparent"}
    `}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nome */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.svg"
              alt="Ícone SVG do Projeto"
              className="w-12 h-12 mr-1"
            />
            <a
              href="#home"
              className={`text-2xl font-bold ${themeClasses.textPrimary}`}
            >
              DanMarques<span className="text-indigo-400">.dev</span>
            </a>
          </div>

          {/* Navegação Desktop e Mobile */}
          <div className="flex items-center">
            {/* Navegação Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {renderNavLinks()}
              {/* Seletor de idioma customizado + Toggle Tema */}
              <div className="flex items-center space-x-2 ml-4">
                <div className="relative">
                  <button
                    className={`flex items-center px-3 py-2 rounded-full border shadow transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                      isDark
                        ? "bg-slate-800 border-slate-700 text-gray-200 hover:bg-indigo-900"
                        : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-indigo-100"
                    }`}
                    aria-label="Selecionar idioma"
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    tabIndex={0}
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                    </svg>
                    {i18n.language === "pt" ? "PT" : "EN"}
                    <svg
                      className="w-4 h-4 ml-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-24 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg shadow z-50 animate-fade-in">
                      <button
                        className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                          i18n.language === "pt"
                            ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                        }`}
                        onClick={() => {
                          i18n.changeLanguage("pt");
                          setIsDropdownOpen(false);
                        }}
                      >
                        🇧🇷 Português
                      </button>
                      <button
                        className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                          i18n.language === "en"
                            ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                        }`}
                        onClick={() => {
                          i18n.changeLanguage("en");
                          setIsDropdownOpen(false);
                        }}
                      >
                        🇺🇸 English
                      </button>
                    </div>
                  )}
                </div>
                {/* Toggle Theme Button */}
                <button
                  onClick={toggleTheme}
                  className={`flex items-center justify-center px-3 py-2 rounded-full border shadow transition-colors
                     ${
                       isDark
                         ? "bg-slate-800 border-slate-700 text-indigo-500 hover:bg-indigo-900"
                         : "bg-gray-100 border-gray-300 text-indigo-500 hover:bg-indigo-100"
                     }
                     focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                  aria-label={
                    isDark
                      ? "Alternar para tema claro"
                      : "Alternar para tema escuro"
                  }
                  type="button"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            {/* Botão de Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`inline-flex items-center justify-center p-3 rounded-md border shadow transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                  isDark
                    ? `bg-slate-800 text-indigo-500 hover:bg-indigo-900 ${isMobileMenuOpen ? 'border-white' : 'border-slate-700'}`
                    : `bg-gray-100 text-indigo-500 hover:bg-indigo-100 ${isMobileMenuOpen ? 'border-white' : 'border-gray-300'}`
                }`}
              >
                <span className="sr-only">Abrir menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile (Dropdown) */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 right-0 ${themeClasses.bgSecondary} shadow-lg ${themeClasses.borderPrimary} p-4 border-t`}
        >
          <div className="flex flex-col space-y-2">{renderNavLinks(true)}</div>
          {/* Mobile Language and Theme Controls */}
          <div className="flex flex-col space-y-4 mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
            {/* Language Selector */}
            <div className="flex space-x-2">
              <button
                className={`flex-1 px-3 py-2 rounded-lg border transition-colors ${
                  i18n.language === "pt"
                    ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
                    : `${themeClasses.bgCard} ${themeClasses.borderPrimary} ${themeClasses.textPrimary} hover:bg-indigo-100 dark:hover:bg-indigo-900`
                }`}
                onClick={() => {
                  i18n.changeLanguage("pt");
                  setIsMobileMenuOpen(false);
                }}
              >
                🇧🇷 PT
              </button>
              <button
                className={`flex-1 px-3 py-2 rounded-lg border transition-colors ${
                  i18n.language === "en"
                    ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
                    : `${themeClasses.bgCard} ${themeClasses.borderPrimary} ${themeClasses.textPrimary} hover:bg-indigo-100 dark:hover:bg-indigo-900`
                }`}
                onClick={() => {
                  i18n.changeLanguage("en");
                  setIsMobileMenuOpen(false);
                }}
              >
                🇺🇸 EN
              </button>
            </div>
            {/* Theme Toggle */}
            <button
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-center px-3 py-2 rounded-lg border shadow transition-colors ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-indigo-500 hover:bg-indigo-900"
                  : "bg-gray-100 border-gray-300 text-indigo-500 hover:bg-indigo-100"
              } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              aria-label={
                isDark
                  ? "Alternar para tema claro"
                  : "Alternar para tema escuro"
              }
              type="button"
            >
              {isDark ? (
                <Sun className="h-5 w-5 mr-2" />
              ) : (
                <Moon className="h-5 w-5 mr-2" />
              )}
              {isDark ? "Tema Claro" : "Tema Escuro"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
