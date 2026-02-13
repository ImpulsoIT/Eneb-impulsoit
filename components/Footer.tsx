
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 text-center sm:text-left">
          <div className="col-span-1">
            {/* Logo recreation con estilo refinado */}
            <div className="flex items-center justify-center sm:justify-start mb-8">
              <div className="relative flex items-center justify-center w-10 h-10 mr-3">
                <div className="absolute inset-0 bg-gradient-to-br from-impulsoOrange to-impulsoPink rounded-full blur-[4px] opacity-70"></div>
                <div className="absolute inset-0.5 bg-gradient-to-br from-impulsoOrange to-impulsoPink rounded-full"></div>
                <span className="relative text-white font-black text-xs z-10">IT</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline font-[900] tracking-tighter text-2xl leading-none">
                  <span className="text-white">IMPULSO</span>
                  <span className="text-impulsoPink">IT</span>
                </div>
                <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
                  EMBAJADORES DE ENEB
                </div>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              ImpulsoIT, embajadores oficiales de la Escuela de Negocios Europea de Barcelona. Conectamos talento con la mejor formación superior europea en USA y Latinoamérica.
            </p>
          </div>
          
          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-gray-300">Cobertura Global</h4>
            <ul className="text-gray-500 text-sm space-y-4 font-semibold uppercase tracking-tighter">
              <li className="hover:text-impulsoPink transition-colors">Brasil & Chile</li>
              <li className="hover:text-impulsoPink transition-colors">Colombia & Ecuador</li>
              <li className="hover:text-impulsoPink transition-colors">México & Estados Unidos</li>
              <li className="hover:text-impulsoPink transition-colors">Europa & Internacional</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-gray-300">ImpulsoIT</h4>
            <ul className="text-gray-500 text-sm space-y-4 font-semibold">
              <li><a href="#beneficios" className="hover:text-impulsoPink transition-colors">Becas Exclusivas</a></li>
              <li><a href="#testimonios" className="hover:text-impulsoPink transition-colors">Soporte al Alumno</a></li>
              <li><a href="#" className="hover:text-impulsoPink transition-colors">Pagos Locales</a></li>
              <li><a href="#" className="hover:text-impulsoPink transition-colors">Validación Haya</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-gray-300">Contacto Directo</h4>
            <ul className="text-gray-500 text-sm space-y-4 font-semibold">
              <li className="flex items-center justify-center sm:justify-start">
                <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded mr-3 text-[10px]">📍</span>
                Soporte Global ENEB
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded mr-3 text-[10px]">✉️</span>
                contacto@impulsoit.com
              </li>
              <li className="text-white font-black text-xs mt-4 block uppercase tracking-widest">
                Monedas: EUR, USD, MXN, CLP, COP
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-widest text-center">
          <p>© {currentYear} IMPULSOIT - EMBAJADORES OFICIALES ENEB. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
