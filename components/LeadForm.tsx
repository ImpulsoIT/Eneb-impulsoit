
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
    const baseText = `*NUEVA AUDITORÍA ROI - ImpulsoIT*\n\n*Nombre:* ${form.nombre}\n*Email:* ${form.email}\n*Empresa:* ${form.empresa || 'No especificada'}\n*Programa:* ${form.programa}\n*Objetivo:* Consultoría Académica ENEB`;
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
    w-full px-6 py-5 bg-gray-50 border-2 rounded-[2rem] focus:outline-none transition-all duration-500 font-semibold text-enebGrey
    ${activeField === fieldName ? 'border-impulsoPink bg-white shadow-[0_15px_30px_-5px_rgba(255,0,122,0.1)]' : 'border-transparent'}
  `;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 md:p-20 rounded-[4rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border border-gray-50 relative group">
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-impulsoPink/[0.03] to-transparent rounded-[4rem] pointer-events-none"></div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-10 relative z-10">
        <div>
          <label className={`block text-[11px] font-black uppercase tracking-widest mb-4 transition-colors ${activeField === 'nombre' ? 'text-impulsoPink' : 'text-gray-400'}`}>Nombre Completo</label>
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
        <div>
          <label className={`block text-[11px] font-black uppercase tracking-widest mb-4 transition-colors ${activeField === 'email' ? 'text-impulsoPink' : 'text-gray-400'}`}>Email Personal / Laboral</label>
          <input
            required
            type="email"
            name="email"
            onFocus={() => setActiveField('email')}
            onBlur={() => setActiveField(null)}
            value={form.email}
            onChange={handleChange}
            placeholder="maria@impulso.com"
            className={inputClasses('email')}
          />
        </div>
        <div>
          <label className={`block text-[11px] font-black uppercase tracking-widest mb-4 transition-colors ${activeField === 'empresa' ? 'text-impulsoPink' : 'text-gray-400'}`}>Empresa o Cargo</label>
          <input
            type="text"
            name="empresa"
            onFocus={() => setActiveField('empresa')}
            onBlur={() => setActiveField(null)}
            value={form.empresa}
            onChange={handleChange}
            placeholder="Cargo actual"
            className={inputClasses('empresa')}
          />
        </div>
        <div>
          <label className={`block text-[11px] font-black uppercase tracking-widest mb-4 transition-colors ${activeField === 'programa' ? 'text-impulsoPink' : 'text-gray-400'}`}>Máster de interés</label>
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
              <option value="Doble Master MBA">Doble Máster MBA + Especialización</option>
              <option value="MBA Superior">MBA – Superior</option>
              <option value="IA y Big Data">IA Empresarial & Big Data</option>
              <option value="Marketing Digital">Marketing Digital & Analytics</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-12 relative z-10">
        <label className="flex items-center cursor-pointer group/check">
          <div className="relative flex items-center justify-center">
            <input type="checkbox" required className="peer w-6 h-6 rounded-lg border-2 border-gray-200 text-impulsoPink focus:ring-impulsoPink transition-all appearance-none cursor-pointer checked:bg-impulsoPink checked:border-impulsoPink" />
            <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="ml-4 text-xs text-gray-400 font-bold uppercase tracking-wider group-hover/check:text-gray-600 transition-colors">
            Acepto el tratamiento de mis datos para auditoría de becas.
          </span>
        </label>
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`w-full py-6 rounded-[2.5rem] font-black text-xl shadow-2xl transition-all relative z-10 overflow-hidden ${
          loading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#0a0a0a] hover:bg-impulsoPink text-white transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,0,122,0.3)]'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center animate-pulse">
            AUDITANDO PERFIL...
          </span>
        ) : (
          <span className="flex items-center justify-center uppercase tracking-widest">
            ¡APLICAR AHORA POR WHATSAPP! 📱
          </span>
        )}
      </button>
      
      <div className="flex flex-wrap items-center justify-center mt-10 gap-8 opacity-40">
         <div className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500">🔒 AES-256 Encryption</div>
         <div className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500">🇪🇺 EU Standards</div>
         <div className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500">✅ Official Partner</div>
      </div>
    </form>
  );
};
