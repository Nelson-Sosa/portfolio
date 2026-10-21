// src/data/projects.js
// Datos centralizados de proyectos — fuente única de verdad

export const projects = [
  {
    id: 'codigopy',
    name: 'CodigoPy',
    category: 'Sistema de Punto de Venta',
    tagline: 'POS e inventario para negocios en Paraguay',
    description:
      'Sistema de punto de venta e inventario diseñado para negocios que necesitan administrar ventas, existencias y operaciones de caja. Soporta guaraníes, calcula márgenes, genera tickets para impresoras térmicas y gestiona roles de usuario.',
    highlights: [
      'Registro y administración de ventas',
      'Control de inventario en tiempo real',
      'Apertura y cierre de caja diaria',
      'Soporte nativo para guaraníes (Gs.) y dólar (USD)',
      'Generación de tickets para impresoras térmicas 80mm',
      'Roles de usuario (administrador / cajero)',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Nelson-Sosa/CodigoPy',
    demo: 'https://codigopy-pos.web.app/',
    image: '/CodigoPyPos.png',
    imageAlt: 'Panel de administración y control de caja del sistema de punto de venta CodigoPy',
    color: '#8b5cf6',
  },
  {
    id: 'tiendaonline',
    name: 'TiendaOnline',
    category: 'E-Commerce & Servicio Técnico',
    tagline: 'Plataforma de comercio electrónico tecnológico y soporte técnico',
    description:
      'Desarrollo de una plataforma de comercio electrónico orientada a productos tecnológicos, con catálogo organizado por categorías, búsqueda de productos, carrito de compras, favoritos y acceso a servicios de reparación y mantenimiento técnico. El proyecto combina una experiencia de compra intuitiva con herramientas de administración comercial.',
    highlights: [
      'Catálogo de productos tecnológicos y navegación por categorías',
      'Búsqueda en tiempo real, carrito de compras y lista de favoritos',
      'Autenticación Firebase y módulo de solicitud de servicio técnico',
      'Panel administrativo y gestión de productos e inventario',
    ],
    tech: ['React', 'Firebase', 'Cloud Firestore', 'Tailwind CSS', 'Vite', 'React Router'],
    github: 'https://github.com/Nelson-Sosa/Tienda_Online',
    demo: 'https://tienda-online-cf3c0.firebaseapp.com/',
    image: '/tiendaOnile.jpeg',
    imageAlt: 'Captura de pantalla de la plataforma TiendaOnline con catálogo y servicio técnico',
    color: '#10b981',
  },
  {
    id: 'sistema-comercial',
    name: 'Sistema Comercial',
    category: 'Plataforma de Gestión Comercial',
    tagline: 'Catálogo público y panel administrativo con autenticación y roles',
    description:
      'Aplicación web para la gestión comercial de pequeños y medianos negocios. Integra un catálogo público con un panel administrativo protegido por autenticación y roles de usuario, facilitando la administración de productos, categorías y pedidos desde una interfaz moderna y adaptable.',
    highlights: [
      'Dashboard con métricas comerciales y gráficos interactivos',
      'Catálogo público con búsqueda, filtros y precios en guaraníes',
      'Panel administrativo con autenticación Firebase y control por roles',
      'Gestión integral de productos (CRUD), categorías y seguimiento de pedidos',
    ],
    tech: ['React 19', 'Vite', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS 4', 'React Router', 'Recharts'],
    github: 'https://github.com/Nelson-Sosa/sistema-comercial',
    demo: 'https://sistema-comercial-cab54.web.app/catalogo',
    video: 'https://www.youtube.com/watch?v=NElaI9GQcUw',
    image: '/sistemaComercial.png',
    imageAlt: 'Catálogo público y gestión de productos de Sistema Comercial (SICOM)',
    color: '#f59e0b',
  },
  {
    id: 'barberpro',
    name: 'BarberPro',
    category: 'Sistema de Agendamiento Web',
    tagline: 'Reserva de turnos y catálogo de servicios para barberías',
    description:
      'Aplicación web de agendamiento de turnos para barberías, diseñada para facilitar la reserva de servicios desde dispositivos móviles. Presenta un catálogo de cortes con precios y duración, ofreciendo una experiencia de navegación clara, moderna y adaptada a los clientes del negocio.',
    highlights: [
      'Catálogo de servicios de barbería con precios en guaraníes y duración',
      'Flujo ágil de reserva de turnos adaptado a dispositivos móviles',
      'Integración con Firebase para autenticación y persistencia de datos',
      'Diseño Mobile First con identidad visual profesional negra y dorada',
    ],
    tech: ['React 19', 'Vite 8', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS 4', 'React Router v7', 'Framer Motion'],
    github: 'https://github.com/Nelson-Sosa/Sistema-Barberia',
    demo: 'https://sistema-barberia-23d77.web.app',
    image: '/barberia.jpeg',
    imageAlt: 'Interfaz móvil de BarberPro mostrando catálogo de servicios y reserva de turnos',
    imageFit: 'contain',
    color: '#eab308',
  },
  {
    id: 'puratech',
    name: 'PuraTech',
    category: 'E-Commerce Full Stack',
    tagline: 'Tienda de tecnología con panel administrativo completo',
    description:
      'Plataforma de comercio electrónico orientada a productos tecnológicos. Implementa autenticación JWT, control de acceso por roles (RBAC), sistema jerárquico de categorías, administración de inventario y optimización de imágenes con Cloudinary.',
    highlights: [
      'Autenticación JWT y control de roles (admin / usuario)',
      'Sistema de categorías jerárquico de 3 niveles',
      'Administración de productos e inventario',
      'Optimización y almacenamiento de imágenes con Cloudinary',
      'Experiencia de compra adaptable y responsiva',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Tailwind CSS'],
    github: 'https://github.com/Nelson-Sosa/PuraTech',
    demo: 'https://puratech-store.vercel.app/',
    image: null, // sin captura verificada; se usará placeholder visual
    color: '#3b82f6',
  },
  {
    id: 'manceg',
    name: 'MANCEG',
    category: 'Sistema de Gestión Empresarial',
    tagline: 'Aplicación CRUD con API REST y autenticación',
    description:
      'Aplicación de gestión empresarial con operaciones CRUD completas, API REST y autenticación JWT. Permite administrar información de forma organizada con módulos separados para diferentes áreas del negocio.',
    highlights: [
      'CRUD completo para gestión de recursos',
      'API REST con autenticación JWT',
      'Interfaz de inventario con vistas de lista y detalle',
      'Arquitectura separada frontend / backend',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Nelson-Sosa/MANCEG_PROYECT',
    demo: null,
    image: '/img/inicio.png', // verificada: existe en public/img/
    imageAlt: 'Pantalla principal del sistema MANCEG',
    color: '#22d3ee',
  },
];
