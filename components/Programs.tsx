
import React from 'react';
import { PROGRAMS, HOTMART_LINK } from '../constants';

interface ProgramsProps {
  onSelectProgram: (id: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programas" className="py-24 bg-enebLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-enebGrey mb-6 tracking-tight">Nuestras Maestrías y MBA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">Programas diseñados para responder a las exigencias reales del mercado laboral actual.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((prog) => (
            <div key={prog.id} className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border-2 ${prog.id === 'doble-mba' ? 'border-impulsoPink relative' : 'border-transparent'}`}>
              {prog.id === 'doble-mba' && (
                <div className="absolute top-0 right-0 bg-impulsoPink text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                  Más Popular
                </div>
              )}
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider ${prog.id === 'doble-mba' ? 'bg-impulsoPink text-white' : 'bg-gray-100 text-gray-500'}`}>
                    European Master
                  </span>
                  <span className="text-xs font-bold text-gray-400">{prog.ects} ECTS</span>
                </div>
                <h3 className="text-xl font-black mb-4 leading-tight text-enebGrey">{prog.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">{prog.description}</p>
                <div className="text-xs font-bold text-gray-400 flex items-center">
                  <span className="mr-2">⏱</span> Duración: {prog.duration}
                </div>
              </div>
              
              <div className="p-4 pt-0 space-y-2">
                <a 
                  href={HOTMART_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white text-center font-black py-4 rounded-xl text-sm hover:brightness-110 transition-all shadow-md"
                >
                  VER OFERTA EXCLUSIVA
                </a>
                <button 
                  onClick={() => onSelectProgram(prog.id)}
                  className="w-full bg-gray-50 hover:bg-gray-100 text-gray-400 font-bold py-3 rounded-xl text-xs transition-all uppercase tracking-widest"
                >
                  Solicitar Temario
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
             <p className="text-sm text-gray-600 font-medium">
                🎁 <span className="font-bold text-enebGrey">Beneficio ImpulsoIT:</span> Todos los programas incluyen acceso gratuito a un curso de Inglés Business y Certificado Universitario por la Isabel I.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
