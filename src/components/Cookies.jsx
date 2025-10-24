/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-900 text-gray-300 py-20"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => {
            window.history.pushState(null, "", "/");
            window.dispatchEvent(new PopStateEvent("popstate"));
          }}
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t("cookies.back", "Voltar ao Portfólio")}
        </button>

        <h1 className="text-4xl font-bold text-white mb-8">
          {t("cookies.title")}
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            {t("cookies.lastUpdate", "Última atualização")}:{" "}
            {new Date().toLocaleDateString(
              i18n.language === "en" ? "en-US" : "pt-BR",
            )}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {t("cookies.whatAreCookiesTitle", "1. O que são Cookies")}
            </h2>
            <p className="mb-4">
              {t(
                "cookies.whatAreCookiesDesc",
                "Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles ajudam a melhorar sua experiência de navegação e permitem que o site funcione corretamente.",
              )}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Como Usamos Cookies
            </h2>
            <p className="mb-4">
              Este site utiliza os seguintes tipos de cookies:
            </p>

            <h3 className="text-xl font-medium text-white mb-2">
              2.1 Cookies Essenciais
            </h3>
            <p className="mb-4">
              Necessários para o funcionamento básico do site. Incluem cookies
              para aceitar políticas de privacidade e navegação segura.
            </p>

            <h3 className="text-xl font-medium text-white mb-2">
              2.2 Cookies de Análise
            </h3>
            <p className="mb-4">
              Usados para entender como os visitantes interagem com o site,
              ajudando a melhorar a experiência do usuário. Estes cookies não
              coletam informações pessoais identificáveis.
            </p>

            <h3 className="text-xl font-medium text-white mb-2">
              2.3 Cookies de Terceiros
            </h3>
            <p className="mb-4">
              Este site pode usar serviços de terceiros que definem seus
              próprios cookies, como:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Google Analytics (análise de tráfego)</li>
              <li>Formspree (processamento de formulários de contato)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Controle de Cookies
            </h2>
            <p className="mb-4">
              Você pode controlar e gerenciar cookies das seguintes maneiras:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
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
            <p className="mb-4">
              Observe que desabilitar cookies pode afetar a funcionalidade do
              site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Cookies Específicos Usados
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-700 mb-4">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="border border-slate-700 p-3 text-left text-white">
                      Nome do Cookie
                    </th>
                    <th className="border border-slate-700 p-3 text-left text-white">
                      Finalidade
                    </th>
                    <th className="border border-slate-700 p-3 text-left text-white">
                      Duração
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-700 p-3">
                      cookiesAccepted
                    </td>
                    <td className="border border-slate-700 p-3">
                      Lembra sua aceitação da política de cookies
                    </td>
                    <td className="border border-slate-700 p-3">1 ano</td>
                  </tr>
                  <tr className="bg-slate-800">
                    <td className="border border-slate-700 p-3">_ga</td>
                    <td className="border border-slate-700 p-3">
                      Google Analytics - identificação de sessão
                    </td>
                    <td className="border border-slate-700 p-3">2 anos</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 p-3">_gid</td>
                    <td className="border border-slate-700 p-3">
                      Google Analytics - identificação de usuário
                    </td>
                    <td className="border border-slate-700 p-3">24 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Consentimento
            </h2>
            <p className="mb-4">
              Ao continuar navegando neste site após ver o banner de cookies,
              você concorda com o uso de cookies conforme descrito nesta
              política.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Alterações nesta Política
            </h2>
            <p className="mb-4">
              Podemos atualizar esta Política de Cookies periodicamente.
              Qualquer alteração será comunicada através do banner de cookies ou
              publicada nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Contato
            </h2>
            <p className="mb-4">
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
