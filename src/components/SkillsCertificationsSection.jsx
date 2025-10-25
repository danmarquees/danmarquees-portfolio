import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { Code, Zap, Server, Database, Cloud, Cpu, Award, Shield } from "lucide-react";

const SkillsCertificationsSection = () => {
  const { themeClasses } = useTheme();
  const { t } = useTranslation();
  const skills = [
    { name: "Python", icon: Code, level: t("skills.level.advanced") },
    { name: "JavaScript", icon: Zap, level: t("skills.level.advanced") },
    { name: "React", icon: Code, level: t("skills.level.advanced") },
    { name: "Django", icon: Server, level: t("skills.level.advanced") },
    { name: "FastAPI", icon: Server, level: t("skills.level.intermediate") },
    { name: "PostgreSQL", icon: Database, level: t("skills.level.advanced") },
    { name: "MongoDB", icon: Database, level: t("skills.level.intermediate") },
    { name: "Docker", icon: Cloud, level: t("skills.level.intermediate") },
    { name: "AWS", icon: Cloud, level: t("skills.level.intermediate") },
    { name: "Google Cloud", icon: Cloud, level: t("skills.level.basic") },
    {
      name: "Machine Learning",
      icon: Cpu,
      level: t("skills.level.intermediate"),
    },
    { name: "Tailwind CSS", icon: Code, level: t("skills.level.advanced") },
  ];

  const certifications = [
    {
      name: t("skills.cert.aws"),
      issuer: "Amazon Web Services",
      date: "2023",
      icon: Shield,
    },
    {
      name: t("skills.cert.gcp"),
      issuer: "Google Cloud",
      date: "2022",
      icon: Shield,
    },
    {
      name: t("skills.cert.k8s"),
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      icon: Award,
    },
  ];

  return (
    <motion.section
      id="skills"
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
            {t("skills.title")}
          </h2>
          <p
            className={`text-lg ${themeClasses.textTertiary} max-w-2xl mx-auto`}
          >
            {t("skills.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Habilidades Técnicas */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Code className="w-6 h-6 mr-3 text-indigo-400" />
              {t("skills.technicalTitle")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`${themeClasses.bgCard} ${themeClasses.borderPrimary} p-4 rounded-lg border hover:border-indigo-500 transition-colors`}
                >
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-5 h-5 text-indigo-400 mr-2" />
                    <span className={`${themeClasses.textPrimary} font-medium`}>
                      {skill.name}
                    </span>
                  </div>
                  <span className={`text-sm ${themeClasses.textTertiary}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Certificações */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-indigo-400" />
              {t("skills.certificationsTitle")}
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`${themeClasses.bgCard} ${themeClasses.borderPrimary} p-6 rounded-lg border hover:border-indigo-500 transition-colors`}
                >
                  <div className="flex items-start">
                    <cert.icon className="w-6 h-6 text-indigo-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4
                        className={`text-lg font-semibold ${themeClasses.textPrimary} mb-1`}
                      >
                        {cert.name}
                      </h4>
                      <p className={`${themeClasses.textTertiary} mb-1`}>
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-indigo-400">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsCertificationsSection;