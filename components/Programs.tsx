
import React from 'react';
import { PROGRAMS } from '../constants.tsx';

interface ProgramsProps {
  onSelectProgram: (id: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-6xl font-black text-enebGrey mb-6 tracking-tight italic uppercase">
            Catálogo de Maestrías <span className="text-impulsoPink">2025.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-base md:text-lg italic px-4">
            Becas activas de hasta el 89% para Brasil, Chile, Colombia, USA, México, Ecuador y Europa. Pago en moneda local garantizado.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 px-2" role="list">
             <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest border border-gray-200">💰 EUR</span>
             <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest border border-gray-200">💰 USD</span>
             <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest border border-gray-200">💰 MXN</span>
             <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest border border-gray-200">💰 CLP</span>
             <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest border border-gray-200">💰 COP</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {PROGRAMS.map((prog) => (
            <article key={prog.id} className={`group bg-gray-50 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 flex flex-col h-full border-2 ${prog.id === 'doble-mba' ? 'border-impulsoPink relative md:scale-105 z-10 shadow-lg' : 'border-transparent'}`}>
              {prog.id === 'doble-mba' && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white text-[9px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest animate-pulse">
                  89% OFF • RECOMENDADO
                </div>
              )}
              <div className="p-6 md:p-8 flex-grow">
                <header className="flex justify-between items-start mb-6">
                  <span className={`text-[9px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider ${prog.id === 'doble-mba' ? 'bg-impulsoPink/10 text-impulsoPink' : 'bg-gray-200 text-gray-500'}`}>
                    {prog.ects} CRÉDITOS ECTS
                  </span>
                  <div className="text-right">
                    <span className="block text-[9px] text-gray-400 line-through font-bold tracking-tighter">VALOR: €2.400</span>
                    <span className={`text-lg md:text-xl font-black italic ${prog.id === 'doble-mba' ? 'text-impulsoPink' : 'text-enebGrey'}`}>
                      {prog.discountPercentage}% OFF
                    </span>
                  </div>
                </header>
                <h3 className="text-xl md:text-2xl font-black mb-4 leading-tight text-enebGrey group-hover:text-impulsoPink transition-colors">{prog.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium line-clamp-3">{prog.description}</p>
                <footer className="flex items-center text-[10px] font-black text-gray-400 space-x-3">
                  <span>🎓 Titulación Oficial Europea</span>
                </footer>
              </div>
              
              <div className="p-6 pt-0 space-y-3">
                <a 
                  href={prog.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0a0a0a] hover:bg-impulsoPink text-white text-center font-black py-4 md:py-5 rounded-2xl text-xs md:text-sm transition-all shadow-xl transform group-hover:-translate-y-1"
                >
                  ¡QUIERO MI BECA AHORA!
                </a>
                <a 
                  href={prog.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white border-2 border-gray-100 text-gray-400 hover:text-enebGrey hover:border-enebGrey text-center font-black py-3 rounded-2xl text-[10px] transition-all uppercase tracking-widest"
                >
                  📄 Descargar Plan de Estudios
                </a>
                <p className="text-center text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  Pagos en EUR · USD · MXN · CLP · COP
                </p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 text-center animate-fade-in-up">
           <div className="inline-block relative w-full max-w-4xl px-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-3xl blur opacity-10"></div>
              <div className="relative bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-sm">
                 <h4 className="text-xl md:text-2xl font-black mb-4 tracking-tight">Consultoría Gratuita para {['Brasil', 'Chile', 'Colombia', 'USA', 'México', 'Ecuador', 'Europa'].join(', ')}</h4>
                 <p className="text-sm md:text-base text-gray-500 font-medium mb-8">
                    Recibe asesoría personalizada vía WhatsApp. Te ayudamos a formalizar tu beca ENEB y gestionar tu pago en moneda local sin comisiones extra.
                 </p>
                 <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior:'smooth'})}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-black py-4 px-8 md:px-10 rounded-2xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
                  aria-label="Hablar con un asesor académico de ImpulsoIT por WhatsApp"
                 >
                    <span className="mr-2 text-xl md:text-2xl" aria-hidden="true">📱</span> HABLAR CON ASESOR EN VIVO
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
