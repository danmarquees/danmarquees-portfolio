# Dan Marques Portfolio

Portfolio pessoal de Dan Marques, desenvolvedor full stack em Sao Paulo, focado em interfaces de produto, React, Node.js, APIs, automacao e experiencias web com acabamento visual.

Site principal: [danmarquesdev.com](https://danmarquesdev.com/)

## Visao Geral

Este projeto e uma single page application feita com React e Vite. A pagina combina uma apresentacao editorial, secoes de projetos, galeria visual, experiencia, integracao com GitHub e formulario de contato.

O portfolio tambem inclui configuracoes de SEO para o dominio proprio, metadados sociais, JSON-LD, sitemap, robots.txt, favicon e imagem Open Graph.

## Stack

- React 19
- Vite 7
- GSAP para animacoes
- EmailJS para formulario de contato
- DOMPurify para renderizacao segura de rich text
- react-github-calendar para calendario de contribuicoes
- CSS customizado em `style.css`

## Recursos

- Hero tipografico responsivo
- Tema claro/escuro com persistencia em `localStorage`
- Suporte a idiomas `en`, `pt-BR`, `es` e `ja`
- Navegacao por secoes com estado ativo
- Projetos com drawer de detalhes
- Galeria com filtros e lightbox
- Secao de GitHub com estatisticas publicas e calendario de contribuicoes
- Formulario de contato via EmailJS
- SEO dinamico por idioma
- Favicon SVG e imagem social `1200x630`
- Configuracoes de headers de seguranca para Vercel e Netlify

## Como Rodar Localmente

Requisitos:

- Node.js 20 ou superior
- npm

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a build de producao:

```bash
npm run build
```

Visualize a build localmente:

```bash
npm run preview
```

## Variaveis de Ambiente

O formulario de contato usa EmailJS. Crie um arquivo `.env` local com:

```bash
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

Sem essas variaveis, o site ainda carrega, mas o envio do formulario nao funcionara corretamente.

## Estrutura Principal

```text
.
├── index.html
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── og-image.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── constants/
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   └── translations.js
├── style.css
├── vercel.json
└── netlify.toml
```

## Onde Editar Conteudo

- Textos por idioma: `src/translations.js`
- Projetos, skills, galeria e navegacao: `src/constants/data.js`
- SEO, dominio e JSON-LD: `src/constants/seo.js`
- Metatags estaticas iniciais: `index.html`
- Estilos globais e responsividade: `style.css`
- Componentes de secao: `src/components/sections/`

## SEO e Dominio

O dominio canonico configurado e:

```text
https://danmarquesdev.com/
```

Arquivos e pontos importantes:

- `index.html`: canonical, Open Graph, Twitter Card e JSON-LD inicial
- `src/constants/seo.js`: SEO usado dinamicamente pelo React
- `src/hooks/useSeo.js`: atualiza metadados conforme idioma ativo
- `public/sitemap.xml`: sitemap enviado para buscadores
- `public/robots.txt`: referencia o sitemap
- `public/og-image.png`: imagem usada em previews sociais
- `vercel.json`: redirect permanente do dominio `.vercel.app` para o dominio principal

Apos deploys relevantes, envie ou atualize o sitemap no Google Search Console:

```text
https://danmarquesdev.com/sitemap.xml
```

## Deploy

O projeto esta pronto para deploy em Vercel ou Netlify.

Na Vercel, mantenha o dominio `danmarquesdev.com` configurado como dominio principal. O arquivo `vercel.json` tambem define headers de seguranca e redirect permanente do host antigo `danmarquesdev.vercel.app`.

Na Netlify, os headers equivalentes estao em `netlify.toml`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Licenca

Projeto privado e pessoal. Todos os direitos reservados a Dan Marques.
