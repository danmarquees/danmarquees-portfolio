import React, { useState, useEffect, Suspense, lazy } from "react";
import { useTheme } from "./contexts/ThemeContext";
import Header from "./components/Header";
import PrivacyPolicy from "./components/Privacy";
import CookiePolicy from "./components/Cookies";
import CookieBanner from "./components/ConsentBanner";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

// Lazy load components
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const SkillsCertificationsSection = lazy(
  () => import("./components/SkillsCertificationsSection"),
);
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

// --- Componente Principal App ---

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const { themeClasses } = useTheme();

  // Adiciona scroll suave e padding no topo para o header fixo
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    // h-16 (header height) = 4rem
    document.documentElement.style.scrollPaddingTop = "4rem";
  }, []);

  // Listen for path changes (simple routing without React Router)
  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case "/politica-privacidade":
        return <PrivacyPolicy />;
      case "/politica-cookies":
        return <CookiePolicy />;
      default:
        return (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div>
              </div>
            }
          >
            <Header />
            <main>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <SkillsCertificationsSection />
              <ProjectsSection />
              <ContactSection />
            </main>
            <Footer />
            <ScrollToTop />
          </Suspense>
        );
    }
  };

  return (
    <div className={themeClasses.bgPrimary}>
      <style>{`
        /* Webkit Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        .dark ::-webkit-scrollbar-track {
          background: #1e293b; /* slate-800 */
        }
        ::-webkit-scrollbar-track {
          background: #f3f4f6; /* gray-100 */
        }
        .dark ::-webkit-scrollbar-thumb {
          background: #4f46e5; /* indigo-600 */
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #6366f1; /* indigo-500 */
          border-radius: 4px;
        }
        .dark ::-webkit-scrollbar-thumb:hover {
          background: #4338ca; /* indigo-700 */
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4f46e5; /* indigo-600 */
        }
        /* Padrão de "grãos" (opcional, para o hero) */
        .grain-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      {renderContent()}
      <CookieBanner />
      <WhatsAppButton />
    </div>
  );
}
