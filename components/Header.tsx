
import React from 'react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 w-full bg-[#0a0a0a] border-b border-white/10 z-50 py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {/* Logo compacto */}
            <div className="relative flex items-center justify-center w-10 h-10 mr-3">
              <div className="absolute inset-0 bg-gradient-to-br from-impulsoOrange via-impulsoPink to-impulsoPink rounded-full blur-[6px] opacity-80 animate-pulse"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-impulsoOrange to-impulsoPink rounded-full"></div>
              <span className="relative text-white font-black text-sm z-10 tracking-tighter">IT</span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline font-[900] tracking-tighter text-2xl leading-none">
                <span className="text-white">IMPULSO</span>
                <span className="text-impulsoPink">IT</span>
              </div>
              <div className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.1em] mt-0.5">
                EMBAJADORES ENEB
              </div>
            </div>
          </div>
        </div>
        
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center space-x-6 text-[10px] font-bold text-white uppercase tracking-widest">
          <a href="#beneficios" className="hover:text-impulsoPink transition-colors">Beneficios</a>
          <a href="#programas" className="hover:text-impulsoPink transition-colors">Programas</a>
          <a href="#testimonios" className="hover:text-impulsoPink transition-colors">Alumnos</a>
        </nav>

        <button 
          onClick={onCtaClick}
          className="bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white px-5 py-2.5 rounded-xl font-black text-[10px] hover:brightness-110 transition-all shadow-[0_10px_20px_-5px_rgba(255,0,122,0.3)] active:scale-95 uppercase tracking-widest"
        >
          SOLICITAR BECA
        </button>
      </div>
    </header>
  );
};
