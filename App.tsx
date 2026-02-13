
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { Programs } from './components/Programs.tsx';
import { Benefits } from './components/Benefits.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { AmbassadorStory } from './components/AmbassadorStory.tsx';
import { LeadForm } from './components/LeadForm.tsx';
import { Footer } from './components/Footer.tsx';
import { SuccessModal } from './components/SuccessModal.tsx';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowStickyCta(window.scrollY > 800);
      
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-impulsoPink selection:text-white overflow-x-hidden">
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-impulsoOrange to-impulsoPink z-[100] transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Promo Bar con multimoneda dinámica */}
      <div className="bg-[#0a0a0a] text-white py-3 px-4 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] relative z-[60] border-b border-white/5 overflow-hidden">
         <div className="relative z-10 animate-pulse flex items-center justify-center gap-4">
            <span className="hidden sm:inline">⚡ BECAS 89% ⚡</span>
            <span className="text-impulsoPink">PAGOS EN: EUR · USD · MXN · CLP · COP</span>
            <span className="hidden sm:inline">⚡ CUPOS LIMITADOS ⚡</span>
         </div>
         <div className="absolute inset-0 bg-gradient-to-r from-impulsoPink/20 via-transparent to-impulsoOrange/20"></div>
      </div>

      <Header onCtaClick={scrollToForm} />
      
      <main>
        <Hero onCtaClick={scrollToForm} />
        <TrustBar />
        
        <div className="scroll-reveal">
          <Benefits />
        </div>
        
        <div className="scroll-reveal">
          <AmbassadorStory />
        </div>

        <Programs onSelectProgram={scrollToForm} />
        
        <section className="py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
           <div className="absolute top-1/4 left-0 w-96 h-96 bg-impulsoPink/10 rounded-full blur-[120px] animate-orbit"></div>
           <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight scroll-reveal">
                Inversión sin <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange to-impulsoPink">Fricción Bancaria</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                 {[
                   { icon: '💵', title: 'Pagos Locales', desc: 'Olvídate del tipo de cambio bancario. Paga directamente en MXN, CLP o COP sin comisiones ocultas.' },
                   { icon: '🚀', title: 'Impulso Regional', desc: 'Programas adaptados a la realidad económica de Latinoamérica y la competitividad de USA/Europa.' },
                   { icon: '🌍', title: 'Validez Global', desc: 'Títulos oficiales reconocidos internacionalmente y apostillables por la Haya en tu país.' }
                 ].map((item, i) => (
                   <div key={i} className={`p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-impulsoPink/50 transition-all duration-500 hover:-translate-y-4 scroll-reveal delay-${(i+1)*200}`}>
                      <div className="text-5xl mb-6">{item.icon}</div>
                      <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                      <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <div className="scroll-reveal">
          <Testimonials />
        </div>
        
        <section id="contact-form" className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-impulsoPink/[0.02] skew-x-12 translate-x-20"></div>
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-16 scroll-reveal">
              <div className="inline-flex items-center space-x-2 bg-gray-100 text-impulsoPink px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-gray-200">
                <span className="w-2 h-2 bg-impulsoPink rounded-full animate-ping"></span>
                <span>Asesoría en tu Moneda Local</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black mb-6 text-enebGrey tracking-tighter">
                Solicita tu <span className="text-impulsoPink">Beca 89%.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                Asignamos un tutor de becas para calcular tu plan de pagos en <strong>MXN, CLP, COP, USD o EUR</strong> según tu ubicación.
              </p>
            </div>
            <LeadForm onSuccess={() => setIsModalOpen(true)} />
          </div>
        </section>
      </main>

      <Footer />

      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-2xl border-t border-gray-100 shadow-[0_-15px_30px_rgba(0,0,0,0.1)] md:hidden z-40 transition-all duration-700 ${showStickyCta ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <button 
          onClick={scrollToForm}
          className="w-full shine-effect bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white font-black py-5 rounded-[2rem] shadow-xl active:scale-95 transition-all text-sm tracking-widest uppercase flex items-center justify-center"
        >
          <span className="mr-3 text-lg">📱</span> APLICAR EN MI MONEDA
        </button>
      </div>

      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
