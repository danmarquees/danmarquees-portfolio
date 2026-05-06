export const siteUrl = 'https://danmarquesdev.com/';
export const siteImage = `${siteUrl}og-image.png`;
export const contactEmail = 'd.silvamarques@proton.me';

export const seoByLanguage = {
  en: {
    locale: 'en_US',
    title: 'Dan Marques | Full Stack Developer in Sao Paulo',
    description:
      'Dan Marques is a full stack developer in Sao Paulo, Brazil, building React, Node.js, API, automation, and product interface projects for freelance and remote teams.',
    keywords:
      'Dan Marques, full stack developer, React developer, Node.js developer, frontend developer, web developer Sao Paulo, freelance developer Brazil, portfolio',
  },
  'pt-BR': {
    locale: 'pt_BR',
    title: 'Dan Marques | Desenvolvedor Full Stack em Sao Paulo',
    description:
      'Dan Marques e desenvolvedor full stack em Sao Paulo, criando projetos com React, Node.js, APIs, automacao e interfaces de produto para freelas e times remotos.',
    keywords:
      'Dan Marques, desenvolvedor full stack, desenvolvedor React, desenvolvedor Node.js, frontend, desenvolvedor web Sao Paulo, freelancer, portfolio',
  },
  es: {
    locale: 'es_ES',
    title: 'Dan Marques | Desarrollador Full Stack en Sao Paulo',
    description:
      'Dan Marques es desarrollador full stack en Sao Paulo, Brasil, creando proyectos con React, Node.js, APIs, automatizacion e interfaces de producto para freelance y equipos remotos.',
    keywords:
      'Dan Marques, desarrollador full stack, desarrollador React, desarrollador Node.js, frontend, desarrollador web Sao Paulo, freelance, portafolio',
  },
};

export const defaultSeo = seoByLanguage.en;

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Dan Marques',
      url: siteUrl,
      image: siteImage,
      description:
        'Full stack developer in Sao Paulo, Brazil, focused on React, Node.js, APIs, automation, and product interfaces.',
      jobTitle: 'Full Stack Developer',
      email: `mailto:${contactEmail}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sao Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      sameAs: ['https://github.com/danmarquees'],
      knowsAbout: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'Frontend Development',
        'Backend Development',
        'API Development',
        'Web Automation',
        'Product Interfaces',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: 'Dan Marques Portfolio',
      inLanguage: ['en', 'pt-BR', 'es'],
      publisher: {
        '@id': `${siteUrl}#person`,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}#profile`,
      url: siteUrl,
      name: 'Dan Marques | Full Stack Developer',
      description:
        'Portfolio of Dan Marques, a full stack developer from Sao Paulo focused on web products, React interfaces, APIs, automation, and practical product delivery.',
      inLanguage: ['en', 'pt-BR', 'es'],
      isPartOf: {
        '@id': `${siteUrl}#website`,
      },
      mainEntity: {
        '@id': `${siteUrl}#person`,
      },
    },
  ],
};
