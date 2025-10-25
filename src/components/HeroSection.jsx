import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { isDark, themeClasses } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className={`relative h-screen flex items-center justify-center text-center ${themeClasses.bgPrimary} ${themeClasses.textPrimary} overflow-hidden`}
    >
      {/* Efeito de fundo (opcional) */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900" : "bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-100"} opacity-80`}
      ></div>
      <div className="absolute inset-0 grain-bg opacity-5"></div>

      <div className="relative z-10 p-4">
        <img
          src="/profile_1.jpg"
          alt="Danilo Marques"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-indigo-400 shadow-lg"
          loading="lazy"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          {t("hero.greeting", "Olá, eu sou")}{" "}
          <span className="text-indigo-400">Danilo Marques</span>
        </h1>
        <p
          className={`text-xl sm:text-2xl ${themeClasses.textSecondary} max-w-3xl mx-auto mb-8`}
        >
          {t(
            "hero.subtitle",
            "Desenvolvedor Full Stack | Especialista em Arquitetura de Software e Soluções Web e SaaS",
          )}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300"
          >
            {t("hero.projectsBtn", "Meus Projetos")}
          </a>
          <a
            href="#contact"
            className="inline-block bg-slate-700 text-gray-200 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-600 transition-transform transform hover:scale-105 duration-300"
          >
            {t("hero.contactBtn", "Entrar em Contato")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;