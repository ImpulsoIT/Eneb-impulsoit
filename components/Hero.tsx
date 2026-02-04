
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-16 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-impulsoPink/10 to-transparent skew-x-12 transform translate-x-20"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-impulsoOrange/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 text-center md:text-left animate-fade-in-up">
          <div className="inline-flex items-center bg-white/5 border border-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase backdrop-blur-sm">
            <span className="w-2 h-2 bg-impulsoPink rounded-full mr-3 animate-pulse"></span>
            ImpulsoIT: Embajadores de Éxito ENEB
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8 tracking-tight">
            Maestrías que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange to-impulsoPink">Impulsan tu ROI.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl font-medium leading-relaxed">
            Obtén doble titulación europea con becas exclusivas del 97% gestionadas por ImpulsoIT. Formación de élite en IA, Negocios y Marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button 
              onClick={onCtaClick}
              className="bg-gradient-to-r from-impulsoOrange to-impulsoPink hover:brightness-110 text-white font-black py-5 px-12 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,0,122,0.4)] active:scale-95"
            >
              CONSEGUIR MI BECA
            </button>
            <div className="flex flex-col items-center md:items-start justify-center px-4">
              <div className="flex text-yellow-500 mb-1 text-lg">★★★★★</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Certificación ENEB Garantizada</div>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/5 mt-16 md:mt-0 relative animate-fade-in-up delay-200">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="Comunidad ImpulsoIT" 
              className="relative rounded-[2.5rem] shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            
            <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl hidden md:block">
               <p className="text-3xl font-black text-white">97%</p>
               <p className="text-[10px] font-black uppercase text-impulsoPink tracking-widest">Beca Máxima</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
