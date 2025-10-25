import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const CookieBanner = () => {
  const { themeClasses } = useTheme();
  const [isVisible, setIsVisible] = useState(() => {
    // Verifica se já foi aceito
    return !localStorage.getItem("cookiesAccepted");
  });

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 ${themeClasses.bgCard} ${themeClasses.borderPrimary} p-4 z-50`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className={`text-sm ${themeClasses.textSecondary}`}>
              Este site utiliza cookies para melhorar sua experiência. Ao
              continuar navegando, você concorda com nossa{" "}
              <button
                onClick={() => {
                  window.history.pushState(null, "", "/politica-privacidade");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Política de Privacidade
              </button>{" "}
              e{" "}
              <button
                onClick={() => {
                  window.history.pushState(null, "", "/politica-cookies");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Política de Cookies
              </button>
              .
            </p>
          </div>
          <button
            onClick={acceptCookies}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium whitespace-nowrap"
          >
            Aceitar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;