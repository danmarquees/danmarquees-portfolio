import React from "react";
import { useTranslation } from "react-i18next";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface-alt text-text-muted py-16 border-t border-gray-200 dark:border-slate-700">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.svg"
                alt="Ícone SVG do Projeto"
                className="w-12 h-12 mr-2"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-text">
                DanMarques<span className="text-primary">.dev</span>
              </h3>
            </div>
            <p className="text-sm mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  {t('header.home')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  {t('header.about')}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  {t('header.services')}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors"
                >
                  {t('header.projects')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  {t('header.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais e Contato */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">
              {t('footer.connect')}
            </h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://github.com/danmarquees"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/danilosmarques"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm">
              <a
                href="mailto:d.silvamarques@gmail.com"
                className="hover:text-primary transition-colors"
              >
                d.silvamarques@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} DanMarques.dev. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;