/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
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
          {t("privacy.back", "Voltar ao Portfólio")}
        </button>

        <h1 className="text-4xl font-bold text-white mb-8">
          {t("privacy.title")}
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            {t("privacy.lastUpdate", "Última atualização")}:{" "}
            {new Date().toLocaleDateString(
              i18n.language === "en" ? "en-US" : "pt-BR",
            )}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {t("privacy.introTitle", "1. Introdução")}
            </h2>
            <p className="mb-4">
              {t(
                "privacy.introDesc",
                'Esta Política de Privacidade descreve como Danilo Marques ("nós", "nosso" ou "eu") coleta, usa e protege suas informações pessoais quando você visita meu portfólio online.',
              )}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Informações que Coletamos
            </h2>
            <h3 className="text-xl font-medium text-white mb-2">
              2.1 Informações Fornecidas Voluntariamente
            </h3>
            <p className="mb-4">
              Quando você entra em contato comigo através do formulário de
              contato, posso coletar:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Nome</li>
              <li>Endereço de e-mail</li>
              <li>Mensagem</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2">
              2.2 Informações Coletadas Automaticamente
            </h3>
            <p className="mb-4">
              Quando você visita meu site, posso coletar automaticamente:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Endereço IP</li>
              <li>Tipo de navegador e versão</li>
              <li>Páginas visitadas</li>
              <li>Tempo gasto no site</li>
              <li>Referenciador</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Como Usamos suas Informações
            </h2>
            <p className="mb-4">Usamos as informações coletadas para:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Responder às suas mensagens de contato</li>
              <li>Melhorar meu site e serviços</li>
              <li>Analisar o tráfego do site</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p className="mb-4">
              Não vendo, alugo ou compartilho suas informações pessoais com
              terceiros, exceto:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Quando exigido por lei</li>
              <li>Com seu consentimento explícito</li>
              <li>Para proteger meus direitos legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Cookies
            </h2>
            <p className="mb-4">
              Este site utiliza cookies para melhorar sua experiência. Para mais
              detalhes, consulte nossa{" "}
              <Link
                to="/politica-cookies"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Segurança
            </h2>
            <p className="mb-4">
              Implemento medidas de segurança apropriadas para proteger suas
              informações pessoais contra acesso não autorizado, alteração,
              divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Seus Direitos
            </h2>
            <p className="mb-4">Você tem o direito de:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações inexatas</li>
              <li>Solicitar exclusão de seus dados</li>
              <li>Se opor ao processamento de seus dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Contato
            </h2>
            <p className="mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em
              contato comigo através do formulário em meu portfólio ou pelo
              e-mail: d.silvamarques@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Alterações nesta Política
            </h2>
            <p className="mb-4">
              Posso atualizar esta Política de Privacidade periodicamente.
              Qualquer alteração será publicada nesta página com a data da
              última atualização.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
