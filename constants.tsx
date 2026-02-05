
import { Program, Testimonial } from './types.ts';

const DRIVE_DOBLE = "https://drive.google.com/drive/folders/1nIWNYLU4mmcBHKDEo2sEJ0oWknJIwDwF";
const DRIVE_SINGLE = "https://drive.google.com/drive/folders/1kCjvymPMoZc_1Ca2ylSo6O537eCkRL3f";

export const PROGRAMS: Program[] = [
  {
    id: 'doble-mba',
    title: 'Doble Máster: MBA + Maestría a elección',
    description: 'El programa insignia: Obtén dos titulaciones superiores y lidera proyectos de alta complejidad.',
    duration: '24 meses',
    ects: 120,
    paymentLink: 'https://go.hotmart.com/P104262470Y?ap=adee',
    infoLink: DRIVE_DOBLE,
    discountPercentage: 89
  },
  {
    id: 'mba',
    title: 'MBA – Administración y Dirección de Empresas',
    description: 'Visión estratégica 360º para dirigir organizaciones en entornos globales y competitivos.',
    duration: '18 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'big-data',
    title: 'Máster en Big Data y Business Intelligence',
    description: 'Transforma datos masivos en decisiones estratégicas de alto impacto empresarial.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'coaching',
    title: 'Máster en Coaching y Mindfulness',
    description: 'Desarrolla el liderazgo consciente y maximiza el potencial humano en las organizaciones.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'fintech',
    title: 'Máster en Fintech & Blockchain',
    description: 'Domina las finanzas tecnológicas y la arquitectura descentralizada de la nueva economía.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'mercados',
    title: 'Máster en Mercados Financieros y Gestión de Activos',
    description: 'Especialización avanzada en análisis de inversión y gestión de carteras internacionales.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'digital-business',
    title: 'Máster en Digital Business',
    description: 'Lidera la transformación digital y los nuevos modelos de negocio tecnológicos.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'project',
    title: 'Máster en Project Management',
    description: 'Dirección profesional de proyectos bajo estándares internacionales de eficiencia.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'revenue',
    title: 'Máster en Revenue Management y Hospitality',
    description: 'Optimización de ingresos y gestión estratégica para el sector hotelero de lujo.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'logistica',
    title: 'Máster en Dirección Logística y Supply Chain',
    description: 'Gestión integral de la cadena de suministro y distribución en mercados globales.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'equipos',
    title: 'Máster en Gestión y Dirección de Equipos',
    description: 'Habilidades directivas para motivar y liderar equipos de alto rendimiento.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'rrhh',
    title: 'Máster en Recursos Humanos y Gestión del Talento',
    description: 'Estrategias innovadoras para la atracción, retención y desarrollo del capital humano.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'comercial',
    title: 'Máster en Dirección Comercial y Marketing',
    description: 'Incrementa la competitividad y las ventas mediante estrategias comerciales sólidas.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204',
    infoLink: DRIVE_SINGLE,
    discountPercentage: 80
  },
  {
    id: 'mkt-digital',
    title: 'Máster en Marketing Digital y Analytics',
    description: 'Domina el ecosistema digital y la analítica de datos para campañas de alto ROI.',
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
