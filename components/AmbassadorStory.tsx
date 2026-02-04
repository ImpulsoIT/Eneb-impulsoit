
import React from 'react';

export const AmbassadorStory: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative animate-fade-in-up">
             {/* Elementos decorativos de fondo */}
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-impulsoPink/5 rounded-full blur-3xl animate-pulse"></div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-impulsoOrange/5 rounded-full blur-3xl animate-pulse delay-700"></div>
             
             <div className="relative group">
               {/* Borde con gradiente animado */}
               <div className="absolute -inset-1 bg-gradient-to-r from-impulsoOrange via-impulsoPink to-impulsoOrange rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
               
               {/* Contenedor de la Imagen Real */}
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                 <img 
                   src="https://impulsoit.github.io/Eneb-impulsoit/foto-profesional-cv1.png"
                   alt="Embajador ENEB - ImpulsoIT" 
                   className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-105"
                 />
                 
                 {/* Overlay Gradiente Inferior */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                 
                 {/* Badge de Estudiante Verificado */}
                 <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center space-x-2 transform group-hover:scale-110 transition-transform">
                   <span className="flex h-3 w-3 relative">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                   </span>
                   <span className="text-[10px] font-black text-enebGrey uppercase tracking-widest">Estudiante Activo</span>
                 </div>
               </div>

               {/* Caja flotante de status */}
               <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 transform group-hover:translate-y-[-10px] transition-transform duration-500 max-w-[280px]">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-impulsoPink to-impulsoOrange flex items-center justify-center text-white font-bold">🎓</div>
                    <div>
                      <p className="text-[10px] font-black text-impulsoPink uppercase tracking-tighter">Formación Actual</p>
                      <p className="text-sm font-black text-enebGrey">Máster + PDD en IA</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium leading-tight">
                    Aplicando estrategias de IA y Negocios en tiempo real para optimizar el ROI de nuestros alumnos.
                  </p>
               </div>
             </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-up delay-200">
             <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 text-impulsoPink text-xs font-black uppercase tracking-widest rounded-full mb-8 border border-gray-100">
               <span className="text-lg">👋</span>
               <span>Hola, soy tu Embajador ENEB</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-black text-enebGrey mb-8 leading-tight tracking-tight">
               No solo te recomiendo ENEB, <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange to-impulsoPink">yo también estudio aquí.</span>
             </h2>
             
             <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
               <p className="text-lg">
                 Como fundador de <strong>ImpulsoIT</strong>, mi compromiso con la excelencia es total. Actualmente estoy cursando mi <strong>Máster en IA Empresarial</strong> junto con un <strong>PDD (Programa de Desarrollo Directivo) en Inteligencia Artificial</strong>.
               </p>
               
               <p>
                 Elegí esta doble titulación porque entiendo que el futuro de los negocios no se puede desligar de la tecnología. Estudiar en ENEB me permite estar a la vanguardia mientras gestiono las becas para mi comunidad.
               </p>

               <div className="grid grid-cols-2 gap-4 my-8">
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-2xl font-black text-enebGrey">100%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Online & Flexible</p>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-2xl font-black text-enebGrey">Doble</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Titulación Europea</p>
                 </div>
               </div>
               
               <div className="relative p-8 bg-[#0a0a0a] rounded-[2rem] overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-impulsoPink/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                 <p className="italic relative z-10 text-white font-medium text-lg">
                   "Mi meta es que tú también aproveches esta oportunidad. Si tienes dudas sobre cómo combinar el Máster y el PDD, yo mismo te cuento mi experiencia real."
                 </p>
               </div>

               <div className="pt-8">
                  <button 
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior:'smooth'})}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-impulsoPink flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      📱
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-black text-enebGrey group-hover:text-impulsoPink transition-colors">¿Hablamos por WhatsApp?</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Te asesoro personalmente</p>
                    </div>
                  </button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
