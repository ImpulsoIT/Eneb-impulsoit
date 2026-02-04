
import React from 'react';
import { PROGRAMS } from '../constants';

interface ProgramsProps {
  onSelectProgram: (id: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black text-enebGrey mb-6 tracking-tight">Tu Futuro, <span className="text-impulsoPink">Sin Barreras.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg italic">
            Becas de hasta el 97% disponibles solo a través de ImpulsoIT. Paga en tu moneda local.
          </p>
          <div className="flex justify-center gap-4 mt-8">
             <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">✅ Pago Local</span>
             <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">✅ Hasta 2 Cuotas</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((prog) => (
            <div key={prog.id} className={`group bg-gray-50 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 flex flex-col h-full border-2 ${prog.id === 'doble-mba' ? 'border-impulsoPink relative scale-105 z-10' : 'border-transparent'}`}>
              {prog.id === 'doble-mba' && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-widest animate-pulse">
                  RECOMENDADO
                </div>
              )}
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider ${prog.id === 'doble-mba' ? 'bg-impulsoPink/10 text-impulsoPink' : 'bg-gray-200 text-gray-500'}`}>
                    {prog.ects} ECTS
                  </span>
                  <div className="text-right">
                    <span className="block text-[10px] text-gray-400 line-through font-bold">WAS €2,400</span>
                    <span className="text-xl font-black text-enebGrey italic">97% OFF</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 leading-tight text-enebGrey group-hover:text-impulsoPink transition-colors">{prog.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">{prog.description}</p>
                <div className="flex items-center text-xs font-black text-gray-400 space-x-4">
                  <span>⏱ {prog.duration}</span>
                  <span>🎓 Titulación Oficial</span>
                </div>
              </div>
              
              <div className="p-6 pt-0 space-y-3">
                <a 
                  href={prog.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0a0a0a] hover:bg-impulsoPink text-white text-center font-black py-5 rounded-2xl text-sm transition-all shadow-xl transform group-hover:-translate-y-1"
                >
                  ¡QUIERO MI BECA YA!
                </a>
                <p className="text-center text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  Paga en tu moneda local • 2 cuotas
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center animate-fade-in-up">
           <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white border border-gray-100 p-10 rounded-3xl shadow-sm max-w-4xl mx-auto">
                 <h4 className="text-2xl font-black mb-4 tracking-tight">¿Prefieres atención personalizada?</h4>
                 <p className="text-gray-500 font-medium mb-8">
                    Habla con un asesor de ImpulsoIT por WhatsApp. Te ayudaremos con el proceso de inscripción y pago en moneda local paso a paso.
                 </p>
                 <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior:'smooth'})}
                  className="bg-green-500 hover:bg-green-600 text-white font-black py-4 px-10 rounded-2xl shadow-lg transition-all transform hover:scale-105 flex items-center mx-auto"
                 >
                    <span className="mr-2 text-xl">📱</span> HABLAR CON ASESOR EN VIVO
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
