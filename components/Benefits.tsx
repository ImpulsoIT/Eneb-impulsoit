
import React from 'react';

const benefitItems = [
  {
    title: 'Garantía ImpulsoIT',
    desc: 'Como embajadores, auditamos tu perfil para asegurar tu beca exclusiva en minutos.',
    icon: '✨'
  },
  {
    title: 'IA Aplicada',
    desc: 'Programas actualizados con módulos de Inteligencia Artificial para el mercado actual.',
    icon: '🤖'
  },
  {
    title: 'Doble Titulación',
    desc: 'Certificación oficial de ENEB + Título universitario de la Isabel I (60/120 ECTS).',
    icon: '🎓'
  },
  {
    title: 'Networking Real',
    desc: 'Acceso a la comunidad ImpulsoIT y red global de más de 60,000 graduados.',
    icon: '🌐'
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black text-enebGrey mb-6 tracking-tight italic">Evolución Profesional.</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-impulsoOrange to-impulsoPink mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {benefitItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`group p-10 bg-gray-50 rounded-[3rem] text-center hover:bg-[#0a0a0a] transition-all duration-700 border border-transparent hover:border-white/10 hover:-translate-y-4 animate-fade-in-up delay-${(idx + 1) * 100}`}
            >
              <div className="text-6xl mb-8 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 drop-shadow-xl">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-enebGrey group-hover:text-white transition-colors tracking-tight">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed font-medium transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
