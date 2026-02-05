
import React from 'react';
import { PROGRAMS } from '../constants.tsx';

interface ProgramsProps {
  onSelectProgram: (id: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-6xl font-black text-enebGrey mb-6 tracking-tight">Tu Futuro, <span className="text-impulsoPink">Sin Barreras.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-base md:text-lg italic px-4">
            Becas de hasta el 80% disponibles solo a través de ImpulsoIT. Paga en tu moneda local.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 px-2">
             <span className="bg-green-100 text-green-700 px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest">✅ Pago Local</span>
             <span className="bg-blue-100 text-blue-700 px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest">✅ Hasta 2 Cuotas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PROGRAMS.map((prog) => (
            <div key={prog.id} className={`group bg-gray-50 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 flex flex-col h-full border-2 ${prog.id === 'doble-mba' ? 'border-impulsoPink relative md:scale-105 z-10 shadow-lg' : 'border-transparent'}`}>
              {prog.id === 'doble-mba' && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white text-[9px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest animate-pulse">
                  RECOMENDADO
                </div>
              )}
              <div className="p-6 md:p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[9px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider ${prog.id === 'doble-mba' ? 'bg-impulsoPink/10 text-impulsoPink' : 'bg-gray-200 text-gray-500'}`}>
                    {prog.ects} ECTS
                  </span>
                  <div className="text-right">
                    <span className="block text-[9px] text-gray-400 line-through font-bold">WAS €2,400</span>
                    <span className="text-lg md:text-xl font-black text-enebGrey italic">80% OFF</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 leading-tight text-enebGrey group-hover:text-impulsoPink transition-colors">{prog.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">{prog.description}</p>
                <div className="flex items-center text-[10px] font-black text-gray-400 space-x-3">
                  <span>⏱ {prog.duration}</span>
                  <span className="hidden sm:inline">|</span>
                  <span>🎓 Título Oficial</span>
                </div>
              </div>
              
              <div className="p-6 pt-0 space-y-3">
                <a 
                  href={prog.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0a0a0a] hover:bg-impulsoPink text-white text-center font-black py-4 md:py-5 rounded-2xl text-xs md:text-sm transition-all shadow-xl transform group-hover:-translate-y-1"
                >
                  ¡QUIERO MI BECA YA!
                </a>
                <p className="text-center text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  Paga en tu moneda local • 2 cuotas
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 text-center animate-fade-in-up">
           <div className="inline-block relative w-full max-w-4xl px-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-3xl blur opacity-10"></div>
              <div className="relative bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-sm">
                 <h4 className="text-xl md:text-2xl font-black mb-4 tracking-tight">¿Prefieres atención personalizada?</h4>
                 <p className="text-sm md:text-base text-gray-500 font-medium mb-8">
                    Habla con un asesor de ImpulsoIT por WhatsApp. Te ayudaremos con el proceso de inscripción y pago en moneda local paso a paso.
                 </p>
                 <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior:'smooth'})}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-black py-4 px-8 md:px-10 rounded-2xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
                 >
                    <span className="mr-2 text-xl md:text-2xl">📱</span> HABLAR CON ASESOR EN VIVO
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
