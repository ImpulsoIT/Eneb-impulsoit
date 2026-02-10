
import React from 'react';
import { TESTIMONIALS } from '../constants.tsx';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-enebGrey mb-4 tracking-tight">Experiencias de nuestros Graduados</h2>
          <div className="flex justify-center mb-4" aria-label="Calificación de 5 estrellas">
            <span className="text-yellow-400 text-lg md:text-xl">★★★★★</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <article key={t.id} className="p-6 md:p-8 bg-gray-50 rounded-2xl relative shadow-sm hover:bg-white transition-colors duration-300">
              <div className="absolute top-6 right-8 text-3xl md:text-4xl text-gray-200" aria-hidden="true">"</div>
              <p className="text-sm md:text-base text-gray-600 mb-8 italic relative z-10 leading-relaxed">
                {t.content}
              </p>
              <footer className="flex items-center">
                <img 
                  src={t.avatar} 
                  alt={`Foto de perfil de ${t.name}, graduado de ENEB`} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4 object-cover border border-gray-200" 
                />
                <div>
                  <h4 className="font-bold text-enebGrey text-sm md:text-base">{t.name}</h4>
                  <p className="text-[9px] md:text-xs text-gray-400 uppercase font-bold tracking-wider">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
