import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Configuração do i18n
i18n
  .use(HttpBackend) // Carrega traduções via HTTP (útil para arquivos JSON em public/locales)
  .use(LanguageDetector) // Detecta idioma do navegador
  .use(initReactI18next) // Integra com React
  .init({
    fallbackLng: "pt",
    debug: false,
    interpolation: {
      escapeValue: false, // React já faz escaping
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
