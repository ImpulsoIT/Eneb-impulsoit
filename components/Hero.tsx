
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#0a0a0a] text-white pt-4 pb-12 md:pt-8 md:pb-20 lg:pt-12 lg:pb-24 overflow-hidden min-h-[80vh] flex items-center">
      {/* Fondos dinámicos */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-impulsoPink/10 to-transparent skew-x-12 transform translate-x-32 pointer-events-none"></div>
      <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-impulsoOrange/10 rounded-full blur-[100px] animate-orbit pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <div className="w-full lg:w-[62%] text-center lg:text-left">
          {/* Badge de Monedas Superior */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 text-white text-[9px] sm:text-[10px] font-black px-4 py-2 rounded-full mb-4 tracking-[0.12em] uppercase animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 shadow-[0_0_8px_#4ade80] animate-pulse"></span>
            MATRÍCULAS ABIERTAS: MXN · CLP · COP · USD · EUR
          </div>
          
          {/* Título Principal con corrección de interlineado (no se cortan las letras) */}
          <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.1] mb-5 tracking-tighter animate-fade-in-up">
            Tu Título <br />
            <span className="inline-block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange via-impulsoPink to-impulsoPink">Europeo Online.</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl font-medium leading-tight animate-fade-in-up delay-100">
            ImpulsoIT facilita tu acceso a ENEB con una <span className="text-white font-black border-b-2 border-impulsoPink">beca del 89%</span>. Calidad superior pagando en <strong>tu moneda local</strong>.
          </p>
          
          {/* Acción Principal */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-10 animate-fade-in-up delay-200">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto group relative shine-effect bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white font-black py-4.5 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 hover:-translate-y-1 shadow-[0_20px_40px_-10px_rgba(255,0,122,0.5)] active:scale-95"
            >
              <span className="relative z-10 uppercase tracking-widest">SOLICITAR MI BECA ⚡</span>
            </button>
            
            <div className="flex flex-col items-center lg:items-start shrink-0">
               <div className="flex space-x-0.5 mb-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-impulsoPink text-base sm:text-lg">★</span>)}
               </div>
               <p className="text-[9px] font-black text-white/60 uppercase tracking-widest">Más de 5,000 becas en moneda local</p>
            </div>
          </div>

          {/* Chips de Beneficios */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 opacity-60 animate-fade-in-up delay-300">
             <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[9px] font-black tracking-widest text-impulsoPink uppercase">EUR · USD · MXN</div>
             <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[9px] font-black tracking-widest uppercase">CLP · COP</div>
             <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[9px] font-black tracking-widest uppercase">SIN COMISIONES SWIFT</div>
          </div>
        </div>
        
        {/* Visual a la derecha */}
        <div className="w-full lg:w-[38%] relative animate-fade-in-up delay-300 mt-4 lg:mt-0">
          <div className="relative animate-float mx-auto max-w-[300px] sm:max-w-[400px] lg:max-w-none">
            <div className="absolute -inset-8 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-full blur-[70px] opacity-20"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                alt="Formación ejecutiva global ImpulsoIT" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5">
                 <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-xl font-black text-white mb-0.5 tracking-tighter uppercase italic">PAGO LOCAL</p>
                    <p className="text-[8px] font-black uppercase text-impulsoPink tracking-[0.2em]">Formación ejecutiva global ImpulsoIT</p>
                 </div>
              </div>
            </div>
            
            {/* Status superpuesto (oculto en móviles pequeños para limpiar el espacio) */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-2xl hidden sm:block border border-gray-100 rotate-2 z-20">
               <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Status Actual</p>
               <p className="text-[10px] font-black text-enebGrey flex items-center">
                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                 BECAS DISPONIBLES
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
