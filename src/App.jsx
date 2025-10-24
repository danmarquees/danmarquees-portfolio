import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import PrivacyPolicy from "./components/Privacy";
import CookiePolicy from "./components/Cookies";
import {
  Menu,
  X,
  Code,
  Server,
  Database,
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  Phone,
  ArrowUp,
  Briefcase,
  User,
  Home,
  Award,
  Shield,
  Zap,
  Cloud,
  Cpu,
} from "lucide-react";

// --- Componente Header (Cabeçalho e Navegação) ---
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Adiciona sombra ao header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home", icon: Home },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Serviços", href: "#services", icon: Briefcase },
    { name: "Habilidades", href: "#skills", icon: Award },
    { name: "Projetos", href: "#projects", icon: Code },
    { name: "Contato", href: "#contact", icon: Mail },
  ];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={`
          ${isMobile ? "flex items-center px-4 py-3 text-lg text-gray-200 hover:bg-indigo-700 rounded-lg" : "text-sm font-medium text-gray-300 hover:text-white transition-colors"}
        `}
      >
        {isMobile && <link.icon className="w-5 h-5 mr-3" />}
        {link.name}
      </a>
    ));

  return (
    <header
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? "bg-slate-900/90 shadow-lg backdrop-blur-lg" : "bg-transparent"}
    `}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nome */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white">
              DanMarques<span className="text-indigo-400">.dev</span>
            </a>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {renderNavLinks()}
          </div>

          {/* Botão de Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Abrir menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-800 shadow-lg p-4 border-t border-slate-700">
          <div className="flex flex-col space-y-2">{renderNavLinks(true)}</div>
        </div>
      )}
    </header>
  );
};

// --- Componente Hero (Seção Inicial) ---
const HeroSection = () => (
  <section
    id="home"
    className="relative h-screen flex items-center justify-center text-center bg-slate-900 text-white overflow-hidden"
  >
    {/* Efeito de fundo (opcional) */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 opacity-80"></div>
    <div className="absolute inset-0 grain-bg opacity-5"></div>

    <div className="relative z-10 p-4">
      <img
        src="https://placehold.co/160x160/6366f1/ffffff?text=DM&font=inter"
        alt="Danilo Marques"
        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-indigo-400 shadow-lg"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        Olá, eu sou <span className="text-indigo-400">Danilo Marques</span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
        Desenvolvedor Full Stack | Especialista em Marketplaces e Soluções Web
        Sustentáveis
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#projects"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300"
        >
          Meus Projetos
        </a>
        <a
          href="#contact"
          className="inline-block bg-slate-700 text-gray-200 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-600 transition-transform transform hover:scale-105 duration-300"
        >
          Entrar em Contato
        </a>
      </div>
    </div>
  </section>
);

// --- Componente Sobre Mim ---
const AboutSection = () => (
  <motion.section
    id="about"
    className="py-20 sm:py-32 bg-slate-800 text-gray-300"
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
            src="https://placehold.co/400x400/1e293b/6366f1?text=Sobre+Mim&font=inter"
            alt="Dan Marques - Desenvolvedor Fullstack"
            className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
          />
        </div>
        {/* Texto (agora segunda na ordem visual em telas maiores) */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Sobre Mim</h2>
          <p className="text-lg mb-4">
            Profissional em Tecnologia da Informação com experiência no
            desenvolvimento de soluções digitais, especialmente em plataformas
            de marketplace e sistemas web.
          </p>
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

// --- Componente Serviços ---
const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Frontend",
      description:
        "Interfaces ricas e responsivas com React, HTML5, CSS3 e Tailwind. Foco em performance e UX.",
    },
    {
      icon: Server,
      title: "Desenvolvimento Backend",
      description:
        "APIs robustas e escaláveis com Python (Django, FastAPI) e Node.js. Arquiteturas de microsserviços.",
    },
    {
      icon: Database,
      title: "Banco de Dados & DevOps",
      description:
        "Modelagem e gestão de bancos de dados (PostgreSQL, MySQL, MongoDB) e pipelines de CI/CD com Docker, AWS e Google Cloud.",
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-20 sm:py-32 bg-slate-900 text-gray-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meus Serviços
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ofereço um ciclo completo de desenvolvimento para sua aplicação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/10"
            >
              <div className="mb-6">
                <service.icon className="h-10 w-10 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- Componente Habilidades & Certificações ---
const SkillsCertificationsSection = () => {
  const skills = [
    { name: "Python", icon: Code, level: "Avançado" },
    { name: "JavaScript", icon: Zap, level: "Avançado" },
    { name: "React", icon: Code, level: "Avançado" },
    { name: "Django", icon: Server, level: "Avançado" },
    { name: "FastAPI", icon: Server, level: "Intermediário" },
    { name: "PostgreSQL", icon: Database, level: "Avançado" },
    { name: "MongoDB", icon: Database, level: "Intermediário" },
    { name: "Docker", icon: Cloud, level: "Intermediário" },
    { name: "AWS", icon: Cloud, level: "Intermediário" },
    { name: "Google Cloud", icon: Cloud, level: "Básico" },
    { name: "Machine Learning", icon: Cpu, level: "Intermediário" },
    { name: "Tailwind CSS", icon: Code, level: "Avançado" },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: Shield,
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      icon: Shield,
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      icon: Award,
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 sm:py-32 bg-slate-900 text-gray-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Habilidades & Certificações
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Meu arsenal técnico e conquistas profissionais.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Habilidades Técnicas */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Code className="w-6 h-6 mr-3 text-indigo-400" />
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors"
                >
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-5 h-5 text-indigo-400 mr-2" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Certificações */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-indigo-400" />
              Certificações
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors"
                >
                  <div className="flex items-start">
                    <cert.icon className="w-6 h-6 text-indigo-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gray-400 mb-1">{cert.issuer}</p>
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

// --- Componente Projetos ---
const ProjectsSection = () => {
  const projects = [
    {
      title: "OrganyxHub (Marketplace Sustentável)",
      description:
        "Plataforma de marketplace sustentável com integração de pagamentos e arquitetura escalável.",
      tags: ["Django", "Python", "PostgreSQL", "Pagamentos", "Marketplace"],
      imageUrl:
        "https://placehold.co/600x400/1e293b/6366f1?text=OrganyxHub&font=inter",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Symplifika (Automação de textos com IA)",
      description:
        'Aplicação web para gestão inteligente de atalhos de texto, aumentando a produtividade ao expandir "gatilhos" automaticamente.',
      tags: ["React", "IA", "Web App", "Produtividade"],
      imageUrl:
        "https://placehold.co/600x400/1e293b/6366f1?text=Symplifika&font=inter",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sentimind API (MLOps)",
      description:
        "Microsserviço para análise de sentimento e sumarização de texto, construído com FastAPI e modelos Hugging Face. Foco em MLOps.",
      tags: ["FastAPI", "Python", "MLOps", "Hugging Face", "Microsserviço"],
      imageUrl:
        "https://placehold.co/600x400/1e293b/6366f1?text=Sentimind+API&font=inter",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 sm:py-32 bg-slate-800 text-gray-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projetos Recentes
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Uma seleção de projetos que demonstram minhas habilidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- Componente Contato ---
const ContactSection = () => {
  const [state, handleSubmit] = useForm("mjkanygy"); // Substitua pelo seu Form ID do Formspree

  return (
    <section id="contact" className="py-20 sm:py-32 bg-slate-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Vamos Conversar
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer bater um papo? Me envie uma
            mensagem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-slate-800 rounded-lg">
              <Mail className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-400">
                  Entre em contato para orçamentos
                </p>
                <a
                  href="mailto:d.silvamarques@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300 break-all"
                >
                  d.silvamarques@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start p-4 bg-slate-800 rounded-lg">
              <Phone className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">
                  Telefone / WhatsApp
                </h3>
                <p className="text-gray-400">
                  Disponível para contato comercial
                </p>
                <a
                  href="tel:+5511970943345"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  +55 (11) 97094-3345
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </div>
            {state.succeeded && (
              <p className="text-center text-green-400">
                Mensagem enviada com sucesso!
              </p>
            )}
            {state.errors && state.errors.length > 0 && (
              <p className="text-center text-red-400">
                Erro ao enviar mensagem. Tente novamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

// --- Componente Footer (Rodapé) ---
const Footer = () => (
  <footer className="bg-slate-950 text-gray-400 py-12">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://github.com/danmarquees"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github className="w-7 h-7" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/danilosmarques"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-7 h-7" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} DanMarques.dev. Todos os direitos
        reservados.
      </p>
      <p className="text-xs mt-2">Feito com React, Tailwind CSS e ❤️</p>
    </div>
  </footer>
);

// --- Componente Cookie Banner ---
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(() => {
    // Verifica se já foi aceito
    return !localStorage.getItem('cookiesAccepted');
  });

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 p-4 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-300 text-sm">
              Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
              <button
                onClick={() => {
                  window.history.pushState(null, '', '/politica-privacidade');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Política de Privacidade
              </button>{" "}
              e{" "}
              <button
                onClick={() => {
                  window.history.pushState(null, '', '/politica-cookies');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Política de Cookies
              </button>.
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

// --- Componente Scroll to Top ---
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão quando o usuário rolar 300px para baixo
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Rola para o topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white
        shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// --- Componente Principal App ---
export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Adiciona scroll suave e padding no topo para o header fixo
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    // h-16 (header height) = 4rem
    document.documentElement.style.scrollPaddingTop = "4rem";
  }, []);

  // Listen for path changes (simple routing without React Router)
  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '/politica-privacidade':
        return <PrivacyPolicy />;
      case '/politica-cookies':
        return <CookiePolicy />;
      default:
        return (
          <>
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
            <CookieBanner />
          </>
        );
    }
  };

  return (
    <div className="bg-slate-900">
      <style>{`
        /* Webkit Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1e293b; /* slate-800 */
        }
        ::-webkit-scrollbar-thumb {
          background: #4f46e5; /* indigo-600 */
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4338ca; /* indigo-700 */
        }
        /* Padrão de "grãos" (opcional, para o hero) */
        .grain-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      {renderContent()}
    </div>
  );
}
