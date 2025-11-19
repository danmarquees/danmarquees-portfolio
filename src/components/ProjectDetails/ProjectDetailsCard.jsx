import React from "react";
import { useTranslation } from "react-i18next";

const overlayStyle =
  "fixed inset-0 flex items-center justify-center z-40 transition-opacity duration-300 bg-black/50 backdrop-blur-sm";
const cardStyle =
  "bg-surface rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700 max-w-lg w-full p-0 sm:p-0 relative transform scale-95 opacity-0 animate-expand-popup";
const closeBtnStyle =
  "absolute top-4 right-4 text-text-muted hover:text-primary transition-colors text-3xl font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary";

// Adiciona animação via Tailwind + keyframes
const styleTag = (
  <style>
    {`
      @keyframes expand-popup {
        0% {
          opacity: 0;
          transform: scale(0.7);
        }
        80% {
          opacity: 1;
          transform: scale(1.05);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
      .animate-expand-popup {
        animation: expand-popup 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
    `}
  </style>
);

export default function ProjectDetailsCard({ project, onClose }) {
  const { t } = useTranslation();
  if (!project) return null;

  // Ícones SVG para botões
  const githubIcon = (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.21 1.18a11.2 11.2 0 012.93-.39c.99.01 1.99.13 2.93.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
    </svg>
  );
  const demoIcon = (
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 3v4a1 1 0 001 1h4M5 7V5a2 2 0 012-2h6a2 2 0 012 2v2m-1 4h-6m6 4h-6m6 4h-6" />
    </svg>
  );

  // Fechar ao pressionar ESC
  React.useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Foco automático no card
  const cardRef = React.useRef(null);
  React.useEffect(() => {
    if (cardRef.current) cardRef.current.focus();
  }, []);

  return (
    <>
      {styleTag}
      <div
        className={overlayStyle}
        onClick={onClose}
        tabIndex={-1}
        aria-label={t("projects.details")}
      >
        <div
          className={cardStyle + " sm:m-0 m-2"}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-details-title"
          ref={cardRef}
          tabIndex={0}
        >
          <button
            className={closeBtnStyle}
            aria-label={t("projects.details")}
            onClick={onClose}
          >
            &times;
          </button>
          <div className="overflow-hidden rounded-t-3xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-3xl shadow-md transition-transform duration-300 scale-100 hover:scale-105"
            />
          </div>
          <div className="p-8 pt-6">
            <h2
              id="project-details-title"
              className="text-3xl font-extrabold mb-2 text-primary tracking-tight"
            >
              {project.title}
            </h2>
            <p className="text-text-muted mb-4 text-base leading-relaxed">
              {project.description}
            </p>
            <div className="mb-4">
              <span className="font-semibold text-text block mb-2">
                {t("projects.techs")}
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm transition-transform duration-200 hover:scale-105 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-2 bg-surface-alt text-text rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors font-semibold shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {githubIcon}
                  {t("projects.github")}
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors font-semibold shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {demoIcon}
                  {t("projects.demo")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
