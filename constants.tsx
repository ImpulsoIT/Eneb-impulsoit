
import { Program, Testimonial } from './types.ts';

export const PROGRAMS: Program[] = [
  {
    id: 'doble-mba',
    title: 'Doble Máster: MBA + Maestría a elección',
    description: 'El programa más completo. Obtén dos titulaciones de maestría y potencia exponencialmente tu perfil directivo.',
    duration: '24 meses',
    ects: 120,
    paymentLink: 'https://go.hotmart.com/P104262470Y?ap=adee'
  },
  {
    id: 'mba',
    title: 'MBA - Administración y Dirección de Empresas',
    description: 'Liderazgo estratégico y gestión empresarial integral para el mercado global.',
    duration: '18 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204'
  },
  {
    id: 'mrrhh',
    title: 'Máster en Gestión y Dirección de RRHH',
    description: 'Especialización en gestión del talento, cultura organizacional y liderazgo.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204'
  },
  {
    id: 'mmkt',
    title: 'Máster en Dirección Comercial y Marketing',
    description: 'Domina las estrategias de ventas y marketing digital en entornos competitivos.',
    duration: '12 meses',
    ects: 60,
    paymentLink: 'https://pay.hotmart.com/Y92194798R?off=1f77986j&ref=J103284771A&bid=1770215326204'
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
