import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
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
  BookOpen,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
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
    { name: t("header.blog"), href: "https://substack.com/@danmarques", icon: BookOpen },
    { name: t("header.contact"), href: "#contact", icon: Mail },
  ];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`
          ${isMobile
            ? "flex items-center px-4 py-3 text-lg text-text hover:bg-surface-alt rounded-lg transition-colors"
            : "text-sm font-medium text-text-muted hover:text-primary transition-colors"}
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
      ${isScrolled ? "bg-surface/90 shadow-lg backdrop-blur-lg" : "bg-transparent"}
    `}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nome */}
          <div className="flex-shrink-0 flex items-center">
            <motion.img
              src="/logo.svg"
              alt="Ícone SVG do Projeto"
              className="w-12 h-12 mr-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <a
              href="#home"
              className="text-2xl font-bold text-text"
            >
              DanMarques<span className="text-primary">.dev</span>
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
                    className="flex items-center px-3 py-2 rounded-full border border-gray-200 dark:border-slate-700 shadow transition-colors focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-text hover:bg-surface-alt"
                    aria-label="Selecionar idioma"
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    tabIndex={0}
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
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
                      className="w-4 h-4 ml-2 text-text-muted"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-32 bg-surface border border-gray-200 dark:border-slate-700 rounded-lg shadow-xl z-50 overflow-hidden"
                      >
                        <button
                          className={`w-full px-4 py-2 text-left transition-colors ${i18n.language === "pt"
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-text hover:bg-surface-alt"
                            }`}
                          onClick={() => {
                            i18n.changeLanguage("pt");
                            setIsDropdownOpen(false);
                          }}
                        >
                          🇧🇷 Português
                        </button>
                        <button
                          className={`w-full px-4 py-2 text-left transition-colors ${i18n.language === "en"
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-text hover:bg-surface-alt"
                            }`}
                          onClick={() => {
                            i18n.changeLanguage("en");
                            setIsDropdownOpen(false);
                          }}
                        >
                          🇺🇸 English
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* Toggle Theme Button */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center px-3 py-2 rounded-full border border-gray-200 dark:border-slate-700 shadow transition-colors bg-surface text-primary hover:bg-surface-alt focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="inline-flex items-center justify-center p-3 rounded-md border border-gray-200 dark:border-slate-700 shadow transition-colors focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-primary hover:bg-surface-alt"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-surface shadow-lg border-t border-gray-200 dark:border-slate-700 p-4"
          >
            <div className="flex flex-col space-y-2">{renderNavLinks(true)}</div>
            {/* Mobile Language and Theme Controls */}
            <div className="flex flex-col space-y-4 mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
              {/* Language Selector */}
              <div className="flex space-x-2">
                <button
                  className={`flex-1 px-3 py-2 rounded-lg border transition-colors ${i18n.language === "pt"
                      ? "bg-primary/10 border-primary/30 text-primary font-semibold"
                      : "bg-surface border-gray-200 dark:border-slate-700 text-text hover:bg-surface-alt"
                    }`}
                  onClick={() => {
                    i18n.changeLanguage("pt");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  🇧🇷 PT
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded-lg border transition-colors ${i18n.language === "en"
                      ? "bg-primary/10 border-primary/30 text-primary font-semibold"
                      : "bg-surface border-gray-200 dark:border-slate-700 text-text hover:bg-surface-alt"
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
                className="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 shadow transition-colors bg-surface text-primary hover:bg-surface-alt focus:outline-none focus:ring-2 focus:ring-primary"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
