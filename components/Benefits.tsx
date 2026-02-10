
import React from 'react';

const benefitItems = [
  {
    title: 'Garantía ImpulsoIT',
    desc: 'Como embajadores oficiales de ENEB, auditamos tu perfil profesional para asegurar tu beca exclusiva del 89% en minutos.',
    icon: '✨'
  },
  {
    title: 'IA Aplicada al Negocio',
    desc: 'Nuestros programas están actualizados con módulos de Inteligencia Artificial para afrontar los retos del mercado laboral actual.',
    icon: '🤖'
  },
  {
    title: 'Doble Titulación Oficial',
    desc: 'Recibe certificación oficial de ENEB + Título universitario de la Universidad Isabel I con validez en todo el Espacio Europeo de Educación Superior.',
    icon: '🎓'
  },
  {
    title: 'Comunidad Global',
    desc: 'Networking real mediante el acceso a la comunidad ImpulsoIT y una red global de más de 60,000 graduados internacionales.',
    icon: '🌐'
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-white" aria-labelledby="benefits-title">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 md:20 animate-fade-in-up">
          <h2 id="benefits-title" className="text-3xl md:text-6xl font-black text-enebGrey mb-6 tracking-tight italic">
            Potencia tu Carrera Profesional.
          </h2>
          <div className="w-20 md:w-24 h-2 bg-gradient-to-r from-impulsoOrange to-impulsoPink mx-auto rounded-full" aria-hidden="true"></div>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefitItems.map((item, idx) => (
            <article 
              key={idx} 
              className={`group p-8 md:p-10 bg-gray-50 rounded-[2.5rem] md:rounded-[3rem] text-center hover:bg-[#0a0a0a] transition-all duration-700 border border-transparent hover:border-white/10 hover:-translate-y-4 animate-fade-in-up delay-${(idx + 1) * 100}`}
            >
              <div className="text-5xl md:text-6xl mb-6 md:mb-8 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 drop-shadow-xl" aria-hidden="true">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-black mb-4 text-enebGrey group-hover:text-white transition-colors tracking-tight">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed font-medium transition-colors">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
