
import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-enebGrey mb-4">Lo que dicen nuestros alumnos</h2>
          <div className="flex justify-center mb-4">
            <span className="text-yellow-400 text-xl">★★★★★</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 bg-gray-50 rounded-2xl relative shadow-sm">
              <div className="absolute top-8 right-8 text-4xl text-gray-200">"</div>
              <p className="text-gray-600 mb-8 italic relative z-10 leading-relaxed">
                {t.content}
              </p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-bold text-enebGrey">{t.name}</h4>
                  <p className="text-xs text-gray-400 uppercase font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
