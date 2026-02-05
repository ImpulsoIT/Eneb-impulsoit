
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

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-impulsoPink selection:text-white overflow-x-hidden">
      {/* Promo Bar */}
      <div className="bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white py-2.5 px-4 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] relative z-[60]">
         ⚡ Oferta Flash: Becas del 80% limitadas por Embajador. ¡Inscríbete hoy! ⚡
      </div>

      <Header onCtaClick={scrollToForm} />
      
      <main>
        <Hero onCtaClick={scrollToForm} />
        <TrustBar />
        <Benefits />
        <AmbassadorStory />
        <Programs onSelectProgram={scrollToForm} />
        
        {/* Why Now Section */}
        <section className="py-16 md:py-24 bg-[#0a0a0a] text-white">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">¿Por qué estudiar ahora con <span className="text-impulsoPink">ImpulsoIT</span>?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                 <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10">
                    <div className="text-3xl md:text-4xl mb-4">💳</div>
                    <h4 className="text-lg md:text-xl font-bold mb-2">Flexibilidad de Pago</h4>
                    <p className="text-sm text-gray-400">Paga hasta en 2 cuotas y en tu propia moneda sin complicaciones bancarias.</p>
                 </div>
                 <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10">
                    <div className="text-3xl md:text-4xl mb-4">🚀</div>
                    <h4 className="text-lg md:text-xl font-bold mb-2">Acompañamiento IA</h4>
                    <p className="text-sm text-gray-400">Te asesoramos para elegir el máster con mayor proyección en Inteligencia Artificial.</p>
                 </div>
                 <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10">
                    <div className="text-3xl md:text-4xl mb-4">🌍</div>
                    <h4 className="text-lg md:text-xl font-bold mb-2">Validez Global</h4>
                    <p className="text-sm text-gray-400">Títulos apostillables por la Haya con reconocimiento en toda Latinoamérica y España.</p>
                 </div>
              </div>
           </div>
        </section>

        <Testimonials />
        
        <section id="contact-form" className="py-20 md:py-24 bg-enebLight relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-impulsoPink/30 to-transparent"></div>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
              <div className="inline-block bg-white text-impulsoPink px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm border border-impulsoPink/10">
                Auditoría ROI Gratuita
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-enebGrey tracking-tight">
                Empieza Hoy Mismo.
              </h2>
              <p className="text-base md:text-lg text-gray-500 font-medium max-w-2xl mx-auto">
                No dejes pasar la beca del <span className="text-impulsoPink font-bold">80%</span>. Completa tus datos y recibe el enlace directo a <span className="text-enebGrey font-bold underline decoration-impulsoPink">Hotmart</span> para pago local y cuotas.
              </p>
            </div>
            <LeadForm onSuccess={() => setIsModalOpen(true)} />
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Mobile CTA for conversion */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.15)] md:hidden transition-transform duration-500 z-40 ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex flex-col gap-2">
           <div className="text-[9px] text-center font-black text-impulsoPink uppercase tracking-tighter animate-pulse">
              ⚡ Últimas plazas disponibles con beca ⚡
           </div>
           <button 
             onClick={scrollToForm}
             className="w-full bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white font-black py-4 rounded-2xl shadow-lg active:scale-95 transition-all text-sm tracking-widest uppercase flex items-center justify-center"
           >
             <span className="mr-2">📱</span> ¡PEDIR MI BECA YA!
           </button>
        </div>
      </div>

      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
