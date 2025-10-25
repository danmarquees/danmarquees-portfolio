import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const { themeClasses } = useTheme();
  return (
    <footer
      className={`${themeClasses.bgFooter} ${themeClasses.textTertiary} py-16 border-t ${themeClasses.borderPrimary}`}
    >
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
              <h3 className={`text-xl font-bold ${themeClasses.textPrimary}`}>
                DanMarques<span className="text-indigo-400">.dev</span>
              </h3>
            </div>
            <p className="text-sm mb-4">
              Desenvolvedor Full Stack especializado em soluções web
              sustentáveis e marketplaces.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4
              className={`text-lg font-semibold ${themeClasses.textPrimary} mb-4`}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais e Contato */}
          <div>
            <h4
              className={`text-lg font-semibold ${themeClasses.textPrimary} mb-4`}
            >
              Conecte-se
            </h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://github.com/danmarquees"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/danilosmarques"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm">
              <a
                href="mailto:d.silvamarques@gmail.com"
                className="hover:text-indigo-400 transition-colors"
              >
                d.silvamarques@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} DanMarques.dev. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;