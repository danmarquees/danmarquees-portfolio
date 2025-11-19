import React from "react";
import { useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mjkanygy"); // Substitua pelo seu Form ID do Formspree

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 bg-background text-text-muted"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-surface-alt rounded-lg">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-text">
                  {t("contact.emailTitle", "Email")}
                </h3>
                <p className="text-text-muted">
                  {t("contact.emailDesc", "Entre em contato para orçamentos")}
                </p>
                <a
                  href="mailto:d.silvamarques@gmail.com"
                  className="text-primary hover:text-primary-hover break-all"
                >
                  d.silvamarques@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start p-4 bg-surface-alt rounded-lg">
              <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-text">
                  {t("contact.phoneTitle", "Telefone / WhatsApp")}
                </h3>
                <p className="text-text-muted">
                  {t("contact.phoneDesc", "Disponível para contato comercial")}
                </p>
                <a
                  href="tel:+5511970943345"
                  className="text-primary hover:text-primary-hover"
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
                className="block text-sm font-medium text-text-muted mb-2"
              >
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 dark:border-slate-700 text-text focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-muted mb-2"
              >
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 dark:border-slate-700 text-text focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-muted mb-2"
              >
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 dark:border-slate-700 text-text focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary-hover transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting
                  ? t("contact.sending", "Enviando...")
                  : t("contact.sendMessage", "Enviar Mensagem")}
              </button>
            </div>
            {state.succeeded && (
              <p className="text-center text-green-500">
                {t("contact.success", "Mensagem enviada com sucesso!")}
              </p>
            )}
            {state.errors && state.errors.length > 0 && (
              <p className="text-center text-red-500">
                {t(
                  "contact.error",
                  "Erro ao enviar mensagem. Tente novamente.",
                )}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;