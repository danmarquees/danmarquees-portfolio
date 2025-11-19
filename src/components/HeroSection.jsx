import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center justify-center text-center bg-background text-text overflow-hidden"
      style={{
        backgroundImage: "url(/thumb.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with semantic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-gray-100/80 to-indigo-100/80 dark:from-slate-900/80 dark:via-slate-900/80 dark:to-indigo-900/80"></div>

      {/* Grain effect */}
      <div className="absolute inset-0 grain-bg opacity-5 pointer-events-none"></div>

      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/profile_2.jpg"
            alt="Danilo Marques"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary shadow-xl"
            loading="lazy"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("hero.greeting", "Olá, eu sou")}{" "}
          <span className="text-primary">Danilo Marques</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-text-muted max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t(
            "hero.subtitle",
            "Desenvolvedor Full Stack | Especialista em Arquitetura de Software e Soluções Web e SaaS",
          )}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary-hover transition-all transform hover:scale-105 duration-300"
          >
            {t("hero.projectsBtn", "Meus Projetos")}
          </a>
          <a
            href="#contact"
            className="inline-block bg-surface-alt text-text font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all transform hover:scale-105 duration-300 border border-gray-200 dark:border-slate-700"
          >
            {t("hero.contactBtn", "Entrar em Contato")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
