// ─── Navigation ────────────────────────────────────────────────────────────────
// Each entry: [href, translationIndex]
export const navItems = [
  ['#hero', 0],
  ['#about', 1],
  ['#education', 2],
  ['#projects', 3],
  ['#gallery', 4],
  ['#experience', 5],
  ['#github-section', 6],
  ['#contact', 7],
];

// ─── Marquee ────────────────────────────────────────────────────────────────────
export const marqueeItems = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'GSAP', 'Tailwind CSS',
  'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Figma', 'Python',
];

// ─── Skills ─────────────────────────────────────────────────────────────────────
// Order matches translation keys: t.skills[0..3]
export const skillGroups = [
  ['React', 'Next.js', 'TypeScript', 'GSAP', 'Tailwind', 'Three.js'],
  ['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL', 'REST APIs'],
  ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Vercel'],
  ['Figma', 'Git', 'Postman', 'VS Code', 'Linux'],
];

// ─── Projects ───────────────────────────────────────────────────────────────────
// Each entry: [name, imageUrl, techBadges[], githubUrl]
// githubUrl is optional — leave as '' if no public repo yet
export const projects = [
  ['LogiStruct ERP',            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', ['Go', 'Rust', 'GraphQL', 'PostgreSQL'],  'https://github.com/danmarquees/logistruct'],
  ['SGH Dispenser',             'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80', ['React', 'Dashboard', 'RBAC'],          ''],
  ['Personal Portfolio',        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', ['React', 'GSAP', 'Security'],        'https://github.com/danmarquees/portfolio'],
  ['MetricPath',                'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80', ['TypeScript', 'React', 'Django'],    'https://github.com/danmarquees/metricpath'],
  ['Sentimind API',             'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', ['Python', 'REST API', 'AI'],         'https://github.com/danmarquees/sentimind-api'],
  ['Kafka Fraud Detection',     'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80', ['Java', 'Kafka', 'Data'],            'https://github.com/danmarquees/kafka-fraud-detection'],
];

// ─── Gallery ────────────────────────────────────────────────────────────────────
// Each entry: [spanClass, category, imageUrl, altText]
export const galleryItems = [
  ['g1', 'ui',     'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80', 'Abstract gradient UI'],
  ['g2', 'web',    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',   'Code editor dark theme'],
  ['g3', 'brand',  'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80', 'Branding mockup'],
  ['g4', 'motion', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',   'Motion graphics neon'],
  ['g5', 'ui',     'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',   'UI design system'],
  ['g6', 'web',    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',   'Dashboard analytics'],
  ['g7', 'brand',  'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80', 'Typography poster'],
  ['g8', 'motion', 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80', '3D render abstract'],
  ['g9', 'ui',     'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80', 'Mobile app mockup'],
];

export const filterKeys = ['all', 'ui', 'web', 'motion', 'brand'];

// ─── Breadcrumb ─────────────────────────────────────────────────────────────────
// Each entry: [href, label]
export const breadcrumbSections = [
  ['#hero',           'Home'],
  ['#about',          'About'],
  ['#education',      'Education'],
  ['#projects',       'Projects'],
  ['#gallery',        'Gallery'],
  ['#experience',     'Experience'],
  ['#github-section', 'GitHub'],
  ['#contact',        'Contact'],
];
