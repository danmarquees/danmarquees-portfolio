import React, { useState } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
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
    <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-200 dark:border-slate-700 p-4 z-50 shadow-lg">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-text-muted">
              Este site utiliza cookies para melhorar sua experiência. Ao
              continuar navegando, você concorda com nossa{" "}
              <Link
                to="/politica-privacidade"
                className="text-primary hover:text-primary-hover underline"
              >
                Política de Privacidade
              </Link>{" "}
              e{" "}
              <Link
                to="/politica-cookies"
                className="text-primary hover:text-primary-hover underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </div>
          <button
            onClick={acceptCookies}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors text-sm font-medium whitespace-nowrap"
          >
            Aceitar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;