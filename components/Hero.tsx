
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-12 md:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-impulsoPink/10 to-transparent skew-x-12 transform translate-x-20"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-impulsoOrange/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 text-center md:text-left animate-fade-in-up">
          <div className="inline-flex items-center bg-white/5 border border-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm">
            <span className="w-2 h-2 bg-impulsoPink rounded-full mr-3 animate-pulse"></span>
            ¡ÚLTIMAS PLAZAS CON BECA DEL 80%!
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight md:leading-[1.05] mb-6 tracking-tight">
            Maestría Europea <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange to-impulsoPink animate-pulse">al 80% de Descuento.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 mb-8 max-w-2xl font-medium leading-relaxed">
            ImpulsoIT te garantiza acceso exclusivo a ENEB. Obtén tu doble titulación pagando en <span className="text-white font-bold underline decoration-impulsoPink">tu moneda local</span> y financia en <span className="text-white font-bold underline decoration-impulsoOrange">hasta 2 cuotas</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center mb-10">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto group relative bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white font-black py-5 px-12 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,0,122,0.4)] active:scale-95"
            >
              <span className="relative z-10">¡SOLICITAR MI BECA!</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl"></div>
            </button>
            <div className="flex flex-col items-center md:items-start">
               <div className="flex space-x-1 mb-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-500 text-lg">★</span>)}
               </div>
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Inscripción inmediata disponible</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 opacity-70">
             <div className="flex items-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-xs font-bold">💳 2 Cuotas Sin Interés</span>
             </div>
             <div className="flex items-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-xs font-bold">🌎 Pago en Moneda Local</span>
             </div>
             <div className="flex items-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-xs font-bold">🎓 Doble Titulación</span>
             </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 mt-16 md:mt-0 relative animate-fade-in-up delay-200 px-4 sm:px-0">
          <div className="relative animate-float mx-auto max-w-sm md:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="Comunidad ImpulsoIT" 
              className="relative rounded-[2.5rem] shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 w-full h-auto"
            />
            
            <div className="absolute -top-10 -right-4 bg-gradient-to-br from-impulsoOrange to-impulsoPink p-4 md:p-6 rounded-3xl shadow-2xl border border-white/20 transform rotate-3 animate-pulse">
               <p className="text-3xl md:text-4xl font-black text-white leading-none">80%</p>
               <p className="text-[10px] font-black uppercase text-white tracking-widest mt-1">OFF GARANTIZADO</p>
            </div>
            
            <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-3 md:p-4 rounded-2xl shadow-xl flex items-center space-x-3 transform -rotate-2">
               <div className="flex -space-x-2">
                  <img className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=1" />
                  <img className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=2" />
                  <img className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=3" />
               </div>
               <p className="text-[9px] md:text-[10px] font-black text-enebGrey uppercase">Más de 60k Graduados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
