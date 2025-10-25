import React from "react";
import { useForm } from "@formspree/react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const { themeClasses } = useTheme();
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mjkanygy"); // Substitua pelo seu Form ID do Formspree

  return (
    <section
      id="contact"
      className={`py-20 sm:py-32 ${themeClasses.bgPrimary} ${themeClasses.textSecondary}`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4`}
          >
            {t("contact.title")}
          </h2>
          <p
            className={`text-lg ${themeClasses.textTertiary} max-w-2xl mx-auto`}
          >
            {t("contact.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div
              className={`flex items-start p-4 ${themeClasses.bgSecondary} rounded-lg`}
            >
              <Mail className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3
                  className={`text-xl font-semibold ${themeClasses.textPrimary}`}
                >
                  {t("contact.emailTitle", "Email")}
                </h3>
                <p className={`${themeClasses.textTertiary}`}>
                  {t("contact.emailDesc", "Entre em contato para orçamentos")}
                </p>
                <a
                  href="mailto:d.silvamarques@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300 break-all"
                >
                  d.silvamarques@gmail.com
                </a>
              </div>
            </div>
            <div
              className={`flex items-start p-4 ${themeClasses.bgSecondary} rounded-lg`}
            >
              <Phone className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3
                  className={`text-xl font-semibold ${themeClasses.textPrimary}`}
                >
                  {t("contact.phoneTitle", "Telefone / WhatsApp")}
                </h3>
                <p className={`${themeClasses.textTertiary}`}>
                  {t("contact.phoneDesc", "Disponível para contato comercial")}
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
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className={`w-full px-4 py-3 rounded-lg ${themeClasses.bgCard} ${themeClasses.borderSecondary} ${themeClasses.textPrimary} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className={`w-full px-4 py-3 rounded-lg ${themeClasses.bgCard} ${themeClasses.borderSecondary} ${themeClasses.textPrimary} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className={`w-full px-4 py-3 rounded-lg ${themeClasses.bgCard} ${themeClasses.borderSecondary} ${themeClasses.textPrimary} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting
                  ? t("contact.sending", "Enviando...")
                  : t("contact.sendMessage", "Enviar Mensagem")}
              </button>
            </div>
            {state.succeeded && (
              <p className="text-center text-green-400">
                {t("contact.success", "Mensagem enviada com sucesso!")}
              </p>
            )}
            {state.errors && state.errors.length > 0 && (
              <p className="text-center text-red-400">
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