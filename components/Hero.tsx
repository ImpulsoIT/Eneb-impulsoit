
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#0a0a0a] text-white pt-10 pb-16 md:pt-20 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Fondos dinámicos y esferas de luz */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-impulsoPink/10 to-transparent skew-x-12 transform translate-x-32 pointer-events-none"></div>
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-impulsoOrange/10 rounded-full blur-[120px] animate-orbit pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          {/* Badge Superior */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 text-white text-[9px] sm:text-[10px] font-black px-4 py-2 rounded-full mb-6 tracking-[0.15em] uppercase animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 shadow-[0_0_8px_#4ade80] animate-pulse"></span>
            MATRÍCULAS ABIERTAS: MXN · CLP · COP · USD · EUR
          </div>
          
          {/* Headline Compacto */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[0.95] mb-6 tracking-tighter animate-fade-in-up">
            Tu Título <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange via-impulsoPink to-impulsoPink">Europeo Online.</span>
          </h1>
          
          {/* Subheadline con énfasis */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl font-medium leading-tight animate-fade-in-up delay-100">
            ImpulsoIT facilita tu acceso a ENEB con una <span className="text-white font-black border-b-2 border-impulsoPink">beca del 89%</span>. Calidad superior pagando en <strong>tu moneda local</strong>.
          </p>
          
          {/* CTA Principal y Social Proof */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-10 animate-fade-in-up delay-200">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto group relative shine-effect bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white font-black py-5 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 hover:-translate-y-1 shadow-[0_20px_40px_-10px_rgba(255,0,122,0.5)] active:scale-95"
            >
              <span className="relative z-10">SOLICITAR MI BECA ⚡</span>
            </button>
            
            <div className="flex flex-col items-center lg:items-start">
               <div className="flex space-x-1 mb-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-impulsoPink text-lg">★</span>)}
               </div>
               <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Más de 5,000 becas en moneda local</p>
            </div>
          </div>

          {/* Currency Chips */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-60 animate-fade-in-up delay-300">
             <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-black tracking-widest text-impulsoPink">EUR · USD · MXN</div>
             <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-black tracking-widest">CLP · COP</div>
             <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-black tracking-widest">SIN COMISIONES SWIFT</div>
          </div>
        </div>
        
        {/* Imagen Flotante / Card Visual */}
        <div className="w-full lg:w-2/5 relative animate-fade-in-up delay-300">
          <div className="relative animate-float">
            <div className="absolute -inset-10 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-full blur-[80px] opacity-20"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                alt="Formación ejecutiva global ImpulsoIT" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 text-center">
                    <p className="text-2xl font-black text-white mb-0.5 tracking-tighter uppercase italic">PAGO LOCAL</p>
                    <p className="text-[9px] font-black uppercase text-impulsoPink tracking-[0.2em]">EVITA EL IMPUESTO AL DÓLAR</p>
                 </div>
              </div>
            </div>
            
            {/* Elemento de superposición interactivo */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden sm:block border border-gray-100 rotate-6 hover:rotate-0 transition-transform cursor-default">
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Status Actual</p>
               <p className="text-xs font-black text-enebGrey flex items-center">
                 <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                 BECAS DISPONIBLES
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
