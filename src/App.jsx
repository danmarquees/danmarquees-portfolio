import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
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
  // Adiciona scroll suave e padding no topo para o header fixo
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    // h-16 (header height) = 4rem
    document.documentElement.style.scrollPaddingTop = "4rem";
  }, []);

  return (
    <div className="bg-background min-h-screen text-text transition-colors duration-300">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen bg-background">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
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
          }
        />
        <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
        <Route path="/politica-cookies" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
      <WhatsAppButton />
    </div>
  );
}
