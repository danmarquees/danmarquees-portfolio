import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";
import ProjectDetailsCard from "./ProjectDetails/ProjectDetailsCard";

const ProjectsSection = () => {
  const { themeClasses } = useTheme();
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: t("projects.organyxhub.title"),
      description: t("projects.organyxhub.description"),
      tags: [
        "Django",
        "Python",
        "PostgreSQL",
        t("projects.organyxhub.payment"),
        t("projects.organyxhub.marketplace"),
      ],
      imageUrl: "/banner_organyxhub.png",
      liveUrl: "#",
      githubUrl: "https://github.com/danmarquees/organixhub-main",
    },
    {
      title: t("projects.symplifika.title"),
      description: t("projects.symplifika.description"),
        tags: ["Python", "Django", "Vue.js", "IA", "Web App", t("projects.symplifika.productivity")],
      imageUrl: "/banner_symplifika.png",
      liveUrl: "#",
      githubUrl: "https://github.com/danmarquees/symplifika_django",
    },
     {
       title: t("projects.sentimind.title"),
       description: t("projects.sentimind.description"),
       tags: [
         "FastAPI",
         "Python",
         "MLOps",
         "Hugging Face",
         t("projects.sentimind.microservice"),
       ],
       imageUrl:
         "https://placehold.co/600x400/1e293b/6366f1?text=Sentimind+API&font=inter",
       liveUrl: "#",
       githubUrl: "#",
     },
     {
       title: t("projects.indiaoasis.title"),
       description: t("projects.indiaoasis.description"),
       tags: [
         "Django 5.2.3",
         "Python 3.11+",
         "MySQL/MariaDB",
         "HTML5",
         "CSS3",
         "JavaScript",
         "Bootstrap",
         "MercadoPago API",
         "Melhor Envio API",
         "FileBasedCache",
         t("projects.indiaoasis.ecommerce"),
       ],
       imageUrl: "/banner_india.png",
       liveUrl: "#",
       githubUrl: "#",
     },
  ];

  return (
    <motion.section
      id="projects"
      className={`py-20 sm:py-32 ${themeClasses.bgSecondary} ${themeClasses.textSecondary}`}
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
            {t("projects.title")}
          </h2>
          <p
            className={`text-lg ${themeClasses.textTertiary} max-w-2xl mx-auto`}
          >
            {t("projects.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${themeClasses.bgTertiary} rounded-lg shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3
                  className={`text-2xl font-semibold ${themeClasses.textPrimary} mb-3`}
                >
                  {project.title}
                </h3>
                <p className={`${themeClasses.textTertiary} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-900 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors"
                    type="button"
                    onClick={() => setSelectedProject(project)}
                  >
                    {t("projects.details")}
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {t("projects.github")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <ProjectDetailsCard
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
