/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Assuming we will use Link later, but for now keeping the button navigation or switching to Link if router is ready. But wait, the original code used window.history.pushState. I should stick to that or use Link if available. The original code didn't import Link but used it in Privacy.jsx? No, Privacy.jsx imported Link but it was not defined in the snippet I saw? Wait, Privacy.jsx snippet showed <Link> usage in line 119 but didn't import it. That's a bug in the original code. I will fix it to use the same button approach for now or just use <a> if it's external. But since we are refactoring, let's stick to the button approach for consistency until we add router.

const CookiePolicy = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-text-muted py-20"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => {
            window.history.pushState(null, "", "/");
            window.dispatchEvent(new PopStateEvent("popstate"));
          }}
          className="inline-flex items-center text-primary hover:text-primary-hover mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t("cookies.back", "Voltar ao Portfólio")}
        </button>

        <h1 className="text-4xl font-bold text-text mb-8">
          {t("cookies.title")}
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6 text-text-muted">
            {t("cookies.lastUpdate", "Última atualização")}:{" "}
            {new Date().toLocaleDateString(
              i18n.language === "en" ? "en-US" : "pt-BR",
            )}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-4">
              {t("cookies.whatAreCookiesTitle", "1. O que são Cookies")}
            </h2>
            <p className="mb-4 text-text-muted">
              {t(
                "cookies.whatAreCookiesDesc",
                "Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles ajudam a melhorar sua experiência de navegação e permitem que o site funcione corretamente.",
              )}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-4">
              2. Como Usamos Cookies
            </h2>
            <p className="mb-4 text-text-muted">
              Este site utiliza os seguintes tipos de cookies:
            </p>

            <h3 className="text-xl font-medium text-text mb-2">
              2.1 Cookies Essenciais
            </h3>
            <p className="mb-4 text-text-muted">
              Necessários para o funcionamento básico do site. Incluem cookies
              para aceitar políticas de privacidade e navegação segura.
            </p>

            <h3 className="text-xl font-medium text-text mb-2">
              2.2 Cookies de Análise
            </h3>
            <p className="mb-4 text-text-muted">
              Usados para entender como os visitantes interagem com o site,
              ajudando a melhorar a experiência do usuário. Estes cookies não
              coletam informações pessoais identificáveis.
            </p>

            <h3 className="text-xl font-medium text-text mb-2">
              2.3 Cookies de Terceiros
            </h3>
            <p className="mb-4 text-text-muted">
              Este site pode usar serviços de terceiros que definem seus
              próprios cookies, como:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4 text-text-muted">
              <li>Google Analytics (análise de tráfego)</li>
              <li>Formspree (processamento de formulários de contato)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-4">
              3. Controle de Cookies
            </h2>
            <p className="mb-4 text-text-muted">
              Você pode controlar e gerenciar cookies das seguintes maneiras:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4 text-text-muted">
              <li>
                A maioria dos navegadores permite bloquear ou excluir cookies
              </li>
              <li>
                Você pode configurar seu navegador para notificá-lo antes de
                aceitar cookies
              </li>
              <li>
                Alguns cookies podem ser gerenciados através das configurações
                do site
              </li>
            </ul>
            <p className="mb-4 text-text-muted">
              Observe que desabilitar cookies pode afetar a funcionalidade do
              site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-4">
              4. Cookies Específicos Usados
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 dark:border-slate-700 mb-4">
                <thead>
                  <tr className="bg-surface-alt">
                    <th className="border border-gray-200 dark:border-slate-700 p-3 text-left text-text">
                      Nome do Cookie
                    </th>
                    <th className="border border-gray-200 dark:border-slate-700 p-3 text-left text-text">
                      Finalidade
                    </th>
                    <th className="border border-gray-200 dark:border-slate-700 p-3 text-left text-text">
                      Duração
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">
                      cookiesAccepted
                    </td>
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">
                      Lembra sua aceitação da política de cookies
                    </td>
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">1 ano</td>
                  </tr>
                  <tr className="bg-surface-alt">
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">_ga</td>
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">
                      Google Analytics - identificação de sessão
                    </td>
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">2 anos</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">_gid</td>
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">
                      Google Analytics - identificação de usuário
                    </td>
                    <td className="border border-gray-200 dark:border-slate-700 p-3 text-text-muted">24 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-4">
              5. Consentimento
            </h2>
            <p className="mb-4 text-text-muted">
              Ao continuar navegando neste site após ver o banner de cookies,
              você concorda com o uso de cookies conforme descrito nesta
              política.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-4">
              6. Alterações nesta Política
            </h2>
            <p className="mb-4 text-text-muted">
              Podemos atualizar esta Política de Cookies periodicamente.
              Qualquer alteração será comunicada através do banner de cookies ou
              publicada nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text mb-4">
              7. Contato
            </h2>
            <p className="mb-4 text-text-muted">
              Para dúvidas sobre cookies ou esta política, entre em contato
              através do formulário em meu portfólio ou pelo e-mail:
              d.silvamarques@gmail.com
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePolicy;
