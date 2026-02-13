
import React, { useState } from 'react';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    programa: '',
    empresa: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const phone = "5515981723627";
    const baseText = `*NUEVA AUDITORÍA ROI - ImpulsoIT*\n\n*Nombre:* ${form.nombre}\n*Email:* ${form.email}\n*Empresa:* ${form.empresa || 'No especificada'}\n*Programa:* ${form.programa}\n*Objetivo:* Consultoría Académica ENEB (Moneda Local)`;
    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedText}&type=phone_number&app_absent=0`;

    setTimeout(() => {
      setLoading(false);
      onSuccess();
      window.open(whatsappUrl, '_blank');
      setForm({ nombre: '', email: '', telefono: '', programa: '', empresa: '' });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClasses = (fieldName: string) => `
    w-full px-6 py-4 sm:py-5 bg-gray-50 border-2 rounded-2xl sm:rounded-[2rem] focus:outline-none transition-all duration-500 font-semibold text-enebGrey text-sm sm:text-base
    ${activeField === fieldName ? 'border-impulsoPink bg-white shadow-[0_15px_30px_-5px_rgba(255,0,122,0.1)]' : 'border-transparent'}
  `;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 md:p-16 rounded-3xl sm:rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-gray-100 relative group max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-impulsoPink/[0.02] to-transparent rounded-[3.5rem] pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8 relative z-10">
        <div className="space-y-2">
          <label className={`block text-[10px] font-black uppercase tracking-widest transition-colors ${activeField === 'nombre' ? 'text-impulsoPink' : 'text-gray-400'}`}>Nombre Completo</label>
          <input
            required
            type="text"
            name="nombre"
            onFocus={() => setActiveField('nombre')}
            onBlur={() => setActiveField(null)}
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej. María Rodríguez"
            className={inputClasses('nombre')}
          />
        </div>
        <div className="space-y-2">
          <label className={`block text-[10px] font-black uppercase tracking-widest transition-colors ${activeField === 'email' ? 'text-impulsoPink' : 'text-gray-400'}`}>Email de Contacto</label>
          <input
            required
            type="email"
            name="email"
            onFocus={() => setActiveField('email')}
            onBlur={() => setActiveField(null)}
            value={form.email}
            onChange={handleChange}
            placeholder="Tu email principal"
            className={inputClasses('email')}
          />
        </div>
        <div className="space-y-2">
          <label className={`block text-[10px] font-black uppercase tracking-widest transition-colors ${activeField === 'empresa' ? 'text-impulsoPink' : 'text-gray-400'}`}>Cargo o Profesión</label>
          <input
            type="text"
            name="empresa"
            onFocus={() => setActiveField('empresa')}
            onBlur={() => setActiveField(null)}
            value={form.empresa}
            onChange={handleChange}
            placeholder="Ej. Analista de Datos"
            className={inputClasses('empresa')}
          />
        </div>
        <div className="space-y-2">
          <label className={`block text-[10px] font-black uppercase tracking-widest transition-colors ${activeField === 'programa' ? 'text-impulsoPink' : 'text-gray-400'}`}>Programa de Interés</label>
          <div className="relative">
            <select
              required
              name="programa"
              onFocus={() => setActiveField('programa')}
              onBlur={() => setActiveField(null)}
              value={form.programa}
              onChange={handleChange}
              className={`${inputClasses('programa')} appearance-none cursor-pointer`}
            >
              <option value="">Selecciona una opción</option>
              <option value="Doble Master MBA">Doble Máster MBA + Maestría</option>
              <option value="MBA Superior">MBA – Administración</option>
              <option value="Big Data">Big Data & Business Intelligence</option>
              <option value="Marketing Digital">Marketing Digital & Analytics</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
              ▼
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10 relative z-10 px-1">
        <label className="flex items-center cursor-pointer group/check">
          <div className="relative flex items-center justify-center shrink-0">
            <input type="checkbox" required className="peer w-5 h-5 rounded-md border-2 border-gray-200 text-impulsoPink focus:ring-impulsoPink transition-all appearance-none cursor-pointer checked:bg-impulsoPink checked:border-impulsoPink" />
            <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="ml-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-tight">
            Autorizo el cálculo de mi plan de pagos en MXN, CLP, COP, USD o EUR.
          </span>
        </label>
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`w-full py-5 rounded-2xl sm:rounded-[2rem] font-black text-lg sm:text-xl shadow-2xl transition-all relative z-10 overflow-hidden ${
          loading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#0a0a0a] hover:bg-impulsoPink text-white transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,0,122,0.3)]'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center animate-pulse">
            AUDITANDO PERFIL...
          </span>
        ) : (
          <span className="flex items-center justify-center uppercase tracking-widest">
            ¡APLICAR EN MI MONEDA! 📱
          </span>
        )}
      </button>
      
      <div className="flex flex-wrap items-center justify-center mt-10 gap-6 opacity-30 text-center">
         <div className="text-[9px] font-black uppercase tracking-widest text-gray-600">SSL Secure Payment</div>
         <div className="text-[9px] font-black uppercase tracking-widest text-gray-600">Local Currency Support</div>
         <div className="text-[9px] font-black uppercase tracking-widest text-gray-600">ENEB Official Ambassador</div>
      </div>
    </form>
  );
};
