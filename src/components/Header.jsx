import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
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
  const { isDark, toggleTheme, themeClasses } = useTheme();

  // Adiciona sombra ao header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home", icon: Home },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Serviços", href: "#services", icon: Briefcase },
    { name: "Habilidades", href: "#skills", icon: Award },
    { name: "Projetos", href: "#projects", icon: Code },
    { name: "Contato", href: "#contact", icon: Mail },
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

          {/* Navegação Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {renderNavLinks()}
          </div>

          {/* Botão de Tema e Menu Mobile */}
          <div className="flex items-center space-x-2">
            {/* Botão de Toggle Tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              aria-label="Alternar tema"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Botão de Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
        </div>
      )}
    </header>
  );
};

export default Header;
