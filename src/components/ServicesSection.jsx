import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { Code, Server, Database } from "lucide-react";

const ServicesSection = () => {
  const { themeClasses } = useTheme();
  const { t } = useTranslation();
  const services = [
    {
      icon: Code,
      title: t("services.items.web"),
      description: t(
        "services.items.webDesc",
        "Interfaces ricas e responsivas com React, HTML5, CSS3 e Tailwind. Foco em performance e UX.",
      ),
    },
    {
      icon: Server,
      title: t("services.items.automation"),
      description: t(
        "services.items.automationDesc",
        "APIs robustas e escaláveis com Python (Django, FastAPI) e Node.js. Arquiteturas de microsserviços.",
      ),
    },
    {
      icon: Database,
      title: t("services.items.mlops"),
      description: t(
        "services.items.mlopsDesc",
        "Modelagem e gestão de bancos de dados (PostgreSQL, MySQL, MongoDB) e pipelines de CI/CD com Docker, AWS e Google Cloud.",
      ),
    },
  ];

  return (
    <motion.section
      id="services"
      className={`py-20 sm:py-32 ${themeClasses.bgPrimary} ${themeClasses.textSecondary}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4`}
          >
            {t("services.title")}
          </h2>
          <p
            className={`text-lg ${themeClasses.textTertiary} max-w-2xl mx-auto`}
          >
            {t("services.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${themeClasses.bgCard} ${themeClasses.borderPrimary} p-8 rounded-lg shadow-lg border transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/10`}
            >
              <div className="mb-6">
                <service.icon className="h-10 w-10 text-indigo-400" />
              </div>
              <h3
                className={`text-2xl font-semibold ${themeClasses.textPrimary} mb-4`}
              >
                {service.title}
              </h3>
              <p className={themeClasses.textTertiary}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;