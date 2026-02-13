
import React from 'react';
import { PROGRAMS } from '../constants.tsx';

interface ProgramsProps {
  onSelectProgram: (id: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programas" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-24 scroll-reveal">
          <h2 className="text-4xl md:text-8xl font-[900] text-enebGrey mb-8 tracking-tighter italic uppercase leading-none">
            Maestrías <span className="text-impulsoPink">Top 2025.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-semibold text-lg md:text-xl px-4 leading-relaxed">
            Becas garantizadas para residentes en Latinoamérica y USA. Paga en <strong>MXN, CLP, COP, EUR o USD</strong>.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {PROGRAMS.map((prog, idx) => (
            <article 
              key={prog.id} 
              className={`group bg-gray-50 rounded-[3.5rem] overflow-hidden hover:bg-white hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.18)] transition-all duration-700 flex flex-col h-full border-2 scroll-reveal delay-${(idx % 4 + 1) * 100} ${prog.id === 'doble-mba' ? 'border-impulsoPink/30 relative xl:scale-110 z-10' : 'border-transparent'}`}
            >
              {prog.id === 'doble-mba' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white text-[10px] font-black px-8 py-2 rounded-b-[1.5rem] uppercase tracking-[0.2em] shadow-lg">
                  N°1 EN VENTAS
                </div>
              )}
              
              <div className="p-10 flex-grow">
                <header className="flex justify-between items-start mb-10">
                  <div className="flex flex-col gap-2">
                    <span className={`text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest inline-block ${prog.id === 'doble-mba' ? 'bg-impulsoPink text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {prog.ects} ECTS
                    </span>
                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">
                      Pago: MXN · CLP · COP
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-gray-400 line-through font-black tracking-tighter opacity-50 mb-1">PVP: €2.400</span>
                    <span className={`text-2xl font-black italic ${prog.id === 'doble-mba' ? 'text-impulsoPink' : 'text-enebGrey'}`}>
                      {prog.discountPercentage}% OFF
                    </span>
                  </div>
                </header>
                
                <h3 className="text-2xl md:text-3xl font-black mb-6 leading-[1.1] text-enebGrey group-hover:text-impulsoPink transition-colors tracking-tight">
                  {prog.title}
                </h3>
                
                <p className="text-gray-500 text-base mb-8 leading-relaxed font-medium">
                  {prog.description}
                </p>
                
                <div className="flex items-center text-[11px] font-black text-gray-400 space-x-2 opacity-60">
                  <span className="text-xl">💳</span>
                  <span className="uppercase tracking-[0.1em]">Aceptamos Moneda Local</span>
                </div>
              </div>
              
              <div className="p-10 pt-0 space-y-4">
                <a 
                  href={prog.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full shine-effect bg-[#0a0a0a] hover:bg-impulsoPink text-white text-center font-black py-5 rounded-[2rem] text-sm transition-all shadow-xl transform group-hover:-translate-y-2 uppercase tracking-widest"
                >
                  ASEGURAR MI BECA
                </a>
                <p className="text-center text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                   Válido en: EUR · USD · MXN · CLP · COP
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
