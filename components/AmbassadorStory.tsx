
import React from 'react';

export const AmbassadorStory: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <article className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 relative animate-fade-in-up">
             <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-impulsoPink/5 rounded-full blur-3xl animate-pulse"></div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 bg-impulsoOrange/5 rounded-full blur-3xl animate-pulse delay-700"></div>
             
             <div className="relative group max-w-md mx-auto lg:max-w-none">
               <div className="absolute -inset-1 bg-gradient-to-r from-impulsoOrange via-impulsoPink to-impulsoOrange rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
               
               <figure className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-100">
                 <img 
                   src="https://raw.githubusercontent.com/ImpulsoIT/Eneb-impulsoit/987a233ad1bd85ea5aee62733d96bfbd366db6eb/foto-profesional-cv1.png"
                   alt="Fundador de ImpulsoIT y embajador oficial de ENEB, cursando un Máster en Inteligencia Artificial" 
                   className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-105"
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80";
                   }}
                 />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                 
                 <figcaption className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center space-x-2 transform scale-90 sm:scale-100">
                   <span className="flex h-3 w-3 relative">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                   </span>
                   <span className="text-[10px] font-black text-enebGrey uppercase tracking-widest">Estudiante Activo ENEB</span>
                 </figcaption>
               </figure>

               <div className="absolute -bottom-6 right-4 sm:-right-6 lg:-right-12 bg-white p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 transform group-hover:translate-y-[-10px] transition-transform duration-500 max-w-[220px] sm:max-w-[280px]">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-impulsoPink to-impulsoOrange flex items-center justify-center text-white font-bold text-sm sm:text-base">🎓</div>
                    <div>
                      <p className="text-[9px] font-black text-impulsoPink uppercase tracking-tighter">Mi Formación Actual</p>
                      <p className="text-xs sm:text-sm font-black text-enebGrey">Doble Máster MBA + IA</p>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-tight">
                    Aplicando conocimientos reales de ENEB para ayudar a nuestra comunidad a escalar profesionalmente.
                  </p>
               </div>
             </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in-up delay-200 mt-12 lg:mt-0">
             <header>
               <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 text-impulsoPink text-xs font-black uppercase tracking-widest rounded-full mb-8 border border-gray-100">
                 <span className="text-lg" aria-hidden="true">👋</span>
                 <span>Mensaje de tu Embajador ENEB</span>
               </div>
               
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-enebGrey mb-8 leading-tight tracking-tight">
                 Garantizo tu Beca porque <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange to-impulsoPink">yo también soy alumno de ENEB.</span>
               </h2>
             </header>
             
             <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
               <p className="text-base sm:text-lg">
                 Como fundador de <strong>ImpulsoIT</strong>, mi compromiso con la excelencia es total. Actualmente estoy cursando mi <strong>Doble Titulación en MBA y Máster en Inteligencia Artificial Empresarial</strong>.
               </p>
               
               <p className="text-sm sm:text-base">
                 Elegí ENEB por su flexibilidad y calidad europea. Estudiar aquí me permite validar personalmente cada módulo que te recomiendo, asegurando que tu inversión en educación tenga el mayor retorno posible (ROI).
               </p>

               <div className="grid grid-cols-2 gap-4 my-8">
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center sm:text-left">
                    <p className="text-xl sm:text-2xl font-black text-enebGrey">100%</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">Metodología Flexible</p>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center sm:text-left">
                    <p className="text-xl sm:text-2xl font-black text-enebGrey">OFICIAL</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">Título Univ. Isabel I</p>
                 </div>
               </div>
               
               <blockquote className="relative p-6 sm:p-8 bg-[#0a0a0a] rounded-[2rem] overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-impulsoPink/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                 <p className="italic relative z-10 text-white font-medium text-base sm:text-lg">
                   "Mi objetivo es democratizar la educación europea de alto nivel. Si buscas una transformación real en tu carrera, ImpulsoIT es tu mejor aliado."
                 </p>
               </blockquote>

               <div className="pt-8 flex justify-center lg:justify-start">
                  <button 
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior:'smooth'})}
                    className="flex items-center space-x-4 group"
                    aria-label="Contactar al embajador por WhatsApp"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-impulsoPink flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      📱
                    </div>
                    <div className="text-left">
                      <p className="text-xs sm:text-sm font-black text-enebGrey group-hover:text-impulsoPink transition-colors">¿Tienes dudas reales?</p>
                      <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Hablemos por WhatsApp</p>
                    </div>
                  </button>
               </div>
             </div>
             {/* Fix: Added missing closing div for the Right Column (line 51) */}
          </div>
        </article>
      </div>
      {/* Fix: Corrected nesting hierarchy and removed extra stray closing div */}
    </section>
  );
};
