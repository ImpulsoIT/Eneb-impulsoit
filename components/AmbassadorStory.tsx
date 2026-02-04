
import React from 'react';

export const AmbassadorStory: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative animate-fade-in-up">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-impulsoPink/10 rounded-full blur-3xl animate-pulse"></div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-impulsoOrange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
             <div className="relative group">
               <div className="absolute -inset-2 bg-gradient-to-r from-impulsoOrange to-impulsoPink rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               {/* Imagen del Embajador (Placeholder profesional que coincide con la descripción del usuario) */}
               <img 
                 src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" 
                 alt="Embajador ImpulsoIT" 
                 className="relative w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl transition-all duration-700 group-hover:scale-[1.02]"
               />
               <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <p className="text-[10px] font-black uppercase text-impulsoPink mb-1 tracking-widest">Estado Actual</p>
                  <p className="text-lg font-bold text-white leading-tight">Estudiante Activo ENEB</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Doble Titulación en curso</p>
               </div>
             </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-up delay-200">
             <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 text-impulsoPink text-xs font-black uppercase tracking-widest rounded-full mb-8 border border-gray-100 shadow-sm">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-impulsoPink opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-impulsoPink"></span>
               </span>
               <span>Mi formación en tiempo real</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-enebGrey mb-8 leading-tight tracking-tight">
               Liderando con <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulsoOrange to-impulsoPink">Inteligencia Artificial.</span>
             </h2>
             <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
               <p className="text-lg">
                 Actualmente me encuentro cursando el <strong>Máster en IA Empresarial</strong> y el <strong>PDD en Inteligencia Artificial</strong> en ENEB. Mi objetivo es claro: dominar las herramientas que están redefiniendo el mundo de los negocios.
               </p>
               <p>
                 Elegí ENEB por su enfoque práctico y la flexibilidad que necesito para liderar <strong>ImpulsoIT</strong>. Estudiar aquí me permite aplicar cada nuevo conocimiento directamente en mis estrategias de optimización y consultoría académica.
               </p>
               <div className="relative p-8 bg-gray-50 rounded-[2rem] border border-gray-100 overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-impulsoPink/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                 <p className="italic relative z-10 text-enebGrey font-semibold">
                   "Como embajador y estudiante activo, vivo la metodología de la escuela día a día. Sé exactamente lo que necesitas para escalar tu carrera porque yo mismo estoy recorriendo ese camino."
                 </p>
               </div>
               <div className="flex items-center space-x-6 pt-8 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-impulsoOrange to-impulsoPink flex items-center justify-center font-black text-white shadow-lg">IT</div>
                  <div>
                    <p className="text-xl font-black text-enebGrey">Embajador ImpulsoIT</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Estratega en Negocios e IA</p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
