
import { Program, Testimonial } from './types.ts';

const DRIVE_DOBLE = "https://drive.google.com/drive/folders/1nIWNYLU4mmcBHKDEo2sEJ0oWknJIwDwF";
const DRIVE_SINGLE = "https://drive.google.com/drive/folders/1kCjvymPMoZc_1Ca2ylSo6O537eCkRL3f";

export const PROGRAMS: Program[] = [
  {
    id: 'doble-mba',
    title: 'Doble Máster: MBA + Maestría a elección',
    description: 'La formación más completa: Obtén el MBA junto con una especialización técnica para dominar el mercado laboral.',
    duration: '24 meses',
    ects: 120,
    paymentLink: 'https://go.hotmart.com/P104262470Y?ap=adee',
    infoLink: DRIVE_DOBLE,
    discountPercentage: 89
  },
  {
    id: 'mba-admin',
    title: 'MBA – Administración y Dirección de Empresas',
    description: 'Desarrolla habilidades directivas y visión estratégica para liderar organizaciones en entornos competitivos.',
    duration: '18 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'big-data',
    title: 'Máster en Big Data y Business Intelligence',
    description: 'Aprende a gestionar y analizar grandes volúmenes de datos para la toma de decisiones empresariales inteligentes.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'coaching',
    title: 'Máster en Coaching y Mindfulness',
    description: 'Domina las herramientas de liderazgo personal y gestión emocional para potenciar el talento humano.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'fintech',
    title: 'Máster en Fintech & Blockchain',
    description: 'Especialízate en las tecnologías financieras que están revolucionando el sector bancario y económico global.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'mercados',
    title: 'Máster en Mercados Financieros y Gestión de Activos',
    description: 'Avanza en el análisis bursátil y la gestión profesional de carteras de inversión internacionales.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'digital-business',
    title: 'Máster en Digital Business',
    description: 'Domina los nuevos modelos de negocio digitales y lidera la transformación tecnológica de las empresas.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'project-management',
    title: 'Máster en Project Management',
    description: 'Gestiona proyectos de gran envergadura utilizando metodologías ágiles y estándares internacionales.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'revenue-hospitality',
    title: 'Máster en Revenue Management y Hospitality',
    description: 'Optimiza la rentabilidad en el sector hotelero mediante estrategias avanzadas de gestión de ingresos.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'logistica-supply',
    title: 'Máster en Dirección Logística y Supply Chain Management',
    description: 'Domina la cadena de suministro global y los procesos logísticos de última milla con eficiencia.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'gestion-equipos',
    title: 'Máster en Gestión y Dirección de Equipos',
    description: 'Potencia tus habilidades directivas para inspirar, motivar y liderar equipos de alto rendimiento.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'rrhh-talento',
    title: 'Máster en Recursos Humanos y Gestión del Talento',
    description: 'Descubre las tendencias en atracción y retención de talento en la era de la digitalización.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'comercial-marketing',
    title: 'Máster en Dirección Comercial y Marketing',
    description: 'Define estrategias de mercado exitosas y gestiona redes de ventas orientadas a resultados.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'mkt-analytics',
    title: 'Máster en Marketing Digital y Analytics',
    description: 'Especialízate en publicidad digital, SEO/SEM y análisis de datos para optimizar campañas.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Martínez',
    role: 'Director de Operaciones',
    content: 'La flexibilidad de ENEB me permitió obtener mi MBA mientras trabajaba a tiempo completo. La calidad académica superó mis expectativas.',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 2,
    name: 'Ana García',
    role: 'HR Manager',
    content: 'Un programa práctico y actualizado. La doble titulación con la Universidad Isabel I es un diferencial enorme en mi CV.',
    avatar: 'https://picsum.photos/id/65/100/100'
  }
];
