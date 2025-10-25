import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { themeClasses } = useTheme();
  const { t } = useTranslation();
  return (
    <motion.section
      id="about"
      className={`py-20 sm:py-32 ${themeClasses.bgSecondary} ${themeClasses.textSecondary}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem (agora primeira na ordem visual em telas maiores) */}
          <div className="flex justify-center lg:justify-end">
            {" "}
            {/* Ajuste para alinhar à direita em telas maiores */}
            <img
              src="/profile_1.jpg"
              alt="Dan Marques - Desenvolvedor Fullstack"
              className="rounded-lg shadow-2xl w-full max-w-xs object-cover"
              loading="lazy"
            />
          </div>
          {/* Texto (agora segunda na ordem visual em telas maiores) */}
          <div>
            <h2
              className={`text-3xl font-bold ${themeClasses.textPrimary} mb-6`}
            >
              {t("about.title")}
            </h2>
            <p className="text-lg mb-4">{t("about.description")}</p>
            <p className="text-lg mb-4">
              Atuo em todas as etapas do ciclo de desenvolvimento, desde o
              planejamento da arquitetura até a integração de pagamentos e
              modelagem de banco de dados. Possuo sólidos conhecimentos em
              desenvolvimento Full Stack, combinando linguagens como Python,
              JavaScript e frameworks modernos.
            </p>
            <p className="text-lg">
              Além da vertente técnica, tenho como propósito o uso da tecnologia
              para impacto social e sustentabilidade, liderando o projeto
              OrganyxHub, voltado à conexão entre consumidores conscientes e
              produtores sustentáveis.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;