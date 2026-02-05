
export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  ects: number;
  paymentLink: string;
  infoLink: string;
  discountPercentage: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
