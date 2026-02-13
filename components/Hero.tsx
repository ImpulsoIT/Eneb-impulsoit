
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-20 md:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-impulsoPink/10 to-transparent skew-x-12 transform translate-x-32"></div>
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-impulsoOrange/10 rounded-full blur-[140px] animate-orbit"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-impulsoPink/5 rounded-full blur-[100px] animate-orbit" style={{animationDirection: 'reverse'}}></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-6 py-2.5 rounded-full mb-8 tracking-[0.2em] uppercase animate-fade-in-up">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3 shadow-[0_0_10px_#4ade80]"></span>
            MATRÍCULAS ABIERTAS: MXN · CLP · COP · USD · EUR
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter animate-fade-in-up">
            Tu Título <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange via-impulsoPink to-impulsoPink animate-pulse">Europeo Online.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl font-medium leading-relaxed animate-fade-in-up delay-100">
            ImpulsoIT facilita tu acceso a ENEB con una <span className="text-white font-black underline decoration-impulsoPink decoration-4 underline-offset-4">beca del 89%</span>. Calidad superior pagando en <strong>tu moneda local</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start items-center mb-16 animate-fade-in-up delay-200">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto group relative shine-effect bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white font-black py-6 px-14 rounded-[2.5rem] text-xl transition-all transform hover:scale-105 hover:-translate-y-2 shadow-[0_25px_60px_-15px_rgba(255,0,122,0.6)] active:scale-95"
            >
              <span className="relative z-10">SOLICITAR MI BECA ⚡</span>
            </button>
            <div className="flex flex-col items-center md:items-start opacity-70">
               <div className="flex space-x-1.5 mb-2">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-impulsoPink text-xl">★</span>)}
               </div>
               <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Más de 5,000 becas en moneda local</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 opacity-50 animate-fade-in-up delay-300">
             <div className="flex items-center bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <span className="text-[11px] font-black tracking-widest text-impulsoPink">EUR · USD · MXN</span>
             </div>
             <div className="flex items-center bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <span className="text-[11px] font-black tracking-widest">CLP · COP</span>
             </div>
             <div className="flex items-center bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <span className="text-[11px] font-black tracking-widest">SIN COMISIONES SWIFT</span>
             </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 mt-24 md:mt-0 relative animate-fade-in-up delay-300">
          <div className="relative animate-float">
            <div className="absolute -inset-10 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-full blur-[100px] opacity-20"></div>
            <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                alt="Formación ejecutiva global ImpulsoIT" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
                    <p className="text-3xl font-black text-white mb-1 tracking-tighter italic text-center">PAGO LOCAL</p>
                    <p className="text-[10px] font-black uppercase text-impulsoPink tracking-widest text-center">EVITA EL IMPUESTO AL DÓLAR</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
