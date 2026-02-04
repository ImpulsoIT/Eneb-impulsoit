
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Programs } from './components/Programs';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { AmbassadorStory } from './components/AmbassadorStory';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';

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
    <div className="min-h-screen font-sans bg-white selection:bg-impulsoPink selection:text-white">
      <Header onCtaClick={scrollToForm} />
      
      <main>
        <Hero onCtaClick={scrollToForm} />
        <TrustBar />
        <Benefits />
        <AmbassadorStory />
        <Programs onSelectProgram={scrollToForm} />
        <Testimonials />
        
        <section id="contact-form" className="py-24 bg-enebLight">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-enebGrey tracking-tight">
                Impulsa tu Futuro Ahora
              </h2>
              <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
                Solicita tu asesoría gratuita. Un embajador de <span className="text-impulsoPink font-bold">ImpulsoIT</span> te contactará en menos de 24h para gestionar tu beca exclusiva.
              </p>
            </div>
            <LeadForm onSuccess={() => setIsModalOpen(true)} />
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Mobile CTA for conversion */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-gray-100 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] md:hidden transition-transform duration-500 z-40 ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          onClick={scrollToForm}
          className="w-full bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white font-black py-4 rounded-2xl shadow-lg active:scale-95 transition-all text-sm tracking-widest uppercase"
        >
          ¡SOLICITAR BECA POR WHATSAPP!
        </button>
      </div>

      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
